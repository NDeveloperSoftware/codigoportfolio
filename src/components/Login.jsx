// Login.jsx
import {React,useEffect} from 'react';
import Section from './Section';
import '../Login.css'; // Ajusta la ruta según sea necesario para el archivo CSS

const Login = ({ handleCloseClick }) => {
  const estiloDelComponente = {
    background: 'url("LOGINRESPONSIVE.png") center/cover no-repeat', // Reemplaza con la ruta de tu imagen
    color: 'white', // Ajusta el color del texto para que sea legible en el fondo
    // Otros estilos que desees aplicar al componente
  };



  useEffect(() => {
    // Add or remove 'overflow-hidden' class based on the component visibility
    const body = document.body;
    body.classList.add('overflow-hidden');

    // Cleanup on component unmount
    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, []);

    return (
      <Section backgroundImage="LOGINRESPONSIVE.png" style={estiloDelComponente}>
        <div className="login-box">
        <button onClick={handleCloseClick} className="close-button">
          Cerrar
        </button>
        <p className='tituloform'>Login</p>
        <form>
          <div className="user-box">
            <input required="" name="" type="text" />
            <label>Usuario</label>
          </div>
          <div className="user-box">
            <input required="" name="" type="password" />
            <label>Password</label>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INGRESAR
          </a>
        </form>
        <p>Solo para administradores<a href="" className="a2"></a></p>
      </div>
    </Section>
  );
};

export default Login;
