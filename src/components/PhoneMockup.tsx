import mockupDevices from "@/assets/mockup-devices.jpeg";
import capaIpad from "@/assets/capa-ipad.png";
import capaIphone from "@/assets/capa-iphone.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-full max-w-[550px]">
      {/* Base mockup image */}
      <img
        src={mockupDevices}
        alt="iPad and iPhone mockup"
        className="w-full h-auto"
      />
      
      {/* iPad screen overlay */}
      <div 
        className="absolute overflow-hidden"
        style={{ top: '5.8%', left: '3.5%', width: '71.3%', height: '87%' }}
      >
        <img
          src={capaIpad}
          alt="Capa do Guia - iPad"
          className="w-full h-full object-cover rounded-[15px]"
        />
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none rounded-[15px]" />
      </div>
      
      {/* iPhone screen overlay - higher z-index */}
      <div 
        className="absolute overflow-hidden z-10"
        style={{ top: '35.8%', left: '69.8%', width: '25.2%', height: '59.5%' }}
      >
        <img
          src={capaIphone}
          alt="Capa do Guia - iPhone"
          className="w-full h-full object-cover rounded-[30px]"
        />
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 pointer-events-none rounded-[30px]" />
      </div>
    </div>
  );
};

export default PhoneMockup;
