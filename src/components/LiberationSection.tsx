import { MessageCircle, Heart } from "lucide-react";

const LiberationSection = () => {
  return (
    <section className="relative bg-[#F3F4F6] rounded-t-[] -mt z-20">
      {/* Pain Agitation Block */}
      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       {/* Left - Visual with Arch Frame (ORIGINAL LIMPO) */}
          <div className="relative flex justify-center">
            
            {/* O ARCO COM A IMAGEM */}
            <div 
              className="relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] border-2 border-gray-100 overflow-hidden bg-white z-10 shadow-xl"
              style={{
                borderRadius: '160px 160px 20px 20px',
              }}
            >
              {/* CAMINHO CORRIGIDO: A barra / indica que está na pasta public */}
              <img 
                src="dog-fear-arco.jpg"
                alt="Cão dormindo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/5 mix-blend-multiply" />
            </div>

            {/* ELEMENTOS FLUTUANTES (Balões) */}
            
            {/* Card WhatsApp */}
            <div className="absolute top-12 -left-4 md:-left-12 z-20 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-50 max-w-[180px] md:max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none">WhatsApp</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">
                Amiga, a festa já começou! Cadê você!? 🥂
              </p>
            </div>

            {/* Card Resposta */}
            <div className="absolute bottom-12 -right-4 md:-right-8 z-20 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-50 max-w-[200px] md:max-w-[220px]">
               <div className="flex items-center gap-2 mb-2">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider leading-none">Sua Resposta</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Não vou conseguir ir... o barulho começou e não posso deixar ele sozinho. Divirtam-se por mim. 💔
              </p>
            </div>

          </div>
          
         {/* Right - Copy */}
<div className="text-center lg:text-left">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
    Já imaginou{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
      este cenário?
    </span>
  </h2>
           {/* Parágrafo 1: O problema (Texto Cinza) */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              Mais um ano em que você cancela a viagem, recusa o convite daquela festa incrível ou passa a virada trancada no quarto. O problema não é apenas o barulho; é a SUA vida que para toda vez que os fogos começam.
            </p>

            {/* Parágrafo 2: A solução/Desejo (Texto Ciano e Bold) */}
            <p className="text-cyan-600 font-bold text-lg md:text-xl leading-relaxed">
              Você merece brindar o ano novo com seus amigos, e não passar a noite em estado de alerta.
            </p>
          </div>
        </div>
      </div>

      {/* Instagram Envy Block */}
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
          <span className="text-red-500">❌</span> Talvez você já tenha sentido essa frustração...
        </h3>
        
        <div className="flex justify-center items-center gap-4 mb-10">
          {/* Instagram Card 1 */}
          <div 
            className="w-[140px] md:w-[180px] h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-xl transform -rotate-6"
          >
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=400&fit=crop"
              alt="Pessoas celebrando"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Instagram Card 2 */}
          <div 
            className="w-[140px] md:w-[180px] h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-xl transform rotate-3 -ml-8"
          >
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=400&fit=crop"
              alt="Brinde de ano novo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Enquanto você está exausta e frustrada, você vê o mundo celebrando no Instagram. A diferença entre eles e você não é a sorte de ter um cão calmo, mas o <strong className="text-gray-900">conhecimento de como retomar o controle da sua noite.</strong>
        </p>
      </div>

      {/* Freedom CTA Block */}
      <div className="max-w-[900px] mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          A liberdade de viver o seu Réveillon sem estar <span className="text-primary">"PRESA"</span> ao medo do seu cão.
        </h2>
        
        {/* Dotted Border Box */}
        <div className="border-2 border-dashed border-gray-400 rounded-2xl p-6 md:p-8 mb-10 bg-white/50">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            O meu Guia não é apenas sobre o seu cão. É sobre devolver a <strong className="text-gray-900">VOCÊ</strong> o direito de ter um dia 31 de dezembro tranquilo, sem culpa e sem isolamento.
          </p>
        </div>
        
        {/* CTA Button */}
        <a
          href="https://pay.kiwify.com.br/P5fk4qK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl font-bold text-sm md:text-base uppercase shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(217,0,217,0.4)]"
        >
          Quero minha liberdade de volta
        </a>
      </div>
    </section>
  );
};

export default LiberationSection;
