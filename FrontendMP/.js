import axios from 'axios';

axios.get('/api/cliente')  // Não precisa do URL completo, pois o proxy faz a redireção
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer a requisição:', error);
  });

