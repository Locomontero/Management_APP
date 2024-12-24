
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getProjetosByCliente = (clienteId) => api.get(`/clientes/${clienteId}/projetos`);
export const createProjeto = (clienteId, projeto) => api.post(`/clientes/${clienteId}/projetos`, projeto);
