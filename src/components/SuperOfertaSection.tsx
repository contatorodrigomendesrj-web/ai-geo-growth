import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";

const SuperOfertaSection = () => {
  const benefits = [
    "O Método completo 'Uma Virada de Sucesso'",
    "Protocolo passo a passo",
    "Checklist do Bunker Antirruído",
    "Acesso vitalício ao material",
    "Economize com remédios e soluções falhas",
  ];

  return (
    <section className="relative bg-[#0a1128] pt-32 md:pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Luzes de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* --- COLUNA DA ESQUERDA --- */}
          <div className="text-white space-y-8 order-1 lg:order-1">
            <div>
             <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Garanta a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">tranquilidade do seu Réveillon</span> por um valor simbólico.              
              </h2>
              <p className="text-blue-100 text-base md:text-xl leading-relaxed">
                Pare de gastar com soluções que não funcionam. Reconquiste a sua paz e a do seu melhor amigo.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-white font-bold text-xl">
                Ao se inscrever hoje, você recebe acesso imediato:
              </p>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                    <span className="text-lg text-blue-50 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- COLUNA DA DIREITA: Card de Oferta --- */}
          <div className="order-2 lg:order-2 relative">
             {/* Efeito de brilho atrás do card */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-[60px] opacity-30 rounded-3xl transform scale-95"></div>
            
            <div className="relative bg-[#111184]/90 backdrop-blur-xl rounded-[2.5rem] border-2 border-white/20 shadow-2xl p-8 md:p-12 text-center transform hover:scale-[1.01] transition-all duration-300">
              
              {/* Âncora de Preço (RISCO VERMELHO) */}
              {/* Adicionei 'decoration-red-500 decoration-2' para riscar de vermelho */}
              <p className="text-gray-300 font-medium text-xl mb-4 relative inline-block">
                De <span className="line-through decoration-red-500 decoration-2 text-gray-400">R$ 47,90</span>
                <span className="absolute -top-3 -right-12 bg-cyan-500 text-[#0a1128] text-xs font-bold px-2 py-0.5 rounded-full">
                  -80% OFF
                </span>
              </p>
              
              {/* Preço Principal */}
              <div className="mb-8">
                <h3 className="text-white text-6xl md:text-7xl font-black tracking-tight leading-none flex items-center justify-center gap-2">
                  <span className="text-2xl md:text-3xl font-bold self-start mt-2">R$</span>
                  9,99
                </h3>
                <p className="text-blue-200 text-lg mt-2">pagamento único, acesso vitalício</p>
              </div>

              {/* Botão CTA (AJUSTE DE LARGURA) */}
              {/* Mudei 'w-full' para 'w-full md:w-auto mx-auto' para ele não esticar tanto no desktop */}
              <button className="group relative w-full md:w-auto mx-auto flex justify-center py-5 px-10 border-transparent font-extrabold rounded-2xl text-xl text-[#0a1128] bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] active:scale-95 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  Quero Salvar Meu Réveillon
                </span>
              </button>

              {/* Garantia e Pagamento */}
              <div className="mt-6 flex flex-col items-center gap-3 text-sm text-blue-200/80 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>Compra 100% Segura & Ambiente Protegido</span>
                </div>
                <div className="flex items-center gap-2 opacity-70">
                    <CreditCard className="w-4 h-4" />
                    <span>Aceitamos Pix e Cartão</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuperOfertaSection;