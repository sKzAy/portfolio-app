import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] md:min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Decorative 2D background: gradient blobs + subtle grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)'
        }}
         />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_45%,rgba(0,0,0,0.6)_75%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Foreground content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-36">
        <div className="max-w-2xl">
    

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
           Hi I am <span className='text-blue-400'>Kazim Ali</span>
           <p className='text-lg'>A web developer from <span className='text-green-400'>Pakistan</span></p>
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
           I like to build useful applications for people, progamming is just a medium.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-teal-400/90 hover:bg-teal-300 text-black px-5 py-2.5 font-medium transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/25 hover:border-white/40 text-white px-5 py-2.5 font-medium transition">
              Contact Me
            </a>
            <div className="ml-2 inline-flex items-center gap-3">
              <a href="https://github.com/sKzAy" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition">
                <Github className="h-5 w-5" />
              </a>
              {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
