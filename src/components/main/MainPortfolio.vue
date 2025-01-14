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
  width:100vw;
  margin-top: 27px;
}
  section {
    padding: 2rem;
    text-align: center;
    color: #ddd;
   
  }
</style>