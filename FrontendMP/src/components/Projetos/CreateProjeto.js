// src/components/CreateProjeto.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateProjeto = ({ clienteId }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const projeto = { nome, descricao };

    axios.post(`http://localhost:8080/clientes/${clienteId}/projetos`, projeto)
      .then(() => {
        setNome('');
        setDescricao('');
        alert('Projeto criado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao criar projeto', error);
      });
  };

  return (
    <div>
      <h3>Criar Novo Projeto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Descrição:</label>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <button type="submit">Criar Projeto</button>
      </form>
    </div>
  );
};

export default CreateProjeto;
