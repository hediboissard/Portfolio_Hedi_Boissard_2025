<template>
  <section id="skills" class="my-20">
    <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">Compétences</h2>
    <p class="text-center mb-6 opacity-60 text-xs md:text-base"> Cliquez sur un language ci-dessous pour en savoir plus !</p>
    <div class="max-w-4xl mx-auto px-4">
      <div class="grid grid-cols-3 gap-6 md:gap-8">
        <button v-for="skill in skills" 
             :key="skill.name"
             @click="openPopup(skill)"
             class="group flex flex-col items-center gap-2 p-6 bg-secondary dark:bg-secondary-dark rounded-2xl  transition-all duration-300 cursor-pointer">
          <img :src="`/assets/skills/${skill.logo}`" 
               :alt="skill.name"
               class="size-10 md:w-16 md:h-16">
          <span class="text-xs md:text-base opacity-60 group-hover:opacity-100 text-center flex">{{ skill.name }}</span>
        </button>
      </div>
    </div>
    <div v-if="selectedSkill" 
         class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
         @click="closePopup">
      <div class="bg-secondary dark:bg-secondary-dark p-6 rounded-xl max-w-md w-full transform transition-all duration-300"
           :class="{ 'scale-100 opacity-100': isOpen, 'scale-95 opacity-0': !isOpen }"
           @click.stop>
        <div class="flex mb-4 justify-between">
          <div class="flex items-center gap-4">
            <img :src="`/assets/skills/${selectedSkill.logo}`" 
                 :alt="selectedSkill.name"
                 class="w-16 h-16">
            <h3 class="text-xl font-semibold">{{ selectedSkill.name }}</h3>
          </div>
          <div>
            <button @click="closePopup"
                    class="hover:text-white hover:bg-red-500/100 p-2 rounded-lg transition-colors cursor-pointer">
              Fermer
            </button>
          </div>
        </div>
        <p class="opacity-70 mb-4">{{ selectedSkill.description }}</p>
        <div class="flex justify-between items-center">
          <a :href="selectedSkill.website" 
             target="_blank"
             class="text-accent dark:text-accent-dark flex items-center gap-2">
            Documentation
            <img src="/assets/external_link.svg" class="size-4 dark:invert" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedSkill = ref<Skill | null>(null)
const isOpen = ref(false)

interface Skill {
  name: string
  logo: string
  website: string
  description: string
}

const openPopup = (skill: Skill) => {
  selectedSkill.value = skill
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    isOpen.value = true
  })
}

const closePopup = () => {
  isOpen.value = false
  setTimeout(() => {
    selectedSkill.value = null
    document.body.style.overflow = ''
  }, 200)
}

const skills = [
  { 
    name: 'Vue.js',
    logo: 'vue.svg',
    website: 'https://vuejs.org/',
    description: 'Framework JavaScript progressif que j\'utilise pour créer des interfaces utilisateur réactives. Sa simplicité et sa flexibilité en font mon outil principal pour le développement frontend.'
  },
  { 
    name: 'React',
    logo: 'react.svg',
    website: 'https://fr.react.dev/',
    description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques. Je l\'utilise pour développer des applications web modernes avec une architecture basée sur les composants.'
  },
  { 
    name: 'Tailwind',
    logo: 'tailwind.svg',
    website: 'https://tailwindcss.com/',
    description: 'Framework CSS utilitaire que j\'utilise pour styliser rapidement mes applications. Son approche utility-first me permet de créer des designs personnalisés et responsifs efficacement.'
  },
  { 
    name: 'Node.js',
    logo: 'node.svg',
    website: 'https://nodejs.org/fr',
    description: 'Environnement d\'exécution JavaScript côté serveur. Je l\'utilise pour créer des API RESTful et des applications backend performantes.'
  },
  { 
    name: 'MongoDB',
    logo: 'mongodb.svg',
    website: 'https://www.mongodb.com/',
    description: 'Base de données NoSQL orientée documents que j\'utilise pour stocker et gérer des données de manière flexible. Parfaite pour les applications modernes nécessitant une scalabilité horizontale.'
  },
  { 
    name: 'Symfony',
    logo: 'symfony.svg',
    website: 'https://symfony.com/',
    description: 'Framework PHP robuste que j\'utilise pour développer des applications web complexes. Son architecture modulaire et ses composants réutilisables facilitent le développement rapide.'
  },
  { 
    name: 'Java',
    logo: 'java.svg',
    website: 'https://www.oracle.com/fr/java/',
    description: 'Langage de programmation orienté objet que j\'utilise pour développer des applications d\'entreprise. Sa portabilité et sa robustesse en font un choix excellent pour les projets d\'envergure.'
  },
  { 
    name: 'Kotlin',
    logo: 'kotlin.svg',
    website: 'https://kotlinlang.org/',
    description: 'Langage moderne pour le développement Android et multiplateforme. Je l\'utilise pour créer des applications mobiles avec une syntaxe concise et des fonctionnalités avancées.'
  },
  { 
    name: 'Python',
    logo: 'python.svg',
    website: 'https://www.python.org/',
    description: 'Langage polyvalent que j\'utilise pour l\'analyse de données et l\'automatisation. Sa grande bibliothèque standard et sa communauté active en font un outil indispensable.'
  }
]
</script>