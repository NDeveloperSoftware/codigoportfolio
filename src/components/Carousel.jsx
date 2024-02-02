import React, { useEffect, useRef, useState } from 'react';
import '../Carousel.css';
import Section from './Section';

const Carousel = ({ handleProyectosClose }) => {
  const [isManualMove, setIsManualMove] = useState(false);

  useEffect(() => {
    // Add or remove 'overflow-hidden' class based on the component visibility
    const body = document.body;
    body.classList.add('overflow-hidden');

    // Cleanup on component unmount
    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, []);

  const counterRef = useRef(0);
  const widthImg = 100 / 7; // Ajusta esto según la cantidad real de secciones del slider

  const moveToLeft = () => {
    setIsManualMove(true);
    counterRef.current = (counterRef.current - 1 + 8) % 8;
    moverSlider();
  };

  const moveToRight = () => {
    setIsManualMove(true);
    counterRef.current = (counterRef.current + 1) % 8;
    moverSlider();
  };

  const moverSlider = () => {
    const slider = document.querySelector('.carruseles');
    const operacion = widthImg * counterRef.current;

    slider.style.transition = 'transform 0.6s ease';
    slider.style.transform = `translateX(-${operacion}%)`;

    // Reiniciar el intervalo si el movimiento es manual
    if (isManualMove) {
      resetInterval();
      setIsManualMove(false);
    }
  };

  const resetInterval = () => {
    clearInterval(intervalIdRef.current);
    startInterval();
  };

  const startInterval = () => {
    intervalIdRef.current = setInterval(() => {
      moveToRight();
    }, 4000);
  };

  useEffect(() => {
    const slider = document.querySelector('.carruseles');

    const handleTransitionEnd = () => {
      // Restablecer la transición y mover al primer elemento si llegamos al final
      if (counterRef.current === 8) {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        // Forzar un reflow para aplicar los cambios antes de restaurar la transición
        slider.offsetHeight;
        slider.style.transition = 'transform 0.4s ease';
      }
    };

    slider.addEventListener('transitionend', handleTransitionEnd);

    // Limpiar el event listener al desmontar el componente
    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, []);

  useEffect(() => {
    moverSlider();
    startInterval();

    return () => clearInterval(intervalIdRef.current);
  }, []);

  const intervalIdRef = useRef(null);

  const imageUrls = [
    "https://portfolio2023ndev.vercel.app/",
    "https://ndevpeliculas.vercel.app/",
    "https://gyee.vercel.app/",
    "#",
    "https://github.com/NDeveloperSoftware/APIREST-MONGODB-JWT-LOGIN-SYSTEM",
    "https://github.com/NDeveloperSoftware/SISTEMA-DE-USUARIOS-CONSULTORA-LYTHEM",
    "https://nike-shop-ndev.vercel.app/",
    "",
  ];

  return (
    <Section backgroundImage="PROYECTOS.png">
      <div className="web-background">
        <div className="container">
          <div className="container-carousel">
            <div className="carruseles">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <section key={index} className="slider-section">
                  <a href={imageUrls[index - 1]}>
                    <img src={`${index}.png`} alt={`Description ${index}`} />
                  </a>
                </section>
              ))}
            </div>
          </div>
          <div className="btn-right" onClick={moveToRight}>
            <i className='bx bx-chevron-right'></i>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Carousel;
