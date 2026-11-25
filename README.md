# Shark Gym Monastir — site officiel

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide React.

## Lancer le projet

```bash
npm install
npm run dev       # développement : http://localhost:5173
npm run build     # version de production dans /dist
npm run preview   # prévisualiser le build
```

## Modifier le contenu

Tout se trouve dans **`src/data/site.js`** :

| Bloc         | Contenu                                                       |
|--------------|---------------------------------------------------------------|
| `site`       | nom, téléphone, adresse, Instagram, Google Maps               |
| `hero`       | sous-titre, photo principale                                  |
| `about`      | texte, 4 points forts, 2 photos                               |
| `spaces`     | les 4 espaces (titre, texte, photo)                           |
| `family`     | texte, photos, chiffres                                       |
| `gallery`    | photos de la galerie + taille de chaque tuile (`span`)        |
| `pricing`    | formules ; `price: null` affiche « Sur demande »              |
| `hours`      | horaires (fuseau Africa/Tunis) — le statut « Ouvert / Fermé » est calculé en direct |

### Remplacer les photos par les vraies photos Instagram

Les photos actuelles sont des **photos d'illustration** (Unsplash).

1. Enregistrer les photos dans `public/images/` (JPG/WebP, 1600–2000 px de large, < 400 Ko).
2. Dans `src/data/site.js`, remplacer `src: stock('…')` par `src: '/images/nom-du-fichier.jpg'`.
3. Mettre à jour le texte `alt` (description de la photo, utile pour l'accessibilité et le SEO).

## Avant la mise en ligne

- Remplacer le domaine provisoire `https://www.sharkgym-monastir.tn/` dans `index.html`, `public/robots.txt` et `public/sitemap.xml`.
- Remplacer l'image Open Graph (`og:image`) par une vraie photo de la salle (1200×630).
- Déploiement : le dossier `dist/` peut être hébergé tel quel (Netlify, Vercel, OVH, o2switch…).

## Structure

```
src/
  data/site.js          ← fichier central (contenu)
  components/           ← une section = un composant
    ui/                 ← bouton, animations, image optimisée, icônes
  hooks/                ← section active, statut d'ouverture
  lib/                  ← calcul des horaires, URLs d'images optimisées
```
