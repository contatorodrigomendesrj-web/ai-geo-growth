const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] h-[560px] z-10 animate-float">
      <div className="w-full h-full bg-black rounded-[48px] relative shadow-[inset_0_0_0_4px_#333,0_0_0_4px_#2c2c2c,20px_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-[20px] z-20" />

        {/* Screen Content */}
        <div className="pt-[50px] px-5 pb-5 flex flex-col h-full bg-[#F2F2F2] text-black">
          {/* Status Bar */}
          <div className="absolute top-[15px] left-[30px] right-[30px] flex justify-between text-[10px] font-bold text-black">
            <span>9:41</span>
            <span>5G</span>
          </div>

          {/* App Card */}
          <div className="bg-black rounded-[20px] h-[180px] w-full mt-2.5 mb-5 flex flex-col justify-center items-center relative overflow-hidden">
            <div
              className="font-black text-[2.8rem] tracking-[-2px] uppercase leading-[0.8] text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(135deg, #FFF 0%, #AAA 50%, #FFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VIRADA<br />CASH
            </div>
            <div className="absolute bottom-[15px] right-5 text-white font-bold italic text-base opacity-80">
              VISA
            </div>
          </div>

          {/* Balance Section */}
          <div className="text-center mb-7">
            <div className="text-[0.8rem] text-[#666] mb-1 font-semibold">
              Saldo Atual{" "}
              <span className="inline-block bg-success px-2 py-1 rounded text-[0.7rem] font-extrabold rotate-[-5deg] translate-y-[-10px] ml-1 text-accent-foreground">
                +12%
              </span>
            </div>
            <div className="font-black text-[2.2rem] tracking-[-1px]">
              R$ 15.240<span className="text-lg">,00</span>
            </div>
          </div>

          {/* App Actions */}
          <div className="flex gap-2.5 mb-auto">
            <div className="flex-1 bg-white border border-[#ddd] py-3 rounded-xl text-[0.8rem] font-bold text-center">
              ↓ Sacar
            </div>
            <div className="flex-1 bg-white border border-[#ddd] py-3 rounded-xl text-[0.8rem] font-bold text-center">
              ↑ Investir
            </div>
          </div>

          {/* App Dock */}
          <div className="bg-white py-4 pb-1 border-t border-[#eee] flex justify-around">
            <div className="w-10 h-10 bg-black rounded-full" />
            <div className="w-10 h-10 bg-[#f5f5f5] rounded-full" />
            <div className="w-10 h-10 bg-[#f5f5f5] rounded-full" />
            <div className="w-10 h-10 bg-[#f5f5f5] rounded-full" />
          </div>

          {/* Sticker Button */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[50px] h-[50px] bg-primary rounded-full border-2 border-black z-10 shadow-[3px_3px_0px_#000] flex items-center justify-center text-white font-black text-[0.7rem]">
            GO!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
