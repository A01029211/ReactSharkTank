import { Link } from 'react-router-dom';
import '../styles/DocsPage.css';

const DocsPage = () => {
  return (
    <div className="docs-container">
      <Link to="/" className="back-button">
        <span className="back-arrow">←</span>
        <span>Volver al inicio</span>
      </Link>

      <div className="docs-content">
        <h1 className="docs-title">Documentación del Proyecto</h1>
        
        <div className="docs-text">
          <h2>Introducción</h2>
          <p>
            Aquí va toda tu documentación. Este es un espacio amplio donde puedes escribir 
            todo lo que necesites sobre tu proyecto Shark Tank.
          </p>

          <h2>Objetivo del Proyecto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>Características Principales</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>Tecnologías Utilizadas</h2>
          <ul>
            <li>React con TypeScript</li>
            <li>Vite como bundler</li>
            <li>React Router para navegación</li>
            <li>Unity WebGL para el juego</li>
            <li>CSS puro para estilos</li>
          </ul>

          <h2>Instrucciones de Uso</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <h2>Equipo de Desarrollo</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <h2>Conclusiones</h2>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
            aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;