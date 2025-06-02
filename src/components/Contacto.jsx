// src/pages/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-semibold mb-4 text-white">Contacto</h2>
      <p className="text-gray-300">📧 alejandro.carullo@gmail.com</p>
      <p className="text-gray-300">💼 <a href="https://www.linkedin.com/in/alejandro-carullo-java-dev-jr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Mi LinkedIn</a></p>
      <p className="text-gray-300 mt-2">¡Estoy abierto a oportunidades laborales y colaboraciones!</p>
    </section>
  );
}

export default Contact;
