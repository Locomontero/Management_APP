import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AtividadeList.css';

const AtividadeList = () => {
  const [atividades, setAtividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [atividade, setAtividade] = useState({
    nome: '',
    descricao: '',
  });
  const [atividadeMessage, setAtividadeMessage] = useState('');
  const [creatingAtividade, setCreatingAtividade] = useState(false);
  const { clienteId, projetoId } = useParams();

  useEffect(() => {
    const fetchAtividades = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades`
        );
        setAtividades(response.data);
      } catch (err) {
        console.error('Erro ao carregar atividades', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAtividades();
  }, [clienteId, projetoId]);

  const handleAtividadeChange = (e) => {
    const { name, value } = e.target;
    setAtividade((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAtividade = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/clientes/${clienteId}/projetos/${projetoId}/atividades`,
        atividade
      );
      setAtividadeMessage('Atividade criada com sucesso!');
      setAtividade({ nome: '', descricao: '' });
      setAtividades((prevAtividades) => [...prevAtividades, response.data]);
      setCreatingAtividade(false);
    } catch (err) {
      console.error('Erro ao criar atividade', err);
      setAtividadeMessage('Erro ao criar atividade');
    }
  };

  return (
    <div className="atividade-list">
      <h3>Atividades do Projeto</h3>
      {atividadeMessage && <p>{atividadeMessage}</p>}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div className="atividades-container">
            {atividades.length === 0 ? (
              <p>Não há atividades para este projeto.</p>
            ) : (
              atividades.map((atividade) => (
                <div key={atividade.id} className="atividade-card">
                  <h4>{atividade.nome}</h4>
                  <p>{atividade.descricao}</p>
                  <a href="#">Ver Detalhes</a>
                </div>
              ))
            )}
          </div>
          {creatingAtividade ? (
            <div className="form-criar-atividade">
              <h4>Criar Atividade</h4>
              <input
                type="text"
                name="nome"
                value={atividade.nome}
                placeholder="Nome da Atividade"
                onChange={handleAtividadeChange}
              />
              <textarea
                name="descricao"
                value={atividade.descricao}
                placeholder="Descrição da Atividade"
                onChange={handleAtividadeChange}
              />
              <button onClick={handleCreateAtividade}>Criar Atividade</button>
              <button onClick={() => setCreatingAtividade(false)}>Cancelar</button>
            </div>
          ) : (
            <button className="adicionar-atividade" onClick={() => setCreatingAtividade(true)}>
              Adicionar Atividade
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AtividadeList;
