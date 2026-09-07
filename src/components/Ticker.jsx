const Ticker = () => {
  const items = ["ANIMATION SPECIALIST", "UI/UX INNOVATION", "CREATIVE CODE", "FULLSTACK DEVELOPER", "WEB AR"];
  return (
    <div className="w-full bg-[#ff4500] py-3 transform -rotate-1 shadow-xl border-y-2 border-white/20 overflow-hidden my-10 relative z-20 scale-105">
      <div className="animate-marquee items-center text-white font-bold tracking-widest text-sm uppercase flex">
        {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="mx-6">{item}</span>
            <span className="text-lg opacity-80">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;