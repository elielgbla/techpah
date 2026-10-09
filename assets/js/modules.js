var DOMAINES={
 'reseaux':'Réseaux','developpement-web':'Développement web','developpement-desktop':'Développement desktop',
 'langages-programmation':'Langages de programmation','maintenance':'Maintenance','infrastructure-systemes':'Infrastructure et systèmes',
 'bases-de-donnees':'Bases de données','gestion-de-projet':'Gestion de projet','securite-informatique':'Sécurité informatique'};
var LV={debutant:'Débutant',intermediaire:'Intermédiaire',expert:'Expert'};
var MODULES=[
 ['osi-tcpip','reseaux','debutant','Modèle OSI et TCP/IP','Comprendre comment une donnée voyage d\'un poste à l\'autre, couche par couche.','6 h'],
 ['adressage-ip','reseaux','debutant','Adressage IP et sous-réseaux','Calculer des masques, découper un réseau, planifier un plan d\'adressage.','8 h'],
 ['routage-commutation','reseaux','intermediaire','Routage et commutation','VLAN, trunk, routage inter-VLAN, OSPF et configuration Cisco/MikroTik.','14 h'],
 ['vpn-wan','reseaux','expert','VPN, WAN et haute disponibilité','Tunnels IPsec, BGP de base, redondance et supervision des liens.','16 h'],
 ['html-css','developpement-web','debutant','HTML5 et CSS3','Structurer une page, mettre en forme, rendre le site responsive.','10 h'],
 ['javascript-dom','developpement-web','intermediaire','JavaScript et DOM','Variables, fonctions, événements, appels fetch et manipulation de la page.','14 h'],
 ['php-laravel','developpement-web','intermediaire','PHP et Laravel','Routes, contrôleurs, Eloquent, authentification et API REST.','20 h'],
 ['architecture-web','developpement-web','expert','Architecture web et performance','API, cache, files de tâches, déploiement et optimisation.','16 h'],
 ['interfaces-desktop','developpement-desktop','debutant','Concevoir une interface desktop','Maquetter, choisir les composants, gérer les événements utilisateur.','8 h'],
 ['csharp-dotnet','developpement-desktop','intermediaire','C# et .NET (WinForms/WPF)','Applications de gestion connectées à une base de données.','18 h'],
 ['packaging','developpement-desktop','expert','Packaging et déploiement','Installateurs, mises à jour automatiques, signature et journalisation.','8 h'],
 ['algorithmique','langages-programmation','debutant','Algorithmique','Variables, conditions, boucles, tableaux : penser avant de coder.','12 h'],
 ['python','langages-programmation','intermediaire','Python','Syntaxe, modules, fichiers, scripts d\'automatisation et API.','16 h'],
 ['poo','langages-programmation','intermediaire','Programmation orientée objet','Classes, héritage, polymorphisme, patrons de conception courants.','14 h'],
 ['hardware','maintenance','debutant','Composants et assemblage','Carte mère, RAM, stockage, alimentation : monter un poste.','6 h'],
 ['diagnostic-pannes','maintenance','intermediaire','Diagnostic et dépannage','Méthode de recherche de panne, outils de test, cas réels.','10 h'],
 ['windows-server','infrastructure-systemes','intermediaire','Windows Server et Active Directory','Domaine, GPO, DNS, DHCP, partages et droits.','18 h'],
 ['linux-admin','infrastructure-systemes','intermediaire','Administration Linux','Shell, utilisateurs, services, cron, Apache/Nginx, sécurisation.','18 h'],
 ['virtualisation-docker','infrastructure-systemes','expert','Virtualisation et Docker','Hyperviseurs, conteneurs, Compose, bases de l\'orchestration.','14 h'],
 ['modelisation','bases-de-donnees','debutant','Modélisation MCD/MLD','Du besoin au schéma : entités, associations, normalisation.','8 h'],
 ['sql','bases-de-donnees','intermediaire','SQL (MySQL et PostgreSQL)','Requêtes, jointures, sous-requêtes, vues, index, transactions.','14 h'],
 ['admin-bd','bases-de-donnees','expert','Administration de bases de données','Sauvegarde, restauration, droits, réplication, optimisation.','14 h'],
 ['cahier-des-charges','gestion-de-projet','debutant','Cahier des charges et UML','Recueillir les besoins, rédiger, modéliser cas d\'usage et classes.','10 h'],
 ['agile-scrum','gestion-de-projet','intermediaire','Agile et Scrum','Rôles, backlog, sprints, cérémonies et indicateurs.','8 h'],
 ['git-github','gestion-de-projet','debutant','Git et GitHub','Commits, branches, fusions, pull requests, travail en équipe.','6 h'],
 ['fondamentaux-securite','securite-informatique','debutant','Fondamentaux de la sécurité','Menaces, confidentialité/intégrité/disponibilité, bonnes pratiques.','6 h'],
 ['pare-feu-cryptographie','securite-informatique','intermediaire','Pare-feu et cryptographie','Règles de filtrage, chiffrement, certificats, TLS.','14 h'],
 ['pentest','securite-informatique','expert','Tests d\'intrusion éthiques','Reconnaissance, exploitation en laboratoire, rapport de vulnérabilités.','20 h']
];
(function(){
  var grid=document.getElementById('grid'),q=document.getElementById('q'),sel=document.getElementById('domaine'),
      btns=document.querySelectorAll('[data-level]'),count=document.getElementById('count'),empty=document.getElementById('empty'),level='';
  Object.keys(DOMAINES).forEach(function(k){var o=document.createElement('option');o.value=k;o.textContent=DOMAINES[k];sel.appendChild(o)});
  function render(){
    var t=q.value.trim().toLowerCase(),d=sel.value,n=0,h='';
    MODULES.forEach(function(m){
      if(d&&m[1]!==d)return; if(level&&m[2]!==level)return;
      if(t&&(m[3]+' '+m[4]).toLowerCase().indexOf(t)<0)return;
      n++;
      h+='<div class="col-md-6 col-lg-4"><a class="text-decoration-none" href="modules/'+m[1]+'.html#'+m[0]+'"><article class="card-tp">'
       +'<div class="d-flex justify-content-between mb-2"><span class="lvl lvl-'+m[2]+'">'+LV[m[2]]+'</span><small class="text-secondary"><i class="bi bi-clock"></i> '+m[5]+'</small></div>'
       +'<h3 class="h5">'+m[3]+'</h3><p class="text-secondary mb-2">'+m[4]+'</p><small class="text-secondary">'+DOMAINES[m[1]]+'</small></article></a></div>';
    });
    grid.innerHTML=h;count.textContent=n+(n>1?' modules':' module');empty.classList.toggle('d-none',n>0);
  }
  q.addEventListener('input',render);sel.addEventListener('change',render);
  btns.forEach(function(b){b.addEventListener('click',function(){
    level=b.getAttribute('data-level');
    btns.forEach(function(x){x.classList.remove('active')});b.classList.add('active');render();
  })});
  var p=new URLSearchParams(location.search).get('domaine');if(p&&DOMAINES[p])sel.value=p;
  render();
})();
