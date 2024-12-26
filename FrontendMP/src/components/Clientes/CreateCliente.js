import React, { useState } from 'react';
import axios from 'axios';

const CreateCliente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  // Função para criar um novo cliente
  const handleCreateCliente = async (e) => {
    e.preventDefault();
    try {
      const cliente = { nome, email, telefone };
      const response = await axios.post('http://localhost:8080/clientes', cliente);
      alert('Cliente criado com sucesso!');
      setNome('');
      setEmail('');
      setTelefone('');
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      alert('Erro ao criar cliente!');
    }
  };

  return (
    <div className="create-cliente">
      <h2>Criar Novo Cliente</h2>
      <form onSubmit={handleCreateCliente}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="Telefone"
          required
        />
        <button type="submit">Criar Cliente</button>
      </form>
    </div>
  );
};

export default CreateCliente;
