<template>
  <section id="experience" class="py-20 px-4 bg-secondary/30 dark:bg-secondary-dark/30">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-4 text-center">{{ t('experience.title') }}</h2>
      <p class="text-center opacity-60 mb-12">{{ t('experience.subtitle') }}</p>
      
      <div class="space-y-8 border-l-2 border-accent/30 ml-4 md:ml-0 md:pl-8">
        <div v-for="(exp, index) in experiences" :key="index" class="relative pl-8 md:pl-0">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-primary dark:border-primary-dark"></div>
          
          <div class="bg-primary dark:bg-primary-dark p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-accent">{{ exp.job }}</h3>
                <h4 class="font-medium opacity-80">{{ exp.company }}</h4>
              </div>
              <span class="text-sm opacity-50 bg-secondary dark:bg-secondary-dark px-3 py-1 rounded-full h-fit w-fit mt-2 md:mt-0">
                {{ exp.period }}
              </span>
            </div>
            <ul class="space-y-2 opacity-70">
              <li v-for="(detail, i) in exp.details" :key="i" class="flex gap-2">
                <span>•</span> {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const experiences = computed(() => [
  {
    job: t('experience.items[0].job'),
    company: 'DotScreen',
    period: 'Avril - Juin 2025',
    details: [
      t('experience.items[0].details[0]'),
      t('experience.items[0].details[1]'),
      t('experience.items[0].details[2]'),
      t('experience.items[0].details[3]')
    ]
  },
  {
    job: t('experience.items[1].job'),
    company: 'DotScreen',
    period: 'Avril - Juillet 2024',
    details: [
      t('experience.items[1].details[0]'),
      t('experience.items[1].details[1]'),
      t('experience.items[1].details[2]')
    ]
  },
  {
    job: t('experience.items[2].job'),
    company: 'Webedia',
    period: 'Décembre 2020',
    details: [
      t('experience.items[2].details[0]'),
      t('experience.items[2].details[1]')
    ]
  }
])
</script>