import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AtividadeList.css'; // Importando o CSS

const AtividadeList = ({ clienteId, projetoId, setSelectedAtividadeId }) => {
  const [atividades, setAtividades] = useState([]);
  const [search, setSearch] = useState('');

  // Função para carregar as atividades de um projeto com base no termo de busca
  const loadAtividades = async (searchTerm = '') => {
    try {
      const url = searchTerm
        ? `http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades?search=${searchTerm}`
        : `http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades`;
      const response = await axios.get(url);
      setAtividades(response.data);
    } catch (error) {
      console.error('Erro ao carregar as atividades:', error);
    }
  };

  // Efeito para carregar as atividades ao montar o componente
  useEffect(() => {
    if (clienteId && projetoId) loadAtividades(); // Carregar atividades apenas se o clienteId e projetoId estiverem definidos
  }, [clienteId, projetoId]);

  // Função para lidar com a mudança no campo de busca
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    loadAtividades(searchTerm); // Carregar atividades com o novo termo de busca
  };

  return (
    <div className="atividade-list-container">
      <h2>Atividades do Projeto</h2>

      {/* Formulário de busca */}
      <div className="search-form">
        <label htmlFor="search">Buscar Atividade:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Digite o nome da atividade"
        />
      </div>

      {/* Lista de Atividades */}
      <div className="atividades-list">
        {atividades.length === 0 ? (
          <p>Nenhuma atividade encontrada.</p>
        ) : (
          atividades.map(atividade => (
            <div key={atividade.id} className="atividade-card" onClick={() => setSelectedAtividadeId(atividade.id)}>
              <h3>{atividade.nome}</h3>
              <p>{atividade.descricao}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AtividadeList;
