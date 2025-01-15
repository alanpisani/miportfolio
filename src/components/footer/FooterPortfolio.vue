<template>
  <footer id="contacto">
    <NavBar :menuItems="menuItems" customNavClass="f-nav">
    <template #menu-item="{ item }">
      <img :src="require(`@/assets/img/about/${item.src}`)" :alt="item.title" v-if="item.src" />
      <span v-else>{{ item.title }}</span>
    </template>
  </NavBar>
  </footer>
</template>

<script lang="ts" setup>
    import NavBar from '../general/NavBar.vue'
    
    interface Menuitem{
        title:string,
        href:string,
        src:string
        target: string,
        customClass: string
    }

    const menuItems:Array<Menuitem> = [
    { title: "instagram", href:"https://www.instagram.com/alan.pisani/", src: "instagram.svg", target: "_blank", customClass: "" },
    { title: 'linkedin', href: "https://www.linkedin.com/in/alan-pisani/", src:"linkedin.svg", target: "_blank", customClass: "" },
    { title: 'github', href: 'https://github.com/alanpisani', src:"github.svg", target: "_blank", customClass: "" },
];
</script>

<style scoped>
footer {
    text-align: center;
    padding: 1rem;
    background-color: #282c34;
    color: #fff;
    border-top: 1px solid greenyellow;
    box-shadow: 0 0 5px greenyellow ;
  }

img{
    width: 50px;
}
@media (max-width: 780px) {
  img{
    width:40px
  }
} 
  

</style>