import axios from 'axios';

const apiUrl = 'http://localhost:8080/clientes';

// Função para pegar todos os clientes
export const getClientes = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clientes', error);
    throw error;
  }
};

// Função para criar um cliente
export const createCliente = async (cliente) => {
  try {
    const response = await axios.post(apiUrl, cliente);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente', error);
    throw error;
  }
};

// Função para deletar um cliente
export const deleteCliente = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir cliente', error);
    throw error;
  }
};

// Função para criar um projeto
export const createProjeto = async (clienteId, projeto) => {
  try {
    const response = await axios.post(`${apiUrl}/${clienteId}/projetos`, projeto);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar projeto', error);
    throw error;
  }
};

// Função para listar projetos de um cliente
export const getProjetos = async (clienteId) => {
  try {
    const response = await axios.get(`${apiUrl}/${clienteId}/projetos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar projetos', error);
    throw error;
  }
};

// Função para criar uma atividade
export const createAtividade = async (clienteId, projetoId, atividade) => {
  try {
    const response = await axios.post(`${apiUrl}/${clienteId}/projetos/${projetoId}/atividades`, atividade);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar atividade', error);
    throw error;
  }
};

// Função para listar atividades de um projeto de um cliente
export const getAtividades = async (clienteId, projetoId) => {
  try {
    const response = await axios.get(`${apiUrl}/${clienteId}/projetos/${projetoId}/atividades`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar atividades', error);
    throw error;
  }
};
