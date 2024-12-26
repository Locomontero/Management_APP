
import React, { useState } from 'react';
import './App.css';
import ClienteList from './components/Clientes/ClienteList';
import CreateCliente from './components/Clientes/CreateCliente';
import ProjetoList from './components/Projetos/ProjetoList';
import CreateProjeto from './components/Projetos/CreateProjeto';
import AtividadeList from './components/Atividades/AtividadeList';
import CreateAtividade from './components/Atividades/CreateAtividade';

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
