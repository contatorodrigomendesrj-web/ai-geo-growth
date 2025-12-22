import { Mail, Instagram, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Fundo levemente mais escuro que a seção anterior para criar contraste visual
    <footer className="bg-[#050914] text-slate-400 py-12 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          {/* BLOCO 1: Marca e Slogan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-2xl font-black text-white tracking-tighter">
              ADESTRADOR <span className="text-cyan-500">MENDES</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Ajudando você a construir uma relação de confiança e respeito com seu cão, sem medo e sem estresse.
            </p>
          </div>

          {/* BLOCO 2: Links Úteis (Visual de Credibilidade) */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-white font-bold text-sm uppercase tracking-wider mb-1">Legal</span>
            <a href="#" className="text-sm hover:text-cyan-400 transition-colors">Termos de Uso</a>
            <a href="#" className="text-sm hover:text-cyan-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-sm hover:text-cyan-400 transition-colors flex items-center gap-2">
               <ShieldCheck className="w-4 h-4" /> Compra Segura
            </a>
          </div>

          {/* BLOCO 3: Contato e Redes */}
          <div className="flex flex-col items-center md:items-end gap-4">
             <a 
               href="mailto:suporte@adestradormendes.com.br" 
               className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10"
             >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">suporte@adestradormendes.com.br</span>
             </a>
             
             {/* Redes Sociais */}
             <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-[#050914] transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
             </div>
          </div>

        </div>

        {/* LINHA DIVISÓRIA E COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            &copy; {currentYear} Adestrador Mendes. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-red-500">❤</span> para o seu melhor amigo.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;