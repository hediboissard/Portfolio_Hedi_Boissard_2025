<template>
  <section id="skills" class="py-20 bg-secondary/30 dark:bg-secondary-dark/30">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
        {{ t('skills.title') }}
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-primary dark:bg-primary-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-accent">{{ t('skills.categories.frontend') }}</h3>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="skill in frontend" :key="skill.name" class="flex flex-col items-center gap-2 group">
              <div class="p-3 bg-secondary dark:bg-secondary-dark rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                <img :src="`/assets/skills/${skill.logo}`" :alt="skill.name" class="w-8 h-8">
              </div>
              <span class="text-sm opacity-70">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <div class="bg-primary dark:bg-primary-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-accent">{{ t('skills.categories.backend') }}</h3>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="skill in backend" :key="skill.name" class="flex flex-col items-center gap-2 group">
              <div class="p-3 bg-secondary dark:bg-secondary-dark rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                <img :src="`/assets/skills/${skill.logo}`" :alt="skill.name" class="w-8 h-8">
              </div>
              <span class="text-sm opacity-70">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <div class="bg-primary dark:bg-primary-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-accent">{{ t('skills.categories.tools') }}</h3>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="skill in tools" :key="skill.name" class="flex flex-col items-center gap-2 group">
              <div class="p-3 bg-secondary dark:bg-secondary-dark rounded-xl group-hover:scale-110 transition-transform shadow-sm">
                <img :src="`/assets/skills/${skill.logo}`" :alt="skill.name" class="w-8 h-8">
              </div>
              <span class="text-sm opacity-70">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const frontend = [
  { name: 'Vue.js', logo: 'vue.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'Tailwind', logo: 'tailwind.svg' }
]
const backend = [
  { name: 'Node.js', logo: 'node.svg' },
  { name: 'Symfony', logo: 'symfony.svg' },
  { name: 'Java', logo: 'java.svg' },
  { name: 'Python', logo: 'python.svg' }
]
const tools = [
  { name: 'MongoDB', logo: 'mongodb.svg' },
  { name: 'Kotlin', logo: 'kotlin.svg' },
]
</script>