import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getOpenProjects = () => {
  return axios.get(`${API_BASE_URL}/projetos/abertos`);
};

export const getActivitiesForProject = (projectId) => {
  return axios.get(`${API_BASE_URL}/projetos/${projectId}/atividades`);
};
