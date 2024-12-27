import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjetoList = () => {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { clienteId } = useParams(); // Pegando o clienteId da URL

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/clientes/${clienteId}/projetos`);
        setProjetos(response.data);
      } catch (err) {
        console.error("Erro ao carregar projetos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjetos();
  }, [clienteId]);

  return (
    <div className="projeto-list">
      <h3>Projetos do Cliente</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {projetos.map(projeto => (
            <li key={projeto.id}>
              <h4>{projeto.nome}</h4>
              <p>{projeto.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjetoList;
