
import React, { useState, useEffect } from 'react';
import { getProjetosByCliente, createProjeto } from '../../api/ProjetoApi';
import { useParams } from 'react-router-dom';

const CreateProjeto = () => {
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');
  const [statusOptions, setStatusOptions] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [clienteId, setClienteId] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');

  useEffect(() => {
    const fetchStatusOptions = async () => {
      try {
        const response = await getProjetosByCliente(clienteId);
        console.log('Status retornado:', response.data);
        setStatusOptions(response.data);
      } catch (error) {
        console.error('Erro ao carregar os status', error);
        alert('Erro ao carregar os status do projeto!');
      }
    };

    if (clienteId) {
      fetchStatusOptions();
    }
  }, [clienteId]);


  useEffect(() => {
    const fetchClientes = async () => {
      try {

        const response = await createProjeto();
        console.log('Clientes retornados:', response.data);
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao carregar os clientes', error);
        alert('Erro ao carregar os clientes!');
      }
    };

    fetchClientes();
  }, []);

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

      await createProjeto(clienteId, projeto);
      alert('Projeto criado com sucesso!');


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
