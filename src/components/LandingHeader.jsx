// LandingHeader.jsx
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Login from '../components/Login';
import Contacto from './ContactForm';
import Menu from '../components/Menu';

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(!isOpen);
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setIsOpen(false); // Asegúrate de cerrar el componente de Login si está abierto
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleLoginClose = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.querySelectorAll('.menu-link').forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      document.querySelectorAll('.menu-link').forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      <header
        id="landing-header"
        className="py-1 px-15 flex items-center fixed top-0 w-full justify-between z-50 text-white"
        style={{ background: '#0004' }}
      >
        <div className="flex flex-grow basis-0">
            <Logo />
        </div>

        <nav className="hidden xl:block sm:hidden">
          <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-5">
            <li>
              <a
                href="#inicio"
                style={{ fontSize: '14px' }}
                className="transition-colors duration-500 text-current font-medium inline-block px-4 py-5 hover:text-orange-400 hover:border-b-2 hover:border-white-100"
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="#que-hacemos-section"
                style={{ fontSize: '14px' }}
                className="transition-colors duration-500 text-current font-medium inline-block px-4 py-5 hover:text-orange-400 hover:border-b-2 hover:border-white-100"
              >
                SOBRE MÍ
              </a>
            </li>
            <li>
              <a
                href="#proyectos-section"
                style={{ fontSize: '14px' }}
                className="transition-colors duration-500 text-current font-medium inline-block px-4 py-5 hover:text-orange-400 hover:border-b-2 hover:border-white-100"
              >
                PROYECTOS
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                style={{ fontSize: '14px' }}
                className="transition-colors duration-500 text-current font-medium inline-block px-4 py-5 hover:text-orange-400 hover:border-b-2 hover:border-white-100"
              >
                CONTACTO
              </a>
            </li>
            <li>
              <a
                href="#Tienda"
                style={{ fontSize: '14px' }}
                className="transition-colors duration-500 text-current font-medium inline-block px-4 py-5 hover:text-orange-400 hover:border-b-2 hover:border-white-100"
              >
                TIENDA
              </a>
            </li>
            <div className="hidden xl:flex">
            <button
                style={{ fontSize: '14px' }}
                className="transition-colors duration-500 text-current font-medium inline-block px-4 py-5 hover:text-orange-400 hover:border-b-2 hover:border-white-100"
                onClick={handleLoginClick}
  >
    LOGIN
  </button>
</div>
          </ul>
        </nav>

        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
            <li>
              <button

                className="xl:hidden sm:block transition-colors duration-500 text-current font-medium inline-block px-6 py-5 hover:text-red-400"
                style={{ fontSize: '26px' }} 
                onClick={handleMenuClick}
              >
            {menuOpen  ? '✕' : '☰'}
              </button>
            </li>
          </ul>
        </nav>

      </header>
      {menuOpen && <Menu menuOpen={menuOpen} handleMenuClick={handleMenuClose} handleLoginClick={handleLoginClick} />}
      {isOpen && <Login handleCloseClick={handleLoginClose} />}
    </>
  );
};

export default LandingHeader;