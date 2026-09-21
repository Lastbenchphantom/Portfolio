import { Link } from 'react-router-dom';
import { academics, profile } from '../data/content';
import Seo from '../components/Seo';

export default function Academics() {
  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
      <Seo
        title="Academics"
        description={academics.summary}
        path="/academics"
      />
      <header className="max-w-3xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-vintage-amber/80 mb-4">
          $ cat academics.log
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-vintage-cream tracking-tight mb-6">
          Academics
        </h1>
        <p className="text-lg text-stone-400 leading-relaxed">{academics.summary}</p>
      </header>

      <section className="mb-20 pb-10 border-b border-vintage-border">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
          {academics.status}
        </p>
        <h2 className="font-display text-2xl md:text-3xl text-vintage-cream mb-2">
          {academics.degree}
        </h2>
        <p className="text-vintage-amber">{academics.institution}</p>
        <p className="text-stone-500 mt-2">{profile.location}</p>
      </section>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-vintage-cream mb-8">Core focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {academics.coursework.map((course) => (
            <article key={course.title}>
              <h3 className="text-vintage-cream text-lg mb-2">{course.title}</h3>
              <p className="text-stone-400 leading-relaxed">{course.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-display text-2xl text-vintage-cream mb-8">Trajectory</h2>
        <ol className="space-y-8">
          {academics.milestones.map((item) => (
            <li key={item.title} className="grid grid-cols-[4.5rem_1fr] gap-4 md:gap-8">
              <span className="font-mono text-xs uppercase tracking-widest text-vintage-amber pt-1">
                {item.label}
              </span>
              <div>
                <h3 className="text-vintage-cream text-lg mb-1">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-vintage-border pt-10 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 transition-colors"
        >
          Browse projects
        </Link>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-stone-700 text-vintage-cream font-medium rounded-lg hover:border-stone-500 transition-colors"
        >
          GitHub profile
        </a>
      </section>
    </main>
  );
}
