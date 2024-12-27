import React, { useState } from 'react';
import axios from 'axios';
import './ClienteManagement.css';

const CreateCliente = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateCliente = async (e) => {
    e.preventDefault();
    setLoading(true);

    const cliente = { nome, email, telefone };

    try {
      const response = await axios.post('http://localhost:8080/clientes', cliente);
      alert('Cliente criado com sucesso!');
      setNome('');
      setEmail('');
      setTelefone('');
      setLoading(false);
    } catch (err) {
      setError('Erro ao criar cliente!');
      setLoading(false);
    }
  };

  return (
    <div className="create-cliente-container">
      <h2>Criar Novo Cliente</h2>
      <form onSubmit={handleCreateCliente} className="create-cliente-form">
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
        <button type="submit" disabled={loading}>
          {loading ? 'Criando...' : 'Criar Cliente'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default CreateCliente;
