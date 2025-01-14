<template>
  <section id="lenguajes">
        <h2>Conocimientos</h2>
        <div class="slider">
          <div class="slide-track">
            <MySlide v-for="(slider, index) in sliders" :key="index" :route="slider.route"/>
          </div>
        </div>
      </section>
</template>

<script lang="ts" setup>
import MySlide from './MySlide.vue';

interface iSlider{
  route:string
}

const sliders:Array<iSlider> = [
  {route: "html5.svg"},
  {route: "css.svg"},
  {route: "javascript.svg"},
  {route: "java.svg"},
  {route: "spring.svg"},
  {route: "mysql.svg"},
  {route: "postman.svg"},
  {route: "python.svg"},
  {route: "flutter.svg"},
  {route: "git.svg"},
  {route: "github.svg"},
  {route: "bootstrap.svg"},
  {route: "vue.svg"},
  {route: "html5.svg"},
  {route: "css.svg"},
  {route: "javascript.svg"},
  {route: "java.svg"},
  {route: "spring.svg"},
  {route: "mysql.svg"},
  {route: "postman.svg"},
  {route: "python.svg"},
  {route: "flutter.svg"},
  {route: "git.svg"},
  {route: "github.svg"},
  {route: "bootstrap.svg"},
  {route: "vue.svg"},
]

</script>

<style scoped>


section{
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.slider{
    width:70vw;
    height: auto;
    margin: auto;
    overflow: hidden;
    border: 1px solid greenyellow;
    box-shadow: 0 0 10px greenyellow ;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 3px;
    border-radius: 10px;
}

.slider .slide-track{
    display: flex;
    animation: scroll 20s linear infinite;
    -webkit-animation: scroll 20s linear infinite;
    gap: 20px;
    width: calc(120px * 26);
}

@keyframes scroll{
    0%{
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100%{
        -webkit-transform: translateX(calc(-120px * 13));
        transform: translateX(calc(-120px * 13));
    }
}
</style>