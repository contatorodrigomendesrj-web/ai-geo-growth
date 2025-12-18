import mockupDevices from "@/assets/mockup-devices.jpeg";
import capaIpad from "@/assets/capa-ipad.png";
import capaIphone from "@/assets/capa-iphone.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-full max-w-[500px]">
      {/* Base mockup image */}
      <img
        src={mockupDevices}
        alt="iPad and iPhone mockup"
        className="w-full h-auto"
      />
      
      {/* iPad screen overlay */}
      <div className="absolute top-[2.5%] left-[1.8%] w-[68.5%] h-[94%] overflow-hidden rounded-[3%]">
        <img
          src={capaIpad}
          alt="Capa do Guia - iPad"
          className="w-full h-full object-cover"
        />
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
      </div>
      
      {/* iPhone screen overlay */}
      <div className="absolute top-[8%] right-[1%] w-[28%] h-[84%] overflow-hidden rounded-[12%]">
        <img
          src={capaIphone}
          alt="Capa do Guia - iPhone"
          className="w-full h-full object-cover"
        />
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 pointer-events-none" />
        {/* Dynamic Island simulation */}
        <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-[30%] h-[3%] bg-black rounded-full" />
      </div>
    </div>
  );
};

export default PhoneMockup;
