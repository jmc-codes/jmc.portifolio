import React from 'react';

const idiomas = [
  { idioma: 'Português', nivel: 'Nativo' },
  { idioma: 'Inglês', nivel: 'Intermediário' },
  { idioma: 'Espanhol', nivel: 'Básico' }
];

const Idiomas = () => (
  <section id="idiomas" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Idiomas</h2>
      <ul className="list-unstyled">
        {idiomas.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.idioma}</strong>: {item.nivel}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Idiomas;
