import { Mail, Github, Linkedin } from 'lucide-react';
import CopyButton from './button';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 bg-neutral-950 text-white">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s work together</h2>
          <p className="mt-2 text-white/70">Have a question or a project in mind? I’d love to hear about it.</p>
        </div>
        <div>
            <h2 className='w-fit mx-auto'><CopyButton/></h2>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://github.com/sKzAy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
            <Github className="h-5 w-5" /> GitHub
          </a>
          <span className="text-white/20">•</span>
          {/* <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-white">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a> */}
        </div>
      </div>
    </section>
  );
}
