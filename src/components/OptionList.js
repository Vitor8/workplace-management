import React from 'react';
import '../css/MainSection.css';

function OptionList() {
  return (
    <div className="option-list-container">
     <label className="option-list-button">Administração</label>
     <button className="option-list-button">Administradores</button>
     <button className="option-list-button">Áreas</button>
     <button className="option-list-button">Locais de Trabalho</button>
     <button className="option-list-button">Habilidades</button>
     <button className="option-list-button">Log</button>
     <button className="option-list-button">Responsáveis</button>
    </div>
  )
}

export default OptionList;
