
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjetoList = ({ clienteId, setSelectedProjetoId }) => {
  const [projetos, setProjetos] = useState([]);


  useEffect(() => {
    if (clienteId) {
      axios.get(`http://localhost:8080/clientes/${clienteId}/projetos`)
        .then(response => {
          setProjetos(response.data);
        })
        .catch(error => {
          console.error('Erro ao carregar os projetos:', error);
        });
    }
  }, [clienteId]);

  return (
    <div>
      <h3>Projetos do Cliente</h3>
      <ul>
        {projetos.map(projeto => (
          <li key={projeto.id} onClick={() => setSelectedProjetoId(projeto.id)}>
            {projeto.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjetoList;
