import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import './Corrigir.css';

const Corrigir: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const corrigirPonto = () => {
    atualizarHorasTrabalhadas(startDate, endDate);
    alert('Ponto corrigido com sucesso!');
    navigate('/');
    console.log(`Início: ${startDate}, Fim: ${endDate}`);
  };

  const atualizarHorasTrabalhadas = (inicio: Date, fim: Date) => {
    console.log(`Atualizando horas trabalhadas de ${inicio} até ${fim}`);
  };

  const irParaHistorico = () => {
    navigate('/historico');
  };

  return (
    <div className='corrigir-container'>
      <h1 className='corrigir-title'>Corrigir Ponto</h1>
      <div className='corrigir-content'>
        <div>
          <h4 className='corrigir-label'>Início:</h4>
          <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />
        </div>
        <div>
          <h4 className='corrigir-label'>Fim:</h4>
          <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} showTimeSelect dateFormat="Pp" />
        </div>
      </div>
      <div className='corrigir-buttons'>
        <button onClick={corrigirPonto} className='corrigir-button'>
          Corrigir
        </button>
        <button onClick={irParaHistorico} className='corrigir-button'>
          Ver Histórico
        </button>
      </div>
    </div>
  );
};

export default Corrigir;
