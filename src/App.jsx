
import React from 'react';
import Navbar from './components/Navbar';
import Presentacion from './components/Presentacion';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';
import Contacto from './components/Contacto';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Presentacion />
      <Proyectos />
      <Tecnologias />
      <Contacto />
    </div>
  );
}

export default App;