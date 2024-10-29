// TelaResultados.js
import { FaFileDownload } from 'react-icons/fa';
import './styles/TelaResultados.css';

const TelaResultados = () => {
  const resultados = [
    { id: 1, tipo: 'Hemograma', data: '2024-08-16' },
    { id: 2, tipo: 'Hemograma', data: '2024-08-16' },
    { id: 3, tipo: 'Bula 1', data: '2024-12-04' },
    { id: 4, tipo: 'Atestado', data: '2024-12-04' },
  ];

  return (
    <div className="resultados-container">
      <h2>Resultados Recentes</h2>
      <ul>
        {resultados.map((resultado) => (
          <li key={resultado.id}>
            <span>{resultado.data} - {resultado.tipo}</span>
            <button className="download-btn">
              <FaFileDownload /> Baixar aqui!
            </button>
          </li>
        ))}
      </ul>
      <p className="nota">Aqui estarão os resultados de suas consultas e exames. Sinta-se à vontade para baixar ou imprimir.</p>
    </div>
  );
};

export default TelaResultados;
