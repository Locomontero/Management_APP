import React, { useState } from 'react';
import axios from 'axios';

const ClienteSearch = () => {
  const [id, setId] = useState('');
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState('');


  const handleSearch = async (e) => {
    e.preventDefault();
    try {

      if (!id) {
        alert("Por favor, insira o ID do cliente.");
        return;
      }


      const response = await axios.get(`http://localhost:8080/clientes/${id}`);
      setCliente(response.data);
      setError('');
    } catch (err) {
      console.error("Erro ao buscar cliente:", err);
      setError("Cliente não encontrado.");
      setCliente(null);
    }
  };

  return (
    <div className="cliente-search">
      <h2>Buscar Cliente</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Digite o ID do cliente"
          required
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {cliente && (
        <div className="cliente-info">
          <h3>Cliente Encontrado</h3>
          <p><strong>Nome:</strong> {cliente.nome}</p>
          <p><strong>Email:</strong> {cliente.email}</p>
          <p><strong>Telefone:</strong> {cliente.telefone}</p>
        </div>
      )}
    </div>
  );
};

export default ClienteSearch;
