// src/pages/Technologies.jsx
import React from "react";

function Technologies() {
  const stack = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "OAuth2",
    "MySQL",
    "Maven",
    "Postman",
    "React",
    "TailwindCSS",
    "Git & GitHub",
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-6 text-white">Tecnologías</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
        {stack.map((tech, index) => (
          <li
            key={index}
            className="bg-gray-700 p-4 rounded-lg text-center shadow-md"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Technologies;
