import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import './Listagem.css'; // Use o mesmo arquivo de estilo ou crie um novo

function VagasLivres() { 
    const [vagasLivres, setVagasLivres] = useState([]); // 
    const [proprietarios, setProprietarios] = useState([]); // 

    useEffect(() => {
        const dataProprietarios = JSON.parse(localStorage.getItem("proprietarios")) || []; // Busca 
        setProprietarios(dataProprietarios); // Atualiza estado 
               
        const vagasOcupadasNumeros = dataProprietarios
            .filter(proprietario => proprietario.vagaOcupada) 
            .map(proprietario => proprietario.numeroVaga); 
        
        const totalVagas = 30; 

        const todasAsVagas = Array.from({ length: totalVagas }, (_, i) => (i + 1).toString()); // Cria array 
        const livres = todasAsVagas.filter(vaga => !vagasOcupadasNumeros.includes(vaga)); // Filtra 

        setVagasLivres(livres); // Atualiza 

    }, []); // Dependências do useEffect

    return (
        <div className="listagem-container"> 
            <h2>Vagas Livres</h2> 
            {vagasLivres.length > 0 ? (
                <ul>
                    {vagasLivres.map((vaga) => (
                        <li key={vaga}>Vaga número: {vaga}</li> 
                    ))}
                </ul>
            ) : (
                <p>Não há vagas livres no momento.</p>
            )}
            <Link to="/register-owner">Cadastrar Novo Proprietário</Link> {/* Link para rota */}
            <br />
            <Link to="/occupied-spaces">Ver Vagas Ocupadas</Link> {/* Link para rota */}
        </div>
    );
}

export default VagasLivres; 