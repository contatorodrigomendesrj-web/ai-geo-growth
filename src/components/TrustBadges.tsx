const TrustBadges = () => {
  const badges = ["Acesso imediato", "7 dias de garantia", "Compra segura"];

  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="px-4 py-2 rounded-full text-xs font-medium"
          style={{ 
            backgroundColor: 'rgba(0, 161, 255, 0.15)',
            color: '#00A1FF'
          }}
        >
          {badge}
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
