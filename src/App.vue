<template>
  <div class="bg-primary text-black dark:bg-primary-dark dark:text-white duration-300 px-4">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <CV />
    <Project />
    <Skills />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import CV from './components/CV.vue'
import Project from './components/Project.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
</script>