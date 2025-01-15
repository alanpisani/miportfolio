<template>
    <header>
        <NavBar :menuItems="menuItems" v-if="!isSmallScreen"/>
        <HamburgerNav :menuItems="menuItems" v-else/>
    </header>
</template>

<script lang="ts" setup>
   
    import NavBar from '../general/NavBar.vue';
    
    interface MenuItem{
        title:string,
        href:string,
        target:string,
        customClass:string,
        src: string
    }

    const menuItems:Array<MenuItem> = [
    { title: 'Sobre mi', href:"#sobre-mi", target: "#sobre-mi", customClass:"header-link", src:""},
    { title: 'Conocimientos', href: "#lenguajes", target: "#lenguajes", customClass:"header-link", src:""},
    { title: 'Proyectos', href: '#proyectos', target: "#proyectos", customClass:"header-link", src:""},
    { title: 'Contacto', href: '#contacto', target: "#contacto", customClass:"header-link", src:""}
];

import { ref, onMounted, onUnmounted, Ref } from 'vue';
import HamburgerNav from './HamburgerNav.vue';

const isSmallScreen:Ref<boolean> = ref(window.innerWidth <= 770);

function updateScreenSize() {
  isSmallScreen.value = window.innerWidth <= 770;
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<style scoped>
header {
    background-color: #282c34;
    color: #fff;
    border-bottom:1px solid greenyellow;
    box-shadow: 0 0 5px greenyellow;
    position: fixed;
    width:100vw;
    z-index:1;
}
</style>