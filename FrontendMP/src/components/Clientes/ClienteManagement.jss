import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClienteManagement = () => {
  const [clientes, setClientes] = useState([]);  // Para armazenar a lista de clientes
  const [search, setSearch] = useState('');      // Para armazenar o valor da busca
  const [isLoading, setIsLoading] = useState(false);  // Para gerenciar o carregamento

  // Função para buscar clientes com base no nome ou sem filtro
  const fetchClientes = async (searchQuery = '') => {
    setIsLoading(true);  // Inicia o carregamento
    try {
      const response = await axios.get('http://localhost:8080/clientes', {
        params: {
          search: searchQuery,  // Parâmetro de busca (se fornecido)
        },
      });

      // Atualiza os clientes com a resposta da API
      setClientes(response.data);  // Não há necessidade de acessar "content", pois a resposta é uma lista diretamente
      setIsLoading(false);  // Finaliza o carregamento
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      setIsLoading(false);  // Em caso de erro, finaliza o carregamento
    }
  };

  // Efeito para carregar clientes quando o componente for montado
  useEffect(() => {
    fetchClientes();  // Carrega a lista de clientes ao iniciar
  }, []);  // Array vazio para rodar apenas uma vez quando o componente for montado

  // Função para buscar clientes com o filtro de nome
  const handleSearch = (e) => {
    e.preventDefault();  // Impede o comportamento padrão do formulário
    fetchClientes(search);  // Chama a função de busca com o termo de pesquisa
  };

  return (
    <div className="cliente-management">
      <h2>Gestão de Clientes</h2>

      {/* Formulário de Criação de Cliente */}
      <div className="form-container">
        <h3>Criar Novo Cliente</h3>
        <form onSubmit={handleCreateCliente}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
            required
          />
          <button type="submit">Criar Cliente</button>
        </form>
      </div>

      {/* Formulário de Busca de Cliente */}
      <div className="search-container">
        <h3>Buscar Cliente</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}  // Atualiza o estado da busca
            placeholder="Digite o nome do cliente"
          />
          <button type="submit">Buscar</button>
        </form>
      </div>

      {/* Exibindo a lista de clientes ou mensagem "Nenhum cliente encontrado" */}
      <div className="clientes-list">
        <h3>Lista de Clientes</h3>
        {isLoading ? (
          <p>Carregando...</p>
        ) : clientes.length === 0 ? (
          <p>Nenhum cliente encontrado.</p>
        ) : (
          <ul>
            {clientes.map((cliente) => (
              <li key={cliente.id}>
                <p>{cliente.nome}</p>
                <p>{cliente.email}</p>
                <p>{cliente.telefone}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ClienteManagement;
