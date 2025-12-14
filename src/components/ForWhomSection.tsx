import { Heart, Calendar, Shield, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
  {
    icon: Heart,
    title: "Para quem sofre junto",
    description:
      "Sofrem ao ver seu cão em pânico, tremendo e tentando se esconder com o barulho dos fogos de artifício.",
  },
  {
    icon: Calendar,
    title: "Para quem previne",
    description:
      "Desejam agir preventivamente, preparando o ambiente e o animal antes da virada do ano.",
  },
  {
    icon: Shield,
    title: "Para quem busca técnica",
    description:
      "Se sentem impotentes na hora da crise e buscam técnicas comprovadas e seguras para acalmar o cão rapidamente.",
  },
  {
    icon: Users,
    title: "Para quem quer paz",
    description:
      "Querem transformar a noite de Ano Novo em um momento de paz, segurança e celebração para toda a família, sem estresse.",
  },
];

const ForWhomSection = () => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#000080' }}>
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
                className="pl-4 basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[30%]"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl h-full min-h-[280px] flex flex-col">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(0, 161, 255, 0.1)' }}
                  >
                    <card.icon className="w-6 h-6" style={{ color: '#00A1FF' }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
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
