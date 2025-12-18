import { MessageCircle, Heart } from "lucide-react";

const LiberationSection = () => {
  return (
    <section className="relative bg-[#F3F4F6] rounded-t-[80px] -mt-20 z-20">
      {/* Pain Agitation Block */}
      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual with Arch Frame */}
          <div className="relative flex justify-center">
            {/* Arch Frame */}
            <div 
              className="relative w-[280px] md:w-[320px] h-[380px] md:h-[420px] border-2 border-gray-300 overflow-hidden"
              style={{
                borderRadius: '160px 160px 20px 20px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=600&fit=crop&crop=faces"
                alt="Mulher frustrada olhando o celular"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Glassmorphism Badge 1 - WhatsApp */}
            <div 
              className="absolute top-[15%] -left-4 md:left-0 max-w-[220px] p-3 rounded-xl text-xs"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="font-semibold text-gray-800">WhatsApp</span>
              </div>
              <p className="text-gray-700">Amiga, a festa já começou! Cadê você? 🥂</p>
            </div>
            
            {/* Glassmorphism Badge 2 - Response */}
            <div 
              className="absolute bottom-[20%] -right-4 md:right-0 max-w-[240px] p-3 rounded-xl text-xs"
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-semibold text-gray-800">Sua Resposta</span>
              </div>
              <p className="text-gray-700">Não vou conseguir ir... o barulho começou e não posso deixar ele sozinho. Divirtam-se por mim. 💔</p>
            </div>
          </div>
          
          {/* Right - Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Já imaginou este cenário?
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Mais um ano em que você cancela a viagem, recusa o convite daquela festa incrível ou passa a virada trancada no quarto. O problema não é apenas o barulho; é a <strong className="text-gray-900">SUA vida que para</strong> toda vez que os fogos começam. Você merece brindar o ano novo com seus amigos, e não passar a noite em estado de alerta.
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
