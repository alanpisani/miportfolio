<template>
    <div class="proyecto">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <img :src="require(`@/assets/img/proyects/${props.image}`)" alt="">
        <div class="btn-container">
            <MyButton :onClick="() => openWindow(props.href)" btnContent="Ir al sitio" />
            <a :href="props.githubHref" target="_blank">
                <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MyButton from "../general/MyButton.vue";
import { defineProps } from 'vue';

const props = defineProps({
    title:{
        type:String,
        required: false,
        default: "Sin proyecto"
    },
    content:{
        type:String,
        required: false,
        default: "El proyecto aún no está disponible"
    },
    image:{
        type:String,
        required: true,
    },
    href:{
        type:String,
        required: false,
        default: '' 
    },
    githubHref:{
        type:String,
        required: false,
        default: ''
    },
    
})

function openWindow(href:string){
  href != '' ? window.open(href, "_blank") : alert("La página aún no está disponible")
}
</script>

<style scoped>
.proyecto {
    margin: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    width: 300px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #232323;
    transition: .3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .proyecto:hover{
    transform: scale(1.05);
  }

  .proyecto img{
    object-fit:cover;
    width: 250px;
    height: 175px;
    margin: 20px;
    transition: .3s ease;
    border-radius: 10px;
    box-shadow: 0 0 5px gray;
  }
  .proyecto:hover img{
    box-shadow: 0 0 10px greenyellow;
    border: 1px solid greenyellow;
  }

  .img-container{
    background-size: 100% 100%;
    width: 250px;
    height: 175px;
    margin: 20px;
    box-shadow: 0 0 5px gray;
    transition: .3s ease;
    border-radius: 10px;
  }
  .proyecto:hover  .img-container{
    box-shadow: 0 0 10px greenyellow;
    border: 1px solid greenyellow;
  }
  
  .btn-container{
    display:flex;
    gap: 1rem;
    align-items: center;
  }

  .github-icon{
    margin: 0;
    width: 50px;
    fill: greenyellow;
    transition: .3s ease;
  }
  .github-icon:hover{
    filter: drop-shadow(
        0 0 10px rgba(173, 255, 47, .8)
    );
  }
  button{
    padding:15px 25px;
    cursor: pointer;
    border-radius: 10px;
    background-color: greenyellow;
    font-size: 15px;
    border: 2px solid transparent;
    transition: .3s ease;
  }
  button:hover{
    border:2px solid greenyellow;
    box-shadow: 0 0 10px greenyellow;
    color: greenyellow;
    background-color: transparent;
  }
</style>