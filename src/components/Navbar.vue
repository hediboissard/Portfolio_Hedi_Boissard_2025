<template>
  <header class="fixed w-full top-0 left-0 right-0 z-50">
    <nav class="p-6 md:hidden">
      <div class="flex items-center justify-end">
        <button @click="toggleMenu" class="text-white focus:outline-none cursor-pointer z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M4 6h20M4 12h20M4 18h20" />
          </svg>
        </button>
      </div>

      <div v-if="isOpen" 
           class="fixed inset-0 bg-[#051C24]/95 backdrop-blur-sm z-40 pt-20">
        <ul class="flex flex-col items-center gap-8 text-lg">
          <li v-for="item in menuItems" :key="item.id">
            <a :href="item.href" 
               @click.prevent="scrollToSection(item.href)"
               class="text-white/70 hover:text-white transition-colors">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
    <nav class="hidden fixed md:flex w-full justify-center transition-all duration-300" 
         :class="{'shadow-lg bg-[#051C24]/95 backdrop-blur-sm': scrolled}">
      <ul class="flex justify-center items-center p-4 px-6 rounded-xl gap-5 mx-6 my-4 ">
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.href" 
            @click.prevent="scrollToSection(item.href)"
            class="text-white/70 hover:text-white transition-colors hover:bg-white/30 py-2 px-4 rounded-full">
            {{ item.name }}
          </a>
        </li>
      </ul>
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>