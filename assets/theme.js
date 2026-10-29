// Theme toggle for the inner pages; shares its saved choice with the pond page.
(() => {
  const btn = document.getElementById('theme');
  function setTheme(name) {
    document.documentElement.dataset.theme = name;
    btn.setAttribute('aria-label', name === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    try { localStorage.setItem('pond-theme-v2', name); } catch {}
  }
  btn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  let saved = null;
  try { saved = localStorage.getItem('pond-theme-v2'); } catch {}
  setTheme(saved || 'dark');
})();
