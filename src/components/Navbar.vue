<template>
  <header class="w-full top-0 left-0 right-0 z-50">
    <nav class="pt-4 md:hidden flex">
      <button @click="toggleTheme"> 
              <svg 
        v-if="theme === 'dark'"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      
      <!-- Icône Lune pour le mode clair -->
      <svg 
        v-else
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-gray-800" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
      <path 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    stroke-width="2" 
    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  /></svg> 
      </button>
      <div class="flex items-center justify-end w-full">
        <button @click="toggleMenu" class="fixed text-black focus:outline-none cursor-pointer z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-8 dark:text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M4 6h20M4 12h20M4 18h20" />
          </svg>
        </button>
      </div>

      <div v-if="isOpen" 
           class="fixed inset-0 bg-primary/95 backdrop-blur-sm z-40 pt-20">
        <ul class="flex flex-col items-center gap-8 text-lg">
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.href" 
               @click.prevent="scrollToSection(item.href)"
               class="hover:text-white transition-colors">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
    <nav class="hidden fixed md:flex w-full justify-center items-center transition-all duration-300" 
         :class="{'shadow-lg backdrop-blur-md': scrolled}">
      <ul class="flex justify-center items-center p-4 px-6 rounded-xl gap-5 mx-6 my-4 ">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.href" 
            @click.prevent="scrollToSection(item.href)"
            class="transition-colors opacity-60 hover:opacity-100 py-2 px-4 rounded-full">
            {{ item.name }}
          </a>
        </li>
      </ul>
      <button @click="toggleTheme" class="flex bg-secondary dark:bg-secondary-dark size-10 justify-center items-center rounded-full"> 
              <svg 
        v-if="theme === 'dark'"
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      
      <!-- Icône Lune pour le mode clair -->
      <svg 
        v-else
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-gray-800" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
      <path 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    stroke-width="2" 
    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  /></svg> 
      </button>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuItems = [
  { id: 1, name: 'Accueil', href: '#home' },
  { id: 2, name: 'À propos', href: '#about' },
  { id: 3, name: 'Projets', href: '#projects' },
  { id: 4, name: 'Compétences', href: '#skills' },
  { id: 5, name: 'Contact', href: '#contact' }
]
const isOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    window.scrollTo({
      top: (element as HTMLElement).offsetTop - 100,
      behavior: 'smooth'
    })
    
    if (isOpen.value) {
      toggleMenu()
    }
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}
const theme = ref(localStorage.getItem('theme') || 'dark')

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  document.documentElement.classList.toggle('dark')
}

onMounted(() => {
  // Vérifier le thème au chargement
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>