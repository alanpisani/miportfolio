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
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 4.5rem;
    margin-bottom: 2rem;
  }
</style>