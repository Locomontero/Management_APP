import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjetoList.css'; // Importando o CSS

const ProjetoList = ({ clienteId, setSelectedProjetoId }) => {
  const [projetos, setProjetos] = useState([]);
  const [search, setSearch] = useState('');

  // Função para carregar os projetos de um cliente com base no termo de busca
  const loadProjetos = async (searchTerm = '') => {
    try {
      const url = searchTerm
        ? `http://localhost:8080/clientes/${clienteId}/projetos?search=${searchTerm}`
        : `http://localhost:8080/clientes/${clienteId}/projetos`;
      const response = await axios.get(url);
      setProjetos(response.data);
    } catch (error) {
      console.error('Erro ao carregar os projetos:', error);
    }
  };

  // Efeito para carregar os projetos ao montar o componente
  useEffect(() => {
    if (clienteId) loadProjetos(); // Carregar projetos apenas se o clienteId estiver definido
  }, [clienteId]);

  // Função para lidar com a mudança no campo de busca
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    loadProjetos(searchTerm); // Carregar projetos com o novo termo de busca
  };

  return (
    <div className="projeto-list-container">
      <h2>Projetos do Cliente</h2>

      {/* Formulário de busca */}
      <div className="search-form">
        <label htmlFor="search">Buscar Projeto:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearchChange}
          placeholder="Digite o nome do projeto"
        />
      </div>

      {/* Lista de Projetos */}
      <div className="projetos-list">
        {projetos.length === 0 ? (
          <p>Nenhum projeto encontrado.</p>
        ) : (
          projetos.map(projeto => (
            <div key={projeto.id} className="projeto-card" onClick={() => setSelectedProjetoId(projeto.id)}>
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjetoList;
