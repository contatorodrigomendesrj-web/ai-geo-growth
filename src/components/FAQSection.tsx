import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Certifique-se de ter lucide-react instalado ou use +, - texto simples

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
          {question}
        </span>
        <span className="ml-4 text-cyan-400">
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-blue-100 leading-relaxed text-base md:text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Faltam poucos dias para o Réveillon. Ainda dá tempo de funcionar?",
      answer: "SIM! O guia possui um módulo específico de 'Protocolo de Emergência' desenhado justamente para aplicação imediata (24h a 48h antes da virada). Você vai aprender técnicas de manejo ambiental e abafamento de som que funcionam na hora.",
    },
    {
      question: "Meu cachorro já é idoso (ou filhote). É seguro?",
      answer: "Totalmente. O método não utiliza medicamentos nem sedativos. São técnicas naturais de comportamento e alteração do ambiente que não oferecem risco nenhum à saúde física do seu cão, independente da idade.",
    },
    {
      question: "Como vou receber o material?",
      answer: "O acesso é imediato. Assim que o pagamento for aprovado (Pix ou Cartão), você recebe um e-mail com o link para baixar o Guia e acessar todos os bônus. Você pode ler no celular, tablet ou computador.",
    },
    {
      question: "Preciso comprar algum equipamento caro?",
      answer: "Não. O foco do 'Virada de Sucesso' é usar o que você já tem em casa para criar um ambiente seguro (o 'Bunker Antirruído').",
    },
    {
      question: "E se eu tiver dúvidas na hora?",
      answer: "Você não estará sozinho. O material é muito didático, e se precisar, você pode chamar nosso suporte pelo botão de WhatsApp nesta página.",
    }
  ];

  return (
    <section className="bg-[#0a1128] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ainda com dúvida?
          </h2>
          <p className="text-blue-200 text-lg">
            As respostas para as perguntas mais comuns sobre a Virada de Sucesso.
          </p>
        </div>

        <div className="bg-[#111835] rounded-3xl p-6 md:p-10 shadow-xl border border-blue-900/50">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;