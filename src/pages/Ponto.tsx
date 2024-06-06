import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Ponto.css';

const Ponto: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nomeCompleto } = location.state || { nomeCompleto: '' };
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
  } = useStopwatch({ autoStart: false });

  const registrarPonto = () => {
    if (!isRunning) {
      start();
    } else {
      pause();
    }
  };

  const corrigirPonto = () => {
    navigate('/corrigir');
  };

  return (
    <div className='ponto-container'>
      <div className='ponto-header'>
        <h1 className='ponto-title'>Bom dia, {nomeCompleto}! ☺</h1>
        <div>
          <h4 className='ponto-date'>Sexta-feira,</h4>
          <h4 className='ponto-date'>07 Junho 2024</h4>
        </div>
      </div>
      <div className='ponto-progress-container'>
        <div className='ponto-progress-bar' style={{ width: `${(hours / 8) * 100}%` }}></div>
        <h2 className='ponto-progress-text'>Trabalhando {hours}h {minutes}m {seconds}s</h2>
      </div>
      <h2 className='ponto-worked-hours'>Horas trabalhadas: <span>{days * 24 + hours}h</span></h2>
      <div className='ponto-buttons'>
        <button onClick={registrarPonto} className='ponto-button'>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={corrigirPonto} className='ponto-button'>
          Corrigir
        </button>
      </div>
    </div>
  );
};

export default Ponto;
