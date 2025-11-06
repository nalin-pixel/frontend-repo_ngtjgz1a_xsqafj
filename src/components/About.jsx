import { Sparkles, Quote, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50/60 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About the Hackathon
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Square Hacks 2025 brings together bright minds to build human-centered solutions for
              Rural India. Over an intense 48 hours, teams ideate, prototype, and pitch practical tech
              that strengthens communities and opportunity.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-900 ring-1 ring-yellow-300/60">
                <Sparkles className="h-4 w-4" /> Purpose-driven creation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                <Users className="h-4 w-4" /> Human-centered design
              </span>
            </div>

            <div className="mt-8 rounded-2xl bg-white p-5 shadow ring-1 ring-black/5">
              <div className="flex items-start gap-3 text-gray-700">
                <Quote className="mt-1 h-5 w-5 text-[#00B37E]" />
                <p className="text-sm">
                  We celebrate ideas that are simple, scalable, and deeply grounded in local
                  realities — tech with purpose and heart.
                </p>
              </div>
            </div>
          </div>

          {/* Side Illustration */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-100 to-emerald-100 p-6">
              <svg className="h-full w-full" viewBox="0 0 640 480" fill="none">
                <defs>
                  <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFCC00" />
                    <stop offset="100%" stopColor="#00B37E" />
                  </linearGradient>
                </defs>
                <g stroke="url(#ag)" strokeWidth="2" opacity="0.8">
                  <path d="M40 360 C 140 320, 220 420, 320 380 S 500 420, 600 360" />
                  <path d="M40 320 C 140 280, 220 380, 320 340 S 500 380, 600 320" opacity="0.6" />
                  <circle cx="120" cy="260" r="22" fill="#FFFFFF" strokeWidth="3" />
                  <rect x="210" y="240" width="60" height="40" rx="8" fill="#FFFFFF" />
                  <circle cx="420" cy="230" r="28" fill="#FFFFFF" strokeWidth="3" />
                </g>
                <g className="text-gray-700" opacity="0.8">
                  <text x="90" y="260" fontSize="10" fill="#065F46">team</text>
                  <text x="215" y="255" fontSize="10" fill="#854D0E">idea</text>
                  <text x="410" y="225" fontSize="10" fill="#065F46">prototype</text>
                </g>
              </svg>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
