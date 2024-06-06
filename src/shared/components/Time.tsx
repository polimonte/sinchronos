import React, { useEffect, useState } from 'react';
import './MapTime.css'

const CurrentDate: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className='content'>
      <div className='date'>{formatDate(currentDateTime)}</div>
      <div className='address'>Av. República do Líbano, 251 Riomar Trade Center Torre 2, 29º andar - Pina, Recife - PE</div>
      <div className='time'>{formatTime(currentDateTime)}</div>
      <button className="confirm-button">Confirmar Ponto</button>
    </div>
  );
};

export default CurrentDate;
