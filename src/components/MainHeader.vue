<template>
  <header class="main-header">
    <div class="container">
      <router-link :to="{name: 'about'}">
        <img src="../assets/static/logo.png" alt="Logo da PR engenharia.">
      </router-link>
      <button :class="isMenuOpen ? 'open' : 'close'" type="button" @click="toggleMenu"/>
      <nav :class="isMenuOpen ? 'open' : 'close'">
        <ul>
          <li class="nav__item">
            <a href="#mission">Missão</a>
          </li>
          <li class="nav__item">
            <a href="#vision">Visão</a>
          </li>
          <li class="nav__item">
            <a href="#values">Valores</a>
          </li>
          <li class="nav__item">
            <router-link :to="{name: 'about'}">Sobre</router-link>
          </li>
        </ul>
      </nav>
      <ul class="icon-list">
        <li class="icon-list__item icon-list__item--instagram">
          <a href="https://www.instagram.com/prengenhaaria/" target="_blank"></a>
        </li>
        <li class="icon-list__item icon-list__item--facebook">
          <a href="https://www.facebook.com/prengenhariaa/" target="_blank"></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "MainHeader",

  setup() {
    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    };

    return {
      isMenuOpen,
      toggleMenu,
    }
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
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
  box-sizing: border-box;
  padding: 1rem;

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

@media screen and (max-width: 1024px) {
  header {
    position: relative;
    box-shadow: 0 5px 16px -3px rgba(142.5, 142.5, 142.5, 0.55);
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    order: -1;

    min-height: 1.375rem;
    min-width:  1.375rem;

    padding: 0;

    cursor: pointer;

    border: none;
    background: none;
  }

  button::before, button::after {
    content: "";
    display: inline-block;
    left: 0;

    width: 100%;
    height: 2px;

    background: black;
    transition: 0.2s all ease-in-out;
  }

  button.open::after {
    transform: translateY(-0.4rem) rotate(45deg);
  }

  button.open::before {
    transform: translateY(0.2rem) rotate(-45deg);
  }

  nav {
    position: absolute;

    width: 100%;
    height: 0;

    bottom: 0;
    left: 0;

    transform: translateY(100%);
    overflow: hidden;

    background: #fafafa;
  }

  nav.open, nav.close {
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  nav.open {
    animation-name: openMenu;
  }

  nav.close {
    animation-name: closeMenu;
  }

  @keyframes openMenu {
    from {
      height: 0;
    }
    to {
      height: 3rem;
    }
  }

  @keyframes closeMenu {
    from {
      height: 3rem;
    }
    to {
      height: 0;
    }
  }

  nav > ul {
    justify-content: center;
  }

  .nav__item {
    display: flex;
    width: 100%;
  }

  .nav__item > a {
    flex: 1;
    text-align: center;
    border-bottom: none;
  }

  .icon-list {
    display: none;
  }
}
</style>