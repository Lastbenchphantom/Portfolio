import { useEffect } from 'react';
import { profile } from '../data/content';

const SITE_URL = typeof window !== 'undefined' ? window.location.origin : '';

export default function Seo({
  title,
  description = `${profile.name} — CSE student and full-stack developer building software with classic precision.`,
  path = '/',
  image = '/og.jpg',
}) {
  const fullTitle = title ? `${title} · ${profile.name}` : `${profile.name} — Portfolio`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', `${SITE_URL}${image}`);
    setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${path}`);
    setMeta('meta[name="twitter:title"]', 'content', fullTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', `${SITE_URL}${image}`);
  }, [fullTitle, description, path, image]);

  return null;
}
