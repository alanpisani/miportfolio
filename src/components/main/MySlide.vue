<template>
    <div class="slide">
        <img :src="require(`@/assets/img/about/${props.route}`)" alt="">
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    route:{
        type:String,
        required: true
    }
})

</script>

<style scoped>
.slide{
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
}

.slide img{
    width: 100px;
}
</style>