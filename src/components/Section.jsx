// Section.jsx
import React from 'react';
import FooterMenu from './FooterMenu.jsx';

const Section = ({ responsive, backgroundImage, color, title, subtitle, id, showFooterContent, children }) => {
  const textColor = `text-${color}`;

  const sectionStyle = {
    background: backgroundImage ? `url(${backgroundImage}) center/cover no-repeat` : 'transparent',
  };

  const responsiveClass = responsive ? 'responsive-section' : '';

  return (
    <section
      className={`landing-section h-screen w-screen text-center overflow-hidden relative ${responsiveClass}`}
      style={sectionStyle}
      id={id}
    >
      <div className="z-30 relative h-full flex flex-col items-center text-white">
        <header>
          <h2 className={`${textColor} text-4xl font-medium`}>
            {title}
          </h2>
          <p className={`${textColor} text-sm`}>
            {subtitle}
          </p>
        </header>

        <footer className="flex flex-col mt-8">
          {children}
        </footer>
      </div>
    </section>
  );
};

export default Section;
