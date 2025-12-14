import guiaCover from "@/assets/guia-cover.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] h-[560px] z-10">
      {/* 3D iPhone Frame with realistic shadows and depth */}
      <div 
        className="w-full h-full rounded-[48px] relative overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)',
          boxShadow: `
            inset 0 0 0 2px rgba(255,255,255,0.1),
            inset 0 0 0 4px #1a1a1a,
            0 0 0 1px rgba(0,0,0,0.8),
            8px 8px 20px rgba(0,0,0,0.5),
            20px 30px 60px rgba(0,0,0,0.4),
            -5px -5px 15px rgba(255,255,255,0.02)
          `,
        }}
      >
        {/* Titanium Frame Edge Highlight */}
        <div 
          className="absolute inset-0 rounded-[48px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)',
          }}
        />
        
        {/* Dynamic Island */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-[20px] z-20" />

        {/* Screen bezel */}
        <div className="absolute inset-[4px] rounded-[44px] bg-black overflow-hidden">
          {/* Screen Content - Image */}
          <img 
            src={guiaCover} 
            alt="Guia Uma Virada de Sucesso" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Side buttons - Volume */}
        <div 
          className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] rounded-l-sm"
          style={{
            background: 'linear-gradient(90deg, #333 0%, #1a1a1a 100%)',
          }}
        />
        <div 
          className="absolute left-[-2px] top-[160px] w-[3px] h-[50px] rounded-l-sm"
          style={{
            background: 'linear-gradient(90deg, #333 0%, #1a1a1a 100%)',
          }}
        />
        
        {/* Side button - Power */}
        <div 
          className="absolute right-[-2px] top-[140px] w-[3px] h-[70px] rounded-r-sm"
          style={{
            background: 'linear-gradient(270deg, #333 0%, #1a1a1a 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
