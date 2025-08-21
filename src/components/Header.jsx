import React, { useState } from 'react';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Johnathan<span className="logo-accent">Campos</span></h1>

        <button className="mobile-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${menuAberto ? 'open' : ''}`}>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#formacao">Formação</a></li>
            <li><a href="#experiencia">Experiência</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#idiomas">Idiomas</a></li>
            <li><a href="#certificacoes">Certificações</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
