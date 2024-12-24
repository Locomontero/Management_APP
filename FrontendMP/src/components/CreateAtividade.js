
import React, { useState } from 'react';
import { createAtividade } from '../api/AtividadeApi';

const CreateAtividade = ({ clienteId, projetoId }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const atividade = { nome, descricao };

    createAtividade(clienteId, projetoId, atividade)
      .then(() => {
        setNome('');
        setDescricao('');
        alert('Atividade criada com sucesso!');
      })
      .catch(error => {
        console.error("Erro ao criar atividade", error);
      });
  };

  return (
    <div>
      <h3>Criar Nova Atividade</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Descrição:</label>
          <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <button type="submit">Criar Atividade</button>
      </form>
    </div>
  );
};

export default CreateAtividade;
