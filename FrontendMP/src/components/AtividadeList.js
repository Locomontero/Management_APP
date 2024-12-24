
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AtividadeList = ({ clienteId, projetoId }) => {
  const [atividades, setAtividades] = useState([]);


  useEffect(() => {
    if (clienteId && projetoId) {
      axios.get(`http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades`)
        .then(response => {
          setAtividades(response.data);
        })
        .catch(error => {
          console.error('Erro ao carregar as atividades:', error);
        });
    }
  }, [clienteId, projetoId]);

  return (
    <div>
      <h3>Atividades do Projeto</h3>
      <ul>
        {atividades.map(atividade => (
          <li key={atividade.id}>
            {atividade.nome} - {atividade.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AtividadeList;
