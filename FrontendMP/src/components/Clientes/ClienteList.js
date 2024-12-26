import React from 'react';

const ClienteList = ({ clientes }) => {
  return (
    <div className="clientes-list">
      <h2>Lista de Clientes</h2>
      <div className="clientes-container">
        {clientes.length === 0 ? (
          <p>Nenhum cliente encontrado.</p>
        ) : (
          clientes.map((cliente) => (
            <div key={cliente.id} className="cliente-card">
              <h3>{cliente.nome}</h3>
              <p>{cliente.email}</p>
              <p>{cliente.telefone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClienteList;
