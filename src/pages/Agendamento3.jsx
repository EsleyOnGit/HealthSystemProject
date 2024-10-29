import { ChevronLeft, Check } from 'lucide-react';
import { useState } from 'react';
import './styles/Agendamento3.css';
import medica from '../assets/medica.png'

const Agendamento3 = () => {
  const [selectedTime, setSelectedTime] = useState('9:00');
  const [selectedDate, setSelectedDate] = useState('12');

  const dates = [
    { day: '10', month: 'OUT' },
    { day: '11', month: 'OUT' },
    { day: '12', month: 'OUT' },
    { day: '13', month: 'OUT' },
    { day: '14', month: 'OUT' },
  ];

  const times = ['9:00', '11:00', '13:00', '14:00', '16:00'];

  return (
    <div className="scheduler-container">
      <div className="scheduler-grid">
        {/* Left Column */}
        <div className="scheduler-column">
          <div className="header">
            <ChevronLeft className="icon" />
            <h1>Agende sua consulta</h1>
          </div>

          {/* Consultation Type */}
          <div className="input-group">
            <label>Selecione o tipo</label>
            <select className="select-input">
              <option>Consulta</option>
            </select>
          </div>

          {/* Medical Area */}
          <div className="input-group">
            <label>Selecione a área médica</label>
            <select className="select-input">
              <option>Nutricionista</option>
            </select>
          </div>

          {/* Date Selection */}
          <div className="input-group">
            <label>Selecione a data</label>
            <div className="date-grid">
              {dates.map(({ day, month }) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`date-button ${selectedDate === day ? 'selected' : ''}`}
                >
                  <div className="month">{month}</div>
                  <div className="day">{day}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="input-group">
            <label>Selecione o horário</label>
            <div className="time-grid">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="scheduler-column">
          <div className="doctors-header">
            <h2>Médicos disponíveis</h2>
            <ChevronLeft className="icon rotate" />
          </div>

          {/* Doctor Card */}
          <div className="doctor-card">
            <img
              src={medica}
              alt="Médica"
              className="doctor-image"
            />
            <div className="doctor-info">
              <h3>Jéssica Arantes Camargo</h3>
              <div className="crm">CRM: 028137 - ESPECIALISTA</div>
              <div className="rating">
                {'★'.repeat(4)}{'☆'.repeat(1)} 4.5
              </div>
            </div>
            <Check className="check-icon" />
          </div>

          {/* Appointment Summary */}
          <div className="summary-card">
            <div className="summary-header">
              <div className="plus-icon">
                <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3>{selectedDate} - {selectedTime}</h3>
            </div>

            <div className="summary-doctor">
              <h4>Médicos</h4>
              <div className="doctor-info-summary">
                <img
                  src={medica}
                  alt="Doctor"
                  className="doctor-image"
                />
                <div className="doctor-details">
                  <h3>Jéssica Arantes Camargo</h3>
                  <div className="crm">CRM: 028137 - ESPECIALISTA</div>
                  <div className="rating">
                    {'★'.repeat(4)}{'☆'.repeat(1)} 4.5
                  </div>
                </div>
                <Check className="check-icon" />
              </div>
            </div>

            <button className="confirm-button">
              Confirmar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendamento3;
