import { CheckCircle2, Send, Rocket, Trophy, Wifi, BedDouble, Utensils, MapPin, HelpCircle, ChevronDown, Sparkles, Users2, Lightbulb, BookOpenCheck, PartyPopper } from "lucide-react";

export default function ProcessFaq() {
  const steps = [
    { icon: Send, title: "Idea Submission" },
    { icon: BookOpenCheck, title: "Design Sprint" },
    { icon: Rocket, title: "Hackathon" },
    { icon: Trophy, title: "Pitch & Awards" },
  ];

  const expect = [
    { icon: Lightbulb, title: "Innovation", text: "Solve real challenges with creative tech." },
    { icon: Users2, title: "Mentorship", text: "Guidance from domain and product experts." },
    { icon: BookOpenCheck, title: "Learning", text: "Workshops and quick skill boosts." },
    { icon: Sparkles, title: "Prototype", text: "Ship a clean, testable MVP." },
    { icon: PartyPopper, title: "Fun", text: "Vibes, music, and maker energy." },
  ];

  const logistics = [
    { icon: MapPin, title: "Travel" },
    { icon: BedDouble, title: "Stay" },
    { icon: Utensils, title: "Meals" },
    { icon: Wifi, title: "Wi‑Fi" },
  ];

  const evaluation = [
    "Design",
    "Originality",
    "Technical Depth",
    "Usability",
    "Impact",
  ];

  const faqs = [
    { q: "Who can apply?", a: "Students and early professionals across India. Teams of 3–5 recommended." },
    { q: "Is it free?", a: "Yes. Selected participants receive on‑site access and basic logistics." },
    { q: "What should I bring?", a: "Laptop, chargers, valid ID, and your curiosity." },
    { q: "Can I apply solo?", a: "Yes. We'll help you form teams during kickoff." },
    { q: "What about IP?", a: "You own your work. Partners may offer incubation or pilot support." },
    { q: "Do I need a prior idea?", a: "Not mandatory. We share challenge prompts before the event." },
    { q: "Will there be mentors?", a: "Yes. Product, design, tech, and domain mentors throughout." },
    { q: "What's the selection criteria?", a: "Clarity of problem, feasibility, impact potential, and team skills." },
    { q: "Are there travel grants?", a: "Limited support may be available based on need and distance." },
    { q: "How do we submit?", a: "You'll get a portal link after selection; final pitch on‑site." },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Process */}
        <h3 className="text-2xl font-bold text-gray-900">Challenge Process</h3>
        <div className="mt-6">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-yellow-200 to-emerald-200 ring-1 ring-black/5">
                    <s.icon className="h-5 w-5 text-[#065F46]" />
                  </div>
                  <p className="font-semibold text-gray-900">{i + 1}\uFE0F\u20E3 {s.title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* What to expect */}
        <h3 className="mt-14 text-2xl font-bold text-gray-900">What to Expect</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {expect.map((e) => (
            <div key={e.title} className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
              <div className="flex items-start gap-3">
                <e.icon className="mt-0.5 h-5 w-5 text-[#00B37E]" />
                <div>
                  <p className="font-semibold text-emerald-900">{e.title}</p>
                  <p className="text-sm text-emerald-800/80">{e.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logistics */}
        <h3 className="mt-14 text-2xl font-bold text-gray-900">Logistics Support</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {logistics.map((l) => (
            <div key={l.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-3">
                <l.icon className="h-5 w-5 text-yellow-600" />
                <p className="font-semibold text-gray-900">{l.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation */}
        <h3 className="mt-14 text-2xl font-bold text-gray-900">Evaluation</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {evaluation.map((c) => (
            <div key={c} className="rounded-2xl bg-gradient-to-br from-yellow-100 to-emerald-100 p-5 ring-1 ring-black/5">
              <div className="flex items-center gap-2 text-gray-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                <p className="font-semibold">{c}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h3 className="mt-14 text-2xl font-bold text-gray-900">FAQs</h3>
        <div className="mt-6 divide-y divide-yellow-100 overflow-hidden rounded-2xl border border-yellow-200">
          {faqs.map((f, idx) => (
            <details key={idx} className={"group open:bg-yellow-50/40 transition"}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-gray-900 hover:bg-yellow-50/60">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className="h-5 w-5 text-yellow-600 transition group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
