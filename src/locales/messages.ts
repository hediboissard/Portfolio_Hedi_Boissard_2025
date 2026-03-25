export const fr = {
  meta: {
    title: 'Hédi Boissard | Développeur FullStack',
    description: "Portfolio de Hédi Boissard — Développeur Web & Application. À la recherche d'une alternance dès septembre 2026.",
    og_title: 'Hédi Boissard — Développeur FullStack',
    og_description: 'Portfolio : expériences, projets et compétences.'
  },
  back_to_top: 'Retour en haut',
  nav: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expériences',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact'
  },
  home: {
    greeting: 'Salut, je suis',
    role: 'Développeur FullStack',
    description: "Étudiant passionné par la création d'expériences numériques intuitives. À la recherche d'une alternance FullStack dès septembre 2026.",
    cta_projects: 'Voir mes projets',
    cta_contact: 'Me contacter'
  },
  about: {
    title: 'À Propos',
    sectionTitle: 'À Propos de Moi',
    text: "Passionné par le développement web et mobile, j'ai vraiment découvert le métier lors de deux stages chez DOTSCREEN. Aujourd'hui, je renforce mes compétences avec un stage de 6 mois chez Voxtrend (start-up SaaS B2B).\n\nJ'ai un profil très orienté Front-End et j'adore travailler avec des technos modernes comme Next.js, React et TypeScript. Mais la logique du Back-End m'attire tout autant !\n\nC'est pour ça que j'intègre un Mastère Dev Manager Full Stack pour les deux prochaines années : mon but est de maîtriser toute la chaîne pour devenir un excellent développeur Full Stack.\n\nPour ma future alternance, peu importe la taille de l'entreprise (start-up, PME ou grand groupe). Ce que je cherche avant tout, c'est une équipe où je pourrai mettre en pratique ce que je sais faire, relever de nouveaux défis et m'améliorer tous les jours.",
    tags: { autonomy: 'Autonomie', teamwork: 'Esprit d\'équipe', creativity: 'Créativité', adaptability: 'Adaptabilité' },
    chat: {
      tap: 'Clique sur une question ci-dessous',
      done: 'Plus de questions :',
      contact: 'Contactez-moi',
      q1: 'Qui suis-je ?',
      a1: "Je suis un développeur web en 3ème année, à la recherche d'une alternance. Curieux et impliqué, j'aime allier mon autonomie à un fort esprit d'équipe pour créer des projets qui ont du sens.",
      q2: 'Pourquoi le développement web ?',
      a2: "Pour allier technique et créativité. J'adore concevoir des expériences web intuitives à partir de zéro. C'est un milieu qui évolue vite, et cette nécessité de m'adapter en continu est mon vrai moteur.",
      q3: 'Quelles sont mes passions ?',
      a3: "Quand je ne code pas, je me passionne pour les jeux vidéo, ce qui stimule mon esprit de résolution de problèmes. Je fais aussi du sport pour me dépasser et déconnecter. Un super équilibre pour revenir sur mes projets avec un regard neuf !"
    }
  },
  experience: {
    title: 'Expériences',
    subtitle: 'Mon Parcours',
    items: [
      {
        job: 'Développeur FullStack Next.js & IA',
        company: 'VoxTrend',
        period: 'Février - Juillet 2026 (Stage)',
        duration: '6 mois',
        details: [
          "Développement d'une plateforme SaaS B2B d'analyse client",
          "Conception d'une architecture Fullstack articulée autour d'interfaces complexes en Next.js (App Router) et d'un backend modulaire avec NestJS",
          "Mise en place d'une messagerie instantanée temps réel via Ably (WebSockets), avec une gestion d'état globale optimisée sous Zustand",
          "Développement d'un Chatbot intelligent intégré à la plateforme pour l'automatisation de l'analyse et du support client",
          "Conception de composants UI réutilisables et de dashboards avec shadcn/ui, Radix UI et Tailwind CSS",
          "Optimisation du workflow de développement via des outils d'assistance IA (Cursor, Claude Code) pour garantir la qualité et la robustesse du code"
        ]
      },
      {
        job: 'Développeur FullStack',
        company: 'DotScreen',
        period: 'Avril - Juin 2025',
        duration: '4 mois',
        details: [
          'Développement de nouvelles fonctionnalités pour TV5MONDE+ et Rakuten Viki',
          'Utilisation de React.js et développement Smart TV',
          'Formation approfondie en TypeScript',
          'Exploitation des données via API REST'
        ]
      },
      {
        job: 'Développeur Front-End',
        company: 'DotScreen',
        period: 'Avril - Juillet 2024',
        duration: '4 mois',
        details: [
          "Refonte de l'application France TV sur box Free",
          'Développement en HTML, CSS, JS et QML',
          'Travail en méthode Agile'
        ]
      },
      {
        job: 'Découverte des métiers',
        company: 'Webedia',
        period: 'Décembre 2020',
        duration: '1 semaine',
        details: [
          "Immersion dans l'univers des médias numériques",
          'Assistance sur les plateaux de production'
        ]
      }
    ]
  },
  projects: {
    title: 'Projets',
    open_repo: 'Ouvrir le dépôt',
    items: {
      nextstack: 'Plateforme FullStack Next.js & NestJS — messagerie temps réel, IA, shadcn/ui, Zustand.',
      moodify: 'App web recommandant des musiques selon l\'humeur. API Spotify.',
      fossiles: 'Site e-commerce Vue.js. Focus UX.',
      devops: 'Pipeline CI/CD complet. Intégration continue.',
      comptinou: 'App Android histoires pour enfants. Java/Kotlin.'
    }
  },
  skills: { title: 'Compétences', categories: { frontend: 'Frontend', backend: 'Backend', tools: 'Outils' } },
  cv: { download: 'Télécharger mon CV', hint: 'Envie d\'en savoir plus ? Téléchargez mon CV complet.' },
  contact: {
    title: 'Contact',
    labels: { name: 'Nom', email: 'Email', message: 'Message' },
    placeholders: { name: 'Votre nom', email: 'email@exemple.com', message: 'Votre message...' },
    buttons: { send: 'Envoyer', sending: 'Envoi...' },
    messages: { success: 'Message envoyé !', error: 'Erreur d\'envoi.', validation_error: 'Veuillez remplir tous les champs.' },
    validation: { name_short: 'Nom trop court.', email_invalid: 'Email invalide.', message_short: 'Message trop court.' }
  },
  footer: {
    made_with: 'Fait avec',
    by: 'par Hédi Boissard',
    rights: 'Tous droits réservés.'
  }
}

