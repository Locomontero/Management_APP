
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClienteList = ({ setSelectedClienteId }) => {
  const [clientes, setClientes] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8080/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar os clientes:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id} onClick={() => setSelectedClienteId(cliente.id)}>
            {cliente.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
