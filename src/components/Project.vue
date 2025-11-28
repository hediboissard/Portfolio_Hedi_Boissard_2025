<template>
  <section id="projects" class="py-10 md:pt-50 px-2 md:px-0 max-w-4xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center">{{ t('projects.title') }}</h2>
    
    <div class="flex items-center gap-2 md:gap-4">

      <button @click="prevSlide" 
              class="group border-1 md:border-2 border-secondary/10 bg-secondary dark:bg-secondary-dark p-1 md:p-4 rounded-full cursor-pointer hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-8 md:w-8 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="overflow-x-auto hide-scrollbar snap-x" 
           ref="sliderContainer"
           @scroll="handleScroll">
        <div class="flex">
          <div v-for="(project, index) in projects" 
               :key="index" 
               class="w-full flex-shrink-0 px-1 md:px-4 snap-center">
            <div class="bg-secondary dark:bg-secondary-dark rounded-2xl md:rounded-4xl overflow-hidden h-full p-6 md:p-8">
              <h3 class="text-base md:text-xl font-semibold mb-1 md:mb-2">{{ project.title }}</h3>
              
              <p class="opacity-70 mb-6 md:mb-8 text-xs md:text-base line-clamp-3 md:line-clamp-none">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="bg-accent dark:bg-accent-dark text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                  {{ tech }}
                </span>
              </div>
              <a :href="project.github" 
                 target="_blank"
                 class="group flex items-center gap-1 md:gap-2 opacity-70 hover:text-white text-xs md:text-base bg-primary dark:bg-primary-dark dark:hover:bg-accent-dark hover:bg-accent transition-colors rounded-full p-2 justify-center">
                <img src="/assets/GitHub.svg" alt="GitHub" class="w-3 h-3 md:w-5 md:h-5 invert dark:invert-0 group-hover:invert-0">
                GitHub
                <img src="/assets/external_link.svg" class="size-4 group-hover:invert dark:invert" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

      <button @click="nextSlide" 
              class="group border-1 md:border-2 border-secondary/10 bg-secondary dark:bg-secondary-dark p-1 md:p-4 rounded-full cursor-pointer hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-8 md:w-8 opacity-50 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div class="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
      <button v-for="(_, index) in projects" 
              :key="index"
              @click="scrollToSlide(index)"
              class="w-2 h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 active:scale-125 hover:scale-125"
              :class="index === currentIndex ? 'bg-[#007198] scale-110' : 'bg-gray-400/50 hover:bg-gray-400'">
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n() 
const currentIndex = ref(0)

const projects = computed(() => [
  {
    title: "Moodify",
    description: t('projects.items.moodify'),
    technologies: ["Vue.js", "Node.js", "Express", "API Spotify"],
    github: "https://github.com/hediboissard/Moodify"
  },
  {
    title: "E-commerce Fossiles",
    description: t('projects.items.fossiles'),
    technologies: ["Vue.js", "Tailwind CSS"],
    github: "https://github.com/hediboissard/Projet_Final_Vue_Js"
  },
  {
    title: "Projet DevOps Cars",
    description: t('projects.items.devops'),
    technologies: ["DevOps", "CI/CD", "Git"],
    github: "https://github.com/hediboissard/Projet_Cars_DevOps"
  },
  {
    title: "Comptinou",
    description: t('projects.items.comptinou'),
    technologies: ["Android", "Java", "Kotlin", "Android Studio"],
    github: "https://github.com/hediboissard/Comptinou"
  }
])

const sliderContainer = ref<HTMLElement | null>(null)

const scrollToSlide = (index: number) => {
  if (sliderContainer.value) {
    const slideWidth = sliderContainer.value.clientWidth
    sliderContainer.value.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    })
    currentIndex.value = index
  }
}

const nextSlide = () => {
  const nextIndex = (currentIndex.value + 1) % projects.value.length 
  scrollToSlide(nextIndex)
}

const prevSlide = () => {
  const prevIndex = currentIndex.value === 0 ? projects.value.length - 1 : currentIndex.value - 1
  scrollToSlide(prevIndex)
}

let isScrolling: number | null = null

const handleScroll = () => {
  if (isScrolling !== null) {
    window.clearTimeout(isScrolling)
  }

  isScrolling = window.setTimeout(() => {
    if (sliderContainer.value) {
      const scrollPosition = sliderContainer.value.scrollLeft
      const slideWidth = sliderContainer.value.clientWidth
      const rawIndex = scrollPosition / slideWidth
      
      const progress = rawIndex % 1
      const newIndex = progress > 0.3 
        ? Math.ceil(rawIndex) 
        : Math.floor(rawIndex)

      if (newIndex >= 0 && newIndex < projects.value.length) {
        currentIndex.value = newIndex
        sliderContainer.value.scrollTo({
          left: slideWidth * newIndex,
          behavior: 'smooth'
        })
      }
    }
    isScrolling = null
  }, 100)
}

onMounted(() => {
  if (sliderContainer.value) {
    sliderContainer.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (sliderContainer.value) {
    sliderContainer.value.removeEventListener('scroll', handleScroll)
  }
  if (isScrolling !== null) {
    window.clearTimeout(isScrolling)
  }
})
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none;     
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;             
}
.snap-x {
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
}

.snap-center {
  scroll-snap-align: center;
}

@media (hover: none) {
  .snap-x {
    scroll-snap-type: x proximity;
  }
}
</style>