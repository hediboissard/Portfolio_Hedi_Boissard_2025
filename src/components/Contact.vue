<template>
  <section id="contact" class="min-h-screen py-20">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Contact</h2>
    <div v-if="message" 
         class="fixed top-5 left-1/2 -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg text-center min-w-[300px]"
         :class="message.includes('succès') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'">
      {{ message }}
    </div>
    
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex flex-row w-full justify-between gap-4 my-15">
        <a v-for="link in contactLinks" 
           :key="link.name"
           :href="link.url"
           class="flex flex-col md:flex-row items-center gap-3 opacity-75 hover:opacity-100 mb-5">
            <img :src="link.img_src" :alt="link.name" class="size-10 opacity-75 invert dark:invert-0">
          {{ link.name }}
        </a>
      </div>
      <div class="bg-secondary dark:bg-secondary-dark p-6 md:p-8 rounded-xl">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm opacity-70 mb-1">Nom</label>
              <input type="text" 
                     id="name" 
                     v-model="form.name"
                     placeholder="Votre nom"
                     class="w-full bg-primary dark:bg-primary-dark/50 p-2 rounded-lg border  border-white/10 focus:border-secondary outline-none"
                     required>
            </div>
            <div>
              <label for="email" class="block text-sm opacity-70 mb-1">Email</label>
              <input type="email" 
                     id="email" 
                     v-model="form.email"
                     placeholder="votre@email.com"
                     class="w-full bg-primary dark:bg-primary-dark/50 p-2 rounded-lg border border-white/10 focus:border-secondary outline-none"
                     required>
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm opacity-70 mb-1">Message</label>
            <textarea id="message" 
                      v-model="form.message"
                      placeholder="Votre message..."
                      rows="5"
                      class="w-full bg-primary dark:bg-primary-dark/50 p-2 rounded-lg border border-white/10 focus:border-secondary outline-none"
                      required></textarea>
          </div>
          <button type="submit" 
                  class="bg-accent dark:bg-accent-dark text-white py-4 px-6 rounded-lg hover:bg-accent dark:hover:bg-accent-dark transition-colors w-full">
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
    img_src: '/assets/Mail.svg',
    external: false
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hédi-boissard-a994ab25b',
    img_src: '/assets/Linkedin.svg',
    external: true
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hediboissard',
    img_src: '/assets/GitHub.svg',
    external: true
  }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})
const isLoading = ref(false)
const message = ref('')

const handleSubmit = async () => {
  try {
    isLoading.value = true
    
    const response = await fetch('https://server-three-pi-90.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()
    
    if (!response.ok) throw new Error(data.message)
    
    message.value = 'Message envoyé avec succès !'
    form.value = { name: '', email: '', message: '' }
    setTimeout(() => {
      message.value = ''
    }, 3000)
  } catch (error) {
    console.error('Erreur:', error)
    message.value = 'Erreur lors de l\'envoi du message.'
  } finally {
    isLoading.value = false
  }
}
</script>