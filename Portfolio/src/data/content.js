export const profile = {
  name: 'Zakaria Revan',
  handle: 'Lastbenchphantom',
  role: 'CSE Student · Full-Stack Developer',
  university: 'International Islamic University Chittagong (IIUC)',
  location: 'Chittagong, Bangladesh',
  email: 'zakariazak13913@gmail.com',
  github: 'https://github.com/Lastbenchphantom',
  linkedin: 'https://www.linkedin.com/in/md-zakaria-197180361/',
  resume: '/resume.pdf',
  tagline: 'Building software with a touch of classic precision.',
  now: 'Ship full-stack projects, sharpen DSA in C++, and refine this portfolio.',
  bio: `I’m Zakaria — a Computer Science student and builder who cares about clean interfaces, solid backends, and systems that hold up under real use. I move between frontend craft, PostgreSQL architectures, and lower-level problem solving in C++.`,
  focus: [
    'Full-stack web applications',
    'Database design with PostgreSQL',
    'DSA and systems thinking in C++',
    'Security-aware development habits',
  ],
};

export const skills = [
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C++', 'Java', 'HTML', 'CSS', 'SQL'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    group: 'Backend & Data',
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Auth flows'],
  },
  {
    group: 'Tools & OS',
    items: ['Git', 'GitHub', 'Arch Linux', 'Linux CLI'],
  },
];

export const projects = [
  {
    slug: 'payoo-mobile-bank',
    title: 'Payoo Mobile Bank',
    blurb:
      'A mobile banking UI flow focused on clear money movements, account actions, and a practical fintech interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Lastbenchphantom/Payoo-Mobile-Bank',
    live: null,
    year: '2026',
    role: 'Solo developer',
    problem:
      'Banking apps often bury core actions behind clutter. I wanted a clean mobile-first money flow that feels trustworthy and fast to scan.',
    approach:
      'Mapped the main user paths first — login, balance glance, send money, and transaction history — then built modular sections with reusable layout patterns and clear visual hierarchy.',
    outcome:
      'A polished UI prototype that demonstrates product thinking, frontend structure, and attention to fintech interaction details.',
    highlights: [
      'Mobile-first layout with readable money states',
      'Separated screens for core banking actions',
      'Emphasis on clarity over decorative UI noise',
    ],
  },
  {
    slug: 'tools-project',
    title: 'Tools Project',
    blurb:
      'A growing set of small utility tools written in JavaScript — practical scripts and UI helpers built while sharpening day-to-day engineering habits.',
    stack: ['JavaScript'],
    href: 'https://github.com/Lastbenchphantom/tools_project',
    live: null,
    year: '2025',
    role: 'Solo developer',
    problem:
      'Learning sticks when tools solve tiny real problems. I needed a sandbox for utilities I actually reach for while coding.',
    approach:
      'Built small, focused JavaScript tools instead of one oversized app — each utility scoped to a single job so the code stays readable and easy to extend.',
    outcome:
      'A personal toolkit repo that tracks progress in JS fundamentals, DOM work, and practical problem decomposition.',
    highlights: [
      'Small utilities with clear single responsibilities',
      'Incremental practice toward stronger JS fluency',
      'Repo structure meant for continuous expansion',
    ],
  },
  {
    slug: 'amazon-clone',
    title: 'Amazon Clone',
    blurb:
      'An HTML/CSS recreation of a large e-commerce layout to practice structure, spacing, and product-grid composition.',
    stack: ['HTML', 'CSS'],
    href: 'https://github.com/Lastbenchphantom/amazon_clone',
    live: null,
    year: '2025',
    role: 'Solo developer',
    problem:
      'Complex storefronts teach layout discipline. I wanted to recreate a dense e-commerce shell to master alignment, grids, and visual rhythm.',
    approach:
      'Broke the page into header, navigation, product grid, and footer regions. Focused on spacing systems and reusable CSS patterns rather than frameworks.',
    outcome:
      'Stronger intuition for commercial UI structure and how large product catalogs stay scannable.',
    highlights: [
      'Semantic HTML sectioning',
      'Product-grid composition practice',
      'Pixel-conscious spacing and hierarchy',
    ],
  },
  {
    slug: 'cpp-dsa',
    title: 'C++ DSA Practice',
    blurb:
      'Ongoing data structures and algorithms work in C++ — building intuition for complexity, memory, and problem decomposition.',
    stack: ['C++', 'DSA'],
    href: 'https://github.com/Lastbenchphantom/c-',
    live: null,
    year: '2025',
    role: 'Solo learner / builder',
    problem:
      'Interview- and systems-ready thinking needs deliberate DSA practice — not just watching solutions.',
    approach:
      'Solving problems in C++ with attention to complexity, edge cases, and cleaner implementations over time. Treating each problem as a design exercise.',
    outcome:
      'A living practice archive that backs up coursework with tangible problem-solving reps.',
    highlights: [
      'C++ implementations of core DSA patterns',
      'Focus on complexity and edge cases',
      'Continuous practice tied to job prep',
    ],
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    blurb:
      'This site — a React + Vite portfolio with a vintage dark visual system, route-based sections, and intentional motion.',
    stack: ['React', 'Vite', 'Tailwind'],
    href: 'https://github.com/Lastbenchphantom/Portfolio',
    live: null,
    year: '2026',
    role: 'Designer + developer',
    problem:
      'A personal site should communicate craft immediately — who I am, what I build, and how I think — without feeling like a template.',
    approach:
      'Designed a vintage dark system with amber accents, expressive typography, route-based case studies, and motion that supports hierarchy instead of noise.',
    outcome:
      'A living portfolio that doubles as a product: navigation, case studies, contact, and performance-minded assets.',
    highlights: [
      'Custom visual system and typography',
      'Case-study project pages',
      'Contact flow, SEO meta, and optimized imagery',
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export const academics = {
  degree: 'B.Sc. in Computer Science & Engineering',
  institution: 'International Islamic University Chittagong (IIUC)',
  status: 'Undergraduate student',
  summary:
    'Studying CSE with a bias toward software engineering, databases, and systems. Outside lectures I practice by shipping UI, solving DSA problems, and learning how secure, maintainable applications are actually built.',
  coursework: [
    {
      title: 'Programming Fundamentals',
      detail: 'C/C++ foundations, problem solving, and structured thinking.',
    },
    {
      title: 'Data Structures & Algorithms',
      detail: 'Arrays, trees, graphs, complexity analysis, and contest-style practice.',
    },
    {
      title: 'Web Development',
      detail: 'Modern frontend stacks, component architecture, and API integration.',
    },
    {
      title: 'Databases',
      detail: 'Relational modeling, SQL, and PostgreSQL-oriented application design.',
    },
  ],
  milestones: [
    {
      label: 'Now',
      title: 'Shipping full-stack projects',
      detail: 'React interfaces, backend flows, and database-backed features.',
    },
    {
      label: 'Focus',
      title: 'Job-prep sprint',
      detail: 'DSA depth, system-design habits, and stronger portfolio case studies.',
    },
    {
      label: 'Base',
      title: 'CSE core',
      detail: 'University coursework paired with Arch Linux daily-driving and open-source practice.',
    },
  ],
};
