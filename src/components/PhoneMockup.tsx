import capaIpad from "@/assets/capa-ipad.png";
import capaIphone from "@/assets/capa-iphone.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-full max-w-[600px] h-[400px] lg:h-[450px]">
      {/* iPad - landscape, positioned left, behind iPhone */}
      <div 
        className="absolute left-0 top-[10%] w-[85%] aspect-[4/3] z-0 transform rotate-[-1deg]"
        style={{
          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
        }}
      >
        {/* iPad Frame */}
        <div 
          className="w-full h-full rounded-[20px] p-[4px] bg-gradient-to-br from-gray-800 via-black to-gray-900"
          style={{
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
          }}
        >
          {/* iPad Screen */}
          <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-black">
            <img
              src={capaIpad}
              alt="Capa do Guia - iPad"
              className="w-full h-full object-cover"
            />
            {/* Glass reflection effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.04) 100%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* iPhone - positioned in front, overlapping iPad bottom right */}
      <div 
        className="absolute right-0 bottom-0 w-[38%] h-[85%] z-10 transform rotate-[3deg]"
        style={{
          filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))',
        }}
      >
        {/* iPhone Frame */}
        <div 
          className="w-full h-full rounded-[35px] p-[4px] bg-gradient-to-br from-gray-700 via-black to-gray-900"
          style={{
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 0 0 1px rgba(0,0,0,0.8)',
          }}
        >
          {/* iPhone Screen */}
          <div className="relative w-full h-full rounded-[31px] overflow-hidden bg-black">
            {/* Dynamic Island */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />
            
            <img
              src={capaIphone}
              alt="Capa do Guia - iPhone"
              className="w-full h-full object-cover"
            />
            {/* Glass reflection effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(125deg, rgba(255,255,255,0.2) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.08) 100%)',
              }}
            />
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute left-[-2px] top-[25%] w-[3px] h-[25px] bg-gray-800 rounded-l-sm" />
        <div className="absolute left-[-2px] top-[35%] w-[3px] h-[45px] bg-gray-800 rounded-l-sm" />
        <div className="absolute right-[-2px] top-[30%] w-[3px] h-[55px] bg-gray-800 rounded-r-sm" />
      </div>
    </div>
  );
};

export default PhoneMockup;
