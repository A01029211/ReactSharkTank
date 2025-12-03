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
          Tiburoncines es un sistema multiagente desarrollado para simular el proceso completo 
          de evaluación de propuestas de negocios, inspirado en el programa de televisión Shark Tank. 
          El proyecto implementa un análisis profundo que va más allá de descripciones superficiales, 
          incorporando criterios objetivos y medibles como tamaño de mercado, viabilidad técnica, 
          modelo financiero, madurez del producto, riesgo asociado y grado de innovación.
        </p>
        <p>
          El sistema cuenta con tres agentes autónomos: un emprendedor que presenta su proyecto 
          y dos jueces con perfiles distintivos (uno conservador enfocado en finanzas y uno innovador 
          enfocado en disrupción) que evalúan la propuesta mediante interacciones dinámicas en un 
          ambiente 3D desarrollado en Unity.
        </p>

        <h2>Equipo de Desarrollo - Tiburoncines</h2>
        <p>
          <strong>Santiago Calvo Lomelí (A00837578)</strong> - Desarrollador Unity<br/>
          <strong>Alejandro Lopez Gonzalez (A01571459)</strong> - Desarrollador Unity<br/>
          <strong>David Salomon Nava Nungary (A01286286)</strong> - Desarrollador Agente / Scrum Master<br/>
          <strong>Jaime Gámez Gómez-Rubalcava (A01410192)</strong> - Desarrollador Python<br/>
          <strong>Santiago Cordova Molina (A01029211)</strong> - Desarrollador Python
        </p>

        <h2>Contexto y Problema</h2>
        <p>
          El reto consiste en desarrollar un sistema multiagente capaz de reproducir un proceso 
          completo de evaluación de propuestas de negocios. Los participantes diseñan un agente 
          juez que analiza propuestas generadas por un agente emprendedor usando parámetros como 
          tamaño del mercado, viabilidad técnica, modelo financiero, madurez del producto, riesgo 
          asociado y grado de innovación.
        </p>
        <p>
          Desde el punto de vista técnico, el proyecto exige la construcción de un sistema 
          distribuido donde todos los agentes operan de forma autónoma, mantienen historiales 
          independientes y se comunican usando un canal público generado con Ngrok. Esta 
          arquitectura permite simular interacciones sincrónicas y escenarios realistas de 
          negociación, reproduciendo características clave de sistemas de decisión automatizados.
        </p>

        <h2>Objetivos del Proyecto</h2>
        
        <h3>Agente Juez</h3>
        <p>
          Desarrollar un agente juez capaz de evaluar al menos 3 propuestas de negocio utilizando 
          un sistema de puntuación de 0-10 en 5 categorías: innovación, mercado, sostenibilidad, 
          riesgos y rentabilidad. El agente genera una decisión (invertir/no invertir) y 
          retroalimentación con al menos 3 argumentos verificables por propuesta, con una precisión 
          mínima del 90% de consistencia entre criterios y decisión tomada.
        </p>

        <h3>Agente Emprendedor</h3>
        <p>
          Implementar un agente emprendedor capaz de generar al menos 3 propuestas de negocio que 
          incluyan resumen ejecutivo (mínimo 150 palabras), modelo de negocio y estrategia de 
          monetización. El agente responde correctamente al menos 80% de las preguntas del juez y 
          ajusta su pitch mediante reformulaciones con base en prompts recibidos.
        </p>

        <h3>Ambiente 3D</h3>
        <p>
          Crear un ambiente 3D en Unity que contenga un escenario con iluminación profesional, 
          una cámara dinámica con al menos 2 posiciones de enfoque automático, y 2 personajes 
          animados con al menos 4 gestos corporales distintos (neutral, interesado, dudoso, 
          afirmativo). El entorno se ejecuta a un mínimo de 30 FPS y permite el intercambio de 
          diálogos entre agentes sin interrupción.
        </p>

        <h3>Simulación de Interacción</h3>
        <p>
          Lograr una simulación funcional donde el agente emprendedor presenta su pitch durante 
          un mínimo de 30 segundos, el juez realiza al menos 3 preguntas, y el emprendedor 
          responde en tiempo real. La interacción contiene mínimo 12 turnos de diálogo y finaliza 
          con una decisión del juez acompañada de una justificación de mínimo 120 palabras.
        </p>

        <h2>Tecnologías Utilizadas</h2>
        <ul>
          <li>Unity - Motor de desarrollo 3D para la simulación visual</li>
          <li>C# - Lenguaje de programación para scripts de Unity</li>
          <li>Python - Desarrollo de agentes inteligentes</li>
          <li>Azure OpenAI - Procesamiento de lenguaje natural y generación de diálogos</li>
          <li>Ngrok - Canal de comunicación público para agentes distribuidos</li>
          <li>Krita - Software de diseño para arte pixel art</li>
          <li>Trello - Gestión de proyecto y backlog</li>
        </ul>

        <h2>Características del Sistema Multiagente</h2>
        
        <h3>Modelo de Agentes</h3>
        <p>
          <strong>Agente Emprendedor:</strong> Actúa como presentador del proyecto con creencias 
          sobre producto, mercado objetivo, proyección de ventas y fortalezas/debilidades. Presenta 
          pitch inicial, responde preguntas con precisión, reformula argumentos al detectar dudas 
          y ajusta su lenguaje según el feedback recibido.
        </p>
        <p>
          <strong>Juez 1 (Perfil Conservador):</strong> Evalúa desde una perspectiva financiera 
          y de reducción de riesgo. Formula preguntas sobre costos, ROI, sostenibilidad del flujo 
          financiero y estabilidad económica. Ajusta expectativas con base en respuestas y reconoce 
          señales de seguridad o improvisación.
        </p>
        <p>
          <strong>Juez 2 (Perfil Innovador):</strong> Analiza el potencial disruptivo, escalabilidad 
          y diferenciación en el mercado. Se enfoca en la capacidad del proyecto para crecer, innovar 
          y competir a futuro. Identifica ideas con potencial emergente y ajusta su percepción de 
          riesgo al observar respuestas técnicas.
        </p>

        <h3>Características del Entorno</h3>
        <ul>
          <li>Observable o parcialmente observable</li>
          <li>Determinista o estocástico</li>
          <li>Secuencial (no episódico)</li>
          <li>Dinámico</li>
          <li>Discreto en turnos de conversación</li>
          <li>Multiagente con interacciones cooperativas y competitivas</li>
        </ul>

        <h2>Diseño Visual y Escenario</h2>
        <p>
          La escena está pensada con un enfoque formalista, llevando el nombre "Shark Tank" al 
          siguiente nivel con una esencia ficticia donde el ambiente se desarrolla dentro de un 
          tanque de tiburones. Cada juez (tiburón) tiene su asiento, con 4-5 jueces instanciados 
          aunque solo 2 tienen funcionalidades agénticas completas. Detrás de los tiburones se 
          encuentra un tesoro que alude al gran premio esperado por los participantes.
        </p>
        <p>
          La escena inicia entrando a un tanque de tamaño humano, donde después de recorrer una 
          sección y dar vuelta a la derecha (similar al show de televisión), el participante se 
          encuentra con los jueces. El diseño utiliza arte pixel art creado en Krita, incluyendo 
          sprites personalizados para los dos jueces y el emprendedor, así como cajas de texto 
          para diálogos.
        </p>

        <h2>Componentes Principales</h2>
        <ul>
          <li><strong>DialogoManager:</strong> Script central que maneja la conversación desde la 
          UI, abre archivos JSON y coordina la presentación de sprites, posiciones de cámara y 
          textos de diálogo según el turno de cada agente.</li>
          <li><strong>Sistema de Iluminación:</strong> Lámparas de pared y mesitas con scripts 
          de iluminación dirigida para crear atmósfera profesional.</li>
          <li><strong>Mobiliario:</strong> Mesas, sillas y plantas del Unity Asset Store para 
          ambientar la sala de reunión.</li>
          <li><strong>Sprites de Personajes:</strong> Diseños pixel art originales para Tib_1, 
          Tib_2 y Emprendedor con diferentes expresiones.</li>
        </ul>

        <h2>Restricciones del Sistema</h2>
        <ul>
          <li>Todo el sistema funciona sin conexión, manteniendo coherencia y reproducibilidad</li>
          <li>Flujo de simulación único y fijo: presentación, evaluación y decisión final</li>
          <li>Los agentes generan y evalúan tres propuestas completas con estructuras predefinidas</li>
          <li>Decisiones basadas en criterios fijos con ponderaciones inalterables</li>
          <li>Diseño visual con tipografía mínima de 14pt y contraste adecuado</li>
          <li>Estructura de carpetas fija y organizada desde el inicio</li>
          <li>Interfaz adaptable a diferentes resoluciones sin perder legibilidad</li>
          <li>Sin agentes adicionales ni modificación del formato de interacción</li>
        </ul>

        <h2>Historias de Usuario</h2>
        <p>
          El proyecto incluye 12 historias de usuario principales que cubren funcionalidades como 
          carga de documentos PDF, confirmación de análisis, revisión de pitch generado, inicio 
          de simulación, visualización de interacciones entre agentes, decisiones de inversión, 
          retroalimentación de jueces, repetición de simulaciones, exportación de resultados, 
          control de elementos visuales, detención de simulación y navegación intuitiva del sistema.
        </p>

        <h2>Flujo de Interacción</h2>
        <p>
          El usuario carga un archivo PDF con información de su emprendimiento. El sistema analiza 
          el documento y genera automáticamente un pitch estructurado. El usuario inicia la 
          simulación en Unity donde observa la interacción completa en el ambiente 3D. El 
          emprendedor presenta su propuesta, los jueces formulan preguntas específicas según su 
          perfil, el emprendedor responde adaptando su discurso, y finalmente los jueces deliberan 
          y emiten decisiones justificadas de inversión con retroalimentación detallada.
        </p>

        <h2>Gestión del Proyecto</h2>
        <p>
          El proyecto se gestiona mediante metodología ágil con sprints definidos y backlog 
          organizado en Trello. La estructura permite seguimiento de tareas, asignación de 
          responsabilidades y control de avances por componente (agentes, Unity, integración).
        </p>

        <h2>Estado Actual</h2>
        <p>
          Se ha completado el modelado 3D de la sala de reunión Shark Tank con menú interactivo. 
          Los diseños de personajes y cajas de texto en pixel art están finalizados. El sistema 
          de diálogo funciona sin LLM de Azure OpenAI. El siguiente sprint se enfoca en documentar 
          la funcionalidad completa del agente e integrar el servicio de Azure OpenAI para 
          storytelling avanzado.
        </p>

        <h2>Conclusiones</h2>
        <p>
          Tiburoncines representa un sistema multiagente complejo que combina inteligencia 
          artificial, procesamiento de lenguaje natural y visualización 3D para simular un 
          proceso realista de evaluación de negocios. El proyecto demuestra la capacidad de 
          crear agentes autónomos con personalidades distintivas que interactúan de manera 
          coherente y toman decisiones fundamentadas en criterios objetivos. La arquitectura 
          distribuida y el diseño visual inmersivo proporcionan una experiencia educativa única 
          para emprendedores que desean practicar sus presentaciones y recibir retroalimentación 
          automatizada de calidad.
        </p>
      </div>
    </div>
  </div>
  );
};

export default DocsPage;