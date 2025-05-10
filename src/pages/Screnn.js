import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom'; // Importe Navigate
import RegisterOwner from './RegisterOwner';
import OccupiedSpace from './OccupiedSpaces';
import FreeSpace from './FreeSpaces';
import './Screnn.css';

function Tela() {
  return (
    <div className="tela-inicial-container">
      <h1 className="tela-titulo">Cadastro do Estacionamento</h1>
      <nav className="tela-navegacao">
        <ul className="tela-lista-links">
          <li className="tela-item-link">
            <Link to="/register-owner" className="tela-link">Cadastrar Proprietário</Link>
          </li>
          <li className="tela-item-link">
            <Link to="/occupied-spaces" className="tela-link">Vagas Ocupadas</Link>
          </li>
          <li className="tela-item-link">
            <Link to="/free-spaces" className="tela-link">Vagas Livres</Link>
          </li>
        </ul>
      </nav>
      <div className="tela-rotas-container">
        <Routes>
          {/* Rota padrão que redireciona para /register-owner */}
          <Route path="/" element={<Navigate to="/register-owner" />} />
          <Route path="/register-owner" element={<RegisterOwner />} />
          <Route path="/occupied-spaces" element={<OccupiedSpace />} />
          <Route path="/free-spaces" element={<FreeSpace />} />
        </Routes>
      </div>
    </div>
  );
}

export default Tela;