
import React from 'react';
import './App.css';

const proyectos = [
  {
    id: 1,
    nombre: "TaskManagerApp",
    descripcion: "Aplicación para gestionar tareas, desarrollada con Spring Boot y persistencia en base de datos.",
    url: "https://github.com/AlePrimo/TaskManagerApp",
    imagen: "https://via.placeholder.com/300x180.png?text=TaskManagerApp"
  },
  {
    id: 2,
    nombre: "SecureNotesApp",
    descripcion: "Aplicación para guardar notas personales aseguradas con Spring Security.",
    url: "https://github.com/AlePrimo/SecureNotesApp",
    imagen: "https://via.placeholder.com/300x180.png?text=SecureNotesApp"
  },
  {
    id: 3,
    nombre: "SpringBoot-Rest",
    descripcion: "Proyecto demostrativo de una API RESTful utilizando Spring Boot.",
    url: "https://github.com/AlePrimo/SpringBoot-Rest",
    imagen: "https://via.placeholder.com/300x180.png?text=SpringBoot-Rest"
  },
  {
    id: 4,
    nombre: "Spring-Security-App",
    descripcion: "Práctica de Spring Security con autorización basada en roles.",
    url: "https://github.com/AlePrimo/Spring-Security-App",
    imagen: "https://via.placeholder.com/300x180.png?text=Spring-Security-App"
  },
  {
    id: 5,
    nombre: "Microservicios",
    descripcion: "Implementación de una arquitectura de microservicios en Java.",
    url: "https://github.com/AlePrimo/Microservicios",
    imagen: "https://via.placeholder.com/300x180.png?text=Microservicios"
  },
  {
    id: 6,
    nombre: "JAVA-Streams",
    descripcion: "Ejemplos y prácticas sobre el uso de Streams en Java.",
    url: "https://github.com/AlePrimo/JAVA-Streams",
    imagen: "https://via.placeholder.com/300x180.png?text=JAVA-Streams"
  },
  {
    id: 7,
    nombre: "HTML-CSS-Dalto",
    descripcion: "Prácticas realizadas durante el curso de HTML y CSS de Lucas Dalto.",
    url: "https://github.com/AlePrimo/HTML-CSS-Dalto",
    imagen: "https://via.placeholder.com/300x180.png?text=HTML-CSS-Dalto"
  },
  {
    id: 8,
    nombre: "VSC-Dalto",
    descripcion: "Configuraciones y ejercicios realizados en Visual Studio Code durante el curso de Dalto.",
    url: "https://github.com/AlePrimo/Visual-Studio-Code",
    imagen: "https://via.placeholder.com/300x180.png?text=VSC-Dalto"
  }
];


const tecnologias = [
  { id: 1, nombre: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { id: 2, nombre: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { id: 3, nombre: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { id: 4, nombre: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { id: 5, nombre: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { id: 6, nombre: "Hibernate", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
];

function ProjectCard({ proyecto }) {
  return (
    <div className="card proyecto-card">
      <h3 className="proyecto-nombre">{proyecto.nombre}</h3>

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