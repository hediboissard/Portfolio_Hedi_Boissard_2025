import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expériences',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact'
    },

    // Section Accueil (Home)
    home: {
      greeting: 'Salut, je suis',
      role: 'Développeur Web & Application',
      description: 'Étudiant passionné par la création d\'expériences numériques intuitives et performantes. Actuellement à la recherche d\'une alternance.',
      cta_projects: 'Voir mes projets',
      cta_contact: 'Me contacter'
    },

    // Section À Propos (About)
    about: {
      title: 'À Propos de Moi',
      tags: {
        autonomy: 'Autonomie',
        teamwork: 'Esprit d\'équipe',
        creativity: 'Créativité',
        adaptability: 'Adaptabilité'
      },
      text: 'Je suis un développeur web passionné, actuellement en deuxième année de formation. Mon objectif est de créer des expériences web innovantes et intuitives. Je suis à la recherche d\'une alternance pour mettre en pratique mes compétences et continuer à évoluer dans le domaine du développement web.'
    },

    // Section Expériences
    experience: {
      title: 'Expériences',
      subtitle: 'Mon Parcours',
      items: [
        {
          title: 'Stage',
          job: 'Développeur FullStack',
          company: 'DotScreen',
          period: 'Avril - Juin 2025',
          details: [
            'Développement de nouvelles fonctionnalités pour TV5MONDE+ et Rakuten Viki',
            'Utilisation de React.js et développement sur Smart TV',
            'Formation approfondie en TypeScript',
            'Exploitation des données via des API REST'
          ]
        },
        {
          title: 'Stage',
          job: 'Développeur Front-End',
          company: 'DotScreen',
          period: 'Avril - Juillet 2024',
          details: [
            'Refonte de l\'application France TV sur box Free',
            'Développement en HTML, CSS, JS et découverte du QML',
            'Travail en méthode Agile dans un gros projet technique'
          ]
        },
        {
          title: 'Stage',
          job: 'Découverte des métiers',
          company: 'Webedia',
          period: 'Décembre 2020',
          details: [
            'Immersion dans l\'univers des médias numériques',
            'Assistance sur les plateaux de production avec les équipes'
          ]
        }
      ]
    },

    // Section Projets
    projects: {
      title: 'Projets',
      items: [
        {
          title: 'Moodify',
          description: 'Application web recommandant des musiques selon l\'humeur de l\'utilisateur. Architecture moderne avec l\'API Spotify.'
        },
        {
          title: 'E-commerce Fossiles',
          description: 'Site de vente en ligne réalisé en Vue.js. Focus particulier sur l\'expérience utilisateur (UX) et le design.'
        },
        {
          title: 'Projet DevOps Cars',
          description: 'Mise en place d\'un pipeline CI/CD complet. Pratique des concepts fondamentaux de l\'intégration continue.'
        },
        {
          title: 'Comptinou',
          description: 'Application Android native pour créer des histoires pour enfants. Développement en équipe (Java/Kotlin).'
        }
      ]
    },

    // Section Compétences
    skills: {
      title: 'Compétences',
      subtitle: 'Cliquez sur un langage pour en savoir plus',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Outils'
      },
      descriptions: {
        vue: 'Framework JavaScript progressif pour des interfaces réactives. Mon outil principal pour le frontend.',
        react: 'Bibliothèque pour interfaces dynamiques. Utilisée pour des applications modernes basées sur les composants.',
        tailwind: 'Framework CSS utilitaire pour un stylisme rapide, responsive et personnalisé.',
        node: 'Environnement JS côté serveur. Idéal pour créer des API RESTful performantes.',
        mongodb: 'Base de données NoSQL flexible, parfaite pour les applications scalables.',
        symfony: 'Framework PHP robuste et modulaire pour des applications web complexes.',
        java: 'Langage orienté objet robuste, utilisé pour les projets d\'envergure.',
        kotlin: 'Langage moderne et concis pour le développement Android natif.',
        python: 'Langage polyvalent pour l\'analyse de données et l\'automatisation.'
      }
    },

    // Section Contact
    contact: {
      title: 'Contact',
      labels: {
        name: 'Nom complet',
        email: 'Email professionnel',
        message: 'Votre projet'
      },
      placeholders: {
        name: 'Votre nom',
        email: 'votre@email.com',
        message: 'Dites-m\'en plus...'
      },
      buttons: {
        send: 'Envoyer le message',
        sending: 'Envoi en cours...'
      },
      messages: {
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi.',
        validation: 'Veuillez remplir tous les champs correctement.'
      }
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },

    // Hero Section
    home: {
      greeting: 'Hi, I am',
      role: 'Web & App Developer',
      description: 'Student passionate about creating intuitive and high-performance digital experiences. Currently looking for a work-study program.',
      cta_projects: 'View my work',
      cta_contact: 'Contact me'
    },

    // About Section
    about: {
      title: 'About Me',
      tags: {
        autonomy: 'Autonomy',
        teamwork: 'Teamwork',
        creativity: 'Creativity',
        adaptability: 'Adaptability'
      },
      text: 'I am a passionate web developer, currently in my second year of training. My goal is to create innovative and intuitive web experiences. I am looking for a work-study position to put my skills into practice and continue to evolve in the web development field.'
    },

    // Experience Section
    experience: {
      title: 'Experience',
      subtitle: 'My Journey',
      items: [
        {
          title: 'Internship',
          job: 'FullStack Developer',
          company: 'DotScreen',
          period: 'April - June 2025',
          details: [
            'Developing new features for TV5MONDE+ and Rakuten Viki',
            'Using React.js and internal libraries for Smart TV development',
            'In-depth training in TypeScript',
            'Data handling via REST APIs'
          ]
        },
        {
          title: 'Internship',
          job: 'Front-End Developer',
          company: 'DotScreen',
          period: 'April - July 2024',
          details: [
            'Revamping the France TV application on Free ISP boxes',
            'Development in HTML, CSS, JS and QML discovery',
            'Agile workflow on a large-scale technical project'
          ]
        },
        {
          title: 'Internship',
          job: 'Job Shadowing',
          company: 'Webedia',
          period: 'December 2020',
          details: [
            'Immersion in the digital media industry',
            'Assisting production teams on set'
          ]
        }
      ]
    },

    // Projects Section
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'Moodify',
          description: 'Web app recommending music based on user mood. Modern architecture utilizing the Spotify API.'
        },
        {
          title: 'Fossils E-commerce',
          description: 'Online store built with Vue.js. Strong focus on User Experience (UX) and design.'
        },
        {
          title: 'DevOps Cars Project',
          description: 'Implementation of a complete CI/CD pipeline. Practicing fundamental Continuous Integration concepts.'
        },
        {
          title: 'Comptinou',
          description: 'Native Android app for creating children\'s stories. Team development using Java/Kotlin.'
        }
      ]
    },

    // Skills Section
    skills: {
      title: 'Skills',
      subtitle: 'Click on a language to learn more',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools'
      },
      descriptions: {
        vue: 'Progressive JavaScript framework for reactive interfaces. My main tool for frontend development.',
        react: 'Library for dynamic interfaces. Used for modern component-based applications.',
        tailwind: 'Utility-first CSS framework for rapid, responsive, and custom styling.',
        node: 'Server-side JS environment. Ideal for building high-performance RESTful APIs.',
        mongodb: 'Flexible NoSQL database, perfect for scalable applications.',
        symfony: 'Robust and modular PHP framework for complex web applications.',
        java: 'Robust object-oriented language, used for large-scale enterprise projects.',
        kotlin: 'Modern and concise language for native Android development.',
        python: 'Versatile language for data analysis and automation.'
      }
    },

    // Contact Section
    contact: {
      title: 'Contact',
      labels: {
        name: 'Full Name',
        email: 'Work Email',
        message: 'Your Project'
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@company.com',
        message: 'Tell me more...'
      },
      buttons: {
        send: 'Send Message',
        sending: 'Sending...'
      },
      messages: {
        success: 'Message sent successfully!',
        error: 'Error sending message.',
        validation: 'Please fill in all fields correctly.'
      }
    }
  }
}

export const i18n = createI18n({
  legacy: false, 
  locale: 'fr', 
  fallbackLocale: 'en',
  messages
})
