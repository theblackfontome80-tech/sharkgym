/* ==========================================================================
   SHARK GYM MONASTIR — FICHIER DE CONFIGURATION CENTRAL
   --------------------------------------------------------------------------
   Toutes les informations du site se modifient ici :
   coordonnées, horaires, tarifs, textes et images.

   IMAGES
   - Les photos actuelles sont des photos d'illustration (Unsplash).
   - Pour utiliser les vraies photos Instagram : déposez les fichiers dans
     /public/images/ puis remplacez la valeur par le chemin, ex :
         src: '/images/espace-musculation.jpg'
   - Format conseillé : JPG ou WebP, 1600 à 2000 px de large, < 400 Ko.
   ========================================================================== */

/** Raccourci pour les photos d'illustration Unsplash. */
const stock = (id) => `https://images.unsplash.com/photo-${id}`

/* -------------------------------------------------------------------------- */
/* INFORMATIONS GÉNÉRALES                                                     */
/* -------------------------------------------------------------------------- */
export const site = {
  name: 'Shark Gym',
  fullName: 'Shark Gym Monastir',
  slogan: 'Build your strength. Join the Shark Family.',
  city: 'Monastir',
  country: 'Tunisie',

  phone: {
    display: '+216 54 313 393',
    href: 'tel:+21654313393',
  },

  address: {
    street: 'QRF7+GH8',
    city: 'Monastir 5000',
    country: 'Tunisie',
    coordinates: '35.77° N — 10.81° E',
  },

  instagram: {
    handle: '@shark_gym_monastir',
    url: 'https://www.instagram.com/shark_gym_monastir/',
  },

  maps: {
    url: 'https://maps.app.goo.gl/BuhBneY9R76Jig646',
    // Carte intégrée (aucune clé API nécessaire)
    embed: 'https://www.google.com/maps?q=QRF7%2BGH8%2C%20Monastir%205000%2C%20Tunisie&z=16&output=embed',
  },
}

/* -------------------------------------------------------------------------- */
/* NAVIGATION (id = identifiant de la section)                                */
/* -------------------------------------------------------------------------- */
export const navigation = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'la-salle', label: 'La salle' },
  { id: 'equipements', label: 'Équipements' },
  { id: 'galerie', label: 'Galerie' },
  { id: 'abonnements', label: 'Abonnements' },
  { id: 'contact', label: 'Contact' },
]

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Salle de musculation & cardio — Monastir',
  subtitle:
    'Bienvenue chez Shark Gym Monastir. Un espace dédié à la performance, au dépassement de soi et à une communauté qui avance ensemble.',
  image: {
    src: stock('1534438327276-14e5300c3a48'),
    alt: 'Salle de musculation avec haltères alignés sous un éclairage sombre',
  },
}

/* -------------------------------------------------------------------------- */
/* À PROPOS                                                                   */
/* -------------------------------------------------------------------------- */
export const about = {
  text:
    "Plus qu'une salle de sport, Shark Gym est une communauté. Que tu sois débutant ou sportif confirmé, viens évoluer dans un environnement motivant où chaque entraînement compte.",
  features: [
    {
      icon: 'users',
      title: 'Une communauté motivante',
      text: 'Des sportifs de tous niveaux qui se poussent mutuellement à progresser.',
    },
    {
      icon: 'snowflake',
      title: 'Un espace climatisé',
      text: "Un confort optimal pour s'entraîner sereinement, toute l'année.",
    },
    {
      icon: 'dumbbell',
      title: 'Musculation & cardio',
      text: 'Tout pour développer ta force, ton endurance et ta condition physique.',
    },
    {
      icon: 'flame',
      title: 'Une ambiance sportive',
      text: 'Une énergie qui donne envie de se dépasser à chaque séance.',
    },
  ],
  images: {
    main: { src: stock('1571019613454-1cb2f99b2d8b'), alt: "Sportive en pleine séance d'entraînement en salle" },
    secondary: { src: stock('1581009146145-b5ef050c2e1e'), alt: 'Athlète soulevant des haltères' },
  },
}

/* -------------------------------------------------------------------------- */
/* NOS ESPACES — remplacer les images par les vraies photos de la salle       */
/* -------------------------------------------------------------------------- */
export const spaces = [
  {
    title: 'Espace musculation',
    text: 'Charges libres, bancs et racks pour construire ta force, séance après séance.',
    image: { src: stock('1583454110551-21f2fa2afe61'), alt: 'Espace musculation avec charges libres' },
  },
  {
    title: 'Espace cardio',
    text: 'Un espace dédié à l’endurance pour travailler ton souffle et ta condition physique.',
    image: { src: stock('1576678927484-cc907957088c'), alt: 'Espace cardio avec appareils alignés' },
  },
  {
    title: 'Machines & équipements',
    text: 'Des machines guidées pour cibler chaque groupe musculaire en toute sécurité.',
    image: { src: stock('1540497077202-7c8a3999166f'), alt: 'Rangée de machines de musculation' },
  },
  {
    title: 'Espace entraînement',
    text: 'Un espace pour l’échauffement, le gainage, les étirements et le travail fonctionnel.',
    image: { src: stock('1517836357463-d25dfeac3438'), alt: "Sportif à l'entraînement" },
  },
]

