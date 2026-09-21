import { Link } from 'react-router-dom';
import { profile } from '../data/content';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vintage-border mt-8">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-stone-500">
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="text-sm text-stone-400 hover:text-vintage-amber transition-colors"
          >
            Contact
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-stone-400 hover:text-vintage-amber transition-colors"
          >
            Resume
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
