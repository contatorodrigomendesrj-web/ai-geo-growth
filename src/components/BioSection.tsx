import React from "react";
// Ajuste o caminho conforme sua estrutura
import fotoPerfil from "../assets/foto-perfil.jpg"; 

const BioSection = () => {
  return (
    // AJUSTE 1: mudei 'pt-32 pb-32' para 'pt-20 pb-16 md:pt-32 md:pb-32'
    // Isso reduz drasticamente as margens no celular, mas mantém no desktop.
    <section className="relative bg-white text-gray-800 pt-20 pb-16 md:pt-32 md:pb-32 px-4">
      
      {/* --- DIVISOR "SELO DE RÉVEILLON" --- */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-500 blur-lg opacity-40 rounded-full"></div>
          
          <div className="relative bg-white w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#1a237e] shadow-lg">
            <span className="text-2xl text-[#FF00FF]">✦</span>
          </div>
        </div>
      </div>

      {/* Linha fina superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a237e] via-[#FF00FF] to-[#1a237e]"></div>

      {/* AJUSTE 2: Mudei 'gap-24' para 'gap-10 md:gap-24' 
         No celular o espaço entre a foto e o texto será menor (gap-10), 
         no desktop volta a ser grande (gap-24) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-24 relative z-0">
        
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/3 flex justify-center">
          
          {/* Ajustei a altura no mobile também para não ocupar a tela toda se for pequeno */}
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl shadow-2xl overflow-hidden bg-gray-200">
            <img 
              src={fotoPerfil}
              alt="Adestrador Mendes" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Coluna do Texto */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <span className="text-[#1a237e] font-semibold tracking-wider text-sm mb-2 block opacity-80">
            Com quem você vai aprender?
          </span>
          
          <h2 className="text-3xl md:text-5xl mb-6">
            <span className="font-light text-[#1a237e]">Sou </span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1a237e] via-[#d500f9] to-[#FF00FF]">
              Rodrigo Mendes
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Especialista em comportamento canino, dedico minha vida a ajudar tutores a construírem uma relação de <strong className="text-[#1a237e]">confiança e respeito</strong> com seus cães, sem medo e sem estresse.
          </p>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Criei o protocolo <strong>"Uma Virada de Sucesso"</strong> porque cansei de ver cães traumatizados e famílias angustiadas em uma noite que deveria ser de celebração. Meu método não é baseado em "achismos", mas em técnicas comprovadas de dessensibilização e manejo ambiental.
          </p>

          <div className="inline-block bg-blue-50 rounded-xl px-6 py-4 border-l-4 border-[#FF00FF] shadow-sm">
            <p className="text-[#1a237e] font-medium italic">
              "Minha missão é garantir que seu melhor amigo se sinta seguro, não importa o barulho lá fora."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BioSection;