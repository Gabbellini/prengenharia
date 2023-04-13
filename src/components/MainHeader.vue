<template>
  <header class="main-header">
    <div class="container">
      <img src="../assets/static/logo.png" alt="Logo da PR engenharia.">
      <button type="button"><span/></button>
      <nav>
        <ul>
          <li class="nav__item">
            <router-link :to="{name: 'about'}">Sobre</router-link>
          </li>
        </ul>
      </nav>
      <ul class="icon-list">
        <li class="icon-list__item icon-list__item--pinterest"><a href="#"></a></li>
        <li class="icon-list__item icon-list__item--instagram"><a href="#"></a></li>
        <li class="icon-list__item icon-list__item--facebook"><a href="#"></a></li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "MainHeader",
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

header {
  min-height: 95px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 17px -1px rgba(155.99999999999997, 155.99999999999997, 155.99999999999997, 0.18);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

img {
  width: 10rem;
}

nav {
  width: 71.503%;
}

ul {
  display: flex;
}

nav > ul {
  justify-content: flex-end;
}

.nav__item > a {
  padding: 1rem;
  box-sizing: border-box;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;

  text-transform: uppercase;
  text-decoration: none;

  color: #000;
  border-bottom: 0.20rem solid #373f41;
}

.icon-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.icon-list__item > a:not(.icon-list__item--instagram > a) {
  width: 30px;
  height: 30px;
}

.icon-list__item--pinterest > a{
  content: url("../assets/static/icons/social-medias/pinterest.svg");
}

.icon-list__item--instagram > a{
  content: url("../assets/static/icons/social-medias/instagram.svg");
}

.icon-list__item--facebook > a {
  content: url("../assets/static/icons/social-medias/facebook.svg");
}

button {
  display: none;
}
</style>