<template>
  <section id="contact" class="min-h-screen py-20">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Contact</h2>
    
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex flex-row w-full justify-between gap-4 my-15">
        <a v-for="link in contactLinks" 
           :key="link.name"
           :href="link.url"
           class="flex flex-col md:flex-row items-center gap-3 text-white opacity-75 hover:opacity-100 transition-colors">
            <img :src="link.img_src" :alt="link.name" class="size-10 opacity-75">
          {{ link.name }}
        </a>
      </div>
      <div class="bg-[#1E293B] p-6 md:p-8 rounded-xl">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm text-white/70 mb-1">Nom</label>
              <input type="text" 
                     id="name" 
                     v-model="form.name"
                     placeholder="Votre nom"
                     class="w-full bg-white/70 p-2 rounded-lg text-black border  border-white/10 focus:border-[#007198] outline-none"
                     required>
            </div>
            <div>
              <label for="email" class="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" 
                     id="email" 
                     v-model="form.email"
                     placeholder="votre@email.com"
                     class="w-full bg-white/70 p-2 rounded-lg text-black border  border-white/10 focus:border-[#007198] outline-none"
                     required>
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm text-white/70 mb-1">Message</label>
            <textarea id="message" 
                      v-model="form.message"
                      placeholder="Votre message..."
                      rows="5"
                      class="w-full bg-white/70 p-2 rounded-lg text-black border  border-white/10 focus:border-[#007198] outline-none resize-none"
                      required></textarea>
          </div>
          <button type="submit" 
                  class="bg-[#007198] text-white py-4 px-6 rounded-lg hover:bg-[#005A7A] transition-colors w-full">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const contactLinks = [
  {
    name: 'Mail',
    url: 'mailto:hboissard23@gmail.com',
    img_src: '../src/assets/Mail.svg',
    external: false
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hédi-boissard-a994ab25b',
    img_src: '../src/assets/Linkedin.svg',
    external: true
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hediboissard',
    img_src: '../src/assets/GitHub.svg',
    external: true
  }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Formulaire soumis:', form.value)
  
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>