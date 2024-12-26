
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const createAtividade = (clienteId, projetoId, atividade) => {
  return api.post(`/clientes/${clienteId}/projetos/${projetoId}/atividades`, atividade)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao criar atividade", error);
      throw error;
    });
};

export const getAtividadesByClienteEProjeto = (clienteId, projetoId) => {
  return api.get(`/clientes/${clienteId}/projetos/${projetoId}/atividades`)
    .then(response => response.data)
    .catch(error => {
      console.error("Erro ao carregar atividades", error);
      throw error;
    });
};
