import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ClienteList from './components/Clientes/ClienteList';
import CreateCliente from './components/Clientes/CreateCliente';
import ProjetoList from './components/Projetos/ProjetoList';
import CreateProjeto from './components/Projetos/CreateProjeto';
import AtividadeList from './components/Atividades/AtividadeList';
import CreateAtividade from './components/Atividades/CreateAtividade';
import './components/Clientes/ClienteManagement.css';

const App = () => {
  return (
    <Router>
      <div className="cliente-management">
        <h2>Gestão de Clientes</h2>

        <div className="navigation-links">
          <Link to="/clientes">Clientes</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/atividades">Atividades</Link>
        </div>

        <Routes>
          <Route path="/clientes" element={<ClienteList />} />
          <Route path="/clientes/criar" element={<CreateCliente />} />
          <Route path="/clientes/:clienteId/projetos" element={<ProjetoList />} />
          <Route path="/clientes/:clienteId/projetos/criar" element={<CreateProjeto />} />
          <Route path="/clientes/:clienteId/projetos/:projetoId/atividades" element={<AtividadeList />} />
          <Route path="/clientes/:clienteId/projetos/:projetoId/atividades/criar" element={<CreateAtividade />} />
          <Route path="/projetos" element={<ProjetoList />} /> {/* Rota para exibir todos os projetos */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
