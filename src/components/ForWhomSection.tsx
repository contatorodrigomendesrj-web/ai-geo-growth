import { Heart, Calendar, Shield, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import cardFear from "@/assets/card-fear.png";
import cardPrevention from "@/assets/card-prevention.png";
import cardTechnique from "@/assets/card-technique.png";
import cardPeace from "@/assets/card-peace.png";

const cards = [
  {
    icon: Heart,
    title: "Para quem sofre junto",
    description:
      "Sofrem ao ver seu cão em pânico, tremendo e tentando se esconder com o barulho dos fogos de artifício.",
    image: cardFear,
  },
  {
    icon: Calendar,
    title: "Para quem previne",
    description:
      "Desejam agir preventivamente, preparando o ambiente e o animal antes da virada do ano.",
    image: cardPrevention,
  },
  {
    icon: Shield,
    title: "Para quem busca técnica",
    description:
      "Se sentem impotentes na hora da crise e buscam técnicas comprovadas e seguras para acalmar o cão rapidamente.",
    image: cardTechnique,
  },
  {
    icon: Users,
    title: "Para quem quer paz",
    description:
      "Querem transformar a noite de Ano Novo em um momento de paz, segurança e celebração para toda a família, sem estresse.",
    image: cardPeace,
  },
];

const ForWhomSection = () => {
  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12">
          Para quem é este guia?
        </h2>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[33%] transition-all duration-300 ease-out group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl h-full min-h-[480px] flex flex-col transform transition-all duration-300 ease-out hover:scale-105 group-first:scale-100 md:group-hover:scale-105">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(0, 161, 255, 0.1)' }}
                  >
                    <card.icon className="w-6 h-6" style={{ color: '#00A1FF' }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="rounded-xl overflow-hidden mb-4 flex-1">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button 
                    className="w-full font-bold py-3 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, #00A1FF 0%, #0066CC 100%)',
                    }}
                    asChild
                  >
                    <a 
                      href="https://pay.kiwify.com.br/WYflFnA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Quero resolver isso
                    </a>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12 bg-white border-0 shadow-lg hover:bg-gray-50" />
          <CarouselNext className="right-0 md:-right-12 bg-white border-0 shadow-lg hover:bg-gray-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default ForWhomSection;
