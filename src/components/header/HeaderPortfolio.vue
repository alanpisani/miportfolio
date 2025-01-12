<template>
    <header>
        <nav>
            <ul>
                <li v-for="(item, index) in menuItems" :key="index">
                    <AnchorPortfolio :href="item.href" customClass="header-link">
                        {{ item.title }}
                    </AnchorPortfolio>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts" setup>
    import AnchorPortfolio from './AnchorPortfolio.vue';
    
    interface iItem{
        title:string,
        href:string
    }

    const menuItems:Array<iItem> = [
    { title: 'Sobre mi', href:"#sobre-mi" },
    { title: 'Conocimientos', href: "#lenguajes" },
    { title: 'Proyectos', href: '#proyectos' },
    { title: 'Contacto', href: '#contacto' }
];
</script>

<style scoped>
header {
    background-color: #282c34;
    color: #fff;
    padding: 1rem;
    
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