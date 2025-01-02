import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ClienteManagement.css';
import CreateCliente from './CreateCliente';
import ClienteList from './ClienteList';

const ClienteManagement = () => {
  const [clientes, setClientes] = useState([]);
  const [selectedClienteId, setSelectedClienteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filteredClientes = clientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className="cliente-management">
      <h2>Gestão de Clientes</h2>

      {/* Links de Navegação */}
      <div className="navigation-links">
        <a href="#">Clientes</a>
        <a href="#">Projetos</a>
        <a href="#">Atividades</a>
      </div>

      {/* Campo de Busca */}
      <div className="search-cliente-form">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={() => {}}>Buscar</button>
      </div>

      {/* Formulário de Criação de Cliente */}
      <CreateCliente onCreate={fetchClientes} />

      {/* Lista de Clientes */}
      <ClienteList
        clientes={filteredClientes}
        setSelectedClienteId={setSelectedClienteId}
      />
    </div>
  );
};

export default ClienteManagement;
