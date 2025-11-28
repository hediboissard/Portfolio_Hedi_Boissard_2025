<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-20">
    <div class="max-w-6xl mx-auto px-4 w-full">
      <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <div class="flex-1 text-center md:text-left space-y-6">
          <h2 class="text-accent font-medium tracking-wide uppercase">Portfolio</h2>
          <h1 class="text-4xl md:text-6xl font-bold leading-tight">
            {{ t('home.greeting') }} <br/>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">
              Hédi Boissard
            </span>
          </h1>
          
          <div class="h-8 md:h-12 overflow-hidden">
             <p class="text-xl md:text-2xl opacity-80 animate-slideUp">
               {{ t('home.role') }}
             </p>
          </div>

          <p class="opacity-60 max-w-lg mx-auto md:mx-0">
            {{ t('home.description') }}
          </p>

          <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" class="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full transition-all shadow-lg shadow-accent/25">
              {{ t('home.cta_projects') }}
            </a>
            <a href="#contact" class="border border-current px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
              {{ t('home.cta_contact') }}
            </a>
          </div>

          <div class="flex gap-6 justify-center md:justify-start pt-4">
            <a href="https://linkedin.com/in/hédi-boissard-a994ab25b" target="_blank" class="opacity-60 hover:opacity-100 transition-opacity hover:text-accent">
              <img src="/assets/Linkedin.svg" class="size-6 dark:invert" alt="LinkedIn">
            </a>
            <a href="https://github.com/hediboissard" target="_blank" class="opacity-60 hover:opacity-100 transition-opacity hover:text-accent">
              <img src="/assets/GitHub.svg" class="size-6 dark:invert" alt="GitHub">
            </a>
          </div>
        </div>

        <div class="flex-1 relative flex justify-center">
          <div class="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          <div class="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2 border-2 border-gray-200/50 dark:border-white/10 backdrop-blur-sm">
            <img src="/assets/pp_Hedi.jpeg" class="w-full h-full object-cover rounded-full shadow-2xl" alt="Hédi Boissard" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: 'Hédi Boissard - Portfolio Développeur',
  meta: [
    {
      name: 'description',
      content: 'Développeur Fullstack spécialisé en Vue.js et Node.js.'
    },
    {
      property: 'og:image',
      content: '/assets/pp_Hedi.jpeg' 
    }
  ]
})
</script>

<style scoped>
.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>