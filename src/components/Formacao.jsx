import React from 'react';

const cursos = [
  {
    curso: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Universidade XYZ',
    periodo: '2021 - 2024'
  },
  {
    curso: 'Curso de React Avançado',
    instituicao: 'Alura',
    periodo: '2023'
  }
];

const Formacao = () => (
  <section id="formacao" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Formação</h2>
      <ul className="list-unstyled">
        {cursos.map((item, index) => (
          <li key={index} className="mb-3">
            <h5>{item.curso}</h5>
            <p className="text-muted">{item.instituicao} – {item.periodo}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Formacao;
