import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="shark shark-1"></div>
      <div className="shark shark-2"></div>
      <div className="shark shark-3"></div>
      
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="pitch-card">
        <h1 className="pitch-title">Shark Tank: Proyecto Interactivo</h1>
        
        <p className="pitch-description">
          Aquí va la descripción del proyecto. Cámbiala desde el código. 
          Bienvenido a una experiencia única donde las mejores ideas cobran vida. 
          Prepárate para sumergirte en el mundo de los negocios más competitivo 
          y descubre si tu propuesta tiene lo necesario para conquistar a los tiburones.
        </p>

        <p className="pitch-subtitle">
          Pronto podrás acceder a una simulación interactiva completa
        </p>

        <Link to="/game" className="cta-button">
          <span className="button-text">Entrar al Tanque</span>
          <span className="button-glow"></span>
        </Link>
      </div>

      <Link to="/docs" className="info-button">
        <span className="info-icon">ℹ️</span>
        <span className="info-text">Click para más información</span>
      </Link>
    </div>
  );
};

export default HomePage;