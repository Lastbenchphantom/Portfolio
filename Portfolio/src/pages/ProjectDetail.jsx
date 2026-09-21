import { Link, useParams } from 'react-router-dom';
import { getProject, projects } from '../data/content';
import Seo from '../components/Seo';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
        <Seo title="Project not found" path={`/projects/${slug}`} />
        <h1 className="font-display text-4xl text-vintage-cream mb-4">Project not found</h1>
        <p className="text-stone-400 mb-8">That case study doesn’t exist (yet).</p>
        <Link to="/projects" className="text-vintage-amber hover:text-amber-400 transition-colors">
          ← Back to projects
        </Link>
      </main>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
      <Seo
        title={project.title}
        description={project.blurb}
        path={`/projects/${project.slug}`}
      />

      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-vintage-amber transition-colors mb-10"
      >
        ← All projects
      </Link>

      <header className="max-w-3xl mb-14">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-vintage-amber/80">
            Case study · {project.year}
          </p>
          <span className="text-zinc-700">·</span>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            {project.role}
          </p>
        </div>
        <h1 className="font-display text-4xl md:text-6xl text-vintage-cream tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-8">{project.blurb}</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.stack.map((item) => (
            <span
              key={item}
              className="font-mono text-xs tracking-wide text-stone-400 border border-vintage-border px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 transition-colors"
          >
            View on GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-stone-700 text-vintage-cream font-medium rounded-lg hover:border-stone-500 transition-colors"
            >
              Live demo
            </a>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
        <div className="lg:col-span-7 space-y-12">
          <section>
            <h2 className="font-display text-2xl text-vintage-cream mb-4">Problem</h2>
            <p className="text-stone-400 leading-relaxed text-lg">{project.problem}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-vintage-cream mb-4">Approach</h2>
            <p className="text-stone-400 leading-relaxed text-lg">{project.approach}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-vintage-cream mb-4">Outcome</h2>
            <p className="text-stone-400 leading-relaxed text-lg">{project.outcome}</p>
          </section>
        </div>

        <aside className="lg:col-span-5">
          <div className="border border-vintage-border bg-vintage-card/40 p-6 md:p-8 lg:sticky lg:top-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-vintage-amber/80 mb-5">
              Highlights
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-stone-300 leading-relaxed">
                  <span className="text-vintage-amber mt-1 select-none" aria-hidden>
                    ›
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav className="border-t border-vintage-border pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to={`/projects/${prev.slug}`}
          className="group border border-vintage-border p-5 hover:border-vintage-amber/40 transition-colors"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Previous</p>
          <p className="font-display text-xl text-vintage-cream group-hover:text-vintage-amber transition-colors">
            {prev.title}
          </p>
        </Link>
        <Link
          to={`/projects/${next.slug}`}
          className="group border border-vintage-border p-5 hover:border-vintage-amber/40 transition-colors sm:text-right"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Next</p>
          <p className="font-display text-xl text-vintage-cream group-hover:text-vintage-amber transition-colors">
            {next.title}
          </p>
        </Link>
      </nav>
    </main>
  );
}
