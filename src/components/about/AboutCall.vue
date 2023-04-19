<template>
  <section class="about">
    <div class="container">
      <div v-scroll-animate="'fade-in'" class="about__top">
        <h2> Por trás da <br> <strong>PR ENGENHARIA</strong>, existem <strong>grandes
          profissionais</strong></h2>
        <p>A PR Engenharia é resultado da união de dois profissionais com conhecimentos e experiências diferentes, que
          juntas somam forças para concretizar os sonhos dos clientes.</p>
        <p>O escritório se destaca pelo alto padrão de projetos e atendimento, qualidade na arquitetura e compromisso
          nas entregas.</p>
      </div>
      <div class="about__bottom">
        <img src="../../assets/static/about/renato_pamela.jpg"
             alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AboutCall",
});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  box-sizing: border-box;
  padding: 4rem 1rem 5rem 1rem;
}

.about__top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h2 {
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #3a3a3a;

  transition: 1s all ease-in-out;
}

.fade-in {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
  }
}

h2 > strong:last-child {
  font-weight: 600;
}

p {
  color: #7a7a7a;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.about__bottom > img {
  border-radius: 1rem;
  width: 80%;
}

@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    padding: 5rem 1rem;
  }

  .about__top {
    width: 54.788%;
  }

  .about__top > h2 {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  .about__bottom > img {
    max-width: 400px;
  }
}
</style>