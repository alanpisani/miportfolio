<template>
  <section id="proyectos">
        <h2>Proyectos</h2>
        <div class="proyectos-container">
          <ProyectItem v-for="(project, index) in projects" :key="index" 
          :title="project.title" :content="project.content" :image="project.image" :href="project.href" :github-href="project.githubHref"/>
        </div>
        
      </section>
</template>

<script lang="ts" setup>
import ProyectItem from './ProyectItem.vue';

const projects = [
  {
    title: "Sala de escape",
    content: "Juego de sala de escape con temporizador y un ranking en el quefiguran los 10 mejores jugadores, loscuales son guardados en una base de datos.",
    image: "escape.png",
    href: "http://saladeescape.great-site.net/index.html",
    githubHref: "https://github.com/alanpisani/Sala-de-escape"
  },
  {
    title: "Aplicación móvil",
    content: "Aplicación para móviles la cual contiene varios minijuegos y un sistema de logros que tiene como fin incentivar al usuario a realizar una serie de objetivos.",
    image: "app.png",
    githubHref: "https://github.com/alanpisani/Sala-de-escape"
  },
  {
    title: "Lista de tareas",
    content: "Aplicación web con API RESTful en el backend. La aplicación permite crear una cuenta de usuario a través de un registro. Cada usuario posee su propia lista de tareas, las cuales podrá crear, marcarlas como realizadas o borrarlas.",
    image: "todo.png",
    githubHref: "https://github.com/alanpisani/Sala-de-escape"
  },
  // {
  //   image: "no.png",
  //   githubHref: "https://github.com/alanpisani/Sala-de-escape"
  // },
]
</script>

<style scoped>
.proyectos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

  }
  .proyectos-container:hover > :not(:hover){
    opacity: 0.5;
    filter: blur(1px);
  }
</style>