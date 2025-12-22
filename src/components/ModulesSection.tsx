import cardFear from "../assets/card-fear.png";
import cardPeace from "../assets/card-peace.png";
import cardTechnique from "../assets/card-technique.png";

const JornadaCalmaSection = () => {
  const cards = [
    {
      title: "Por que seu cão tem tanto medo!?",
      description: "Não é frescura, é instinto de sobrevivência. Entenda o gatilho exato.",
      image: cardFear,
    },
    {
      title: "5 erros fatais",
      description: "Você provavelmente comete o erro nº 3 agora mesmo e ele está piorando o trauma do seu cão.",
      image: cardPeace,
    },
    {
      title: "O Protocolo da Virada",
      description: "O passo a passo simples para blindar o ambiente e ter uma noite de paz, sem improvisos.",
      image: cardTechnique,
    },
  ];

  return (
    // CORREÇÃO: Adicionei 'w-full' para forçar largura total e 'overflow-hidden' para segurança
    <div className="w-full relative bg-[#0a1128] overflow-hidden">
      
      {/* Luz de Fundo (Canto Inferior Direito) 
          Alinhada para conectar com a próxima seção */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/4 z-0"></div>

      {/* A SEÇÃO CINZA (Curva) */}
      <section className="relative bg-[#F3F4F6] w-full pt-6 pb-28 rounded-b-[60px] shadow-xl z-20">
        
        {/* Linha divisória no topo */}
        <div className="w-full flex justify-center px-6 mb-12">
          <div className="w-full max-w-[800px] h-[1px] bg-gray-300 rounded-full" />
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center pb-24 px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
            O que você vai aprender com<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500">
              Uma Virada de Sucesso
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-sm font-normal max-w-xl mx-auto">
            Dentro do guia, você vai descobrir:
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-16 md:gap-20 max-w-4xl mx-auto px-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#1e3a8a] to-[#111184] rounded-3xl border-4 border-gray-300 shadow-xl min-h-[160px] md:min-h-[180px] overflow-visible group"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none mix-blend-screen"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none mix-blend-screen"></div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 p-6 md:p-8 h-full relative z-10">
                <div className="flex flex-col justify-center text-white z-10 order-2 md:order-1 pt-4 md:pt-0 self-center">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-blue-50 text-xs md:text-base leading-relaxed font-normal max-w-[90%] md:max-w-[85%]">
                    {card.description}
                  </p>
                </div>

                <div className="flex justify-center relative order-1 md:order-2 self-end">
                  <div className="relative -mt-12 md:-mt-20">
                    <div className="w-32 h-52 md:w-44 md:h-64 rounded-xl border-4 border-gray-300 shadow-2xl overflow-hidden bg-[#111184] transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JornadaCalmaSection;