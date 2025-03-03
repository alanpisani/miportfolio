<template>
    <MySection my-id="hero">
        <div class="hero-content">
          <img src="../../assets/img/cara.jpeg" alt="Mi Foto" class="profile-pic">
          <h1>¡Hola! Soy Alan Pisani<span>🖐🏻</span></h1>
          <p>Programador apasionado por la tecnología. Poseo gran capacidad para aprender nuevas habilidades rápidamente y con capacidad para desarrollar y
            aprender nuevos conocimientos para crecer de forma profesional y personal.</p>
          <MyButton btnContent="Descargar cv" :onClick="downloadCv"/>
        </div>
    </MySection>
</template>

<script lang="ts" setup>
import MyButton from '../general/MyButton.vue';
import MySection from '../general/MySection.vue';

function downloadCv() {

    const baseUrl = window.location.pathname.includes("miportfolio") 
      ? "/miportfolio/" 
      : "/";
    const link = document.createElement('a');
    link.href = `${baseUrl}cv-Alan-Pisani.pdf`;
    link.download = 'cv Alan Pisani.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<style scoped>

span{
    display: inline-block;
    animation: girar 1s linear infinite;
    
  }

  @keyframes girar{
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(-45deg);
    }
    75%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(0deg);
    }
  }
    
  .hero-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .hero-content .profile-pic {
    border-radius: 50%;
    border: 2px solid greenyellow;
    box-shadow: 0 0 10px greenyellow;
    width: 175px;
    height: 175px;
    object-fit: cover;
    
    transition: .3s ease;
  }
  
</style>