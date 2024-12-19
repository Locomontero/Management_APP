import axios from 'axios';

const listarProjetos = async () => {
  try {
    const response = await axios.get('/api/projetos');
    console.log(response.data);
  } catch (error) {
    console.error("Erro ao listar projetos:", error);
  }
};
