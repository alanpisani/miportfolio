<template>
  <main>
    <ProfilePortfolio/>
    <AboutMe/>
    <MyKnownledge/>
    <MyProjects/>
  </main>
</template>

<script lang="ts" setup>
import AboutMe from './AboutMe.vue';
import MyKnownledge from './MyKnownledge.vue';
import MyProjects from './MyProjects.vue';
import ProfilePortfolio from './ProfilePortfolio.vue';


</script>

<style scoped>
  main{
    
    overflow: hidden;
    width:75%;
    margin: 0 auto;
  }
  section {
    padding: 2rem;
    text-align: center;
    color: #ddd;
  }
@media (max-width: 770px) {
  main {
    width: 100vw;
  }
}
</style>