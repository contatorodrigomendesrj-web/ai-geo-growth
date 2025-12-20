import { MessageCircle, Heart } from "lucide-react";
import dogFearImg from "../assets/dog-fear-arco.jpg";

const LiberationSection = () => {
  return (
    <section className="relative bg-[#F3F4F6] rounded-t-[40px] -mt-10 z-20 pb-20">
      
      {/* Bloco 1: A Dor e a Agitação */}
      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ESQUERDA - Visual (Borda Colorida + Balões "Abraçando" a Foto) */}
          <div className="relative flex justify-center mt-8 lg:mt-0 w-full">
            
            {/* CONTAINER MESTRE (O Segredo)
                - w-[280px]: Largura fixa no mobile. Garante que tudo fique compacto no centro.
                - md:w-[340px]: Cresce no Desktop.
                - relative: Tudo se alinha a partir daqui.
            */}
            <div className="relative w-[280px] md:w-[340px] flex justify-center items-center">

              {/* WRAPPER DA BORDA COLORIDA (PRIMARY) */}
              <div className="relative p-3 border-2 border-primary rounded-[3rem] rotate-[-2deg] z-10 bg-transparent">
                  {/* CARD DA FOTO (Borda Branca) */}
                  <div className="relative w-[240px] md:w-[300px] h-[340px] md:h-[400px] border-4 border-white overflow-hidden bg-white shadow-2xl rounded-[2.5rem]">
                    <img 
                      src={dogFearImg} 
                      alt="Cão com medo" 
                      className="w-full h-full object-cover object-[80%_center] transform scale-110 hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                  </div>
              </div>

              {/* --- ELEMENTOS FLUTUANTES (Balões) --- */}
              {/* ESTRATÉGIA: Ancorados diretamente no Container Mestre */}

              {/* Card WhatsApp (Topo Esquerda)
                  - Mobile: -left-2 (Grudado na borda).
                  - Mobile: top-8.
              */}
              <div className="absolute top-8 -left-2 md:top-10 md:-left-12 z-30 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[140px] md:max-w-[200px] animate-pulse-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none">WhatsApp</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-700 leading-relaxed font-medium">
                  Amiga, a festa já começou! Cadê você!? 🥂
                </p>
              </div>

              {/* Card Resposta (Fundo Direita)
                  - Mobile: -right-2 (Grudado na borda).
                  - Mobile: bottom-12.
              */}
              <div className="absolute bottom-12 -right-2 md:bottom-10 md:-right-8 z-30 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[150px] md:max-w-[220px]">
                 <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider leading-none">Sua Resposta</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">
                  Não vou conseguir ir... o barulho começou... 💔
                </p>
              </div>

            </div> {/* Fim do Container Mestre */}
          </div>
          
         {/* DIREITA - O Texto (Copy) */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Já imaginou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                este cenário?
              </span>
            </h2>
            
            {/* Parágrafo 1: O problema */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              Mais um ano em que você cancela a viagem, recusa o convite daquela festa incrível ou passa a virada trancada no quarto. O problema não é apenas o barulho; é a <strong className="text-gray-900">SUA vida que para</strong> toda vez que os fogos começam.
            </p>

            {/* Parágrafo 2: A solução/Desejo */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-900 font-medium text-lg leading-relaxed">
                Você merece brindar o ano novo com seus amigos, e não passar a noite em estado de alerta.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloco 2: A Inveja do Instagram */}
      <div className="max-w-[1100px] mx-auto px-6 py-8">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
          <span className="text-red-500">❌</span> Talvez você já tenha sentido essa frustração...
        </h3>
        
        <div className="flex justify-center items-center gap-4 mb-10">
          {/* Instagram Card 1 */}
          <div className="w-[140px] md:w-[180px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg border-4 border-white transform -rotate-6 transition-transform hover:rotate-0 hover:z-10 hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=400&fit=crop"
              alt="Pessoas celebrando"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Instagram Card 2 */}
          <div className="w-[140px] md:w-[180px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden shadow-lg border-4 border-white transform rotate-3 -ml-8 transition-transform hover:rotate-0 hover:z-10 hover:scale-105 duration-300">
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=400&fit=crop"
              alt="Brinde de ano novo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
          Enquanto você está exausta e frustrada, vê o mundo celebrando no Instagram. A diferença entre eles e você não é sorte, mas o <strong className="text-gray-900 bg-yellow-100 px-1">conhecimento certo.</strong>
        </p>
      </div>

      {/* Bloco 3: Chamada para Liberdade (CTA) */}
      <div className="max-w-[900px] mx-auto px-6 pt-12 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          A liberdade de viver o seu Réveillon sem estar <span className="text-[#111184]">"PRESA"</span> ao medo.
        </h2>
        
        {/* Caixa pontilhada */}
        <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 md:p-8 mb-10 bg-white">
          <p className="text-gray-700 text-base md:text-xl leading-relaxed font-medium">
            O meu Guia não é apenas sobre o seu cão. É sobre devolver a <strong className="text-[#111184]">VOCÊ</strong> o direito de ter um dia 31 de dezembro tranquilo, sem culpa e sem isolamento.
          </p>
        </div>
        
        {/* Botão */}
        <a
          href="https://pay.kiwify.com.br/P5fk4qK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl font-bold text-sm md:text-base uppercase shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
        >
          Quero minha liberdade de volta
        </a>
      </div>
    </section>
  );
};

export default LiberationSection;