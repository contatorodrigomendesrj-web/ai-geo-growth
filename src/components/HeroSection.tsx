import PhoneMockup from "./PhoneMockup";
import PaymentIcons from "./PaymentIcons";
import { Sparkles, Check } from "lucide-react";

const HeroSection = () => {
  return (
    // AJUSTE 1: Mudei 'pb-20' para 'pb-80' no mobile (lg:pb-20 mantém desktop igual).
    // Isso cria espaço para o celular gigante não invadir a próxima seção.
    <section className="w-full min-h-screen relative overflow-hidden bg-[#111184] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0F52BA] via-[#111184] to-[#080840] pb-80 lg:pb-20">
      
      {/* Background glow (Desktop) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0F52BA]/40 blur-[100px] rounded-full pointer-events-none hidden lg:block" />

      {/* CONTAINER PRINCIPAL */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1450px] mx-auto px-6 pt-48 lg:pt-44 gap-10 lg:gap-0 h-full relative z-10">
        
        {/* COLUNA DO IPHONE (MOCKUP) */}
        <div className="w-full flex justify-center items-center lg:w-[800px] lg:justify-end lg:items-center order-1 lg:order-none relative lg:-mr-24 z-0 py-12 lg:py-0">
          
          {/* WRAPPER COM CONTROLES DE TAMANHO E POSIÇÃO 
              - mt-24: Empurra para baixo (foge dos ícones de pagamento).
              - scale-[2.1]: O tamanho gigante que você pediu.
              - translate-x-0: << AQUI ESTÁ A POSIÇÃO HORIZONTAL. 
                  * Mude para translate-x-10 (vai pra direita).
                  * Mude para -translate-x-10 (vai pra esquerda).
          */}
          <div className="relative mt-36 transform scale-[2.8] translate-x-20 lg:scale-100 lg:translate-x-0 lg:mt-0 origin-center">
             
             {/* Glow atrás do celular */}
             <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full pointer-events-none transform translate-x-0 lg:translate-x-4" />
             <PhoneMockup />
          
          </div>

        </div>

        {/* COLUNA DE TEXTO (Desktop Preservado) */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none flex flex-col justify-center order-none lg:order-1 text-center lg:text-left relative z-10 pl-0 lg:pl-0">
          
          {/* TÍTULO */}
          <h1 className="font-black text-3xl md:text-5xl lg:text-6xl leading-tight mb-10 text-white mx-auto lg:mx-0">
            Curta a festa enquanto <br className="block lg:hidden" />
            seu cão fica{" "}
            <span className="text-cyan-400 whitespace-nowrap">100% tranquilo.</span>
          </h1>

          {/* SUBHEADS */}
          <div className="flex flex-col gap-6 mb-8 w-full items-center lg:items-start">
            
            {/* Bloco 1 */}
            <div className="flex gap-4 items-start text-left max-w-md lg:max-w-[420px]">
              <div className="min-w-6 mt-1 text-cyan-500">
                <Check className="w-6 h-6" />
              </div>
              <p className="text-lg leading-relaxed text-white">
                Descubra como criar um{" "}
                <strong className="text-white font-bold">
                  ambiente seguro
                </strong>
                <br className="hidden lg:block" />{" "}
                que{" "}
                <strong className="text-white font-bold">
                  acalma seu cão automaticamente.
                </strong>
              </p>
            </div>

            {/* Bloco 2 */}
            <div className="flex gap-4 items-start text-left max-w-md lg:max-w-none">
              <div className="min-w-6 mt-1 text-cyan-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-lg leading-relaxed text-white">
                Um guia{" "}
                <strong className="text-white font-bold">
                  prático e rápido
                </strong>{" "}
                para quem tem pouco tempo, mas não abre mão da{" "}
                <strong className="text-white font-bold">
                  segurança do seu melhor amigo.
                </strong>
              </p>
            </div>
          </div>

          <a
            href="https://pay.kiwify.com.br/P5fk4qK"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center lg:self-start bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 rounded-lg font-bold text-sm uppercase shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            QUERO UMA VIRADA SEM ESTRESSE
          </a>

          <PaymentIcons />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;