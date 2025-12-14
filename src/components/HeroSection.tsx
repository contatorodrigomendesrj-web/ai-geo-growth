import PhoneMockup from "./PhoneMockup";
import { Sparkles, Check } from "lucide-react";
const HeroSection = () => {
  return <section className="flex flex-col lg:flex-row items-center justify-center max-w-[1100px] mx-auto px-6 pt-40 pb-20 gap-12 lg:gap-20 min-h-screen">
      {/* Phone Column - Order changes on mobile */}
      <div className="flex-1 flex justify-center lg:justify-end items-center order-1 lg:order-none">
        <PhoneMockup />
      </div>

      {/* Text Column */}
      <div className="flex-1 max-w-[500px] flex flex-col justify-center order-none lg:order-1 text-center lg:text-left">
        <h1 className="font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
          Garanta uma Virada de Sucesso e um Réveillon Blindado contra o Estresse
        </h1>

        <div className="flex flex-col gap-6 mb-10">
          {/* Topic 1 */}
          <div className="flex gap-4 items-start text-left">
            <div className="min-w-6 mt-0.5 text-accent">
              <Check className="w-6 h-6" />
            </div>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              A união entre{" "}
              <strong className="text-foreground font-bold">
                técnicas de manejo ambiental
              </strong>{" "}
              e estratégias comportamentais validadas para reduzir a ansiedade canina.
            </p>
          </div>

          {/* Topic 2 */}
          <div className="flex gap-4 items-start text-left">
            <div className="min-w-6 mt-0.5 text-accent">
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              Aplique um{" "}
              <strong className="text-foreground font-bold">
                plano de ação passo a passo
              </strong>{" "}
              simples, prático e que funciona mesmo se você tem pouco tempo até o Ano Novo.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://pay.kiwify.com.br/P5fk4qK" target="_blank" rel="noopener noreferrer" className="self-center lg:self-start bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-lg font-bold text-sm uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(217,0,217,0.4)]">
          Quero meu Guia agora
        </a>
      </div>
    </section>;
};
export default HeroSection;