import { Code, Wrench, Cpu, Database } from 'lucide-react';

const skills = [
  { icon: Code, title: 'Frontend', items: ['NextJS', 'Tailwind CSS','Shadcn','UI AIs'] },
  { icon: Cpu, title: 'Core', items: ['JavaScript (ES2023)', 'HTML5', 'CSS3',] },
  { icon: Database, title: 'Backend', items: ['Node.js', 'REST APIs', 'NeonDB', 'Clerk Authentication'] },
  { icon: Wrench, title: 'Tools', items: ['Git', 'Github', 'Vercel',] },
];

function SkillCard({ icon: Icon, title, items }) {
  return (
    <div className="rounded-xl border border-white/10 p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-teal-400/10 p-2 text-teal-300 border border-teal-400/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((it) => (
          <li key={it} className="leading-relaxed">{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 bg-neutral-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Technologies I use to design, develop, and ship quality software.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <SkillCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
