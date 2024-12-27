import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AtividadeList = () => {
  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const { clienteId, projetoId } = useParams();

  useEffect(() => {
    const fetchAtividades = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades`);
        setAtividades(response.data);
      } catch (err) {
        console.error("Erro ao carregar atividades", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAtividades();
  }, [clienteId, projetoId]);

  return (
    <div className="atividade-list">
      <h3>Atividades do Projeto</h3>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {atividades.map(atividade => (
            <li key={atividade.id}>
              <h4>{atividade.nome}</h4>
              <p>{atividade.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AtividadeList;
