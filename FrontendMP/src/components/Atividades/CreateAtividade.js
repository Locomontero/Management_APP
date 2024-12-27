import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Para pegar o clienteId e projetoId da URL

const CreateAtividade = () => {
  const [nome, setNome] = useState('');
  const { clienteId, projetoId } = useParams(); // Pega o clienteId e projetoId da URL

  const handleCreateAtividade = async (e) => {
    e.preventDefault();

    try {
      const atividade = { nome }; // O nome da atividade a ser enviado
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
