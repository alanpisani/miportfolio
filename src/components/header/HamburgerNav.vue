<template>
    <nav>
        <input type="checkbox" id="menu">
        <label for="menu" class="hamburguesa">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <ul>
            <li v-for="(item, index) in props.menuItems" :key="index">
                <a :href="item.href" :target="item.target" :class="item.customClass" @click="uncheckMenu">
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
});

const uncheckMenu = () => {
    const checkbox = document.getElementById('menu') as HTMLInputElement;
    if (checkbox) {
        checkbox.checked = false;
    }
};
</script>

<style scoped>
nav{
    display:flex;
    justify-content:flex-end;
    padding: 16px;
    position: fixed;
    background-color: #232323;
    width: 100%;
    z-index:1000;
}

ul{
    position:absolute;
    top:70px;
    right: 0;
    width: 50vw;
    height:0;
    transition: height .5s ease;
    display:none
}

li{
    margin-left:20px 0;
    width: 100%;
    list-style: none;
}

a{
    width:100%;
    text-decoration: none;
    color: white;
    font-size:10px;
    padding: 10px 20px;
}

label{
    display:flex;
    flex-direction: column;
    cursor: pointer;
}

#menu{
    opacity: 0;
    display: flex;
    flex-direction: column;
    position: relative;
}

span{
    width: 20px;
    height: 3px;
    background-color: greenyellow;
    transition: all .3s ease;
    margin: 2px 0;
}

#menu:checked + label + ul{
    display:flex;
    flex-direction: column;
    height: 70vh;
    background-color: #232323;
    border:2px solid greenyellow;
    box-shadow: 0 0 5px greenyellow;
}
</style>