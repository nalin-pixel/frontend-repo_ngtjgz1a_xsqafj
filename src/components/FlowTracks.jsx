import { ArrowRight, HeartHandshake, Lightbulb, Link2, Wrench, Leaf, Stethoscope, GraduationCap, HandCoins } from "lucide-react";

export default function FlowTracks() {
  const objectives = [
    { icon: Lightbulb, label: "Empower Innovators" },
    { icon: HeartHandshake, label: "Human-Centered Design" },
    { icon: Link2, label: "Build Connections" },
    { icon: Wrench, label: "Prototype for Change" },
    { icon: Leaf, label: "Celebrate Youth" },
  ];

  const themes = [
    { icon: Leaf, title: "Sustainability" },
    { icon: Stethoscope, title: "Rural Health" },
    { icon: GraduationCap, title: "Education & Skills" },
    { icon: HandCoins, title: "Livelihoods & Inclusion" },
    { icon: Wrench, title: "AgriTech & Water" },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Objectives Flow */}
        <h3 className="text-2xl font-bold text-gray-900">Key Objectives</h3>
        <div className="mt-6 overflow-x-auto">
          <ol className="flex min-w-[720px] items-center gap-6">
            {objectives.map((o, idx) => (
              <li key={o.label} className="relative flex items-center">
                <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-200">
                  <o.icon className="h-5 w-5 text-[#00B37E]" />
                  <span className="text-sm font-semibold text-emerald-900">{o.label}</span>
                </div>
                {idx < objectives.length - 1 && (
                  <ArrowRight className="ml-4 h-5 w-5 shrink-0 text-yellow-500" />
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Themes Grid */}
        <h3 className="mt-14 text-2xl font-bold text-gray-900">Themes / Tracks</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {themes.map((t) => (
            <div key={t.title} className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-yellow-200 to-emerald-200 ring-1 ring-black/5">
                  <t.icon className="h-5 w-5 text-[#065F46]" />
                </div>
                <p className="font-semibold text-gray-900">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
