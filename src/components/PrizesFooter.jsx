import { Award, Users, Megaphone, Factory, Handshake, Star } from "lucide-react";

export default function PrizesFooter() {
  const prizes = [
    { icon: Award, title: "Cash Prizes" },
    { icon: Users, title: "Mentorship" },
    { icon: Megaphone, title: "Visibility" },
    { icon: Factory, title: "Incubation" },
    { icon: Handshake, title: "Pilot Opportunities" },
  ];

  const stats = [
    { label: "500+ Applicants" },
    { label: "48h Sprint" },
    { label: "25+ Mentors" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Prizes */}
        <h3 className="text-2xl font-bold text-gray-900">Prizes & Highlights</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {prizes.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-yellow-200 to-emerald-200 ring-1 ring-black/5">
                  <p.icon className="h-5 w-5 text-[#065F46]" />
                </div>
                <p className="font-semibold text-gray-900">{p.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-10 rounded-2xl bg-[#FFCC00] px-6 py-6 text-gray-900 shadow-sm">
          <ul className="flex flex-wrap items-center justify-center gap-6 font-semibold">
            {stats.map((s) => (
              <li key={s.label} className="inline-flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-900" /> {s.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 bg-[#065F46] py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm">© 2025 Square Hacks · IIT Delhi</p>
            <div className="flex items-center gap-3">
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M21 5.92a7.38 7.38 0 0 1-2.12.58 3.71 3.71 0 0 0 1.63-2.05 7.41 7.41 0 0 1-2.35.9 3.69 3.69 0 0 0-6.3 3.37A10.48 10.48 0 0 1 3.15 4.6a3.68 3.68 0 0 0 1.14 4.92 3.67 3.67 0 0 1-1.67-.46v.05a3.7 3.7 0 0 0 2.96 3.62 3.7 3.7 0 0 1-1.66.06 3.7 3.7 0 0 0 3.44 2.56A7.4 7.4 0 0 1 3 17.29 10.46 10.46 0 0 0 8.66 19c6.29 0 9.73-5.21 9.73-9.73l-.01-.44A6.98 6.98 0 0 0 21 5.92z"/></svg>
              </a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zm7 0h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V24h-4v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V24h-4V8.5z"/></svg>
              </a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.3 1.3.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.3 1.3-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.3-1.3.5-.3 1.2-.5 2.4-.6 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 0S4.4 0 3.1.1C1.8.2 1 .4.3.7.1.8 0 1 0 1.2 0 1.9 0 2.7.1 4c.1 1.3.1 1.7.1 5s0 3.7-.1 5c-.1 1.3-.1 2.1-.2 2.8-.1.2 0 .4.2.5.7.4 1.5.6 2.8.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.1-.3 2.8-.7.2-.1.3-.3.2-.5-.1-.7-.2-1.5-.2-2.8-.1-1.3-.1-1.7-.1-5s0-3.7.1-5c.1-1.3.1-2.1.2-2.8.1-.2 0-.4-.2-.5-.7-.4-1.5-.6-2.8-.7C15.7 0 15.3 0 12 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
