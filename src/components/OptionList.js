import React from 'react';
import '../css/MainSection.css';
import ConfigIcon from '../icons/config-icon.png';

function OptionList() {
  return (
    <div className="option-list-container">
     <label className="option-list-label">
      <input
        type="image"
        src={ConfigIcon}
        height="15px"
        width="15px"
        className="icon-config"
      />
       Administração
     </label>

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
