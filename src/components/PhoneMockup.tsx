import guiaCover from "@/assets/guia-cover.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] h-[560px] z-10">
      <div className="w-full h-full bg-black rounded-[48px] relative shadow-[inset_0_0_0_4px_#333,0_0_0_4px_#2c2c2c,20px_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-[20px] z-20" />

        {/* Screen Content - Image */}
        <div className="w-full h-full">
          <img 
            src={guiaCover} 
            alt="Guia Uma Virada de Sucesso" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
