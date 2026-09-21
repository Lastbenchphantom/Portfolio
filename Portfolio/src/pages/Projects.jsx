import { projects } from '../data/content';

export default function Projects() {
  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
      <header className="max-w-3xl mb-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-vintage-amber/80 mb-4">
          $ ls ./projects
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-vintage-cream tracking-tight mb-6">
          Selected work
        </h1>
        <p className="text-lg text-stone-400 leading-relaxed">
          A mix of UI builds, utility experiments, and systems practice — each one a step toward
          sharper engineering judgment.
        </p>
      </header>

      <ul className="divide-y divide-vintage-border">
        {projects.map((project, index) => (
          <li key={project.title} className="group py-8 first:pt-0">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-vintage-amber/50 focus-visible:ring-offset-2 focus-visible:ring-offset-vintage-dark rounded"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-zinc-600 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-vintage-cream group-hover:text-vintage-amber transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
                <span className="font-mono text-xs text-zinc-500 md:pl-12">{project.year}</span>
              </div>
              <p className="text-stone-400 leading-relaxed max-w-2xl md:pl-12 mb-4">
                {project.blurb}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:pl-12">
                <span className="text-sm text-stone-500">
                  {project.stack.join(' · ')}
                </span>
                <span className="text-sm text-vintage-amber opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  View on GitHub →
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
