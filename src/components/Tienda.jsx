import React, { useState, useEffect } from 'react';
import Section from './Section';
import '../Tienda.css';

const Tienda = () => {
  const [options, setOptions] = useState({
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
  });
  const [price, setPrice] = useState(0);
  const [areAllOptionsSelected, setAreAllOptionsSelected] = useState(false);

  useEffect(() => {
    const calculatePrice = () => {
      let newPrice = 0;

      // Opción 1: Tipo de web
      if (options.opcion1 === 'Web estática') {
        newPrice += 0;
      } else if (options.opcion1 === 'Web dinámica') {
        newPrice += 0;
      }

      // Opción 2: Gestión de dominio y Registro de dominio
      if (options.opcion2 === 'Gestión de dominio') {
        newPrice += 3;
      } else if (options.opcion2 === 'Registro de dominio') {
        newPrice += 0;
      }

      // Opción 3: Diseño Visual
      if (options.opcion3 === 'Diseño Gráfico') {
        newPrice += 0;
      }

      if (options.opcion4 === 'Servidor Pago') {
        newPrice += 5;
      }

      setPrice(newPrice);
    };

    calculatePrice();
  }, [options]);

  const handleOptionChange = (event, optionKey) => {
    const selectedOption = event.target.value;
    const newOptions = {
      ...options,
      [optionKey]: selectedOption === 'Sin elegir' ? '' : selectedOption,
    };

    setOptions(newOptions);

    const allOptionsSelected = Object.values(newOptions).every(option => option !== '');
    setAreAllOptionsSelected(allOptionsSelected);
  };

  const resetFields = () => {
    setOptions({
      opcion1: '',
      opcion2: '',
      opcion3: '',
      opcion4: '',
    });
    setPrice(0);
  };

  const preventDefault = (e) => {
    e.preventDefault();
alert("Debes seleccionar las opciones para poder pedir presupuesto");    // Puedes agregar un mensaje o lógica adicional para informar al usuario que todas las opciones deben estar seleccionadas.
  };

  const messageOptions = Object.values(options).filter(option => option !== 'Sin elegir').join(',');

  let whatsappURL;
  if (areAllOptionsSelected) {
    whatsappURL = `https://api.whatsapp.com/send?phone=1123999724&text=Hola%20,me%20contacto%20por%20whatsapp%20por un presupuesto generado en la web%20con%20los siguientes detalles [${messageOptions}]}`;
  } else {
    whatsappURL = '#'; // Puedes cambiar esto por el enlace deseado si no todas las opciones están seleccionadas
  }

  return (
    <Section backgroundImage="TIENDARESPONSIVE.png" style={{ background: 'url("TIENDARESPONSIVE.png") center/cover no-repeat', color: 'white' }}>
      <div className="card-container" id='Tienda'>
        <div className="card">
          <h1>Calculador Estimado</h1>
          <p className="price">usd {price}</p>
          <a href={whatsappURL} className={`action ${areAllOptionsSelected ? '' : 'disabled'}`} onClick={areAllOptionsSelected ? null : preventDefault}>
            <span>Pedir Presupuesto</span>
            <img width="20" height="20" src="https://img.icons8.com/office/16/whatsapp--v1.png" alt="whatsapp--v1" />
          </a>

          <ul className="lists">
            <li className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>
                <label htmlFor="opcion1">Opción 1: </label>
                <select
                  id="opcion1"
                  value={options.opcion1 || 'Sin elegir'}
                  onChange={(e) => handleOptionChange(e, 'opcion1')}
                  style={{ color: 'black' }}
                >
                  <option value="">Sin elegir</option>
                  <option value="Web estática">Web estática</option>
                  <option value="Web dinámica">Web dinámica</option>
                  {/* Agregar más opciones según sea necesario */}
                </select>
              </span>
            </li>
            <li className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>
                <label htmlFor="opcion2">Opción 2: </label>
                <select
                  id="opcion2"
                  value={options.opcion2 || 'Sin elegir'}
                  onChange={(e) => handleOptionChange(e, 'opcion2')}
                  style={{ color: 'black' }}
                >
                  <option value="">Sin elegir</option>
                  <option value="Gestión de dominio">Gestión de dominio</option>
                  <option value="Ya tengo">Ya tengo dominio</option>
                  {/* Agregar más opciones según sea necesario */}
                </select>
              </span>
            </li>
            <li className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>
                <label htmlFor="opcion3">Opción 3: </label>
                <select
                  id="opcion3"
                  value={options.opcion3 || 'Sin elegir'}
                  onChange={(e) => handleOptionChange(e, 'opcion3')}
                  style={{ color: 'black' }}
                >
                  <option value="">Sin elegir</option>
                  <option value="Diseño Gráfico">Diseño Gráfico</option>
                  <option value="Opción 3 - Otra">Tengo diseñador</option>
                  {/* Agregar más opciones según sea necesario */}
                </select>
              </span>
            </li>
            <li className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>
                <label htmlFor="opcion4">Opción 4: </label>
                <select
                  id="opcion4"
                  value={options.opcion4 || 'Sin elegir'}
                  onChange={(e) => handleOptionChange(e, 'opcion4')}
                  style={{ color: 'black' }}
                >
                  <option value="">Sin elegir</option>
                  <option value="Servidor Gratuito">Servidor Gratuito</option>
                  <option value="Servidor Pago">Servidor Pago</option> 
                </select>
              </span>
            </li>
          </ul>
          <p id='descripcion'>Tenga en cuenta que los precios son iniciales ya que solo se calcula el precio del hosting y del dominio. Ya que depende de cada caso en particular el presupuesto dado,
          tenga en cuenta que el precio es por hora de trabajo del desarrollador. Puedes usar esto como un estimativo y pedir tu presupuesto presionando "Pedir presupuesto".
         
          </p>
          <button id='botonestienda' onClick={resetFields}>Reset</button>
        </div>
      </div>
    </Section>
  );
};

export default Tienda;
