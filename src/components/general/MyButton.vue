<template>
  <button @click="handleClick">{{ props.btnContent }}</button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  btnContent:{
    type: String,
    required: false,
    default: "Clickeame"
  }
});

const emits = defineEmits(["onClick"]);
const handleClick = () => emits("onClick");

</script>

<style scoped>
button{
    padding:15px 25px;
    cursor: pointer;
    border-radius: 10px;
    background-color: greenyellow;
    font-size: 15px;
    border: 2px solid transparent;
    transition: .3s ease;
  }
  button:hover{
    border:2px solid greenyellow;
    box-shadow: 0 0 10px greenyellow;
    color: greenyellow;
    background-color: transparent;
  }
</style>