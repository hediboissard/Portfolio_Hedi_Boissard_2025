<template>
  <section id="contact" class="min-h-screen py-20 relative">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">{{ t('contact.title') }}</h2>
      
      <div class="flex justify-center gap-8 mb-12">
        <a v-for="link in contactLinks" 
           :key="link.name"
           :href="link.url"
           target="_blank"
           class="flex flex-col items-center gap-2 group opacity-70 hover:opacity-100 transition-all">
          <div class="p-4 bg-secondary dark:bg-secondary-dark rounded-full group-hover:scale-110 transition-transform shadow-sm">
            <img :src="link.img_src" :alt="link.name" class="w-6 h-6 dark:invert">
          </div>
          <span class="text-sm font-medium">{{ link.name }}</span>
        </a>
      </div>

      <div class="bg-secondary dark:bg-secondary-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="relative">
              <label for="name" class="block text-sm font-medium mb-2 opacity-80">{{ t('contact.labels.name') }}</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                @blur="validateField('name')"
                :class="getInputClass('name')"
                class="w-full bg-primary/50 dark:bg-primary-dark/50 p-3 rounded-lg border focus:border-accent outline-none transition-all"
                :placeholder="t('contact.placeholders.name')"
              >
              <span v-if="errors.name" class="text-red-500 text-xs absolute -bottom-5 left-0">{{ errors.name }}</span>
            </div>

            <div class="relative">
              <label for="email" class="block text-sm font-medium mb-2 opacity-80">{{ t('contact.labels.email') }}</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                @blur="validateField('email')"
                :class="getInputClass('email')"
                class="w-full bg-primary/50 dark:bg-primary-dark/50 p-3 rounded-lg border focus:border-accent outline-none transition-all"
                :placeholder="t('contact.placeholders.email')"
              >
              <span v-if="errors.email" class="text-red-500 text-xs absolute -bottom-5 left-0">{{ errors.email }}</span>
            </div>
          </div>

          <div class="relative">
            <label for="message" class="block text-sm font-medium mb-2 opacity-80">{{ t('contact.labels.message') }}</label>
            <textarea 
              id="message" 
              v-model="form.message"
              @blur="validateField('message')"
              rows="5"
              :class="getInputClass('message')"
              class="w-full bg-primary/50 dark:bg-primary-dark/50 p-3 rounded-lg border focus:border-accent outline-none transition-all resize-none"
              :placeholder="t('contact.placeholders.message')"
            ></textarea>
            <span v-if="errors.message" class="text-red-500 text-xs absolute -bottom-5 left-0">{{ errors.message }}</span>
          </div>

          <div v-if="apiMessage" 
               class="p-4 rounded-lg text-center text-sm font-medium"
               :class="isSuccess ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'">
            {{ apiMessage }}
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-lg transition-all font-bold flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span v-else>{{ isLoading ? t('contact.buttons.sending') : t('contact.buttons.send') }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const contactLinks = [
  { name: 'Mail', url: 'mailto:hboissard23@gmail.com', img_src: '/assets/Mail.svg' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hédi-boissard-a994ab25b', img_src: '/assets/Linkedin.svg' },
  { name: 'GitHub', url: 'https://github.com/hediboissard', img_src: '/assets/GitHub.svg' }
]

const form = ref({ name: '', email: '', message: '' })
const errors = ref({ name: '', email: '', message: '' })
const isLoading = ref(false)
const apiMessage = ref('')
const isSuccess = ref(false)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateField = (field: 'name' | 'email' | 'message') => {
  errors.value[field] = ''
  
  if (field === 'name' && form.value.name.length < 2) {
    errors.value.name = t('contact.validation.name_short')
  }
  if (field === 'email' && !emailRegex.test(form.value.email)) {
    errors.value.email = t('contact.validation.email_invalid')
  }
  if (field === 'message' && form.value.message.length < 10) {
    errors.value.message = t('contact.validation.message_short')
  }
}

const getInputClass = (field: 'name' | 'email' | 'message') => {
  if (errors.value[field]) return 'border-red-500'
  if (form.value[field] && !errors.value[field]) return 'border-green-500'
  return 'border-transparent'
}

const handleSubmit = async () => {
  validateField('name')
  validateField('email')
  validateField('message')
  
  const hasErrors = Object.values(errors.value).some(error => error !== '')
  const isEmpty = !form.value.name || !form.value.email || !form.value.message
  
  if (hasErrors || isEmpty) {
    if (isEmpty) apiMessage.value = t('contact.messages.validation_error')
    return
  }

  isLoading.value = true
  apiMessage.value = ''

  try {
    const response = await fetch('https://server-three-pi-90.vercel.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()
    
    if (!response.ok) throw new Error(data.message || 'Erreur inconnue')
    
    isSuccess.value = true
    apiMessage.value = t('contact.messages.success')
    form.value = { name: '', email: '', message: '' }
    
    setTimeout(() => { apiMessage.value = ''; isSuccess.value = false }, 5000)

  } catch (error) {
    console.error('Erreur:', error)
    isSuccess.value = false
    apiMessage.value = t('contact.messages.error')
  } finally {
    isLoading.value = false
  }
}
</script>