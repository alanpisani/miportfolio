<template>
    <MySection my-id="sobre-mi">
        <h2>Sobre mí</h2>
        <p>Actualmente me encuentro en el tercer año de la carrera de tecnicatura superior en análisis de sistemas. Tengo conocimientos tanto en front como en backend, pero mi fuerte son Java y Spring. Me encanta resolver problemas y crear soluciones eficientes.</p>
    </MySection>
</template>

<script lang="ts" setup>
import MySection from '../general/MySection.vue';
</script>

<style scoped>

section{
    display:flex;
    width: 70%;
    flex-direction: column;
    margin:0 auto
}
</style>