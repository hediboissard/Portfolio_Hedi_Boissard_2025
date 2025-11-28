<template>
  <div class="flex justify-center my-20 px-4">
    <a href="/assets/CV_Hedi_Boissard.pdf" download
       class="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary dark:bg-primary-dark border-2 border-accent text-accent font-bold rounded-full overflow-hidden transition-all hover:text-white hover:bg-accent">
      <span class="relative z-10 flex items-center gap-2">
        <svg class="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        {{ t('cv.download') }}
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>