import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ProjetoList.css';

const ProjetoList = () => {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [novoProjeto, setNovoProjeto] = useState({ nome: '', descricao: '' });
  const { clienteId } = useParams(); // Pegando o clienteId da URL
  const [exibirTodosProjetos, setExibirTodosProjetos] = useState(false); // Controle para exibir todos os projetos

  // Função para carregar os projetos do cliente específico
  const fetchProjetosByCliente = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/clientes/${clienteId}/projetos`);
      setProjetos(response.data);
    } catch (err) {
      console.error("Erro ao carregar projetos do cliente", err);
    } finally {
      setLoading(false);
    }
  };

  // Função para carregar todos os projetos de todos os clientes
  const fetchAllProjetos = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/clientes/projetos'); // Endpoint para todos os projetos
      setProjetos(response.data);
    } catch (err) {
      console.error("Erro ao carregar todos os projetos", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (clienteId) {
      fetchProjetosByCliente(); // Carregar projetos do cliente específico
    } else if (exibirTodosProjetos) {
      fetchAllProjetos(); // Carregar todos os projetos
    }
  }, [clienteId, exibirTodosProjetos]);

  // Função para criar um novo projeto
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!novoProjeto.nome || !novoProjeto.descricao) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/clientes/${novoProjeto.clienteId}/projetos`,
        novoProjeto
      );
      setProjetos([...projetos, response.data]);
      setNovoProjeto({ nome: '', descricao: '' });
    } catch (err) {
      console.error("Erro ao criar projeto", err);
      alert('Erro ao criar projeto!');
    }
  };

  return (
    <div className="projeto-list">
      <h3>Projetos</h3>

      {/* Link para carregar todos os projetos */}
      <button onClick={() => setExibirTodosProjetos(true)} className="load-all-projects-btn">
        Carregar Todos os Projetos
      </button>

      {/* Formulário para criar novo projeto */}
      <form onSubmit={handleSubmit} className="form-criar-projeto">
        <h4>Criar Novo Projeto</h4>
        <input
          type="text"
          value={novoProjeto.nome}
          onChange={(e) => setNovoProjeto({ ...novoProjeto, nome: e.target.value })}
          placeholder="Nome do Projeto"
          required
        />
        <textarea
          value={novoProjeto.descricao}
          onChange={(e) => setNovoProjeto({ ...novoProjeto, descricao: e.target.value })}
          placeholder="Descrição do Projeto"
          required
        />
        <button type="submit">Criar Projeto</button>
      </form>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="projetos-container">
          {projetos.length === 0 ? (
            <p>Não há projetos registrados.</p>
          ) : (
            projetos.map((projeto) => (
              <div className="projeto-card" key={projeto.id}>
                <h4>{projeto.nome}</h4>
                <p>{projeto.descricao}</p>
                <p>Status: {projeto.statusProjeto}</p>
                <Link to={`/clientes/${projeto.clienteId}/projetos/${projeto.id}/atividades`} className="detalhes-link">
                  Ver Detalhes
                </Link>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProjetoList;
