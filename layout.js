/* PocketApps — shared layout loader
 * Loads header.html and footer.html partials, wires up the
 * dark/light theme toggle, manages the auth state in the navbar,
 * and shows the cookie consent banner.
 * Included on every page via <script defer>.
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

  // --- Auth state in navbar ---
  const navLogin = document.getElementById('nav-login');
  const navUser = document.getElementById('nav-user');
  const navUserEmail = document.getElementById('nav-user-email');
  const navLogout = document.getElementById('nav-logout');

  // Only run auth logic if the navbar has auth elements AND the Supabase SDK is loaded
  if (navLogin && navUser && navLogout && window.supabase) {
    const SUPABASE_URL = 'https://vlbhnlzqixmxtlpqsggd.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsYmhubHpxaXhteHRscHFzZ2dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwMDIwOTgsImV4cCI6MjEwMDU3ODA5OH0.dEW_iveXfysP6bH33zZvyMPYtv_Ci2qUO4WUvSJYBIw';
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    function updateNavbar(session) {
      if (session) {
        navLogin.classList.add('hidden');
        navUser.classList.remove('hidden');
        if (navUserEmail && session.user?.email) {
          navUserEmail.textContent = session.user.email;
        }
      } else {
        navLogin.classList.remove('hidden');
        navUser.classList.add('hidden');
      }
    }

    navLogout.addEventListener('click', async () => {
      await supabaseClient.auth.signOut();
      window.location.href = '/';
    });

    // Check existing session (only show user menu if session is valid)
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
      const expiresAt = session.expires_at;
      const now = Math.floor(Date.now() / 1000);
      if (expiresAt && expiresAt > now) {
        updateNavbar(session);
      } else {
        // Session expired — sign out
        await supabaseClient.auth.signOut();
        updateNavbar(null);
      }
    } else {
      updateNavbar(null);
    }

    // Listen for auth changes
    supabaseClient.auth.onAuthStateChange((event, session) => {
      updateNavbar(session);
    });
  }

  // --- Cookie consent banner ---
  const cookieConsent = localStorage.getItem('cookie-consent');
  if (!cookieConsent) {
    // Create and inject the banner
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <p>Utilizamos cookies para melhorar a tua experiência e garantir o funcionamento do site. Consulta a nossa <a href="/privacy" target="_blank" rel="noopener">Política de Privacidade</a>.</p>
        <div class="cookie-banner-actions">
          <button class="btn btn-secondary btn-sm" id="cookie-decline">Recusar</button>
          <button class="btn btn-primary btn-sm" id="cookie-accept">Aceitar</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'accepted');
      banner.remove();
    });
    document.getElementById('cookie-decline').addEventListener('click', () => {
      localStorage.setItem('cookie-consent', 'declined');
      banner.remove();
    });
  }
});