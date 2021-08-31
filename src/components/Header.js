import React from 'react';
import '../css/Header.css';
import HomeIcon from '../icons/home-icon.png';
import UserIcon from '../icons/user-icon.png';

function Header() {
  return (
    <header className="header-container">
      <h3 className="header-title">Controle de Locais de Trabalho</h3>

      <div className="header-login-container">
        <input type="image" src={ HomeIcon } width="35px" height="35px" />

        <p>|</p>

        <div className="header-user-information">
          <input className="header-user-icon" type="image" src={ UserIcon } width="35px" height="35px" />
          <div>
            <p>Usuário</p>
            <p>Administrador</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
