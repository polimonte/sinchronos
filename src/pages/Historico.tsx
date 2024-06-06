import React from 'react';
import './Historico.css'; 

const Historico: React.FC = () => {
  const dados = Array.from({ length: 3 }, (_, i) => ({
    data: `2024-06-${String(i + 1).padStart(2, '0')}`,
    ponto: Math.random() > 0.2, 
  }));

  return (
    <div className='historico'>
      <h1>Histórico</h1>
      <div className='historico-lista'>
        {dados.map((item, index) => (
          <div key={index} className='historico-dados'>
            Data: {item.data}, Ponto: {item.ponto ? 'Batido' : 'Não batido'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historico;
