import React from 'react';
import phoneImage from '../../src/assets/mockup-iphone.png'

const PhoneMockup = () => {
  return (
    // REMOVIDO: animate-fade-in
    <div className="relative w-full max-w-[450px] md:max-w-none mx-auto">
      
      {/* Efeito de brilho atrás (mantive pois é estético, não movimento) */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-60" />
      
      {/* A Imagem do iPhone */}
      <img 
        src={phoneImage} 
        // REMOVIDO: transform transition-transform duration-500 hover:scale-[1.02]
        // Agora está totalmente estático
        className="relative z-10 w-full h-auto drop-shadow-2xl"
        alt="Guia Definitivo no iPhone"
      />
    </div>
  );
};

export default PhoneMockup;