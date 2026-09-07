const Ticker = () => {
  const items = [
    "ANIMATION SPECIALIST", "UI/UX INNOVATION", "CREATIVE CODE", "FULLSTACK DEVELOPER", "WEB AR"
  ];

  return (
    <div className="absolute bottom-4 w-[105%] -left-4 bg-[#ff4500] py-3 z-30 transform -rotate-2 overflow-hidden shadow-xl">
      <div className="flex whitespace-nowrap animate-marquee items-center text-white font-bold tracking-widest text-sm">
        {/* Di-render dua kali untuk ilusi scrolling tak terbatas (butuh konfigurasi keyframes CSS untuk animasi gerak murni, disini kita susun berderet) */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span>{item}</span>
            <span className="mx-6 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;