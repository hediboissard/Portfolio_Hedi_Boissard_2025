<template>
  <section id="experience" class="my-20 max-w-4xl mx-6 md:mx-auto">
    <h2 class="text-3xl font-bold mb-8 text-center">Expériences</h2>
    <div class="grid gap-6">
      <div v-for="(exp, index) in experiences" 
           :key="index" 
           class="bg-[#1E293B] p-6 rounded-lg">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-white">{{ exp.title }}</h3>
            <a class="text-[#007198] flex items-center gap-2" target="_blank"
              :href="exp.website">{{ exp.company }}
            <img class="size-3 md:size-4 invert opacity-70" src="/src/assets/external_link.svg" alt=""></a>
          </div>
          <span class="text-white/50">{{ exp.period }}</span>
        </div>
        <div class="text-white/70">
          <ul class="list-disc list-inside space-y-2">
            <li v-for="(detail, detailIndex) in exp.details" 
                :key="detailIndex">
              {{ detail }}
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
    title: "Stage Développeur FullStack",
    company: "DotScreen",
    period: "Avril - Juin 2025",
    website: "https://dotscreen.com/",
    details: [
      "Projet web en ReactJS : création d'interfaces responsives",
      "Travail en équipe et autonomie sur certaines tâches",
      "Développement d'interfaces web avec un focus sur la qualité du code"
    ]
  },
  {
    title: "Stage Développeur FullStack",
    company: "DotScreen",
    period: "Avril - Juillet 2024",
    website: "https://dotscreen.com/",
    details: [
      "Découverte du métier de développeur",
      "Projet TV sur box Free : développement en HTML, CSS, JS et découverte du QML",
      "Immersion dans un gros projet technique"
    ]
  },
  {
    title: "Stage de 3ème",
    company: "Webedia",
    period: "Décembre 2020",
    website: "https://fr.webedia-group.com/",
    details: [
      "Découverte des métiers du web et travail conjoint sur des projets numériques",
      "Création de décors pour des Top Youtubers avec les équipes de production"
    ]
  }
];
</script>