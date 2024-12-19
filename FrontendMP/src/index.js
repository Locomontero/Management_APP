import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // Pega o elemento root do HTML
root.render(
  <React.StrictMode>
    <App /> {/* O componente App é o ponto de entrada do seu aplicativo */}
  </React.StrictMode>
);
