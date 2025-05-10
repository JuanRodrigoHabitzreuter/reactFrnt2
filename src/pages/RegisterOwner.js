import React, { useEffect, useState } from 'react';
import CustomInput from '../components/CustomInput';
import { useNavigate, useParams } from 'react-router-dom';

function CadastroProprietario() {
  const [dadosProprietario, setDadosProprietario] = useState({
    placaVeiculo: "",
    nomeProprietario: "",
    numeroApartamento: "",
    blocoApartamento: "",
    modeloVeiculo: "",
    corVeiculo: "",
    numeroVaga: "",
    vagaOcupada: false
  });
  const [estaEditando, setEstaEditando] = useState(false);
  const [erroVagaDuplicada, setErroVagaDuplicada] = useState(""); // Novo estado para erro
  const { placa } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    if (placa) {
      const proprietarios = JSON.parse(localStorage.getItem("proprietarios")) || [];
      const proprietarioEncontrado = proprietarios.find((proprietario) => proprietario.placaVeiculo === placa);
      if (proprietarioEncontrado) {
        setDadosProprietario(proprietarioEncontrado);
        setEstaEditando(true);
      } else {
        navegar('/register-owner');
      }
    }
  }, [placa, navegar]);

  const salvarProprietario = () => {
    setErroVagaDuplicada(""); // Limpa qualquer erro anterior
    if (estaEditando) {
      editarProprietario();
    } else {
      novoProprietario();
    }
  };

  const novoProprietario = () => {
    const proprietarios = JSON.parse(localStorage.getItem("proprietarios")) || [];
    const vagaJaCadastrada = proprietarios.some(
      (proprietario) =>
        proprietario.numeroVaga === dadosProprietario.numeroVaga
    );

    if (vagaJaCadastrada) {
      setErroVagaDuplicada("Esta vaga já está cadastrada para outro veículo.");
      return; // Impede o cadastro
    }

    proprietarios.push(dadosProprietario);
    localStorage.setItem("proprietarios", JSON.stringify(proprietarios));
    limparFormulario();
    navegar('/occupied-spaces');
  };

  const editarProprietario = () => {
    let proprietarios = JSON.parse(localStorage.getItem("proprietarios")) || [];
    proprietarios = proprietarios.filter((proprietario) => proprietario.placaVeiculo !== placa);
    proprietarios.push(dadosProprietario);
    localStorage.setItem("proprietarios", JSON.stringify(proprietarios));
    navegar('/occupied-spaces'); // Redireciona após a edição
  };

  const limparFormulario = () => {
    setDadosProprietario({
      placaVeiculo: "",
      nomeProprietario: "",
      numeroApartamento: "",
      blocoApartamento: "",
      modeloVeiculo: "",
      corVeiculo: "",
      numeroVaga: "",
      vagaOcupada: false
    });
  };

  const lidarComInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDadosProprietario({
      ...dadosProprietario,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="formulario-proprietario">
      <h2>{estaEditando ? 'Editar Proprietário' : 'Cadastro de Proprietário'}</h2>
      <CustomInput
        label="Placa do Veículo:"
        tipo="text"
        valor={dadosProprietario.placaVeiculo}
        nome="placaVeiculo"
        handleInput={lidarComInputChange}
        hint="AAA-0000 ou AAA0A00"
      />
      <CustomInput
        label="Nome do Proprietário:"
        tipo="text"
        valor={dadosProprietario.nomeProprietario}
        nome="nomeProprietario"
        handleInput={lidarComInputChange}
        hint="Digite o nome completo do proprietário"
      />
      <CustomInput
        label="Número do Apartamento:"
        tipo="text"
        valor={dadosProprietario.numeroApartamento}
        nome="numeroApartamento"
        handleInput={lidarComInputChange}
        hint="Número do apartamento"
      />
      <CustomInput
        label="Bloco do Apartamento:"
        tipo="text"
        valor={dadosProprietario.blocoApartamento}
        nome="blocoApartamento"
        handleInput={lidarComInputChange}
        hint="Bloco do apartamento (ex: A, B, C)"
      />
      <CustomInput
        label="Modelo do Veículo:"
        tipo="text"
        valor={dadosProprietario.modeloVeiculo}
        nome="modeloVeiculo"
        handleInput={lidarComInputChange}
        hint="Modelo do veículo"
      />
      <CustomInput
        label="Cor do Veículo:"
        tipo="text"
        valor={dadosProprietario.corVeiculo}
        nome="corVeiculo"
        handleInput={lidarComInputChange}
        hint="Cor do veículo"
      />
      <CustomInput
        label="Número da Vaga de Estacionamento:"
        tipo="text"
        valor={dadosProprietario.numeroVaga}
        nome="numeroVaga"
        handleInput={lidarComInputChange}
        hint="Número da vaga"
      />
      <div>
        <label>
          Vaga Ocupada:
          <input
            type="checkbox"
            name="vagaOcupada"
            checked={dadosProprietario.vagaOcupada}
            onChange={lidarComInputChange}
          />
        </label>
      </div>

      {erroVagaDuplicada && <p style={{ color: 'red' }}>{erroVagaDuplicada}</p>} {/* Exibe a mensagem de erro */}

      <button className="primeiro-botao" onClick={limparFormulario}>Limpar</button>
      <button onClick={salvarProprietario}>{estaEditando ? 'Salvar Edição' : 'Cadastrar'}</button>
    </div>
  );
}

export default CadastroProprietario;