import React from 'react';
import ComponenteMenu from '../shared/components/Menu';
import Notificacao from '../shared/components/Notificacao';
import './Notificacoes.css';

const Notificacoes: React.FC = () => {

  const notifications = [
    { titulo: 'Notificação 1', texto: 'Texto da notificação 1' },
    { titulo: 'Notificação 2', texto: 'Texto da notificação 2' },
    { titulo: 'Notificação 3', texto: 'Texto da notificação 3' },
  ];

return (
  <div>
    <div className='barra-menu'>
      <h1>Notificações</h1>
      <ComponenteMenu classe='menu' />
    </div>
    <div className='notificacoes'>
      <Notificacao notifications={notifications} />
    </div>
  </div>

);
};

export default Notificacoes;
