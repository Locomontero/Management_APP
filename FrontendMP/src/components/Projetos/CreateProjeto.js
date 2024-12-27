import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Para pegar o clienteId da URL

const CreateProjeto = () => {
  const [nome, setNome] = useState('');
  const { clienteId } = useParams(); // Pega o clienteId da URL

  const handleCreateProjeto = async (e) => {
    e.preventDefault();

    try {
      const projeto = { nome }; // O nome do projeto a ser enviado
      await axios.post(`http://localhost:8080/clientes/${clienteId}/projetos`, projeto);
      alert('Projeto criado com sucesso!');
      setNome('');
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      alert('Erro ao criar projeto!');
    }
  };

  return (
    <div className="create-projeto">
      <h2>Criar Novo Projeto</h2>
      <form onSubmit={handleCreateProjeto}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Projeto"
          required
        />
        <button type="submit">Criar Projeto</button>
      </form>
    </div>
  );
};

export default CreateProjeto;
