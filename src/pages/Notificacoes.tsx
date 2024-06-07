import React from 'react';
import './Historico.css';
import ComponenteMenu from '../shared/components/Menu';
import Notificacao from '../shared/components/Notificacao';
import './Notificacoes.css';

const Notificacoes: React.FC = () => {

  return (
    <div>
      <div className='barra-menu'>
        <h1>Notificações</h1>
        <ComponenteMenu nome="menu" classe='menu' />
      </div>
      <div className='notificacoes'>
        <Notificacao titulo='Não esqueça de bater o ponto!' texto='Hoje às 09:00!!'/>
        <Notificacao titulo='Não esqueça de bater o ponto!' texto='Hoje às 09:00!!'/>
        <Notificacao titulo='Não esqueça de bater o ponto!' texto='Hoje às 09:00!!'/>
      </div>
    </div>

  );
};

export default Notificacoes;
