<template>
  <div class="bg-primary text-black dark:bg-primary-dark dark:text-white duration-300 font-['Outfit']">
    <Navbar />
    <Home />
    
    <Suspense>
      <main>
        <About />
        <Experience />
        <Project />
        <Skills />
        <CV />
        <Contact />
      </main>
      
      <template #fallback>
        <div class="h-screen flex items-center justify-center">
          <span class="text-accent animate-pulse">Chargement...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'

const About = defineAsyncComponent(() => import('./components/About.vue'))
const Experience = defineAsyncComponent(() => import('./components/Experience.vue'))
const Project = defineAsyncComponent(() => import('./components/Project.vue'))
const Skills = defineAsyncComponent(() => import('./components/Skills.vue'))
const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
const CV = defineAsyncComponent(() => import('./components/CV.vue'))
</script>