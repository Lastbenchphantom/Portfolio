import { Link } from 'react-router-dom';
import { profile, skills } from '../data/content';

export default function About() {
  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
      <header className="max-w-3xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-vintage-amber/80 mb-4">
          $ whoami
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-vintage-cream tracking-tight mb-6">
          {profile.name}
        </h1>
        <p className="text-lg text-stone-400 leading-relaxed">{profile.bio}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="font-display text-2xl text-vintage-cream mb-4">What I care about</h2>
          <ul className="space-y-3">
            {profile.focus.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-stone-400 leading-relaxed border-b border-vintage-border/60 pb-3"
              >
                <span className="text-vintage-amber mt-1 select-none" aria-hidden>
                  ›
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Based in
            </h3>
            <p className="text-vintage-cream">{profile.location}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Studying
            </h3>
            <p className="text-vintage-cream">{profile.university}</p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Contact
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="text-vintage-amber hover:text-amber-400 transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-vintage-cream transition-colors"
              >
                github.com/{profile.handle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-vintage-cream mb-8">Toolkit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((skill) => (
            <div key={skill.group}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-vintage-amber/80 mb-4">
                {skill.group}
              </h3>
              <p className="text-stone-300 leading-relaxed">{skill.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-vintage-border pt-10 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 transition-colors"
        >
          See projects
        </Link>
        <Link
          to="/academics"
          className="px-6 py-3 border border-stone-700 text-vintage-cream font-medium rounded-lg hover:border-stone-500 transition-colors"
        >
          Academics
        </Link>
      </section>
    </main>
  );
}
