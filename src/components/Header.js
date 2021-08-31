import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="header-container">
      <h3 className="header-title">Controle de Locais de Trabalho</h3>
      <div className="header-login-container">
        <p>CASA</p>
        <p>|</p>
        <p>USER</p>
      </div>
    </header>
  )
}

export default Header;
