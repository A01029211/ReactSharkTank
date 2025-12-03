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
          Este proyecto desarrolla una simulación multiagente inspirada en Shark Tank dentro 
          de un entorno 3D en Unity, donde un agente emprendedor presenta propuestas de 
          negocio y es evaluado por dos agentes jueces con perfiles distintos (conservador e innovador), 
          quienes analizan criterios como mercado, rentabilidad, innovación y riesgo para tomar una 
          decisión final de inversión, generando además retroalimentación automática basada 
          en métricas objetivas y diálogo simulado.
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