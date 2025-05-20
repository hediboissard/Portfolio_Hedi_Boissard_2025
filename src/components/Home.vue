<template>
    <div id="home" class="mx-6">
  <div class="flex flex-col h-svh  max-w-2xl mx-auto ">
    <div class="flex flex-col md:flex-row-reverse items-center justify-between mt-20 md:mt-0 md:h-3/4 ">
      <div class="w-40 mb-10 md:mb-0 md:w-80 rounded-full bg-[#007198] p-1 self-center md:my-10">
        <img src="/assets/pp_Hedi.jpeg"class="size-full rounded-full" alt="Photo de profil" />
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-4xl">
          Hedi Boissard
        </h1>
  
        <h2 class="mt-2 text-white/70 overflow-hidden">
          <span v-for="(word, index) in words" 
                :key="index"
                class="inline-block animate-slideUp"
                :style="{ animationDelay: `${index * 0.2}s` }">
            {{ word }}&nbsp;
          </span>
        </h2>
  
        <div class="flex gap-4 text-sm">
          <a class="p-2 px-4 gap-2 rounded-full bg-[#007198] text-white mt-4 flex items-center cursor-pointer"
            href="https://linkedin.com/in/hédi-boissard-a994ab25b" target="_blank">
            <img class="size-8" src="/assets/Linkedin.svg" alt="">
            linkedin
          </a>
          <a class="p-2 pr-4 gap-2 rounded-full bg-[#007198] text-white mt-4 flex items-center cursor-pointer"
            href="https://github.com/hediboissard" target="_blank">
            <img class="size-8" src="/assets/GitHub.svg" alt="">
            github
          </a>
        </div>
      </div>
    </div>
      
    <div class="w-full justify-center flex">
      <button @click="scrollToAbout" class="absolute bottom-10 animate-bounce cursor-pointer">
        <img src="/assets/fleche.svg" alt="Défiler vers À propos">
      </button>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">

const scrollToAbout = () => {
  const aboutSection = document.querySelector('#about') as HTMLElement | null
  if (aboutSection) {
    window.scrollTo({
      top: aboutSection.offsetTop - 100,
      behavior: 'smooth'
    })
  }
}

const words = [
  'étudiant',
  'en',
  'développement',
  'web',
  'en',
  '2ème',
  'année',
  'à',
  'la',
  'recherche',
  "d'une",
  'alternance'
]
</script>
<style scoped>
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideUp {
  animation: slideDown 0.2s ease-out forwards;
  opacity: 0;
}
</style>