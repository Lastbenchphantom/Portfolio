import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import { profile } from '../data/content';
import SocialLinks from '../components/SocialLinks';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden page-enter">
      <Seo path="/" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
        }}
        aria-hidden
      />

      <div className="relative py-14 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-vintage-amber/90 mb-5 opacity-0 animate-[heroIn_0.7s_cubic-bezier(0.16,1,0.3,1)_0.05s_forwards]">
              CSE · IIUC · Chittagong
            </p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight text-vintage-cream mb-5 opacity-0 animate-[heroIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.15s_forwards]">
              {profile.name.split(' ')[0]}
              <span className="text-vintage-amber">.</span>
              <br />
              <span className="text-stone-300">{profile.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="text-xl md:text-2xl font-display font-light text-stone-300 mb-5 leading-snug max-w-xl opacity-0 animate-[heroIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.28s_forwards]">
              Building software with a touch of{' '}
              <span className="text-vintage-amber not-italic font-medium">classic precision</span>.
            </p>

            <p className="text-stone-400 text-base md:text-lg mb-4 leading-relaxed max-w-lg opacity-0 animate-[heroIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
              Full-stack developer crafting robust applications — from interfaces people enjoy using
              to PostgreSQL architectures that hold under pressure.
            </p>

            <p className="text-sm text-stone-500 mb-8 max-w-lg opacity-0 animate-[heroIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.46s_forwards]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-vintage-amber/80 mr-2">
                Now
              </span>
              {profile.now}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8 opacity-0 animate-[heroIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.52s_forwards]">
              <Link
                to="/projects"
                className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Explore Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-stone-700 text-vintage-cream font-medium rounded-lg hover:border-vintage-amber/50 hover:text-vintage-amber transition-all duration-300"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-5 opacity-0 animate-[heroIn_0.8s_cubic-bezier(0.16,1,0.3,1)_0.64s_forwards]">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">
                Find me
              </span>
              <SocialLinks iconClassName="h-[1.35rem] w-[1.35rem]" />
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-[heroIn_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-6 rounded-full bg-vintage-amber/10 blur-3xl opacity-60 group-hover:opacity-90 transition duration-700" />
              <div className="absolute -left-3 top-8 h-24 w-px bg-gradient-to-b from-transparent via-vintage-amber/50 to-transparent" />
              <div className="absolute -right-2 bottom-16 h-16 w-px bg-gradient-to-b from-transparent via-stone-500/40 to-transparent" />

              <div className="relative animate-[float_7s_ease-in-out_infinite]">
                <div className="relative overflow-hidden rounded-2xl border border-stone-800/80 bg-vintage-card shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
                  <img
                    src={profilePic}
                    alt={profile.name}
                    width={900}
                    height={675}
                    className="object-cover w-full h-[360px] sm:h-[420px] filter saturate-[0.88] contrast-[1.06] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-vintage-amber/90 mb-1">
                        Available for
                      </p>
                      <p className="text-sm text-vintage-cream">Internships &amp; collabs</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="relative mt-20 md:mt-28 max-w-3xl mx-auto opacity-0 animate-[heroIn_0.9s_cubic-bezier(0.16,1,0.3,1)_0.85s_forwards]"
          aria-label="Philosophy"
        >
          <div className="philosophy-glow absolute -inset-8 rounded-[2rem] pointer-events-none" aria-hidden />

          <div className="relative border border-stone-800/90 bg-vintage-card/40 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10">
            <div className="flex items-center gap-2 mb-7 select-none">
              <span className="h-2 w-2 rounded-full bg-stone-700" />
              <span className="h-2 w-2 rounded-full bg-stone-700" />
              <span className="h-2 w-2 rounded-full bg-vintage-amber/70" />
              <p className="ml-3 text-[11px] font-mono uppercase tracking-[0.22em] text-zinc-500">
                $ cat <span className="text-vintage-amber/90">philosophy.md</span>
                <span className="philosophy-caret ml-1 inline-block w-[0.55ch] bg-vintage-amber/80 align-[-1px]" />
              </p>
            </div>

            <blockquote className="relative text-left md:text-center">
              <span
                className="pointer-events-none absolute -top-3 left-0 md:left-1/2 md:-translate-x-[9rem] font-display text-5xl text-vintage-amber/15 leading-none select-none"
                aria-hidden
              >
                “
              </span>

              <p className="text-lg md:text-2xl font-display font-light italic leading-[1.75] text-zinc-500">
                <span className="philosophy-line philosophy-line--1">
                  Life is a{' '}
                  <em className="philosophy-term philosophy-term--accent">monolithic data structure</em>
                </span>{' '}
                <span className="philosophy-line philosophy-line--2">
                  trapped in a{' '}
                  <em className="philosophy-term">cyclic dependency</em>,
                </span>
                <br className="hidden md:block" />
                <span className="philosophy-line philosophy-line--3">
                  executing within an{' '}
                  <em className="philosophy-term">asynchronous event loop</em>,
                </span>
                <br className="hidden md:block" />
                <span className="philosophy-line philosophy-line--4">
                  with the runtime complexity of an{' '}
                  <em className="philosophy-term philosophy-term--final">NP-hard problem</em>.
                </span>
              </p>
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="philosophy-rule h-px w-0 bg-gradient-to-r from-transparent via-vintage-amber to-transparent" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
