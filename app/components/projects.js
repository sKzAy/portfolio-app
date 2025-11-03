import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Steam Nexus 25',
    description: 'A website for a college event attended by hundreds of people',
    tags: ['NextJS','Javacript', 'Tailwind', 'UI Libraries','Vercel'],
    link: 'https://steam-nexus25.vercel.app/',
  },
  {
    title: 'Your Quran',
    description: 'A website with the entire Quran,You can read, hear, search, add verses to favorites and even make your own notes!',
    tags: ['NextJS','Javascript', 'Neon-DB', 'Drizzle-ORM','Clerk Authentication','Tailwind','Al-Quran API','Vercel'],
    link: 'https://yourquran.vercel.app',
  },
];

function ProjectCard({ title, description, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/10  transition overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <ExternalLink className="h-4 w-4 text-white/50 group-hover:text-white/80 transition" />
        </div>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/20">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="h-px w-full  from-transparent via-white/10 to-transparent" />
      <div className="px-6 pb-5">
        <span className="text-xs text-black bg-teal-400 px-3 py-1 rounded-xl font-semibold
        hover:transition-all hover:bg-teal-600 hover:text-white transition-all duration-300
        hover:duration-300">Open project</span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 bg-neutral-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(32,32,32,0.6),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-white/70 max-w-2xl">A selection of recent work — from polished landing pages to robust product interfaces.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
