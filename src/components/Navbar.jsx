import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#presentacion">Inicio</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#tecnologias">Tecnologías</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;