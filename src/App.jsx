import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importando componentes
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Formacao from './components/Formacao';
import Competencias from './components/Competencias';
import Idiomas from './components/Idiomas';
import Certificacoes from './components/Certificacoes';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Formacao />
        <Competencias />
        <Idiomas />
        <Certificacoes />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
