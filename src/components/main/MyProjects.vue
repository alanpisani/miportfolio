<template>
  <MySection id="proyectos">
        <h2>Proyectos</h2>
        <div class="proyectos-container">
          <ProyectItem v-for="(project, index) in projects" :key="index" 
          :title="project.title" :content="project.content" :image="project.image" :href="project.href" :github-href="project.githubHref"/>
        </div>  
  </MySection>
</template>

<script lang="ts" setup>
import ProyectItem from './ProyectItem.vue';
import MySection from '../general/MySection.vue';

const projects = [
  {
    title: "Sala de escape",
    content: "Juego de sala de escape con temporizador y un ranking en el que figuran los 10 mejores jugadores, los cuales son guardados en una base de datos.",
    image: "escape.png",
    href: "http://saladeescape.great-site.net/index.html",
    githubHref: "https://github.com/alanpisani/Sala-de-escape"
  },
  {
    title: "Aplicación móvil",
    content: "Aplicación para móviles la cual contiene varios minijuegos y un sistema de logros que tiene como fin incentivar al usuario a realizar una serie de objetivos.",
    image: "app.png",
    githubHref: ""
  },
  {
    title: "Lista de tareas",
    content: "Aplicación web con API RESTful en el backend. La aplicación permite crear una cuenta de usuario a través de un registro. Cada usuario posee su propia lista de tareas, las cuales podrá crear, marcarlas como realizadas o borrarlas.",
    image: "todo.png",
    href: "https://lista-de-tareas-y8j7.onrender.com/",
    githubHref: "https://github.com/alanpisani/lista-de-tareas"
  },
  {
    title: "E-commerce",
    content: "E-commerce de productos hecho en impresora 3D. Por el momento la página solo contiene el frontend. Hecha con html5, css3 y JavaScript vanilla.",
    image: "coshita.png",
    href: "https://alanpisani.github.io/coshita-3D/",
    githubHref: "https://github.com/alanpisani/coshita-3D"  
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