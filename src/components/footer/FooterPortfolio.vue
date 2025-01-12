<template>
  <footer id="contacto">
    <nav class="f-nav">
      <ul>
        <li v-for="(icon, index) in menuItems" :key="index">
          <AnchorPortfolio :href="icon.href">
            <img :src="require(`@/assets/img/about/${icon.src}`)" alt="">
          </AnchorPortfolio>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
    import AnchorPortfolio from "../header/AnchorPortfolio.vue"
    
    interface iItem{
        title:string,
        href:string,
        src:string
    }

    const menuItems:Array<iItem> = [
    { title: 'instagram', href:"https://www.instagram.com/alan.pisani/", src: "instagram.svg" },
    { title: 'linkedin', href: "https://www.linkedin.com/in/alan-pisani/", src:"linkedin.svg" },
    { title: 'github', href: 'https://github.com/alanpisani', src:"github.svg" },
];
</script>

<style scoped>
footer {
    text-align: center;
    padding: 1rem;
    background-color: #282c34;
    color: #fff;
  }

.f-nav{
    list-style: none;
    display: flex;
    justify-content: end;
}

.f-nav img{
    width: 50px;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

li {
    margin: 0 1rem;
}
</style>