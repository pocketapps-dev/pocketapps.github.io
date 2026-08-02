/* PocketApps — shared layout loader
 * Loads header.html and footer.html partials and wires up the
 * dark/light theme toggle. Included on every page via <script defer>.
 */
document.addEventListener('DOMContentLoaded', async () => {
  // --- Header partial ---
  const headerEl = document.getElementById('header');
  if (headerEl) {
    try {
      const res = await fetch('header.html', { cache: 'no-store' });
      headerEl.innerHTML = await res.text();
    } catch (e) {
      console.error('Failed to load header:', e);
    }
  }

  // --- Footer partial ---
  const footerEl = document.getElementById('footer');
  if (footerEl) {
    try {
      const res = await fetch('footer.html', { cache: 'no-store' });
      footerEl.innerHTML = await res.text();
    } catch (e) {
      console.error('Failed to load footer:', e);
    }
  }

  // --- Theme toggle (single source of truth) ---
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) html.setAttribute('data-theme', saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
});
