<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
div{
  padding: 2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
    background-color: rgba(40, 44, 52, .3);
    box-shadow: 0 0 5px black;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    text-align: center;
}
</style>