import React from 'react';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Formacao from './components/Formacao';
import Experiencia from './components/Experiencia';
import Competencias from './components/Competencias';
import Idiomas from './components/Idiomas';
import Certificacoes from './components/Certificacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Hero />
      <Sobre />
      <Formacao />
      <Experiencia />
      <Competencias />
      <Idiomas />
      <Certificacoes />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
