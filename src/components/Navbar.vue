<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300"
          :class="scrolled ? 'bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-md border-b border-gray-200/10 shadow-sm' : 'bg-transparent'">
    
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <a href="#" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500 z-50">
          HB.
        </a>

        <div class="hidden md:flex items-center gap-8">
          <ul class="flex gap-6 text-sm font-medium">
            <li v-for="item in menuItems" :key="item.id">
              <a :href="item.href" 
                 @click.prevent="scrollToSection(item.href)"
                 class="relative py-2 transition-colors hover:text-accent"
                 :class="activeSection === item.id ? 'text-accent' : 'text-gray-600 dark:text-gray-300'">
                {{ item.name }}
                <span v-if="activeSection === item.id" 
                      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></span>
              </a>
            </li>
          </ul>

          <div class="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-6">
            <button @click="toggleLanguage" 
                    class="font-medium text-sm hover:text-accent transition-colors w-6 text-center uppercase text-gray-600 dark:text-gray-300">
              {{ currentLocale }}
            </button>

            <button @click="toggleTheme" 
                    class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"> 
              <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg> 
            </button>
          </div>
        </div>

        <button @click="toggleMenu" class="md:hidden p-2 text-gray-600 dark:text-white z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <transition 
      enter-active-class="transition duration-200 ease-out" 
      enter-from-class="opacity-0 -translate-y-2" 
      enter-to-class="opacity-100 translate-y-0" 
      leave-active-class="transition duration-150 ease-in" 
      leave-from-class="opacity-100 translate-y-0" 
      leave-to-class="opacity-0 -translate-y-2">
      
      <div v-if="isOpen" class="md:hidden absolute top-0 left-0 w-full h-screen bg-primary/95 dark:bg-primary-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center">
        <ul class="flex flex-col items-center gap-8 text-xl font-medium mb-10">
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.href" 
               @click.prevent="scrollToSection(item.href)"
               class="hover:text-accent transition-colors"
               :class="activeSection === item.id ? 'text-accent' : 'text-primary-dark dark:text-white'">
              {{ item.name }}
            </a>
          </li>
        </ul>

        <div class="flex gap-6 mt-4">
          <button @click="toggleLanguage" class="border px-4 py-2 rounded-full border-gray-300 dark:border-gray-700 uppercase">
            {{ currentLocale }}
          </button>
          <button @click="toggleTheme" class="border px-4 py-2 rounded-full border-gray-300 dark:border-gray-700 flex items-center gap-2">
            <span>{{ theme === 'dark' ? 'Mode Clair' : 'Mode Sombre' }}</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value)
const isOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')
const theme = ref(localStorage.getItem('theme') || 'dark')

const menuItems = computed(() => [
  { id: 'home', name: t('nav.home'), href: '#home' },
  { id: 'about', name: t('nav.about'), href: '#about' },
  { id: 'experience', name: t('nav.projects'), href: '#experience' }, 
  { id: 'projects', name: t('nav.projects'), href: '#projects' },
  { id: 'skills', name: 'Compétences', href: '#skills' }, 
  { id: 'contact', name: t('nav.contact'), href: '#contact' }
])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('locale', locale.value)
}

const scrollToSection = (href: string) => {
  isOpen.value = false
  document.body.style.overflow = ''
  
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
  
  const sections = menuItems.value.map(item => item.id)
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top >= -100 && rect.top <= 300) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  if (theme.value === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    theme.value = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    theme.value = 'light'
  }
  
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    locale.value = savedLocale
  }

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>