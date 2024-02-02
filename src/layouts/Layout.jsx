// Layout.jsx
import React from 'react';

const Layout = ({ title, children, backgroundImage, backgroundColor }) => {
  const containerStyle = {
    background: backgroundImage
      ? `url(${backgroundImage}) center/cover no-repeat`
      : backgroundColor || 'black', // Si no hay imagen, usa el color de fondo o blanco por defecto
      width: '100%',
      height: '100%',
  };

  return (
    <div className="background-container" style={containerStyle}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
