// src/App.jsx
import React from 'react';
import Layout from '../src/layouts/Layout';
import LandingHeader from '../src/components/LandingHeader';
import Inicio from '../src/components/Inicio';
import SobreMi from '../src/components/SobreMi';
import Login from './components/Login';
import Proyectos from './components/Proyectos';
import Contacto from '../src/components/ContactForm';
import FooterMenu from './components/FooterMenu';
import Carousel from './components/Carousel';
import Tienda from './components/Tienda';


function App() {
  return (
    <Layout>
      <LandingHeader />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <Inicio />
        </div>
        <div className="snap-center">
        <SobreMi />
        </div>
        <div className="snap-center">
        <Proyectos />
        </div>
        <div className="snap-center">
          <Contacto />
        </div>
        <div className="snap-center">
          <Tienda />
        </div>
      </main>
    </Layout>
  );
}

export default App;
