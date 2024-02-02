import React from 'react';

const Logo = () => {
  return (
    <div style={{ position: 'absolute', top: '0', left: '0', zIndex: '1' }}>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="500 210 1740 504"
        width="250"
        height="114"
      >
        <title>NDev</title>
        <style>
          {`
            tspan { white-space:pre } 
            .t0 { font-size: 150px; fill: #fff; font-weight: 500; font-family: "Arial", "DejaVu Sans" } 
            .t1 { font-size: 110px; fill: #fff; font-weight: 300; font-family: "Arial", "DejaVu Sans" } 
          `}
        </style>
        <text id="NDev" style={{ transform: 'matrix(1,0,0,1,578.703,366.5)'  }}>
          <tspan x="0" y="0" className="t0">N</tspan>
          <tspan y="0" className="t0">D</tspan>
          <tspan y="0" className="t1">e</tspan>
          <tspan y="0" className="t1">v</tspan>
          <tspan y="0" className="t1"></tspan>
          <tspan y="0" className="t1">
</tspan>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
