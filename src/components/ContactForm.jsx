import React, { useEffect, useState } from 'react';
import Section from './Section';
import '../Contacto.css'; // Ajusta la ruta según sea necesario para el archivo CSS

const Contacto = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const enviarCorreo = () => {
    if (nombre === "" || mensaje === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    var mailtoLink = `mailto:nicodurso123@gmail.com?subject=Consulta%20Via%20Web&body=Hola mi nombre es ${encodeURIComponent(nombre)}%0D%0A${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Section
      backgroundImage={isSmallScreen ? 'CONTACTORESPONSIVE.png' : 'FONDOCONTACTO.png'}
      id="contacto"
    >
      <div className="contacto-box">
        <p className='tituloform'>Contacto</p>
        <form>
          <div className="user-box">
            <input
              required=""
              type="nombre"
              id="nombre"
              placeholder='Ingrese su nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="user-box">
            <textarea
              required=""
              id="mensaje"
              placeholder='Ingrese un mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <button onClick={enviarCorreo}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enviar
          </button>
        </form>
        <p>Pedime tu presupuesto<a href="" className="a2"></a></p>
      </div>
    </Section>
  );
};

export default Contacto;
