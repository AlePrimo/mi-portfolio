// src/pages/Projects.jsx
import React from "react";

function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-6 text-white">Proyectos Destacados</h2>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
        <h3 className="text-xl font-bold text-white">JobFlowApp</h3>
        <p className="text-gray-300 mt-2">
          Plataforma de gestión de búsqueda de empleo , carga y descarga de CVs, roles diferenciados para usuarios y compañías, validaciones, documentación Swagger, y almacenamiento en MySQL.
        </p>
        <a
          href="https://github.com/AlePrimo/JobFlowApp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-400 hover:underline"
        >
          Ver en GitHub
        </a>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-white">FavsMoviesApp</h3>
        <p className="text-gray-300 mt-2">
          Aplicación en React para gestionar películas favoritas con CRUD completo, formularios, búsqueda, y diseño responsive personalizado con imagen de fondo temática.
        </p>
        <a
          href="https://github.com/AlePrimo/FavsMoviesApp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-400 hover:underline"
        >
          Ver en GitHub
        </a>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
        <h3 className="text-xl font-bold text-white">Nova Store App</h3>
        <p className="text-gray-300 mt-2">
          Backend completo para e-commerce desarrollado con Spring Boot. Incluye autenticación JWT, gestión de productos, categorías, pedidos, pagos, cupones, wishlist, reseñas y carrito de compras, con documentación Swagger y MySQL.
        </p>
        <a
          href="https://github.com/AlePrimo/Nova-Store-App"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-400 hover:underline"
        >
          Ver en GitHub
        </a>
      </div>



    </section>
  );
}

export default Projects;
