'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Globe = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 2,
      diffuse: 1.2,
      mapSamples: 50000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.3, 0.4, 0.7],
      markers: [
        { location: [28.6139, 77.2090], size: 0.07 },
        { location: [19.0760, 72.8777], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.015;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '250px 300px 3000px 350px',}}>
      <style jsx>{`
        .globe-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          height: 600px;
          margin-top: 4rem;
        }
        canvas {
          width: 600px;
          height: 600px;
        }
      `}</style>
      <div className='globe-container'>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Globe;
