import React from 'react';

const projetos = [
  {
    titulo: 'Landing Page Responsiva',
    descricao: 'Projeto de uma landing page moderna com HTML, CSS e JavaScript.',
    imagem: 'img/landingpage.png',
    link: 'https://github.com/seuusuario/landing-page'
  },
  {
    titulo: 'Dashboard com React',
    descricao: 'Dashboard interativo com gráficos e filtros usando React e Chart.js.',
    imagem: 'img/dashboard.png',
    link: 'https://github.com/seuusuario/dashboard-react'
  },
  {
    titulo: 'Clone Netflix',
    descricao: 'Clone da interface da Netflix com React e consumo de API.',
    imagem: 'img/netflixclone.png',
    link: 'https://github.com/seuusuario/netflix-clone'
  }
];

const Projetos = () => (
  <section id="projetos" className="py-5 bg-light">
    <div className="container">
      <h2 className="mb-4">Projetos</h2>
      <div className="row">
        {projetos.map((projeto, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={require(`../assets/${projeto.imagem}`)} className="card-img-top" alt={projeto.titulo} />
              <div className="card-body">
                <h5 className="card-title">{projeto.titulo}</h5>
                <p className="card-text">{projeto.descricao}</p>
                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver Projeto</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projetos;

