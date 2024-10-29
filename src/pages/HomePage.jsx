import { Calendar, FileText, Star, ChevronRight } from 'lucide-react';


//importar css
import './styles/HomePage.css';

//importar imagem da api
import api from '../assets/avatar-3.png'; //exemplo para tirar o erro 
import user from '../assets/avatar-4.png'; //exemplo para tirar o erro 


const HomePage = () => {
  
  return (
    <div className="dashboard">
      {/* Left Sidebar */}
      <div className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Agendamentos</a></li>
          <li><a href="#">Resultados</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Avaliações</a></li>
        </ul>
        <button className="exit-button">
          <ChevronRight size={46} />
          <span>Sair</span>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="appointments">
          <h2>Próxima(s) Consulta(s)</h2>
          <div className="appointment-card">
            <div className="appointment-header">
              <div>
                <h3>Dr. {'Alex Mattos'}</h3>
                <p>Clínico Geral</p>
              </div>
              <div className="rating">
                <div><img src={`${api || 'https://img.freepik.com/vector-gratis/icono-usuario_126283-435.jpg?size=338&ext=jpg'}`} alt="foto do médico" /></div>
                <Star size={16} fill="yellow" color="yellow" />
                <span>4.8</span>
              </div>
            </div>
            <div className="appointment-details">
              <Calendar size={16} />
              <span>18 SET, 9:00</span>
            </div>
            <div className="appointment-details">
              <FileText size={16} />
              <span>Rua da Alegria, 123</span>
            </div>
          </div>
        </div>

        <div className="results">
          <h2>Resultados Recentes</h2>
          <ul>
            <li>
              <span>10/04/08, Hemograma</span>
              <button>Baixe aqui</button>
            </li>
            <li>
              <span>30/03/08, Hemograma</span>
              <button>Baixe aqui</button>
            </li>
            <li>
              <span>20/03/08, Hemograma</span>
              <button>Baixe aqui</button>
            </li>
          </ul>
          <button className="all-results">Todos os Resultados</button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="news-sidebar">
        <div className="news-header">
          <h2>Notícias Recentes</h2>
          <div className="user-avatar">
            <img src={user || "https://img.freepik.com/vector-gratis/icono-usuario_126283-435.jpg?size=338&ext=jpg"} alt="User" />
            <label htmlFor="user">Name</label>
          </div>
        </div>
        <div className="news-items">
          {/* <div className="news-item">
            <img src="/api/placeholder/300/150" alt="Ophthalmology" />
            <h3>Mutirão da Oftalmologia</h3>
            <p>Consultas de oftalmologia gratuitas serão realizadas...</p>
            <button>Leia mais</button>
          </div>
          <div className="news-item">
            <img src="/api/placeholder/300/150" alt="MPOX" />
            <h3>MPOX - Um perigo mundial</h3>
            <p>Saiba mais sobre essa doença que tem preocupado...</p>
            <button>Leia mais</button> */}
            <div className="ajax" >
              {/* Fazer um ajax aqui */
                <iframe src="https://g1.globo.com/mundo/" style={{ height: "100vh", width: "200px" }}></iframe>
              }
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;