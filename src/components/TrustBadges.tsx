import { Zap, Shield, Lock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    { icon: Zap, text: "Acesso imediato" },
    { icon: Shield, text: "7 dias de garantia" },
    { icon: Lock, text: "Compra segura" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-muted/50 border border-border px-3 py-1.5 rounded-full text-xs text-muted-foreground"
        >
          <badge.icon className="w-3.5 h-3.5 text-accent" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
