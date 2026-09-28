# Portfolio — David Rhonel GOGAN (GDR.dev)

Site statique multi-pages, bilingue (FR/EN), prêt à déployer.

## Structure
- index.html, about.html, services.html, projects.html, cv.html, blog.html, contact.html
- css/, js/, images/, fonts/ : assets du site
- assets/CV_David_Rhonel_GOGAN.pdf : CV téléchargeable depuis la page cv.html

## Langue FR/EN
Le bouton "EN/FR" dans le menu bascule la langue de tout le site (mémorisée dans le navigateur).

## Contact form (EmailJS)
Le formulaire de contact utilise la configuration EmailJS déjà en place
(service_c3z4svb / template_6vzkzpy / clé publique XufvEaj9xbtpv9C6U) — ne pas la modifier
sauf si vous recréez un compte EmailJS.

## WhatsApp
Le bouton WhatsApp (menu + bouton flottant) pointe vers +229 50 48 90 89.
Pour le changer : chercher "22950489089" dans js/gen (ou directement dans le HTML des pages)
et remplacer par le nouveau numéro, au format international sans "+" ni espaces.

## Déploiement
Voir le tutoriel Vercel fourni séparément. En résumé : ce dossier peut être déployé tel quel
(site 100% statique, aucune build nécessaire).
