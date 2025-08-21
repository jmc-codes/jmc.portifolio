import React from 'react';

const experiencias = [
  {
    cargo: 'Desenvolvedor Front-End',
    empresa: 'Agência Criativa',
    periodo: '2023 - Presente',
    descricao: 'Desenvolvimento de interfaces responsivas com React, integração com APIs REST e colaboração com equipe de design.'
  },
  {
    cargo: 'Estagiário de Desenvolvimento Web',
    empresa: 'Tech Solutions',
    periodo: '2022 - 2023',
    descricao: 'Apoio na criação de páginas web, manutenção de sistemas internos e aprendizado de boas práticas de desenvolvimento.'
  }
];

const Experiencia = () => (
  <section id="experiencia" className="py-5">
    <div className="container">
      <h2 className="mb-4">Experiência</h2>
      {experiencias.map((exp, index) => (
        <div key={index} className="mb-3">
          <h5>{exp.cargo} – <span className="text-muted">{exp.empresa}</span></h5>
          <p className="text-muted">{exp.periodo}</p>
          <p>{exp.descricao}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experiencia;
