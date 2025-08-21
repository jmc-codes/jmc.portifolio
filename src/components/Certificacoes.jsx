import React from 'react';

const certificacoes = [
  {
    titulo: 'Certificado React Developer',
    emissor: 'Alura',
    ano: '2023'
  },
  {
    titulo: 'Certificado UX/UI Design',
    emissor: 'Origamid',
    ano: '2022'
  }
];

const Certificacoes = () => (
  <section id="certificacoes" className="py-5">
    <div className="container">
      <h2 className="mb-4">Certificações</h2>
      <ul className="list-unstyled">
        {certificacoes.map((cert, index) => (
          <li key={index} className="mb-3">
            <h5>{cert.titulo}</h5>
            <p className="text-muted">{cert.emissor} – {cert.ano}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certificacoes;