export const en = {
  meta: {
    title: 'Hédi Boissard | FullStack Developer',
    description: "Hédi Boissard's portfolio. Looking for a work-study position from September 2026.",
    og_title: 'Hédi Boissard — FullStack Developer',
    og_description: 'Portfolio: experience, projects and skills.'
  },
  back_to_top: 'Back to top',
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  },
  home: {
    greeting: 'Hi, I am',
    role: 'FullStack Developer',
    description: 'Passionate about intuitive digital experiences. Looking for a work-study program from September 2026.',
    cta_projects: 'View Projects',
    cta_contact: 'Contact Me'
  },
  about: {
    title: 'About',
    sectionTitle: 'About Me',
    text: "Passionate about web and mobile development, I really discovered the craft during two internships at DOTSCREEN. Today, I'm strengthening my skills with a 6-month internship at Voxtrend (B2B SaaS start-up).\n\nI have a strong Front-End profile and I love working with modern tech like Next.js, React and TypeScript. But Back-End logic attracts me just as much!\n\nThat's why I'm joining a Full Stack Dev Manager Master's programme for the next two years: my goal is to master the full stack and become an excellent Full Stack developer.\n\nFor my future work-study placement, company size doesn't matter (start-up, SME or large group). What I'm looking for above all is a team where I can put my skills into practice, take on new challenges and improve every day.",
    tags: { autonomy: 'Autonomy', teamwork: 'Team Spirit', creativity: 'Creativity', adaptability: 'Adaptability' },
    chat: {
      tap: 'Tap a question below',
      done: 'No more questions:',
      contact: 'Contact me',
      q1: 'Who am I?',
      a1: "I'm a 3rd year web developer looking for a work-study position. Curious and committed, I like to combine autonomy with strong team spirit to create meaningful projects.",
      q2: 'Why web development?',
      a2: "To combine technical skills and creativity. I love designing intuitive web experiences from scratch. It's a fast-evolving field, and the need to keep adapting is what drives me.",
      q3: 'What are my passions?',
      a3: "When I'm not coding, I'm into video games, which sharpens my problem-solving. I also do sports to push my limits and disconnect. A great balance to come back to my projects with fresh eyes!"
    }
  },
  experience: {
    title: 'Experience',
    subtitle: 'My Journey',
    items: [
      {
        job: 'FullStack Next.js & AI Developer',
        period: 'Feb. - Jul. 2026 (Internship)',
        company: 'VoxTrend',
        duration: '6 months',
        details: ['B2B SaaS platform', 'Next.js, NestJS, Ably, Zustand', 'AI Chatbot, shadcn/ui']
      },
      {
        job: 'FullStack Developer',
        period: 'Apr. - Jun. 2025',
        company: 'DotScreen',
        duration: '4 months',
        details: ['TV5MONDE+, Rakuten Viki', 'React.js, TypeScript, REST APIs']
      },
      {
        job: 'Front-End Developer',
        period: 'Apr. - Jul. 2024',
        company: 'DotScreen',
        duration: '4 months',
        details: ['France TV on Free box', 'HTML, CSS, JS, QML, Agile']
      },
      {
        job: 'Job Shadowing',
        period: 'Dec. 2020',
        company: 'Webedia',
        duration: '1 week',
        details: ['Digital media', 'Production support']
      }
    ]
  },
  projects: {
    title: 'Projects',
    open_repo: 'Open repository',
    items: {
      nextstack: 'FullStack Next.js & NestJS — real-time messaging, AI, shadcn/ui, Zustand.',
      moodify: 'Web app recommending music by mood. Spotify API.',
      fossiles: 'Vue.js e-commerce. UX focus.',
      devops: 'Full CI/CD pipeline. Continuous integration.',
      comptinou: 'Android app for children stories. Java/Kotlin.'
    }
  },
  skills: { title: 'Skills', categories: { frontend: 'Frontend', backend: 'Backend', tools: 'Tools' } },
  cv: { download: 'Download Resume', hint: 'Want to know more? Download my full resume.' },
  contact: {
    title: 'Contact',
    labels: { name: 'Name', email: 'Email', message: 'Message' },
    placeholders: { name: 'Your name', email: 'email@example.com', message: 'Your message...' },
    buttons: { send: 'Send', sending: 'Sending...' },
    messages: { success: 'Message sent!', error: 'Send error.', validation_error: 'Please fill all fields.' },
    validation: { name_short: 'Name too short.', email_invalid: 'Invalid email.', message_short: 'Message too short.' }
  },
  footer: {
    made_with: 'Made with',
    by: 'by Hédi Boissard',
    rights: 'All rights reserved.'
  }
}
