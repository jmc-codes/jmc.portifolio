import React, { useState } from 'react';

const Contato = () => {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Contato</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="mensagem" className="form-label">Mensagem</label>
            <textarea className="form-control" id="mensagem" name="mensagem" rows="4" value={form.mensagem} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
