import PhoneMockup from "./PhoneMockup";
import PaymentIcons from "./PaymentIcons";
import { Sparkles, Check } from "lucide-react"; 

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden bg-[#111184] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0F52BA] via-[#111184] to-[#080840] pb-80 lg:pb-20">
      
      {/* Background glow (Desktop) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#0F52BA]/40 blur-[100px] rounded-full pointer-events-none hidden lg:block" />

      {/* CONTAINER PRINCIPAL */}
      {/* AJUSTE MOBILE: 'pt-40' (160px) garante que desça bem no celular.
         AJUSTE DESKTOP: 'lg:pt-44' mantém a posição original do desktop.
      */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1450px] mx-auto px-6 pt-40 lg:pt-44 gap-10 lg:gap-0 h-full relative z-10">
        
        {/* COLUNA DO IPHONE (MOCKUP) */}
        <div className="w-full flex justify-center items-center lg:w-[800px] lg:justify-end lg:items-center order-1 lg:order-none relative lg:-mr-24 z-0 py-12 lg:py-0">
          
          <div className="relative mt-36 transform scale-[2.7] translate-x-20 lg:scale-[1.10] lg:translate-x-0 lg:mt-0 origin-center">
             <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full pointer-events-none transform translate-x-0 lg:translate-x-4" />
             <div className="drop-shadow-[0_25px_35px_rgba(0,0,30,0.3)]">
               <PhoneMockup />
             </div>
          </div>

        </div>

        {/* COLUNA DE TEXTO */}
        {/* AJUSTE MOBILE: 'mt-8' adiciona uma margem extra só no celular para afastar do topo.
           AJUSTE DESKTOP: 'lg:mt-0' remove essa margem em telas grandes.
        */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none flex flex-col justify-center order-none lg:order-1 text-center lg:text-left relative z-10 pl-0 lg:pl-0 mt-8 lg:mt-0">
          
          <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-10 lg:mb-16 text-white mx-auto lg:mx-0">
            Curta a festa <br className="block md:hidden" />
            enquanto seu cão fica <br className="block md:hidden" />
            <span className="whitespace-nowrap text-cyan-400">
              100% tranquilo.
            </span>
          </h1>

          {/* SUBHEADS */}
          <div className="flex flex-col gap-8 mb-12 w-full items-center lg:items-start">
            
            <div className="flex gap-4 items-start text-left max-w-md lg:max-w-[550px]">
              <div className="min-w-6 mt-1 text-cyan-500">
                <Check className="w-6 h-6" />
              </div>
              <p className="text-lg leading-relaxed text-white">
                Você no controle da virada. Descubra como criar um{" "}
                <strong className="text-white font-bold">
                  ambiente seguro
                </strong>{" "}
                que{" "}
                <strong className="text-white font-bold">
                  acalma seu cão automaticamente.
                </strong>
              </p>
            </div>

            <div className="flex gap-4 items-start text-left max-w-md lg:max-w-[580px]">
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

          {/* ÁREA DE AÇÃO */}
          <div className="flex flex-col items-center self-center lg:self-start gap-4">
            
            <a
              href="https://pay.kiwify.com.br/P5fk4qK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF00FF] hover:bg-[#d500f9] text-white px-8 py-5 rounded-lg font-bold text-sm md:text-base uppercase shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] inline-block tracking-wide w-full md:w-auto text-center"
            >
              QUERO UMA VIRADA SEM ESTRESSE
            </a>

            {/* Ícones de Pagamento */}
            <div className="mt-2">
              <PaymentIcons />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;