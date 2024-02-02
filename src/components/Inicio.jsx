// Inicio.jsx
import React, { useEffect, useRef, useState } from 'react';
import Section from './Section.jsx';

const Inicio = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);


  const scrollToNextSection = () => {
    // Implementa la lógica para desplazar la página hacia la siguiente sección
    // Por ejemplo, podrías usar el método `scrollIntoView` en el elemento deseado.
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar la suscripción al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  
  return (
    <Section
    backgroundImage={isSmallScreen ? 'FONDOPAGINAPRINCIPALRESPONSIVE.png' : 'FONDOCOMPONENTEPRINCIPAL.png'}
  >
      <section className="section" id="inicio">
        <section className="section">
          <div className="logoprincipal">
          </div>
        </section>
    
      </section>


      <div
        onClick={scrollToNextSection}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/4 cursor-pointer animate-bounce text-orange-400"
      > 

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="4 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

       </Section>
  );
};

export default Inicio;
