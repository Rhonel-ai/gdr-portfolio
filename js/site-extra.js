(function () {
  // ---- language toggle (FR default / EN) ----
  var root = document.documentElement;
  var savedLang = localStorage.getItem('siteLang');
  if (savedLang === 'en') { root.classList.add('lang-en'); }

  function updateLangButtons() {
    var isEn = root.classList.contains('lang-en');
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = isEn ? 'FR' : 'EN';
      btn.setAttribute('aria-label', isEn ? 'Switch to French' : 'Passer en anglais');
    });
    root.setAttribute('lang', isEn ? 'en' : 'fr');
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateLangButtons();
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        root.classList.toggle('lang-en');
        localStorage.setItem('siteLang', root.classList.contains('lang-en') ? 'en' : 'fr');
        updateLangButtons();
      });
    });

    // mark active nav link based on current page
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link, .footer-menu-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.split('#')[0] === current) {
        link.classList.add('is-active');
      }
    });
  });
})();
