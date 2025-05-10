import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LOCAL_STORAGE_KEY_PROPRIETARIOS = 'proprietarios';

const dadosIniciais = [
  {
    "placaVeiculo": "ABC1234",
    "nomeProprietario": "João da Silva",
    "numeroApartamento": "101",
    "blocoApartamento": "A",
    "modeloVeiculo": "Toyota Corolla",
    "corVeiculo": "Preto",
    "numeroVaga": "1",
    "vagaOcupada": true
  },
  {
    "placaVeiculo": "XYZ9876",
    "nomeProprietario": "Maria Oliveira",
    "numeroApartamento": "202",
    "blocoApartamento": "B",
    "modeloVeiculo": "Honda Civic",
    "corVeiculo": "Prata",
    "numeroVaga": "2",
    "vagaOcupada": true
  },
  {
    "placaVeiculo": "DEF5678",
    "nomeProprietario": "Carlos Pereira",
    "numeroApartamento": "303",
    "blocoApartamento": "C",
    "modeloVeiculo": "Ford Ka",
    "corVeiculo": "Branco",
    "numeroVaga": "3",
    "vagaOcupada": true
  },
  {
    "placaVeiculo": "GHI3456",
    "nomeProprietario": "Ana Souza",
    "numeroApartamento": "404",
    "blocoApartamento": "A",
    "modeloVeiculo": "Chevrolet Onix",
    "corVeiculo": "Vermelho",
    "numeroVaga": "4",
    "vagaOcupada": true
  },
  {
    "placaVeiculo": "JKL6543",
    "nomeProprietario": "Paulo Lima",
    "numeroApartamento": "505",
    "blocoApartamento": "B",
    "modeloVeiculo": "Hyundai HB20",
    "corVeiculo": "Azul",
    "numeroVaga": "5",
    "vagaOcupada": true
  },
  {
    "placaVeiculo": "MNO4321",
    "nomeProprietario": "Fernanda Costa",
    "numeroApartamento": "606",
    "blocoApartamento": "C",
    "modeloVeiculo": "Volkswagen Polo",
    "corVeiculo": "Cinza",
    "numeroVaga": "6",
    "vagaOcupada": true
  },
  {
    "placaVeiculo": "PQR3210",
    "nomeProprietario": "Ricardo Alves",
    "numeroApartamento": "707",
    "blocoApartamento": "A",
    "modeloVeiculo": "Renault Kwid",
    "corVeiculo": "Laranja",
    "numeroVaga": "7",
    "vagaOcupada": true
  }
];

function OccupiedSpace() {
  const [proprietariosOcupados, setProprietariosOcupados] = useState([]);

  // Carrega as vagas ocupadas no carregamento do componente
  useEffect(() => {
    CarregarVagasOcupadas();
  }, []);

  // Função para carregar as vagas ocupadas do localStorage e inicializar com dados padrão se necessário
  const CarregarVagasOcupadas = () => {
    const storedProprietarios = localStorage.getItem(LOCAL_STORAGE_KEY_PROPRIETARIOS);

    if (!storedProprietarios) {
      localStorage.setItem(LOCAL_STORAGE_KEY_PROPRIETARIOS, JSON.stringify(dadosIniciais));
      setProprietariosOcupados(dadosIniciais.filter(proprietario => proprietario.vagaOcupada));
    } else {
      const proprietarios = JSON.parse(storedProprietarios);
      const ocupados = proprietarios.filter(proprietario => proprietario.vagaOcupada);
      setProprietariosOcupados(ocupados);
    }
  };

  // Função para destruir a vaga
  const DestruirVaga = (numeroVagaExcluir) => {
    const proprietarios = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_PROPRIETARIOS)) || [];
    const novaListaProprietarios = proprietarios.filter(
      (proprietario) => proprietario.numeroVaga !== numeroVagaExcluir
    );
    localStorage.setItem(LOCAL_STORAGE_KEY_PROPRIETARIOS, JSON.stringify(novaListaProprietarios)); // Atualiza o localStorage
    CarregarVagasOcupadas(); // Recarrega a lista após a exclusão
  };

  return (
    <div className="listagem-container">
      <h2>Vagas Ocupadas</h2>
      {proprietariosOcupados.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Proprietário</th>
              <th>Apartamento</th>
              <th>Bloco</th>
              <th>Modelo</th>
              <th>Cor</th>
              <th>Vaga</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {proprietariosOcupados.map((proprietario) => (
              <tr key={proprietario.placaVeiculo}>
                <td>{proprietario.placaVeiculo}</td>
                <td>{proprietario.nomeProprietario}</td>
                <td>{proprietario.numeroApartamento}</td>
                <td>{proprietario.blocoApartamento}</td>
                <td>{proprietario.modeloVeiculo}</td>
                <td>{proprietario.corVeiculo}</td>
                <td>{proprietario.numeroVaga}</td>
                <td>
                  <button onClick={() => DestruirVaga(proprietario.numeroVaga)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Não há vagas ocupadas no momento.</p>
      )}
      <br />
      <Link to="/free-spaces">Ver Vagas Livres</Link>
    </div>
  );
}

export default OccupiedSpace;