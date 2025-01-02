import axios from 'axios';

const apiUrl = 'http://localhost:8080/clientes';

export const getClientes = async (search = '') => {
  try {
    const url = search ? `${apiUrl}?search=${search}` : apiUrl;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clientes', error);
    throw error;
  }
};

export const createCliente = async (cliente) => {
  try {
    const response = await axios.post(apiUrl, cliente);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente', error);
    throw error;
  }
};

export const deleteCliente = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir cliente', error);
    throw error;
  }
};

export const createProjeto = async (clienteId, projeto) => {
  try {
    const response = await axios.post(`${apiUrl}/${clienteId}/projetos`, projeto);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar projeto', error);
    throw error;
  }
};


export const getProjetos = async (clienteId) => {
  try {
    const response = await axios.get(`${apiUrl}/${clienteId}/projetos`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar projetos', error);
    throw error;
  }
};


export const createAtividade = async (clienteId, projetoId, atividade) => {
  try {
    const response = await axios.post(`${apiUrl}/${clienteId}/projetos/${projetoId}/atividades`, atividade);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar atividade', error);
    throw error;
  }
};


export const getAtividades = async (clienteId, projetoId) => {
  try {
    const response = await axios.get(`${apiUrl}/${clienteId}/projetos/${projetoId}/atividades`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar atividades', error);
    throw error;
  }
};
