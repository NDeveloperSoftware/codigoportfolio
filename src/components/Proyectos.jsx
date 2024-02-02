import React, { useEffect, useState } from 'react';
import Section from './Section.jsx';
import Carousel from '../components/Carousel';

const Proyectos = () => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 768);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [proyectosOpen, setProyectosOpen] = useState(false);

  const handleProyectosClick = () => {
    setProyectosOpen(!proyectosOpen);
  };

  const handleProyectosClose = () => {
    setProyectosOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const backgroundImage = proyectosOpen
  ? 'PROYECTOS.png' // Usar este fondo cuando el Carousel está abierto
  : isSmallScreen
  ? 'FONDOPAGINA3RESPONSIVE.png'
  : 'FONDOPAGINA3.png';

  return (
    <Section backgroundImage={backgroundImage}>

<section         id="proyectos-section">
      <div
        style={{
          position: 'absolute', // Cambiado de absolute a fixed
          bottom: isResponsive ? '1rem' : '0', // Ajustado el valor de bottom
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '99999',
          display: 'flex',
          gap: '1rem',
          marginBottom: isResponsive ? '10rem' : '5rem', // Ajustado el valor de bottom
        }}
      >
        <button
          id='botonresponsive'
          className="border-[2px] border-gray-600 bg-gray-200 text-sm rounded font-medium text-white px-1 sm:px-8 py-1 inline-block transition-colors hover:border-gray-200 hover:bg-orange-500"
          onClick={handleProyectosClick}
          >
          {proyectosOpen  ? 'Cerrar Proyectos' : 'Ver Proyectos'}
        </button>
      </div>
      </section>
      {proyectosOpen && <Carousel handleProyectosClose={handleProyectosClose} />}

    </Section>
  );
};

export default Proyectos;
