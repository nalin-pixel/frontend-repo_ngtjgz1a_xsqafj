import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/20 via-white to-[#00B37E]/10 pointer-events-none" />

      <svg className="absolute -top-10 left-0 w-[140%] h-[140%] opacity-30 text-[#00B37E]" viewBox="0 0 800 600" fill="none">
        <path d="M-50 200 C 150 100, 350 300, 550 200 S 850 300, 1050 200" stroke="currentColor" strokeWidth="2" strokeOpacity="0.15" />
        <path d="M-50 350 C 150 250, 350 450, 550 350 S 850 450, 1050 350" stroke="currentColor" strokeWidth="2" strokeOpacity="0.08" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#00B37E]/10 px-3 py-1 text-xs font-semibold text-[#00B37E] ring-1 ring-[#00B37E]/20">
              <Sparkles className="h-3.5 w-3.5" /> National Hackathon
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Square Hacks 2025 — <span className="text-[#00B37E]">Build for Rural India</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Reimagining Innovation. Reconnecting Roots.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-gray-700">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100/80 px-3 py-2 ring-1 ring-yellow-300/50">
                <Calendar className="h-4 w-4 text-yellow-600" /> 26–28 Dec 2025
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 ring-1 ring-emerald-200">
                <MapPin className="h-4 w-4 text-[#00B37E]" /> IIT Delhi
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-[#00B37E] px-6 py-3 text-white shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-1px] hover:bg-emerald-600"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#00B37E] ring-1 ring-[#00B37E]/30 hover:bg-emerald-50"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFCC00] to-[#00B37E] opacity-10" />
            <div className="relative grid h-full w-full place-items-center rounded-3xl bg-white/70 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur">
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-yellow-200 to-emerald-100 p-6">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 450" fill="none">
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFCC00" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#00B37E" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <g stroke="url(#grad)" strokeWidth="1.5" opacity="0.6">
                      <path d="M20 120 C 120 40, 240 200, 340 120 S 500 200, 580 120" />
                      <path d="M20 220 C 120 140, 240 300, 340 220 S 500 300, 580 220" opacity="0.7" />
                      <path d="M20 320 C 120 240, 240 400, 340 320 S 500 400, 580 320" opacity="0.5" />
                    </g>
                  </svg>
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="inline-flex max-w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-black/5">
                    AI x Rural Innovation
                  </div>
                  <p className="mt-3 max-w-sm text-sm text-gray-700">
                    Subtle animated vectors hint at networks, communities, and connected ideas across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
