// src/App.js
import React, { useState } from 'react';
import './App.css';
import ClienteList from './components/ClienteList';
import CreateCliente from './components/CreateCliente';
import ProjetoList from './components/ProjetoList';
import CreateProjeto from './components/CreateProjeto';
import AtividadeList from './components/AtividadeList';
import CreateAtividade from './components/CreateAtividade';

const App = () => {
  const [clientes, setClientes] = useState([]);
  const [selectedClienteId, setSelectedClienteId] = useState(null);
  const [selectedProjetoId, setSelectedProjetoId] = useState(null);

  return (
    <div className="container">
      <h1>Gestão de Clientes</h1>
      <CreateCliente onCreate={setClientes} />
      {/* Passando corretamente o estado de clientes */}
      <ClienteList clientes={clientes} setSelectedClienteId={setSelectedClienteId} />

      {selectedClienteId && (
        <div>
          <ProjetoList clienteId={selectedClienteId} setSelectedProjetoId={setSelectedProjetoId} />
          <CreateProjeto clienteId={selectedClienteId} />

          {selectedProjetoId && (
            <div>
              <AtividadeList clienteId={selectedClienteId} projetoId={selectedProjetoId} />
              <CreateAtividade clienteId={selectedClienteId} projetoId={selectedProjetoId} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
