<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300"
          :class="scrolled ? 'bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-md border-b border-gray-200/10' : 'bg-transparent'">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <a href="#" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">HB.</a>

        <div class="hidden md:flex items-center gap-8">
          <ul class="flex gap-6 text-sm font-medium">
            <li v-for="item in menuItems" :key="item.id">
              <a :href="item.href" @click.prevent="scrollToSection(item.href)"
                 class="relative py-2 transition-colors hover:text-accent"
                 :class="activeSection === item.id ? 'text-accent' : 'text-gray-600 dark:text-gray-300'">
                {{ item.name }}
                <span v-if="activeSection === item.id" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></span>
              </a>
            </li>
          </ul>
          <div class="flex items-center gap-4 pl-6 border-l border-gray-200 dark:border-gray-700">
            <button @click="toggleLanguage" class="font-bold text-sm hover:text-accent w-6">{{ locale.toUpperCase() }}</button>
            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span v-if="theme === 'dark'">☀️</span>
              <span v-else>🌙</span>
            </button>
          </div>
        </div>

        <!-- Mobile Button -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 text-gray-600 dark:text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full bg-primary dark:bg-primary-dark border-b border-gray-200 dark:border-gray-800 p-4 flex flex-col items-center gap-4">
      <a v-for="item in menuItems" :key="item.id" :href="item.href" @click="scrollToSection(item.href)" class="text-lg">{{ item.name }}</a>
      <div class="flex gap-4 mt-4">
        <button @click="toggleLanguage">{{ locale.toUpperCase() }}</button>
        <button @click="toggleTheme">{{ theme === 'dark' ? 'Light' : 'Dark' }}</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')
const theme = ref(localStorage.getItem('theme') || 'dark')

const menuItems = computed(() => [
  { id: 'home', name: t('nav.home'), href: '#home' },
  { id: 'about', name: t('nav.about'), href: '#about' },
  { id: 'experience', name: t('nav.experience'), href: '#experience' },
  { id: 'projects', name: t('nav.projects'), href: '#projects' },
  { id: 'skills', name: t('nav.skills'), href: '#skills' },
  { id: 'contact', name: t('nav.contact'), href: '#contact' }
])

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
  localStorage.setItem('locale', locale.value)
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  document.documentElement.classList.toggle('dark')
}

const scrollToSection = (href: string) => {
  isOpen.value = false
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
  const sections = menuItems.value.map(i => i.id)
  for (const s of sections) {
    const el = document.getElementById(s)
    if (el && el.getBoundingClientRect().top >= -100 && el.getBoundingClientRect().top <= 300) {
      activeSection.value = s
      break
    }
  }
}

onMounted(() => {
  if (theme.value === 'dark') document.documentElement.classList.add('dark')
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) locale.value = savedLocale
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>