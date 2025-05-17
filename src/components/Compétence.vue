<template>
  <section id="skills" class="my-20">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Compétences</h2>
    
    <div class="max-w-4xl mx-auto px-4">
        <div class="grid grid-cols-3 gap-6 md:gap-8">
          <a v-for="skill in skills" 
               :key="skill.name"
               target="_blank"
               :href="skill.website"
               class="flex flex-col items-center gap-2 p-6 bg-[#1E293B] rounded-2xl">
            <img :src="`/src/assets/skills/${skill.logo}`" 
                 :alt="skill.name"
                 class="size-10 md:w-16 md:h-16">
            <span class="text-sm md:text-base text-white/70 text-center hidden md:flex">{{ skill.name }}</span>
          </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Vue.js', logo: 'vue.svg', website:'https://vuejs.org/' },
  { name: 'React', logo: 'react.svg', website:'https://fr.react.dev/' },
  { name: 'Tailwind', logo: 'tailwind.svg', website:'https://tailwindcss.com/' },
  { name: 'Node.js', logo: 'node.svg', website:'https://nodejs.org/fr' },
  { name: 'MongoDB', logo: 'mongodb.svg', website:'https://www.mongodb.com/' },
  { name: 'Symfony', logo: 'symfony.svg', website:'https://symfony.com/' },
  { name: 'Java', logo: 'java.svg', website:'https://www.oracle.com/fr/java/' },
  { name: 'Kotlin', logo: 'kotlin.svg', website:'https://kotlinlang.org/' },
  { name: 'Python', logo: 'python.svg', website:'https://www.python.org/' }
]
</script>