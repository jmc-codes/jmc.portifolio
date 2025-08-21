import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGitAlt } from 'react-icons/fa';

const skills = [
  { nome: 'HTML5', icon: <FaHtml5 /> },
  { nome: 'CSS3', icon: <FaCss3Alt /> },
  { nome: 'JavaScript', icon: <FaJs /> },
  { nome: 'React', icon: <FaReact /> },
  { nome: 'Figma', icon: <FaFigma /> },
  { nome: 'Git', icon: <FaGitAlt /> }
];

const Competencias = () => (
  <section id="skills" className="py-5">
    <div className="container">
      <h2 className="mb-4">Competências</h2>
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 mb-3 text-center">
            <div className="fs-2 mb-2">{skill.icon}</div>
            <p>{skill.nome}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Competencias;
