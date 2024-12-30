import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Para pegar o clienteId da URL

const CreateProjeto = () => {
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState(''); // Estado para armazenar o status
  const [statusOptions, setStatusOptions] = useState([]); // Estado para armazenar as opções de status
  const { clienteId } = useParams(); // Pega o clienteId da URL

  // Função para pegar os status do backend
  useEffect(() => {
    const fetchStatusOptions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/status-projeto'); // URL que retorna os status
        setStatusOptions(response.data); // A resposta será uma lista de status
      } catch (error) {
        console.error('Erro ao carregar os status', error);
        alert('Erro ao carregar os status do projeto!');
      }
    };

    fetchStatusOptions();
  }, []); // O useEffect será chamado apenas uma vez quando o componente for montado

  // Função que lida com a criação do projeto
  const handleCreateProjeto = async (e) => {
    e.preventDefault();

    try {
      const projeto = { nome, status }; // Enviando nome e status do projeto
      // Faz a requisição para criar o projeto
      await axios.post(`http://localhost:8080/clientes/${clienteId}/projetos`, projeto); // URL com clienteId
      alert('Projeto criado com sucesso!');
      setNome(''); // Limpar o nome após criação
      setStatus(''); // Limpar o status após criação
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      alert('Erro ao criar projeto!');
    }
  };

  return (
    <div className="create-projeto">
      <h2>Criar Novo Projeto</h2>
      <form onSubmit={handleCreateProjeto} className="form-criar-projeto">
        <div>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do Projeto"
            required
          />
        </div>

        <div>
          <label htmlFor="status">Status do Projeto:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)} // Atualiza o status selecionado
            required
          >
            <option value="">Selecione o Status</option>
            {statusOptions.map((statusOption, index) => (
              <option key={index} value={statusOption}>
                {statusOption.replace(/_/g, ' ')} {/* Exibe o status com espaços ao invés de underscores */}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Criar Projeto</button>
      </form>
    </div>
  );
};

export default CreateProjeto;
