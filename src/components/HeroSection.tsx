import PhoneMockup from "./PhoneMockup";
import PaymentIcons from "./PaymentIcons";
import { Sparkles, Check } from "lucide-react";

const HeroSection = () => {
  return (
    // REMOVIDO: style={{ borderBottom... }}
    // AJUSTADO: Padding bottom voltou para pb-20 (padrão)
    <section className="w-full min-h-screen relative overflow-hidden bg-blue-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600 via-blue-900 to-slate-950 pb-20">
      
      {/* Background glow for title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/30 blur-[100px] rounded-full pointer-events-none hidden lg:block" />

      {/* CONTAINER INTERNO */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1450px] mx-auto px-6 pt-35 lg:pt-44 gap-8 lg:gap-0 h-full relative z-10">
        
        {/* Phone Column */}
        <div className="w-full lg:w-[800px] lg:flex-none flex justify-center lg:justify-end items-center order-1 lg:order-none relative lg:-mr-24 z-0">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full pointer-events-none transform translate-x-10" />
          <PhoneMockup />
        </div>

        {/* Text Column */}
        <div className="flex-1 min-w-[380px] flex flex-col justify-center order-none lg:order-1 text-center lg:text-left relative z-10 pl-4 lg:pl-0">
          
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 text-white">
            Curta a festa enquanto seu cão fica 100% tranquilo.
          </h1>

          <div className="flex flex-col gap-6 mb-10 w-full">
            {/* SUBHEAD 1 */}
            <div className="flex gap-4 items-start text-left">
              <div className="min-w-6 mt-1 text-cyan-400">
                <Check className="w-6 h-6" />
              </div>
              <p className="text-lg leading-relaxed text-white">
                Você não precisa mais passar a virada trancado no quarto. Descubra como criar um{" "}
                <strong className="text-white font-bold">
                  ambiente seguro
                </strong>{" "}
                que{" "}
                <strong className="text-white font-bold">
                  acalma seu cão automaticamente durante os fogos.
                </strong>
              </p>
            </div>

            {/* SUBHEAD 2 */}
            <div className="flex gap-4 items-start text-left">
              <div className="min-w-6 mt-1 text-cyan-400">
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
            className="self-center lg:self-start bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase shadow-lg shadow-blue-900/50 transition-all duration-300 hover:-translate-y-0.5 inline-block"
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