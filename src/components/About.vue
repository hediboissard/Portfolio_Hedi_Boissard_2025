<template>
  <section id="about" class="min-h-screen py-20 max-w-4xl mx-auto px-4 flex items-center">
    <div>
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">{{ t('about.title') }}</h2>
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="md:w-2/5">
          <div class="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src="/assets/about_hedi.png" alt="About Hédi" class="w-full h-auto">
          </div>
        </div>
        <div class="md:w-3/5 space-y-6">
          <div class="flex flex-wrap gap-3">
            <span v-for="tag in tags" :key="tag" 
                  class="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
              {{ tag }}
            </span>
          </div>
          <p class="text-lg leading-relaxed opacity-80">
            {{ t('about.text') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tags = computed(() => [
  t('about.tags.autonomy'),
  t('about.tags.teamwork'),
  t('about.tags.creativity'),
  t('about.tags.adaptability')
])
</script>