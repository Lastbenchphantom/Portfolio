import { useState } from 'react';
import { profile } from '../data/content';
import SocialLinks from '../components/SocialLinks';
import Seo from '../components/Seo';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <main className="min-h-screen py-12 px-6 max-w-6xl mx-auto page-enter">
      <Seo
        title="Contact"
        description={`Get in touch with ${profile.name} for internships, collaborations, or project conversations.`}
        path="/contact"
      />

      <header className="max-w-3xl mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-vintage-amber/80 mb-4">
          $ mail zakaria
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-vintage-cream tracking-tight mb-6">
          Let’s build something
        </h1>
        <p className="text-lg text-stone-400 leading-relaxed">
          Open to internships, collaborations, and thoughtful project chats. Send a note — I’ll get
          back as soon as I can.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <form onSubmit={onSubmit} className="lg:col-span-7 space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={onChange}
              className="w-full bg-transparent border border-vintage-border px-4 py-3 text-vintage-cream placeholder:text-zinc-600 focus:outline-none focus:border-vintage-amber/60 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={onChange}
              className="w-full bg-transparent border border-vintage-border px-4 py-3 text-vintage-cream placeholder:text-zinc-600 focus:outline-none focus:border-vintage-amber/60 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              className="w-full bg-transparent border border-vintage-border px-4 py-3 text-vintage-cream placeholder:text-zinc-600 focus:outline-none focus:border-vintage-amber/60 transition-colors resize-y min-h-[10rem]"
              placeholder="What are you working on?"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 bg-vintage-amber text-stone-950 font-medium rounded-lg hover:bg-amber-400 transition-colors"
            >
              Send message
            </button>
            {status === 'error' && (
              <p className="text-sm text-rose-400">Please fill in all fields.</p>
            )}
            {status === 'sent' && (
              <p className="text-sm text-emerald-400">Opening your email client…</p>
            )}
          </div>
        </form>

        <aside className="lg:col-span-5 space-y-8">
          <div className="border border-vintage-border p-6 md:p-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-vintage-amber/80 mb-4">
              Direct
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="block text-vintage-cream hover:text-vintage-amber transition-colors mb-3 break-all"
            >
              {profile.email}
            </a>
            <p className="text-stone-500 text-sm mb-6">{profile.location}</p>
            <SocialLinks />
          </div>

          <div className="border border-vintage-border p-6 md:p-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-vintage-amber/80 mb-4">
              Resume
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Prefer a one-pager? Download the latest résumé PDF.
            </p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-5 py-2.5 border border-stone-700 text-vintage-cream text-sm font-medium rounded-lg hover:border-vintage-amber/50 hover:text-vintage-amber transition-colors"
            >
              Download resume
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
