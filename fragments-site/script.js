/* ═══════════════════════════════════════════════════
   FRAGMENTS — script.js
   ═══════════════════════════════════════════════════ */

// ── 1. Scroll-Thread (goldene Linie links) ──────────
const threadFill  = document.getElementById('thread-fill');
const threadArrow = document.getElementById('thread-arrow');

function updateThread() {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  const pct      = total > 0 ? (scrolled / total) * 100 : 0;

  threadFill.style.height = pct + '%';
  threadArrow.style.top   = pct + '%';
}

// ── 2. Reveal on scroll ─────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // nur einmal
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => revealObserver.observe(el));

// ── 3. Nav-Dots aktiv markieren ─────────────────────
const chapters = document.querySelectorAll('.chapter');
const navDots  = document.querySelectorAll('.nav-dot');

const chapterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id.replace('chapter-', '');
      navDots.forEach(dot => dot.classList.remove('active'));
      const active = document.querySelector(`.nav-dot[data-chapter="${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

chapters.forEach(section => chapterObserver.observe(section));

// ── 4. Event listeners ──────────────────────────────
window.addEventListener('scroll', updateThread, { passive: true });
updateThread(); // initialer Aufruf
