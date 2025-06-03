import React from 'react';

const certificados = [

  {
    nombre: 'Introducción a la Programación',
    descripcion: 'Fundamentos de programación desde cero.',
    archivo: 'Certificado Introduccion Programacion.pdf',
  },
  {
    nombre: 'Programando en Java',
    descripcion: 'Curso práctico de Java orientado a objetos.',
    archivo: 'Certificado de aprobacion Programando en Java.pdf',
  },
  {
      nombre: 'Desarrollador JAVA Full Stack ULP',
      descripcion: 'Curso completo de desarrollo Java Full Stack.',
      archivo: 'Certificado Aprobacion Desarrollador JAVA Full Stack.pdf',
    },
  {
    nombre: 'Desarrollador Java Intermedio UTN',
    descripcion: 'Certificado general de finalización de curso.',
    archivo: 'Certificado_de_finalizacion_curso.pdf',
  }

];

const Certificados = () => {
  return (
    <section id="certificados">
      <h2>Certificados</h2>
      <div className="grid proyectos-grid">
        {certificados.map((cert, index) => (
          <div className="card proyecto-card" key={index}>
            <h3>{cert.nombre}</h3>
            <p>{cert.descripcion}</p>
            <a
              href={`/certificados/${cert.archivo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver certificado
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificados;
