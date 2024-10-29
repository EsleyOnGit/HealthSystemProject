import { Calendar, User, Star, ChevronDown } from 'lucide-react';
import user from '../assets/user.png'

const AppointmentCard = ({ specialty, date, time, doctor, rating }) => (
  <div className="appointment-card">
    <div className="appointment-header">
      <h3>{specialty}</h3>
      <ChevronDown />
    </div>
    <div className="appointment-detail">
      <Calendar className="icon" />
      <span>{date}, {time}</span>
    </div>
    <div className="appointment-detail">
      <User className="icon" />
      <span>{doctor}</span>
    </div>
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'} />
      ))}
      <span>{rating}</span>
    </div>
  </div>
);

const MedicalAppointmentScheduler = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Menu</h2>
        <nav>
          <ul>
            {['Home', 'Agendamentos', 'Resultados', 'Noticias', 'Avaliações'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <button className="logout-button">
          <span>Sair</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="main-content">
        <header>
          <h1>Consultas</h1>
          <div className="header-buttons">
            <button>Exames</button>
            <button>Cirurgias</button>
            <div className="user-icon">
              <img src={user || <User />} alt="imagem do usuário" />
            </div>
          </div>
        </header>

        <div className="appointments-grid">
          <AppointmentCard 
            specialty="Clínico Geral" 
            date="18 SET" 
            time="9:00" 
            doctor="Alex Mattos" 
            rating={4.8} 
          />
          <AppointmentCard 
            specialty="Gastrologista" 
            date="12 ABR" 
            time="10:00" 
            doctor="Luis Anjos" 
            rating={4.5} 
          />
          <AppointmentCard 
            specialty="Oftalmologista" 
            date="20 MAI" 
            time="14:00" 
            doctor="Alice Rios" 
            rating={4.6} 
          />
          <AppointmentCard 
            specialty="Clínico Geral" 
            date="18" 
            time="14:00" 
            doctor="Ricardo Nunes" 
            rating={4.8} 
          />
        </div>

        <button className="schedule-button">Agendar</button>
      </div>
    </div>
  );
};

const styles = `
  .app-container {
    display: flex;
    height: 100vh;
    background-color: #DFD9F1;
  }

  .sidebar {
    width: 250px;
    background-color: #DFD9F1;
    color: white;
    padding: 24px;
  }

  .sidebar h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    padding: 8px 16px;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .sidebar li:hover {
    background-color: #4338ca;
    border-radius: 4px;
    color: #DFD9F1;
  }

  .logout-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 32px;
  }

  .logout-button svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }

  .main-content {
    flex: 1;
    padding: 32px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  header h1 {
    font-size: 24px;
    font-weight: bold;
    color: #4f46e5;
  }

  .header-buttons {
    display: flex;
    gap: 16px;
  }

  .header-buttons button {
    padding: 8px 16px;
    background-color: white;
    color: #4f46e5;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
  }

  .user-icon {
    width: 40px;
    height: 40px;
    background-color: #4f46e5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .user-icon img{
    width: 4.5rem;
    height:4.5rem;
    border-radius: 50%;

  }

  .user-icon svg {
    color: white;
  }

  .appointments-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .appointment-card {
    background-color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .appointment-card:hover {
    background-color: #4037A0;
    border-radius: 8px;
    padding: 16px;
    color: #DFD9F1;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .appointment-card:hover h3{
    color: #DFD9F1
  }

  .appointment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .appointment-header h3 {
    font-size: 18px;
    font-weight: 600;
    color: #4f46e5;
  }

  .appointment-detail {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .appointment-detail .icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    color: #4f46e5;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .rating .star-filled {
    color: #fbbf24;
  }

  .rating .star-empty {
    color: #d1d5db;
  }

  .rating span {
    margin-left: 4px;
    font-size: 14px;
    color: #6b7280;
  }

  .schedule-button {
    margin-top: 32px;
    padding: 12px 24px;
    background-color: #4f46e5;
    color: white;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    font-size: 16px;
  }

  .schedule-button:hover {
    background-color: #4338ca;
  }
`;

const StyleSheet = () => (
  <style>{styles}</style>
);

const App = () => (
  <>
    <StyleSheet />
    <MedicalAppointmentScheduler />
  </>
);

export default App;