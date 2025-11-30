import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
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
      role: 'Développeur Web & Application',
      description: 'Étudiant passionné par la création d\'expériences numériques intuitives et performantes. Actuellement à la recherche d\'une alternance.',
      cta_projects: 'Voir mes projets',
      cta_contact: 'Me contacter'
    },
    about: {
      title: 'À Propos de Moi',
      text: 'Je suis un développeur web passionné, actuellement en troisième année de formation. Mon objectif est de créer des expériences web innovantes et intuitives. Je suis à la recherche d\'une alternance pour mettre en pratique mes compétences et continuer à évoluer dans le domaine du développement web.',
      tags: {
        autonomy: 'Autonomie',
        teamwork: 'Esprit d\'équipe',
        creativity: 'Créativité',
        adaptability: 'Adaptabilité'
      }
    },
    experience: {
      title: 'Expériences',
      subtitle: 'Mon Parcours',
      items: [
        {
          job: 'Développeur FullStack',
          period: 'Avril - Juin 2025',
          details: [
            'Développement de nouvelles fonctionnalités pour TV5MONDE+ et Rakuten Viki',
            'Utilisation de React.js et développement Smart TV',
            'Formation approfondie en TypeScript',
            'Exploitation des données via API REST'
          ]
        },
        {
          job: 'Développeur Front-End',
          period: 'Avril - Juillet 2024',
          details: [
            'Refonte de l\'application France TV sur box Free',
            'Développement en HTML, CSS, JS et QML',
            'Travail en méthode Agile'
          ]
        },
        {
          job: 'Découverte des métiers',
          period: 'Décembre 2020',
          details: [
            'Immersion dans l\'univers des médias numériques',
            'Assistance sur les plateaux de production'
          ]
        }
      ]
    },
    projects: {
      title: 'Projets',
      items: {
        moodify: 'Application web recommandant des musiques selon l\'humeur. Architecture moderne avec l\'API Spotify.',
        fossiles: 'Site de vente en ligne réalisé en Vue.js. Focus particulier sur l\'expérience utilisateur (UX).',
        devops: 'Mise en place d\'un pipeline CI/CD complet. Pratique des concepts fondamentaux de l\'intégration continue.',
        comptinou: 'Application Android native pour créer des histoires pour enfants. Développement en équipe (Java/Kotlin).'
      }
    },
    skills: {
      title: 'Compétences Techniques',
      subtitle: 'Cliquez sur un langage pour en savoir plus !',
      popup_close: 'Fermer',
      popup_doc: 'Documentation',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Autres'
      },
      descriptions: {
        vue: 'Framework JavaScript progressif pour interfaces réactives.',
        react: 'Bibliothèque pour interfaces dynamiques et composants.',
        tailwind: 'Framework CSS utilitaire pour designs rapides.',
        node: 'Environnement JS serveur pour API RESTful.',
        mongodb: 'Base NoSQL orientée documents, flexible et scalable.',
        symfony: 'Framework PHP robuste pour applications complexes.',
        java: 'Langage objet robuste pour projets d\'entreprise.',
        kotlin: 'Langage moderne pour Android natif.',
        python: 'Langage polyvalent pour analyse et automatisation.'
      }
    },
    cv: {
      download: 'Télécharger mon CV'
    },
    contact: {
      title: 'Contact',
      labels: {
        name: 'Nom',
        email: 'Email',
        message: 'Message'
      },
      placeholders: {
        name: 'Votre nom',
        email: "votre{'@'}email.com",
        message: 'Votre message...'
      },
      buttons: {
        send: 'Envoyer',
        sending: 'Envoi...'
      },
      messages: {
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi.',
        validation_error: 'Veuillez remplir correctement tous les champs.'
      },
      validation: {
        name_short: 'Le nom est trop court.',
        email_invalid: 'Email invalide.',
        message_short: 'Le message doit contenir au moins 10 caractères.'
      }
    }
  },
  en: {
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
      role: 'Web & App Developer',
      description: 'Student passionate about creating intuitive and high-performance digital experiences. Currently looking for a work-study program.',
      cta_projects: 'View Projects',
      cta_contact: 'Contact Me'
    },
    about: {
      title: 'About Me',
      text: 'I am a passionate web developer, currently in my third year of training. My goal is to create innovative and intuitive web experiences. I am looking for a work-study position to put my skills into practice and continue to evolve in the web development field.',
      tags: {
        autonomy: 'Autonomy',
        teamwork: 'Teamwork',
        creativity: 'Creativity',
        adaptability: 'Adaptability'
      }
    },
    experience: {
      title: 'Experience',
      subtitle: 'My Journey',
      items: [
        {
          job: 'FullStack Developer',
          period: 'April - June 2025',
          details: [
            'Developing features for TV5MONDE+ and Rakuten Viki',
            'Using React.js and Smart TV internal libraries',
            'In-depth TypeScript training',
            'Data handling via REST APIs'
          ]
        },
        {
          job: 'Front-End Developer',
          period: 'April - July 2024',
          details: [
            'Revamping France TV app on Free ISP box',
            'Development in HTML, CSS, JS and QML',
            'Agile workflow experience'
          ]
        },
        {
          job: 'Job Shadowing',
          period: 'December 2020',
          details: [
            'Immersion in digital media industry',
            'Assisting production teams'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      items: {
        moodify: 'Web app recommending music based on mood. Modern architecture using Spotify API.',
        fossiles: 'Online fossils store built with Vue.js. Strong focus on User Experience (UX).',
        devops: 'Complete CI/CD pipeline implementation. Practicing Continuous Integration concepts.',
        comptinou: 'Native Android app for children stories. Team development using Java/Kotlin.'
      }
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Click on a language to learn more!',
      popup_close: 'Close',
      popup_doc: 'Documentation',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Others'
      },
      descriptions: {
        vue: 'Progressive JS framework for reactive interfaces.',
        react: 'Library for dynamic user interfaces.',
        tailwind: 'Utility-first CSS framework for rapid design.',
        node: 'Server-side JS environment for RESTful APIs.',
        mongodb: 'Document-oriented NoSQL database.',
        symfony: 'Robust PHP framework for complex apps.',
        java: 'Robust object-oriented language for enterprise.',
        kotlin: 'Modern language for native Android.',
        python: 'Versatile language for data and automation.'
      }
    },
    cv: {
      download: 'Download Resume'
    },
    contact: {
      title: 'Contact',
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message'
      },
      placeholders: {
        name: 'Your name',
        email: "your{'@'}email.com",
        message: 'Your message...'
      },
      buttons: {
        send: 'Send',
        sending: 'Sending...'
      },
      messages: {
        success: 'Message sent successfully!',
        error: 'Error sending message.',
        validation_error: 'Please fill all fields correctly.'
      },
      validation: {
        name_short: 'Name is too short.',
        email_invalid: 'Invalid email.',
        message_short: 'Message must be at least 10 characters long.'
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