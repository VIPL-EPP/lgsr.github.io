document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.project-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('#nav-links');
  const topButton = document.querySelector('.scroll-to-top');
  const copyButton = document.querySelector('[data-copy-bibtex]');
  const bibtex = document.querySelector('#bibtex-code');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const closeNavigation = () => {
    navLinks?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.toggle('is-open') ?? false;
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('click', (event) => {
    if (nav && !nav.contains(event.target)) closeNavigation();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });

  const updateTopButton = () => {
    topButton?.classList.toggle('is-visible', window.scrollY > 480);
  };

  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();

  topButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  copyButton?.addEventListener('click', async () => {
    const citation = bibtex?.textContent.trim() ?? '';
    if (!citation || !navigator.clipboard?.writeText) return;

    try {
      await navigator.clipboard.writeText(citation);
      copyButton.textContent = 'Copied';
      window.setTimeout(() => {
        copyButton.textContent = 'Copy BibTeX';
      }, 1600);
    } catch {
      copyButton.textContent = 'Copy unavailable';
    }
  });

  if ('IntersectionObserver' in window) {
    const sectionLinks = new Map(
      [...document.querySelectorAll('.nav-links a[href^="#"]')]
        .map((link) => [link.getAttribute('href').slice(1), link]),
    );

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      sectionLinks.forEach((link, id) => link.classList.toggle('is-active', id === visible.target.id));
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] });

    sectionLinks.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }
});
