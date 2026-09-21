import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';
import { profile } from '../data/content';

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-vintage-amber/80 mb-4">
            CSE · IIUC · Chittagong
          </p>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-vintage-cream mb-4">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-6 leading-snug">
            Building software with a touch of{' '}
            <span className="text-vintage-amber">classic precision</span>.
          </p>
          <p className="text-stone-400 text-lg mb-8 leading-relaxed">
            Full-stack developer and AI enthusiast crafting robust applications from frontend
            interfaces to PostgreSQL database architectures.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 transition-colors"
            >
              Explore Projects
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-stone-700 text-vintage-cream font-medium rounded-lg hover:border-stone-500 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="relative group flex justify-center">
          <div className="absolute -inset-1 bg-gradient-to-br from-vintage-amber/40 via-transparent to-stone-800/80 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-700" />
          <div className="relative bg-vintage-card p-2 rounded-xl border border-stone-800">
            <img
              src={profilePic}
              alt={profile.name}
              className="rounded-lg object-cover w-full max-w-md h-[400px] filter saturate-[0.9] contrast-[1.05]"
            />
          </div>
        </div>
      </div>

      <div className="relative group mt-16 max-w-3xl mx-auto text-center">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000" />

        <div className="relative pb-6 transition-all duration-500">
          <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 select-none animate-[fadeIn_1s_ease-out_forwards]">
            $ cat <span className="text-amber-500/80">philosophy.md</span>
          </h4>

          <p className="text-lg md:text-2xl font-display font-light italic leading-relaxed text-zinc-400 selection:bg-amber-500/20">
            &ldquo;Life is a{' '}
            <span className="inline-block opacity-0 animate-[reveal_1.5s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards] text-amber-400/90 font-medium not-italic transition-colors duration-500 group-hover:text-amber-400">
              monolithic data structure
            </span>{' '}
            trapped in a{' '}
            <span className="inline-block opacity-0 animate-[reveal_1.5s_cubic-bezier(0.16,1,0.3,1)_2.0s_forwards] text-zinc-200 font-medium not-italic">
              cyclic dependency
            </span>
            , <br className="hidden md:inline" />
            executing within an{' '}
            <span className="inline-block opacity-0 animate-[reveal_1.5s_cubic-bezier(0.16,1,0.3,1)_3.4s_forwards] text-zinc-200 font-medium not-italic">
              asynchronous event loop
            </span>
            , <br className="hidden md:inline" />
            with the runtime complexity of an{' '}
            <span className="inline-block opacity-0 animate-[reveal_1.5s_cubic-bezier(0.16,1,0.3,1)_4.8s_forwards] text-zinc-200 font-medium not-italic">
              NP-hard problem
            </span>
            .&rdquo;
          </p>

          <div
            className="w-12 h-[2px] bg-amber-500/20 mx-auto mt-6 transition-all duration-700 group-hover:w-32 group-hover:bg-amber-500 animate-[lineWidth_1.5s_ease-out_6.2s_forwards]"
            style={{ width: '0px' }}
          />
        </div>
      </div>
    </div>
  );
}