/* -------------------------------------------------------------------------- */
/* SHARK FAMILY                                                               */
/* -------------------------------------------------------------------------- */
export const family = {
  text: 'Chaque entraînement est une étape. Chaque effort compte. Bienvenue dans la Shark Family.',
  background: { src: stock('1526506118085-60ce8714f8c5'), alt: '' },
  images: [
    { src: stock('1599058917212-d750089bc07e'), alt: 'Sportif concentré pendant sa série' },
    { src: stock('1541534741688-6078c6bfb5c5'), alt: 'Sportive s’entraînant avec des haltères' },
    { src: stock('1532029837206-abbe2b7620e3'), alt: 'Groupe de sportifs à l’entraînement' },
  ],
  stats: [
    { value: '7/7', label: "Jours d'ouverture" },
    { value: '15h', label: "D'entraînement possible par jour" },
    { value: '1', label: 'Seule famille' },
  ],
}

/* -------------------------------------------------------------------------- */
/* GALERIE — emplacements prévus pour les photos Instagram                    */
/* `span` contrôle la taille de la tuile dans la grille asymétrique.          */
/* -------------------------------------------------------------------------- */
export const gallery = [
  { src: stock('1593079831268-3381b0db4a77'), alt: 'Vue d’ensemble d’une salle de sport', span: 'col-span-2 row-span-2' },
  { src: stock('1605296867304-46d5465a13f1'), alt: 'Barre olympique chargée', span: '' },
  { src: stock('1574680096145-d05b474e2155'), alt: 'Athlète pendant un exercice intense', span: 'row-span-2' },
  { src: stock('1594737625785-a6cbdabd333c'), alt: 'Équipement de musculation', span: '' },
  { src: stock('1549060279-7e168fcee0c2'), alt: 'Sportif en salle de musculation', span: 'row-span-2' },
  { src: stock('1570829460005-c840387bb1ca'), alt: 'Vue d’une salle de sport', span: 'col-span-2' },
  { src: stock('1637666062717-1c6bcfa4a4df'), alt: 'Séance de musculation', span: 'row-span-2' },
  { src: stock('1558611848-73f7eb4001a1'), alt: 'Appareils de cardio', span: 'col-span-2' },
]

/* -------------------------------------------------------------------------- */
/* ABONNEMENTS                                                                */
/* - price: null  → affiche « Sur demande »                                   */
/* - price: 60    → affiche « 60 DT »                                         */
/* - highlight: true → met la formule en avant                                */
/* -------------------------------------------------------------------------- */
export const pricing = {
  currency: 'DT',
  note: 'Tarifs communiqués directement par notre équipe, à l’accueil ou par téléphone.',
  sharedFeatures: ['Accès musculation & cardio', 'Espace climatisé', 'Ouvert 7 jours sur 7'],
  plans: [
    { id: 'mensuel', name: 'Mensuel', duration: '1 mois', tagline: 'Pour commencer', price: null, period: '/ mois', highlight: false },
    { id: 'trimestriel', name: 'Trimestriel', duration: '3 mois', tagline: 'Pour installer la régularité', price: null, period: '/ 3 mois', highlight: false },
    { id: 'semestriel', name: 'Semestriel', duration: '6 mois', tagline: 'Pour transformer ton physique', price: null, period: '/ 6 mois', highlight: true, badge: 'Shark Pass' },
    { id: 'annuel', name: 'Annuel', duration: '12 mois', tagline: "L'engagement total", price: null, period: '/ an', highlight: false },
  ],
}

/* -------------------------------------------------------------------------- */
/* HORAIRES (heure de Tunisie)                                                */
/* day : 0 = dimanche, 1 = lundi … 6 = samedi                                 */
/* Pour un jour fermé : closed: true                                          */
/* -------------------------------------------------------------------------- */
export const hours = {
  timezone: 'Africa/Tunis',
  days: [
    { day: 1, label: 'Lundi', open: '08:00', close: '23:00' },
    { day: 2, label: 'Mardi', open: '08:00', close: '23:00' },
    { day: 3, label: 'Mercredi', open: '08:00', close: '23:00' },
    { day: 4, label: 'Jeudi', open: '08:00', close: '23:00' },
    { day: 5, label: 'Vendredi', open: '08:00', close: '23:00' },
    { day: 6, label: 'Samedi', open: '08:00', close: '23:00' },
    { day: 0, label: 'Dimanche', open: '08:00', close: '21:00' },
  ],
  summary: [
    { label: 'Lundi — Vendredi', value: '08h00 — 23h00' },
    { label: 'Samedi', value: '08h00 — 23h00' },
    { label: 'Dimanche', value: '08h00 — 21h00' },
  ],
}

export const marquee = ['Build your strength', 'Join the Shark Family', 'No limits', 'Just results', 'Stronger together']
