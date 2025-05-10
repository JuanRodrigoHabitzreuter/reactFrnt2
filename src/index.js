import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tela from './pages/Screnn';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Inicializar dados no localStorage (executa antes do app carregar)
const dadosIniciais = [
  {
    placaVeiculo: "ABC1234",
    nomeProprietario: "João da Silva",
    numeroApartamento: "101",
    blocoApartamento: "A",
    modeloVeiculo: "Toyota Corolla",
    corVeiculo: "Preto",
    numeroVaga: "1",
    vagaOcupada: true
  },
  {
    placaVeiculo: "XYZ9876",
    nomeProprietario: "Maria Oliveira",
    numeroApartamento: "202",
    blocoApartamento: "B",
    modeloVeiculo: "Honda Civic",
    corVeiculo: "Prata",
    numeroVaga: "2",
    vagaOcupada: true
  },
  {
    placaVeiculo: "DEF5678",
    nomeProprietario: "Carlos Pereira",
    numeroApartamento: "303",
    blocoApartamento: "C",
    modeloVeiculo: "Ford Ka",
    corVeiculo: "Branco",
    numeroVaga: "3",
    vagaOcupada: true
  },
  {
    placaVeiculo: "GHI3456",
    nomeProprietario: "Ana Souza",
    numeroApartamento: "404",
    blocoApartamento: "A",
    modeloVeiculo: "Chevrolet Onix",
    corVeiculo: "Vermelho",
    numeroVaga: "4",
    vagaOcupada: true
  },
  {
    placaVeiculo: "JKL6543",
    nomeProprietario: "Paulo Lima",
    numeroApartamento: "505",
    blocoApartamento: "B",
    modeloVeiculo: "Hyundai HB20",
    corVeiculo: "Azul",
    numeroVaga: "5",
    vagaOcupada: true
  },
  {
    placaVeiculo: "MNO4321",
    nomeProprietario: "Fernanda Costa",
    numeroApartamento: "606",
    blocoApartamento: "C",
    modeloVeiculo: "Volkswagen Polo",
    corVeiculo: "Cinza",
    numeroVaga: "6",
    vagaOcupada: true
  },
  {
    placaVeiculo: "PQR3210",
    nomeProprietario: "Ricardo Alves",
    numeroApartamento: "707",
    blocoApartamento: "A",
    modeloVeiculo: "Renault Kwid",
    corVeiculo: "Laranja",
    numeroVaga: "7",
    vagaOcupada: true
  }
];

// inicializa os dados se ainda não estiverem salvos
if (!localStorage.getItem("proprietarios")) {
  localStorage.setItem("proprietarios", JSON.stringify(dadosIniciais));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Tela />
  </BrowserRouter>
);

// Medir a performance da aplicação (opcional)
reportWebVitals();
