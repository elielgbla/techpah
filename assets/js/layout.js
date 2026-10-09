(function () {
  var b = document.body,
      root = b.getAttribute('data-root') || '',
      active = b.getAttribute('data-active') || '';

  function item(href, label, key) {
    return '<li class="nav-item"><a class="nav-link' + (active === key ? ' active' : '') +
           '" href="' + root + href + '">' + label + '</a></li>';
  }

  var nav =
    '<nav class="navbar navbar-expand-lg navbar-dark navbar-tp fixed-top"><div class="container">' +
    '<a class="navbar-brand brand-mark" href="' + root + 'index.html">Tech<span>Path</span></a>' +
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Ouvrir le menu"><span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">' +
    item('index.html', 'Accueil', 'accueil') +
    item('modules.html', 'Modules', 'modules') +
    item('a-propos.html', 'À propos', 'apropos') +
    '<li class="nav-item"><a class="btn btn-orange btn-sm ms-lg-2" href="' + root + 'contact.html">Nous contacter</a></li>' +
    '</ul></div></div></nav>';

  var foot =
    '<footer class="site-footer"><div class="container"><div class="row g-4">' +
    '<div class="col-lg-5"><div class="brand-mark h4">Tech<span>Path</span></div>' +
    '<p>Des modules d\'informatique clairs, du premier pas jusqu\'à l\'expertise, pour apprendre à son rythme.</p></div>' +
    '<div class="col-6 col-lg-3"><h3 class="h6 text-white">Explorer</h3><ul class="list-unstyled">' +
    '<li><a href="' + root + 'modules.html">Tous les modules</a></li>' +
    '<li><a href="' + root + 'modules/reseaux.html">Réseaux</a></li>' +
    '<li><a href="' + root + 'modules/developpement-web.html">Développement web</a></li>' +
    '<li><a href="' + root + 'modules/securite-informatique.html">Sécurité</a></li></ul></div>' +
    '<div class="col-6 col-lg-4"><h3 class="h6 text-white">Le site</h3><ul class="list-unstyled">' +
    '<li><a href="' + root + 'a-propos.html">À propos</a></li>' +
    '<li><a href="' + root + 'contact.html">Contact</a></li>' +
    '<li><a href="' + root + 'mentions-legales.html">Mentions légales</a></li></ul></div>' +
    '</div><hr class="border-secondary"><small>© <span id="year"></span> TechPath. Tous droits réservés.</small></div></footer>';

  var n = document.getElementById('site-nav'), f = document.getElementById('site-footer');
  if (n) n.outerHTML = nav;
  if (f) f.outerHTML = foot;
})();