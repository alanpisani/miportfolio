<template>
    <section id="hero">
        <div class="hero-content">
          <img src="../../assets/img/cara.jpeg" alt="Mi Foto" class="profile-pic">
          <h1>¡Hola! Soy Alan <span>🖐🏻</span></h1>
          <p>Programador apasionado por la tecnología y el desarrollo. poseo gran capacidad para aprender nuevas habilidades rápidamente, capacidad para trabajar en equipo</p>
        </div>
    </section>
</template>

<script lang="ts" setup>

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
  #hero {
    text-align: center;
    padding: 2rem;
    color: #fff;
  }
  
  .hero-content .profile-pic {
    border-radius: 50%;
    border: 2px solid greenyellow;
    box-shadow: 0 0 10px greenyellow;
    width: 175px;
    height: 175px;
    object-fit: cover;
    margin-bottom: 1rem;
    transition: .3s ease;
  }
  
</style>