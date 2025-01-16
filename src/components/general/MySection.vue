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
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  background-color: rgba(40, 44, 52, .3);
  box-shadow: 0 0 5px black;
  text-align: center;
}

@media (max-width: 770px) {
  div{
    width: 93vw;
  }
}
</style>