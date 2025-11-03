import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contacts';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Kazim Ali</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-1.5 text-sm">Contact</a>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact/>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Kazim Ali. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
