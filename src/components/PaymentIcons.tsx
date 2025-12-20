import { CreditCard } from "lucide-react";

const PaymentIcons = () => {
  return (
    // AJUSTE: Reduzi de mt-8 para mt-4 (mais próximo do botão)
    <div className="flex items-center justify-center lg:justify-start gap-6 mt-4">
      
      {/* Ícone PIX (SVG Simplificado e Limpo) */}
      <div className="flex items-center gap-2 text-white opacity-90 hover:opacity-100 transition-opacity">
        <svg 
          className="w-5 h-5 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Desenho do losango padrão do Pix, sem recortes complexos para evitar quebras */}
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9.97001L11.95 12.96L9.98001 9.88001H14.07L15.06 11.53L16.03 9.88001H19.98L18.01 12.96L19.97 16.13H15.89L14.9 14.39L13.92 16.13Z" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-wide">Pix</span>
      </div>

      {/* Cartão de Crédito */}
      <div className="flex items-center gap-2 text-white opacity-90 hover:opacity-100 transition-opacity">
        <CreditCard className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-wide">Cartão de Crédito</span>
      </div>

    </div>
  );
};

export default PaymentIcons;