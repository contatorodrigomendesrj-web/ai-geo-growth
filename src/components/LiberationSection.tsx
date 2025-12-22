import { MessageCircle, Heart, Send } from "lucide-react";
import dogFearImg from "../assets/dog-fear-arco.jpg";
import brindeimg from "../assets/brinde.jpg";
import fogosimg from "../assets/fogos.jpeg";

const LiberationSection = () => {
  return (
    // SEÇÃO PRINCIPAL
    <section className="relative bg-[#F3F4F6] rounded-t-[40px] -mt-24 md:-mt-10 z-20 pb-0">
      
      {/* Bloco 1: A Dor e a Agitação */}
      <div className="max-w-[1100px] mx-auto px-6 pt-12 md:pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ESQUERDA - Visual */}
          <div className="relative flex justify-center mt-4 lg:mt-0 w-full">
            <div className="relative w-[280px] md:w-[340px] flex justify-center items-center">

              {/* Borda Colorida */}
              <div className="relative p-3 border-2 border-primary rounded-[3rem] rotate-[-2deg] z-10 bg-transparent">
                  <div className="relative w-[240px] md:w-[300px] h-[340px] md:h-[400px] border-4 border-white overflow-hidden bg-white shadow-2xl rounded-[2.5rem]">
                    <img 
                      src={dogFearImg} 
                      alt="Cão com medo" 
                      className="w-full h-full object-cover object-[80%_center] transform scale-110 hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
                  </div>
              </div>

              {/* Balões */}
              <div className="absolute top-8 -left-2 md:top-10 md:-left-12 z-30 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[140px] md:max-w-[200px] animate-pulse-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none">WhatsApp</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-700 leading-relaxed font-medium">
                  Amiga, a festa já começou! Cadê você!? 🥂
                </p>
              </div>

              <div className="absolute bottom-12 -right-2 md:bottom-10 md:-right-8 z-30 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-50 max-w-[150px] md:max-w-[220px]">
                 <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider leading-none">Sua Resposta</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-700 leading-relaxed font medium">
                  Não vou conseguir ir... o barulho começou... 💔
                </p>
              </div>

            </div>
          </div>
          
         {/* DIREITA - O Texto */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Já imaginou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                este cenário?
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
              Mais um ano em que você cancela a viagem, recusa o convite daquela festa incrível ou passa a virada trancada no quarto. O problema não é apenas o barulho; é a <strong className="text-gray-900">SUA vida que para</strong> toda vez que os fogos começam.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-900 font-medium text-lg leading-relaxed">
                Você merece brindar o ano novo com seus amigos, e não passar a noite em estado de alerta.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-[800px] h-[1px] bg-gray-300 rounded-full my-4" />
      </div>

      {/* Bloco 2: A Inveja do Instagram (Cards Estilo Post) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 mt-10">
        
        {/* Card 1 */}
        <div className="w-[280px] bg-white rounded-xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
          {/* Header com Foto de Perfil */}
          <div className="flex items-center p-3 border-b border-gray-100">
            {/* Anel colorido do stories */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
              {/* AQUI ESTÁ A MUDANÇA: Tag IMG em vez do DIV branco */}
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=faces" 
                alt="Foto de perfil eurafa.cabral"
                className="w-full h-full rounded-full object-cover border-[1.5px] border-white"
              />
            </div>
            <div className="ml-3 text-xs">
              <p className="font-semibold text-gray-900">eurafa.cabral</p>
              <p className="text-gray-500">Copacabana, RJ</p>
            </div>
            <div className="ml-auto text-gray-400">•••</div>
          </div>
          
          {/* Imagem */}
          <div className="aspect-square w-full bg-gray-100 relative">
            <img 
              src={fogosimg} 
              alt="Fogos de artifício na praia" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Footer (Ícones Corrigidos) */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-3 text-gray-700">
                <Heart className="w-5 h-5 stroke-[1.5]" />
                <MessageCircle className="w-5 h-5 stroke-[1.5]" />
              </div>
              <Send className="w-5 h-5 stroke-[1.5]" />
            </div>
            <p className="text-xs text-gray-900 font-semibold">3.452 curtidas</p>
            <p className="text-xs text-gray-600 mt-1"><span className="font-semibold text-gray-900">eurafa.cabral</span> Que virada mágica! ✨🎆</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[280px] bg-white rounded-xl shadow-xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300 -mt-12 md:mt-0 md:-ml-8 z-20">
          {/* Header com Foto de Perfil */}
          <div className="flex items-center p-3 border-b border-gray-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
              {/* MUDANÇA AQUI: Foto de perfil da Carol */}
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" 
                alt="Foto de perfil carol-tavares" 
                className="w-full h-full rounded-full object-cover border-[1.5px] border-white"
              />
            </div>
            <div className="ml-3 text-xs">
              <p className="font-semibold text-gray-900">carol-tavares</p>
              <p className="text-gray-500">Festa da Virada</p>
            </div>
            <div className="ml-auto text-gray-400">•••</div>
          </div>
          
          {/* Imagem do Post */}
          <div className="aspect-square w-full bg-gray-100 relative">
            <img 
              src={brindeimg}
              alt="Brinde com taças" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Footer */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-3 text-gray-700">
                <Heart className="w-5 h-5 stroke-[1.5]" />
                <MessageCircle className="w-5 h-5 stroke-[1.5]" />
              </div>
              <Send className="w-5 h-5 stroke-[1.5]" />
            </div>
            <p className="text-xs text-gray-900 font-semibold">892 curtidas</p>
            <p className="text-xs text-gray-600 mt-1"><span className="font-semibold text-gray-900">carol-tavares</span> Cheers! 🥂🍾</p>
          </div>
        </div>

      </div>
      
     {/* Texto de Impacto - O Pulo do Gato (Ajustado) */}
      <div className="mt-12 text-center px-6">
        <div className="inline-flex items-center bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-4">
          {/* Bolinha pulsante efeito radar */}
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold text-red-600 uppercase tracking-wider">A dura realidade</span>
        </div>
        
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
          Eles não têm "cães de sorte". Eles têm um plano.<br className="hidden md:block"/>
          A única coisa que separa o seu desespero da celebração deles é o <span className="bg-yellow-200 text-gray-900 font-bold px-1 mx-1 transform -skew-x-3 inline-block">conhecimento certo.</span>
        </p>
      </div>

      {/* Bloco 3: CTA de Alta Conversão */}
      <div className="max-w-[900px] mx-auto px-4 pt-12 pb-8 text-center">
        
        {/* Headline com Gatilho de "Chega!" */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
          Chegou a hora de parar de ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-600">refém do medo</span> dentro da sua própria casa.
        </h2>
        
        {/* Box de Autoridade (Substituindo a tracejada) */}
        <div className="relative bg-white rounded-3xl p-6 md:p-10 shadow-2xl shadow-blue-900/10 border border-blue-50 mb-10 overflow-hidden group hover:border-blue-200 transition-colors duration-300">
          {/* Efeito de luz ao fundo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              Este guia não é "apenas um pdf". É o seu passaporte para reconquistar o direito de brindar a virada de ano <strong className="text-[#111184]">sem culpa, sem choro e com seu cão 100% tranquilo</strong> ao seu lado.
            </p>
          </div>
        </div>
        
        {/* Botão com CTA Ajustado (NOVO: Slim e Azul) */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://pay.kiwify.com.br/P5fk4qK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#111184] hover:bg-[#0a0a5c] text-white px-6 py-3 rounded-xl font-bold text-sm md:text-lg shadow-lg shadow-blue-900/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            QUERO SALVAR MEU RÉVEILLON
            {/* Ícone levemente menor no mobile (width="18") para ficar proporcional */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          
          <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5 opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Pagamento 100% Seguro • Acesso Imediato
          </p>
        </div>
      </div>

    </section>
  );
};

export default LiberationSection;