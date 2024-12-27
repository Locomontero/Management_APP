import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ClienteManagement.css';  // Certifique-se de que o CSS foi importado corretamente

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Buscando todos os clientes
    axios.get('http://localhost:8080/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar clientes:', error);
      });
  }, []);

  return (
    <div className="cliente-management">
      {/* Botão Criar Cliente (acima da lista de clientes) */}
      <Link to="/clientes/criar">
        <button className="criar-cliente-btn">
          Criar Cliente
        </button>
      </Link>

      {/* Título da Lista de Clientes */}
      <h2 className="lista-clientes-titulo">Lista de Clientes</h2>

      {/* Lista de Clientes */}
      <div className="clientes-list">
        {clientes.map(cliente => (
          <div key={cliente.id} className="cliente-card">
            <h3>{cliente.nome}</h3>
            <p>{cliente.email}</p>
            <p>{cliente.telefone}</p>

            {/* Link para Projetos desse Cliente */}
            <Link to={`/clientes/${cliente.id}/projetos`}>
              Ver Projetos de {cliente.nome}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteList;
