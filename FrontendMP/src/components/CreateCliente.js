// src/components/CreateCliente.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateCliente = ({ onCreate }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cliente = { nome, email, telefone };

    axios.post('http://localhost:8080/clientes', cliente)
      .then((response) => {
        onCreate(prevClientes => [...prevClientes, response.data]);
        setNome('');
        setEmail('');
        setTelefone('');
        alert('Cliente criado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao criar cliente', error);
      });
  };

  return (
    <div>
      <h3>Criar Novo Cliente</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Telefone:</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
        <button type="submit">Criar Cliente</button>
      </form>
    </div>
  );
};

export default CreateCliente;
