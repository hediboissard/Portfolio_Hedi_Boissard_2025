<template>
  <section id="experience" class="my-20 max-w-4xl md:mx-auto">
    <h2 class="text-3xl font-bold mb-8 text-center">Expériences</h2>
    <div class="flex flex-col gap-6">
      <div v-for="(exp, index) in experiences" 
           :key="index" 
           class="bg-secondary dark:bg-secondary-dark p-6 rounded-3xl">
        <div class="flex flex-col mb-4">
          <div class="flex items-start mb-2 justify-between">
            <div>
              <h3 class="text-lg font-semibold">{{ exp.title }}</h3>
              <h4 class="opacity-70">{{ exp.job }}</h4>
            </div>
            <a class="text-secondary text-xs flex items-center gap-2 rounded-lg bg-accent dark:bg-accent-dark p-2" target="_blank"
              :href="exp.website">{{ exp.company }}
              <img class="size-3 md:size-4 invert opacity-70" src="/assets/external_link.svg" alt="">
            </a>
          </div>
          <span class="opacity-50 text-sm mb-2">{{ exp.period }}</span>
        </div>
        <div class="text-sm opacity-70">
          <ul class="list-inside space-y-2">
            <li class="flex gap-2" v-for="(detail, detailIndex) in exp.details" 
                :key="detailIndex">
              - <p> {{ detail }} </p> 
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
    title: "Stage",
    job:"Développeur FullStack",
    company: "DotScreen",
    period: "Avril - Juin 2025",
    website: "https://dotscreen.com/",
    details: [
      "Développement de nouvelles fonctionnalités pour deux plateformes de streaming : TV5MONDE+ (France) et Rakuten Viki (international)",
      "Utilisation de React.js pour le web et d’une librairie interne dédiée au développement Smart TV",
      "Formation approfondie en TypeScript dispensée par un développeur de l’entreprise",
      "Apprentissage de la récupération et de l’exploitation des données via des API REST",
      "Maîtrise de l’utilisation des breakpoints pour le débogage et de la console développeur"
    ]
  },
  {
    title: "Stage",
    job: "Développeur FullStack",
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
    title: "Stage",
    job: "Découverte des métiers",
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