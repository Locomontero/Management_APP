import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ActivityList = () => {
  const { id } = useParams();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Requisição para listar as atividades de um projeto
    axios.get(`/api/projetos/${id}/atividades`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar as atividades:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Atividades do Projeto</h2>
      <div className="activity-list">
        {activities.length === 0 ? (
          <p>Não há atividades cadastradas para este projeto.</p>
        ) : (
          activities.map(activity => (
            <div key={activity.id} className="activity-card">
              <h3>{activity.descricao}</h3>
              <p><strong>Status:</strong> {activity.status}</p>
              <p><strong>Início:</strong> {activity.dataInicio}</p>
              <p><strong>Fim:</strong> {activity.dataFim}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityList;
