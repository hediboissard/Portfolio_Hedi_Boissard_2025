<template>
  <section id="experience" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
        <span class="border-b-4 border-accent pb-2">Mon Parcours</span>
      </h2>
      
      <div class="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
        <div v-for="(exp, index) in experiences" :key="index" class="relative pl-8 md:pl-12">
          
          <span class="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-[#0e0c12] bg-accent"></span>
          
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.job }}</h3>
            <span class="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              {{ exp.period }}
            </span>
          </div>
          
          <div class="mb-4">
            <a :href="exp.website" target="_blank" class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-accent flex items-center gap-2 w-fit">
              {{ exp.company }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <ul class="space-y-2 text-gray-600 dark:text-gray-400">
            <li v-for="(detail, i) in exp.details" :key="i" class="flex items-start gap-2">
              <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60"></span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    job: "Développeur FullStack",
    company: "DotScreen",
    period: "Avril 2025 - Juin 2025",
    website: "https://dotscreen.com/",
    details: [
      "Développement de features pour TV5MONDE+ et Rakuten Viki.",
      "Stack : React.js, TypeScript, API REST.",
      "Optimisation des performances et debugging avancé."
    ]
  },
  {
    job: "Développeur Front-End",
    company: "DotScreen",
    period: "Avril 2024 - Juillet 2024",
    website: "https://dotscreen.com/",
    details: [
      "Refonte de l'application France TV sur box Free.",
      "Technologies : HTML, CSS, JS, QML.",
      "Travail en méthode Agile."
    ]
  },
  {
    job: "Stage Découverte",
    company: "Webedia",
    period: "Décembre 2020",
    website: "https://fr.webedia-group.com/",
    details: [
      "Immersion dans l'univers des médias numériques.",
      "Assistance sur les plateaux de production."
    ]
  }
];
</script>