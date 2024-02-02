import React, { useEffect, useState } from 'react';
import Section from './Section';

const SobreMi = () => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section
      backgroundImage={isResponsive ? 'PAGINA2RESPONSIVE.png' : 'FONDOPAGINA2.png'}
    >
      <section
        id="que-hacemos-section"
        className={`flex items-center text-white py-12 px-6 md:px-12 ${
          isResponsive ? 'flex-wrap-reverse' : ''
        }`}
      >
        <div className={`w-full md:w-2/3 que-hacemos-text text-left ${isResponsive ? 'md:text-center' : ''}`}>
          <p>
          </p>
        </div>
        <div className={`w-full md:w-1/3 que-hacemos-image ${isResponsive ? 'mt-6 md:mt-0 ml-0 md:ml-6' : 'ml-6'}`}>
        </div>
      </section>

<div
        style={{
          position: 'absolute', // Cambiado de absolute a fixed
          bottom: isResponsive ? '1rem' : '0', // Ajustado el valor de bottom
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '2',
          display: 'flex',
          gap: '1rem',
          marginBottom: isResponsive ? '8rem' : '5rem', // Ajustado el valor de bottom
        }}
      >
        <a
          id='botonresponsive'
          className="border-[2px] border-gray-600 bg-gray-200 text-sm rounded font-medium text-white px-1 sm:px-8 py-1 inline-block transition-colors hover:border-gray-200 hover:bg-orange-500"
          href="#"
        >
          Saber más
        </a>
      </div>
      
    </Section>
  );
};

export default SobreMi;
