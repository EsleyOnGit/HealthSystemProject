import { Calendar, Star, ChevronUp } from 'lucide-react';
import './styles/TelaAgendamentos2.css';
import imaggastro from '../assets/image-gastro.png'
const DashboardLayout = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="menu-header">
          <h2>Menu</h2>
        </div>
        
        <nav className="menu-nav">
          <MenuItem text="Home" />
          <MenuItem text="Agendamentos" active />
          <MenuItem text="Resultados" />
          <MenuItem text="Noticias" />
          <MenuItem text="Avaliações" />
        </nav>
        
        <div className="logout-button">
          <button className="btn-ghost">
            <span>←</span> Sair
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <nav className="top-nav">
          <ul>
            <NavItem text="Consultas" active />
            <NavItem text="Exames" />
            <NavItem text="Cirurgias" />
          </ul>
        </nav>

        {/* Appointment Card */}
        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <h2>Gastrologista</h2>
              <ChevronUp />
            </div>

            <div className="appointment-date">
              <Calendar />
              <span>12 ABR, 10:00</span>
            </div>

            <div className="status-container">
              <AppointmentStatus text="2024-12-04 JULAI" />
              <AppointmentStatus text="2024-12-04_ATESTADO" />
            </div>

            <div className="doctor-info">
              <div className="doctor-profile">
                <div className="avatar">
                  <img src={imaggastro} alt="imagem do gastrologista" />
                </div>
                <div className="doctor-details">
                  <p className="doctor-name">Luis Anjos - CRM 022345</p>
                  <div className="rating-container">
                    <StarRating rating={4.5} />
                    <span className="rating-value">4.5</span>
                  </div>
                </div>
              </div>
              <span className="appointment-status"><strong>status:</strong> Consulta já realizada.</span>
            </div>
          </div>
        </div>

        {/* Schedule Button */}
        <button className="schedule-button">
          Agendar
        </button>
      </div>
    </div>
  );
};

const MenuItem = ({ text, active }) => (
  <div className={`menu-item ${active ? 'active' : ''}`}>
    <span>{text}</span>
  </div>
);

const NavItem = ({ text, active }) => (
  <li className={`nav-item ${active ? 'active' : ''}`}>
    {text}
  </li>
);

const AppointmentStatus = ({ text }) => (
  <div className="status-item">
    <span>{text}</span>
    <button className="download-button">
      Baixar aqui
    </button>
  </div>
);

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={`star ${
          i < Math.floor(rating) 
            ? 'filled' 
            : i < rating 
            ? 'half-filled' 
            : ''
        }`}
      />
    );
  }
  return <div className="star-rating">{stars}</div>;
};

export default DashboardLayout;