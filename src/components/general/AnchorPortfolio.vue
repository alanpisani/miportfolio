<template>
    
    <a :href="props.href" :target="props.target" :class="props.customClass">
        <slot></slot>
    </a>

</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    href:{
        type:String,
        required:false,
        default:'#'
    },
    target:{
        type:String,
        default:"_self"
    },
    customClass:{
        type: String,
        required:false,
        default: ''
    }

})
    
</script>

<style scoped>

.header-link{
    color: #fff;
    text-decoration: none;
    transition: .3s ease;
}
.header-link:hover {
    color: greenyellow;
    text-decoration: none;
}

</style>