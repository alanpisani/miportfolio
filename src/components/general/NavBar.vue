<template>
    <nav :class="props.customNavClass">
        <ul>
            <li v-for="(item, index) in props.menuItems" :key="index">
                <a :href="item.href" :target="item.target" :class="item.customClass">
                    <slot name="menu-item" :item="item">{{ item.title }}</slot>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface MenuItem {
    title:string;
    href: string;
    target: string;
    customClass: string;
    src: string
}

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
    },
    menuItems:{
        type: Array as () => MenuItem[],
        required:true
    },
    customNavClass:{
        type: String,
        required: false,
        default: ""
    }
})
</script>

<style scoped>
nav{
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

.header-link{
    color: #fff;
    text-decoration: none;
    transition: .3s ease;
}
.header-link:hover {
    color: greenyellow;
    text-decoration: none;
}

.f-nav{
    list-style: none;
    display: flex;
    justify-content: end;
}



</style>