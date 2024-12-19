
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const listarProjetos = async (setProjetos) => {
  try {
    const response = await axios.get('/api/projetos');  // Substitua com seu endpoint real
    setProjetos(response.data);
  } catch (error) {
    console.error("Erro ao listar projetos:", error);
  }
};

const ProjetoList = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    listarProjetos(setProjetos);  // Chama a função quando o componente é montado
  }, []);

  return (
    <div>
      <h1>Projetos</h1>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.id}>{projeto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjetoList;
