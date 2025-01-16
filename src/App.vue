<template>
  <HeaderPortfolio/>
  <MainPortfolio/>
  <FooterPortfolio/>
</template>

<script lang="ts" setup>
import FooterPortfolio from './components/footer/FooterPortfolio.vue';
import HeaderPortfolio from './components/header/HeaderPortfolio.vue';
import MainPortfolio from './components/main/MainPortfolio.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = (e.target as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui;
  z-index: 0;
  scrollbar-color:#adff2f #282c34;
}
*::selection{
  color: #282c34;
  background-color: yellowgreen;
}

body {
    line-height: 1.6;
    color: white;
    background-color: #232323;
    display: grid;
    min-height: 100dvh;
    grid-template-rows: auto 1fr auto;
}

</style>
