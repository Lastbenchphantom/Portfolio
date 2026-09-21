import { profile } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vintage-border mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-stone-500">
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-stone-400 hover:text-vintage-amber transition-colors"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-400 hover:text-vintage-amber transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
