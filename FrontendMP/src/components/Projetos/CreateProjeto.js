// src/components/Projetos/CreateProjeto.js
import React, { useState, useEffect } from 'react';
import { getProjetosByCliente, createProjeto } from '../../api/ProjetoApi'; // Caminho corrigido para importar a API
import { useParams } from 'react-router-dom';

const CreateProjeto = () => {
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [statusOptions, setStatusOptions] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [clienteId, setClienteId] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');

  // Função para pegar os status do backend
  useEffect(() => {
    const fetchStatusOptions = async () => {
      try {
        const response = await getProjetosByCliente(clienteId); // Usa a função da API para buscar os status
        console.log('Status retornado:', response.data);
        setStatusOptions(response.data); // A resposta será uma lista de status
      } catch (error) {
        console.error('Erro ao carregar os status', error);
        alert('Erro ao carregar os status do projeto!');
      }
    };

    if (clienteId) {
      fetchStatusOptions();
    }
  }, [clienteId]); // O useEffect é executado quando clienteId mudar

  // Função para pegar os clientes (Adicionando a função de clientes aqui)
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        // Aqui você pode ter uma função que retorna os clientes. Caso não tenha, precisará criar.
        const response = await createProjeto(); // Essa função precisa ser ajustada conforme seu backend
        console.log('Clientes retornados:', response.data);
        setClientes(response.data); // A resposta será uma lista de clientes
      } catch (error) {
        console.error('Erro ao carregar os clientes', error);
        alert('Erro ao carregar os clientes!');
      }
    };

    fetchClientes();
  }, []); // O useEffect será chamado apenas uma vez quando o componente for montado

  // Função que lida com a criação do projeto
  const handleCreateProjeto = async (e) => {
    e.preventDefault();

    const projeto = {
      nome,
      status,
      clienteId,
      dataInicio,
      dataTermino
    };

    try {
      // Usa a função createProjeto para enviar os dados do projeto para a API
      await createProjeto(clienteId, projeto);
      alert('Projeto criado com sucesso!');

      // Limpar os campos após criação
      setNome('');
      setStatus('');
      setClienteId('');
      setDataInicio('');
      setDataTermino('');
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
          <label htmlFor="cliente">Cliente:</label>
          <select
            id="cliente"
            value={clienteId}
            onChange={(e) => setClienteId(e.target.value)}
            required
          >
            <option value="">Selecione o Cliente</option>
            {clientes.length === 0 ? (
              <option>Carregando clientes...</option>
            ) : (
              clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <label htmlFor="status">Status do Projeto:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Selecione o Status</option>
            {statusOptions.length === 0 ? (
              <option>Carregando status...</option>
            ) : (
              statusOptions.map((statusOption, index) => (
                <option key={index} value={statusOption}>
                  {statusOption.replace(/_/g, ' ')} {/* Exibe o status com espaços ao invés de underscores */}
                </option>
              ))
            )}
          </select>
        </div>

        <div>
          <label htmlFor="dataInicio">Data de Início:</label>
          <input
            type="date"
            id="dataInicio"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="dataTermino">Data de Término:</label>
          <input
            type="date"
            id="dataTermino"
            value={dataTermino}
            onChange={(e) => setDataTermino(e.target.value)}
            required
          />
        </div>

        <button type="submit">Criar Projeto</button>
      </form>
    </div>
  );
};

export default CreateProjeto;
