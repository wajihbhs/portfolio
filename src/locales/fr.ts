export default {
  cv: {
    personalInfo: {
      title: 'Ingénieur Informatique',
      subtitle: 'Lead Développeur Frontend Vue.js / Angular · Fullstack',
    },
    experiences: {
      doinsport: {
        title: 'Lead Développeur Frontend Vue.js / Angular',
        description: "Lead technique frontend en charge de l'architecture, de la qualité et de la scalabilité des applications web de la plateforme SaaS dédiée à la gestion des complexes sportifs.",
        responsibilities: [
          "Définition et mise en place de l'architecture Front-End (Vue.js, Angular, Storybook, WebSockets, librairies internes, Docker, CI/CD)",
          'Assurer la portabilité des applications Web, Mobile et Desktop',
          'Pilotage des mises en production et fiabilisation des pipelines de déploiement',
          'Mise en place des bonnes pratiques de développement : clean code, organisation du projet, revues de code',
          'Encadrement et mentoring de développeurs juniors',
          'Collaboration étroite avec les product owners pour la préparation et la planification des sprints',
        ],
      },
      odeven: {
        title: 'Développeur Fullstack',
        description: "Développement d'une application web permettant de mettre en place un système de gestion du trafic routier intelligent basé sur l'analyse de données mobiles.",
        responsibilities: [
          "Conception et développement d'un système de régulation dynamique du trafic basé sur l'analyse des données mobiles flottantes",
          "Intégration de capteurs et caméras pour collecter des données en temps réel sur la circulation",
          'Développement de stratégies de gestion optimisées pour améliorer la fluidité du trafic',
          "Collaboration avec les équipes techniques pour l'analyse des données et la définition des meilleures pratiques",
        ],
      },
      ingeneria: {
        title: 'Développeur Fullstack',
        description: "Conception et développement d'une application web dédiée à la gestion des candidats et au traitement de flux vidéo en temps réel pour le programme Ingeneria.",
        responsibilities: [
          "Étude, conception, développement et déploiement de l'application web",
          "Développement d'un système de gestion de flux vidéo en temps réel",
          'Mise en place de la fonctionnalité de création de CV numériques en ligne',
          "Conception d'un espace dédié à la gestion des candidats et des conseillers",
          "Développement d'un back-office d'administration",
          "Création d'un espace pédagogique en ligne",
        ],
      },
      ubikey: {
        title: 'Développeur Frontend',
        description: "Développement d'interfaces interactives avec Angular 2 pour la création et l'édition de post-its, incluant l'intégration de dessins et fonctionnalités collaboratives en temps réel.",
        responsibilities: [
          "Développement d'interfaces interactives avec Angular 2",
          'Mise en place de la synchronisation instantanée des données via WebSockets',
          "Conception et intégration de modules de suivi de KPIs et de graphiques interactifs",
          'Réalisation de tests unitaires et fonctionnels avec Jest et Karma',
          "Optimisation des performances et de l'expérience utilisateur",
        ],
      },
    },
    educations: {
      isamm: {
        degree: "Diplôme d'ingénieur en informatique",
        description: "Diplôme d'ingénieur en informatique, spécialisation développement logiciel et systèmes d'information.",
      },
      isimm: {
        degree: 'Licence appliquée en systèmes informatiques et logiciels',
        description: 'Licence appliquée en systèmes informatiques et logiciels.',
      },
      lycee: {
        degree: 'Baccalauréat en informatique',
        description: 'Baccalauréat en informatique, mention bien.',
      },
    },
    projects: {
      van: {
        title: 'CampingVan – Recherche et réservation de vans',
        description: "Application de démonstration permettant de rechercher un van de camping selon des critères personnalisés (type, capacité, équipements), de consulter les photos, le prix et les détails du véhicule, puis de réserver et payer en ligne.",
        role: 'Développeur Frontend',
      },
      vitacare: {
        title: 'VitaCare – Surveillance des patients en temps réel',
        description: "Application de surveillance médicale permettant d'ajouter des patients et de configurer leurs paramètres de santé (fréquence cardiaque, température, pression artérielle, saturation en oxygène). Affichage des données en temps réel avec déclenchement d'alertes automatiques en cas de valeurs critiques.",
        role: 'Développeur Frontend',
      },
      'doinsport-saas': {
        title: 'Doinsport – Plateforme SaaS de gestion sportive',
        description: "Doinsport est une plateforme SaaS de gestion de clubs sportifs permettant de gérer les adhérents, réservations, abonnements, paiements en ligne et activités sportives via une interface web et mobile.",
        role: 'Lead Développeur Frontend',
      },
      odevia: {
        title: 'Odevia – Gestion intelligente du trafic routier',
        description: "Système de régulation dynamique du trafic basé sur l'analyse des données mobiles flottantes. Intégration de capteurs et caméras pour collecter des données en temps réel, régulation dynamique des vitesses, gestion des accès et contrôle des feux tricolores.",
        role: 'Développeur Fullstack',
      },
      ubiweb: {
        title: 'Ubiweb – Tableau de bord collaboratif temps réel',
        description: "Application collaborative en temps réel avec Angular 2 pour la création et l'édition de post-its interactifs, dessins, suivi de KPIs et graphiques d'analyse des performances. Synchronisation instantanée via WebSockets.",
        role: 'Développeur Frontend',
      },
      'ingeneria-app': {
        title: 'Ingeneria – Gestion candidats & flux vidéo',
        description: "Application web fullstack dédiée à la gestion des candidats avec traitement de flux vidéo en temps réel, création de CV numériques en ligne, espace pédagogique et back-office d'administration.",
        role: 'Développeur Fullstack',
      },
      projeo: {
        title: 'Projeo – Gestion de projet travaux publics',
        description: "Outil de gestion de projet dédié aux professionnels des travaux publics avec carte interactive. Plateforme fluide et performante pour la gestion optimale des projets via une interface cartographique.",
        role: 'Développeur Fullstack',
      },
    },
    languages: {
      arabic: { level: 'Langue maternelle' },
      french: { level: 'Courant (C1)' },
      english: { level: 'Intermédiaire (B2)' },
    },
    hobbies: {
      chess: { name: "Jeu d'échecs" },
      swim: { name: 'Natation' },
      fish: { name: 'Chasse sous-marine' },
    },
  },
  nav: {
    home: 'Accueil',
    experience: 'Expériences',
    education: 'Formation',
    skills: 'Compétences',
    projects: 'Réalisations',
    languages: 'Langues',
    hobbies: 'Loisirs',
    contact: 'Contact',
  },
  hero: {
    openToWork: 'Disponible',
    downloadCv: 'Télécharger CV',
    location: 'France',
    email: 'Email',
    phone: 'Téléphone',
    linkedin: 'LinkedIn',
    summary:
      "Ingénieur informatique avec plus de 7 ans d'expérience en développement frontend et fullstack. Spécialisé en Vue.js, Angular et TypeScript, j'architecte des interfaces web performantes et scalables. Lead technique chez Doinsport, j'encadre des équipes et pilote des projets SaaS complexes.",
  },
  experience: {
    title: 'Expériences Professionnelles',
    subtitle: "Mon parcours professionnel",
    present: 'Présent',
    stack: 'Stack technique',
    responsibilities: 'Responsabilités',
    achievements: 'Réalisations clés',
  },
  education: {
    title: 'Formation',
    subtitle: 'Mon parcours académique',
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Technologies et outils que je maîtrise',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Outils & DevOps',
  },
  projects: {
    title: 'Réalisations',
    subtitle: 'Projets marquants développés tout au long de mon parcours',
    visit: 'Voir le projet',
    viewMore: 'En savoir plus',
    company: 'Entreprise',
    role: 'Rôle',
    period: 'Période',
  },
  languages: {
    title: 'Langues',
    subtitle: 'Mes compétences linguistiques',
    native: 'Langue maternelle',
    fluent: 'Courant',
    intermediate: 'Intermédiaire',
  },
  hobbies: {
    title: 'Loisirs',
    subtitle: "Ce que j'aime en dehors du code",
  },
  footer: {
    rights: 'Tous droits réservés',
    madeWith: 'Fait avec',
    by: 'par',
  },
}
