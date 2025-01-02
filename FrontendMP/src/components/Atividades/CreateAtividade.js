import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreateAtividade = () => {
  const [nome, setNome] = useState('');
  const { clienteId, projetoId } = useParams();

  const handleCreateAtividade = async (e) => {
    e.preventDefault();

    try {
      const atividade = { nome };
      await axios.post(`http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades`, atividade);
      alert('Atividade criada com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao criar atividade:', error);
      alert('Erro ao criar atividade!');
    }
  };

  return (
    <div className="create-atividade">
      <h2>Criar Nova Atividade</h2>
      <form onSubmit={handleCreateAtividade}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da Atividade"
          required
        />
        <button type="submit">Criar Atividade</button>
      </form>
    </div>
  );
};

export default CreateAtividade;
