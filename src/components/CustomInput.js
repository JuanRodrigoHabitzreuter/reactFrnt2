import React from 'react';
import './CustomInput.css'; // Importe o arquivo CSS para este componente

function CustomInput({ label, tipo, valor, nome, handleInput, hint }) {
    return (
        <div className="custom-input">
            <label htmlFor={nome}>{label}</label>
            <input
                type={tipo}
                id={nome}
                name={nome}
                value={valor}
                onChange={handleInput}
            />
            {hint && <p className="hint">{hint}</p>}
        </div>
    );
}

export default CustomInput;