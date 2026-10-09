// À MODIFIER : tes coordonnées réelles
var CONFIG = {
  email: 'elielgbla@gmail.com',   // ton adresse e-mail
  whatsapp: '2250767795602'      // numéro international, sans + ni espaces (225 = Côte d'Ivoire)
};

(function () {
  var f = document.getElementById('form');
  var link = document.getElementById('mail-link');
  if (link) { link.href = 'mailto:' + CONFIG.email; link.textContent = CONFIG.email; }

  function send(kind) {
    f.classList.add('was-validated');
    if (!f.checkValidity()) return;

    var nom = document.getElementById('nom').value.trim();
    var email = document.getElementById('email').value.trim();
    var sujet = document.getElementById('sujet').value;
    var message = document.getElementById('message').value.trim();
    var corps = 'Bonjour,\n\n' + message + '\n\n' + nom + ' (' + email + ')';

    if (kind === 'mail') {
      location.href = 'mailto:' + CONFIG.email +
        '?subject=' + encodeURIComponent('[TechPath] ' + sujet) +
        '&body=' + encodeURIComponent(corps);
    } else {
      window.open('https://wa.me/' + CONFIG.whatsapp +
        '?text=' + encodeURIComponent('[' + sujet + '] ' + corps), '_blank', 'noopener');
    }
  }

  document.getElementById('send-mail').addEventListener('click', function () { send('mail'); });
  document.getElementById('send-wa').addEventListener('click', function () { send('wa'); });
  f.addEventListener('submit', function (e) { e.preventDefault(); send('mail'); });
})();