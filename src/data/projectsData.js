// src/data/projectsData.js

export const projectsData = [
  {
    id: "argentbank",
    title: "ArgentBank",
    shortDescription: "Application bancaire en React et Redux Toolkit avec authentification JWT et gestion du profil utilisateur.",
    image: "/images/argentbank.webp",
    techs: ["React", "Redux Toolkit", "CSS", "JWT", "API REST"],
    codeLink: "https://github.com/mhdgri/ArgentBank-Frontend/tree/project-11/react-implementation",
    demoLink: "https://argentbank.vercel.app",
    
    // Sections détaillées
    context: "ArgentBank est une application bancaire moderne développée dans le cadre de ma formation. L'entreprise fictive souhaitait migrer son système legacy vers une solution React moderne avec une authentification sécurisée. Le projet visait à créer une expérience utilisateur fluide permettant aux clients de consulter et gérer leur profil bancaire en ligne.",
    
    objectives: [
      "Créer une interface utilisateur responsive avec React",
      "Implémenter un système d'authentification sécurisé avec JWT",
      "Gérer l'état global de l'application avec Redux Toolkit",
      "Permettre aux utilisateurs de modifier leur profil (nom, prénom)",
      "Assurer la persistance de la session utilisateur",
      "Respecter les maquettes fournies et garantir l'accessibilité"
    ],
    
    skills: [
      "Gestion d'état complexe avec Redux Toolkit (slices, actions asynchrones)",
      "Authentification et gestion des tokens JWT",
      "Communication avec une API REST (fetch, gestion des erreurs)",
      "Routing avec React Router v6",
      "Persistance des données utilisateur dans le localStorage",
      "Gestion du cycle de vie des composants React",
      "Mise en place de formulaires contrôlés avec validation"
    ],
    
    results: [
      "Application 100% fonctionnelle avec authentification sécurisée",
      "Temps de chargement optimisé grâce à Redux Toolkit",
      "Interface responsive testée sur mobile, tablette et desktop",
      "Code source propre et bien structuré avec composants réutilisables",
      "Déploiement réussi sur Vercel avec CI/CD",
      "Zéro erreur console, navigation fluide"
    ],
    improvements: [
      "Ajouter des tests unitaires avec Jest et React Testing Library",
      "Implémenter un système de gestion des transactions bancaires",
      "Ajouter une fonctionnalité de double authentification (2FA)",
      "Améliorer l'UX avec des animations de transition",
      "Mettre en place un système de notifications en temps réel",
      "Optimiser le bundle size avec code splitting"
    ]
  },
  
  {
    id: "sophie-bluel",
    title: "Sophie Bluel",
    shortDescription: "Portfolio d'architecte intégrant une galerie dynamique et une interface admin pour gérer les travaux.",
    image: "/images/sophiebluel.webp",
    techs: ["HTML5", "CSS3", "JavaScript Vanilla", "API REST"],
    codeLink: "https://github.com/mhdgri/Portfolio-architecte-sophie-bluel",
    demoLink: "https://sophie-bluel-architect.vercel.app/",
    
    context: "Projet de création d'un portfolio pour une architecte d'intérieur fictive, Sophie Bluel. Le site devait présenter ses travaux de manière élégante tout en permettant à l'architecte de gérer son contenu via une interface d'administration. Ce projet m'a permis de travailler en JavaScript Vanilla sans framework, renforçant ainsi ma compréhension des fondamentaux du web.",
    
    objectives: [
      "Créer une galerie de projets dynamique récupérée depuis une API",
      "Développer un système de filtres par catégorie",
      "Implémenter une page de connexion administrateur",
      "Créer une modale d'édition pour ajouter/supprimer des travaux",
      "Gérer l'authentification et les requêtes API (GET, POST, DELETE)",
      "Coder en JavaScript Vanilla pur sans librairie externe"
    ],
    
    skills: [
      "Manipulation du DOM avec JavaScript natif (createElement, appendChild, etc.)",
      "Gestion des événements (click, submit, change)",
      "Communication avec une API REST (fetch, méthodes HTTP)",
      "Gestion de l'authentification par token",
      "Création de modales accessibles et responsives",
      "Upload de fichiers via formulaire",
      "Validation des données côté client",
      "Gestion d'erreurs et feedback utilisateur"
    ],
    
    results: [
      "Site portfolio entièrement fonctionnel avec galerie dynamique",
      "Système de filtres fluide et intuitif",
      "Interface admin complète permettant l'ajout et la suppression de projets",
      "Upload d'images fonctionnel avec prévisualisation",
      "Code JavaScript organisé et commenté",
      "Validation complète par le jury de la formation",
      "Navigation accessible au clavier et lecteur d'écran"
    ],
    
    improvements: [
      "Ajouter la modification de projets existants (actuellement seulement ajout/suppression)",
      "Implémenter un système de pagination pour gérer de nombreux projets",
      "Améliorer la gestion des erreurs avec des messages plus explicites",
      "Ajouter des animations CSS pour les transitions",
      "Optimiser les images uploadées (compression, redimensionnement)",
      "Migrer vers TypeScript pour une meilleure maintenabilité"
    ]
  },
  
  {
    id: "todo-react",
    title: "To-Do List React",
    shortDescription: "Application personnelle de gestion de tâches en React avec filtres et persistance via localStorage.",
    image: "/images/todolist.png",
    techs: ["React", "Vite", "CSS", "localStorage"],
    codeLink: "https://github.com/mhdgri/todo-react",
    demoLink: "/todo",
    
    context: "Projet personnel développé pour approfondir ma maîtrise de React et des hooks. J'ai voulu créer un outil pratique que j'utilise quotidiennement pour gérer mes tâches de développement. Ce projet m'a permis d'expérimenter avec la persistance des données côté client et d'améliorer mon approche du state management.",
    
    objectives: [
      "Créer une interface simple et intuitive pour gérer des tâches",
      "Implémenter l'ajout, la suppression et la complétion de tâches",
      "Persister les données dans le localStorage",
      "Rendre l'application responsive pour mobile et desktop",
      "Appliquer les bonnes pratiques React (hooks, composants fonctionnels)",
      "Déployer l'application en ligne"
    ],
    
    skills: [
      "Utilisation avancée des hooks React (useState, useEffect)",
      "Gestion du localStorage pour la persistance",
      "Gestion d'état local et mise à jour immutable",
      "Manipulation de tableaux (map, filter)",
      "Gestion des formulaires et événements",
      "Build et déploiement avec Vite",
      "Design responsive avec CSS moderne"
    ],
    
    results: [
      "Application To-Do entièrement fonctionnelle et utilisable",
      "Persistance des tâches fonctionnelle (les données restent après rechargement)",
      "Interface fluide et responsive",
      "Code propre avec composants réutilisables",
      "Déploiement réussi sur Vercel",
      "Temps de développement : 2 jours",
      "Application utilisée personnellement au quotidien"
    ],
    
    improvements: [
      "Ajouter un système de catégories pour organiser les tâches",
      "Implémenter des filtres (toutes, actives, complétées)",
      "Ajouter des dates d'échéance et des rappels",
      "Permettre l'édition des tâches existantes",
      "Ajouter un mode sombre",
      "Synchroniser avec un backend pour accès multi-devices",
      "Implémenter drag & drop pour réorganiser les tâches"
    ]
  }
];

// Fonction helper pour récupérer un projet par ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};