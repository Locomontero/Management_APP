import React, { useState } from 'react';
import axios from 'axios';

const SearchCliente = ({ setSearchResult }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/clientes?search=${search}`);
      setSearchResult(response.data); // Atualiza os resultados da pesquisa
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
      alert('Erro ao buscar cliente!');
    }
  };

  return (
    <div className="search-cliente">
      <h2>Buscar Cliente</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite o nome do cliente"
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchCliente;
