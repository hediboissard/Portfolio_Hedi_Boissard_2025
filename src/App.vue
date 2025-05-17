<template>
  <Navbar />
  <div id="home" class="mx-6">
  <div class="flex flex-col h-svh  max-w-2xl mx-auto ">
    <div class="flex flex-col md:flex-row-reverse items-center justify-between mt-20 md:mt-0 md:h-3/4 ">
      <div class="w-40 mb-10 md:mb-0 md:w-80 rounded-full bg-[#007198] p-1 self-center md:my-10">
        <img src="./assets/pp_Hedi.jpeg"class="size-full rounded-full" alt="Photo de profil" />
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-4xl">
          Hedi Boissard
        </h1>
  
        <h2 class="mt-2 text-white/70">
          étudiant en développement web en 2eme année a la recherche d’une alternance
        </h2>
  
        <div class="flex gap-4 text-sm">
          <a class="p-2 px-4 gap-2 rounded-full bg-[#007198] text-white mt-4 flex items-center cursor-pointer"
            href="https://linkedin.com/in/hédi-boissard-a994ab25b" target="_blank">
            <img class="size-8" src="./assets/Linkedin.svg" alt="">
            linkedin
          </a>
          <a class="p-2 pr-4 gap-2 rounded-full bg-[#007198] text-white mt-4 flex items-center cursor-pointer"
            href="https://github.com/hediboissard" target="_blank">
            <img class="size-8" src="./assets/GitHub.svg" alt="">
            github
          </a>
        </div>
      </div>
    </div>
      
    <div class="w-full justify-center flex">
      <button @click="scrollToAbout" class="absolute bottom-10 animate-bounce cursor-pointer">
        <img src="./assets/fleche.svg" alt="Défiler vers À propos">
      </button>
    </div>
  </div>
  <About />
  <Experience />
  <CV />
  <Project />
  <Compétence />
  <Contact />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import CV from './components/CV.vue'
import Project from './components/Project.vue'
import Compétence from './components/Compétence.vue'
import Contact from './components/Contact.vue'

const scrollToAbout = () => {
  const aboutSection = document.querySelector('#about') as HTMLElement | null
  if (aboutSection) {
    window.scrollTo({
      top: aboutSection.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}
</script>