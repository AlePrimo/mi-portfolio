
import React from 'react';
import './App.css';

const proyectos = [
  {
    id: 1,
    nombre: "Proyecto Uno",
    descripcion: "Descripción breve del proyecto uno.",
    url: "https://github.com/AlePrimo/proyecto-uno",
    imagen: "https://via.placeholder.com/300x180.png?text=Proyecto+Uno"
  },
  {
    id: 2,
    nombre: "Proyecto Dos",
    descripcion: "Descripción breve del proyecto dos.",
    url: "https://github.com/AlePrimo/proyecto-dos",
    imagen: "https://via.placeholder.com/300x180.png?text=Proyecto+Dos"
  },
  // ... más proyectos
];

const tecnologias = [
  { id: 1, nombre: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { id: 2, nombre: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { id: 3, nombre: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  // ... más tecnologías
];

function ProjectCard({ proyecto }) {
  return (
    <div className="card proyecto-card">
      <img src={proyecto.imagen} alt={proyecto.nombre} />
      <h3>{proyecto.nombre}</h3>
      <p>{proyecto.descripcion}</p>
      <a href={proyecto.url} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
    </div>
  );
}

function TechCard({ tecnologia }) {
  return (
    <div className="card tech-card">
      <img src={tecnologia.logo} alt={tecnologia.nombre} />
      <p>{tecnologia.nombre}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Presentación */}
      <header>
        <h1>Hola, mi nombre es Alejandro Carullo</h1>
        <p>Con muchos años de trabajo dedicados a Logistica y Distribucion , atencion al cliente y mantenimiento general , gracias a Argentina Programa 4.0
            donde aprendi desde los fundamentos basicos hasta la creacion de una app funcional , todo en lenguaje Java , consegui mi certificado de Desarrollador Java Full Stack.
             Luego de esta experiencia decidi enfocarme en el desarrollo BackEnd aprendiendo de forma autodidacta las tecnologias necesarias.</p>
      </header>

      {/* Proyectos */}
      <section id="proyectos">
        <h2>Proyectos Destacados</h2>
        <div className="grid proyectos-grid">
          {proyectos.map(proyecto => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias">
        <h2>Tecnologías</h2>
        <div className="grid tecnologias-grid">
          {tecnologias.map(tecnologia => (
            <TechCard key={tecnologia.id} tecnologia={tecnologia} />
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <h2>Contacto</h2>
        <p>¿Quieres trabajar conmigo? ¡Hablemos!</p>
        <p>Email: <a href="email:alejandrojuliancarullo@gmail.com">alejandrojuliancarullo@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alejandro-carullo-java-dev-jr/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alejandro-carullo-java-dev-jr/</a></p>
      </section>
    </div>
  );
}

export default App;