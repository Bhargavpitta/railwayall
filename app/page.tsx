export default function Home() {
  const items = [
    {
      name: "Banaras Locomotive Works (BLW)",
      url: "https://banaraslocomotiveworks1.vercel.app/",
    },
    {
      name: "Rail Coach Factory, Kapurthala (RCF)",
      url: "https://railcoachfactory.vercel.app/",
    },
    {
      name: "Modern Coach Factory, Raebareli (MCF)",
      url: "https://moderncoachfactory2.vercel.app/",
    },
    {
      name: "Rail Wheel Plant, Bela (RWP)",
      url: "https://rail-wheel-plant2.vercel.app/",
    },
    {
      name: "Rail Land Development Authority (RLDA)",
      url: "https://raillanddevelopmentauthority1.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Rail India
          </h1>
          <p className="text-slate-400 text-lg">
            Access our railway manufacturing facilities
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <button className="w-full px-6 py-4 md:py-5 rounded-lg border border-slate-500/40 bg-transparent hover:bg-slate-700/30 text-white font-medium transition-all duration-300 hover:border-slate-400/70 hover:shadow-lg hover:shadow-slate-500/20 focus:outline-none focus:ring-2 focus:ring-slate-400/50">
                {item.name}
              </button>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-500 text-sm">
          <p>Click any button to navigate to the facility website</p>
        </div>
      </div>
    </main>
  );
}
