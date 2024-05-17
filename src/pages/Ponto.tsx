import React, { useState } from 'react';
import '../App.css';

const Ponto: React.FC = () => {
  const [horasTrabalhadas, setHorasTrabalhadas] = useState(0);

  const Ponto = () => {
    // add lógica(?)
    setHorasTrabalhadas(horasTrabalhadas + 1);
  };

  return (
    <div style={{backgroundColor: '#330A34', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{backgroundColor: '#330A34', width: '400px', padding: '40px', borderRadius: '10px'}}>
        <h1 style={{color: 'white'}}>Bom dia!</h1>
        <h3 style={{color: 'white'}}>Horas Trabalhadas: {horasTrabalhadas}</h3>
        <button onClick={Ponto} style={{backgroundColor: '#81039B', color:'white', padding: '15px', border:'none', borderRadius:'20px'}}>Registrar Ponto</button>
      </div>
    </div>
  );
};

export default Ponto
