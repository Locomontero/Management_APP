import axios from 'axios';

axios.get('/api/cliente')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer a requisição:', error);
  });

