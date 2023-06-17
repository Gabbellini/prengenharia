<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a href="https://api.whatsapp.com/send?phone=5547984822911&text=Olá%21%20gostaria%20de%20ajuda." class="whatsapp-float-button" target="_blank">
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>
  <div class="about-view">
    <MainHeader />
    <section class="section">
      <div class="section__content">
        <div class="section__text">
          <div class="section-title-container">
            <h2 v-scroll-animate="'fade-in-1s'" class="main-title">Construímos <strong>sonhos</strong> e transformamos</h2>
            <h2 v-scroll-animate="'fade-in-2s'" class="main-title">
               ideias em <strong>realidade</strong>, com expertise, 
            </h2>
            <h2 v-scroll-animate="'fade-in-3s'" class="main-title">
              inovação e excelência em cada projeto
            </h2>
          </div>
          <p v-scroll-animate="'fade-in'" class="main-text">
            Se você procura uma empresa de engenharia comprometida com a excelência, a PR Engenharia é a escolha certa.
          </p>
          <p v-scroll-animate="'fade-in'" class="main-text">
            Com uma equipe altamente qualificada, tecnologia de ponta e anos de experiência no mercado, a empresa oferece soluções completas e personalizadas para cada projeto, sempre com o compromisso de entregar o melhor resultado.
          </p>
          <p v-scroll-animate="'fade-in'" class="main-text">
            Venha conhecer a PR Engenharia e descubra como podemos transformar seus sonhos em realidade!
          </p>
        </div>
        <div v-scroll-animate="'slide-from-right'" class="section__image">
          <img
            src="../assets/static/about/renato_pamela.jpg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__content renato">
        <div v-scroll-animate="'slide-from-left'" class="section__image">
          <img
            src="../assets/static/about/renato.jpeg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
          <ul class="competencies">
            <li v-scroll-animate="'slide-from-right'">OBRAS</li>
            <li v-scroll-animate="'slide-from-right'">EXECUÇÃO</li>
            <li v-scroll-animate="'slide-from-right'">PROJETO ARQUITETÔNICO</li>
          </ul>
        </div>
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">RENATO DIAS GALLES</h2>
          <p class="main-text">
            A história da PR Engenharia é marcada pelo engenheiro civil Renato Dias Galles, um verdadeiro apaixonado pela construção civil. Desde o início de sua carreira, sempre se destacou por sua visão inovadora e seu comprometimento com a qualidade e a excelência em cada projeto.
          </p>
          <p class="main-text">
            Com anos de experiência e conhecimento em todas as etapas da construção, desde o projeto até o gerenciamento da obra, a PR Engenharia oferece um serviço de excelência, sempre pautado na segurança e responsabilidade.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__content pamela">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">PÂMELA GALLES</h2>
          <p class="main-text">
            Uma das grandes responsáveis pelo sucesso da PR Engenharia é a projetista Pamela Galles, que traz consigo anos de experiência e conhecimento em projetos de engenharia.
          </p>
          <p class="main-text">
            Com sua criatividade e habilidade técnica, com um olhar apurado para os detalhes e uma habilidade única em transformar ideias em realidade, suas ideias inovadoras e seu compromisso com a qualidade têm sido a base para muitos projetos bem-sucedidos, o que resultou em um crescente número de clientes satisfeitos e um forte reconhecimento no mercado.
          </p>
        </div>
        <div v-scroll-animate="'slide-from-right'" class="section__image">
          <img
            src="../assets/static/about/pamela.jpeg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
          <ul class="competencies">
            <li v-scroll-animate="'slide-from-left'">DESIGN</li>
            <li v-scroll-animate="'slide-from-left'">DECORAÇÃO</li>
            <li v-scroll-animate="'slide-from-left'">PROJETO DE INTERIORES</li>
          </ul>
        </div>
      </div>
    </section>

    
    <section class="section">
      <div class="section__content quote">
        <div v-scroll-animate="'slide-from-left'" class="section__image section__image--project">
          <img
            src="../assets/static/about/project.jpg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
        </div>
        <div v-scroll-animate="'fade-in'" class="section__text">
          <p class="main-text">
            <strong>Você já imaginou ter um espaço que une conforto, elegância ?</strong><br><br>
            O projeto inovador da PR Engenharia vai transformar seu sonho em realidade. Com design arrojado e materiais de alta qualidade, nossa equipe  talentosa vai criar um ambiente que supera todas as suas expectativas. . Não perca essa oportunidade única de ter um projeto exclusivo e personalizado. Conte conosco para construir o seu espaço dos sonhos. Junte-se à PR Engenharia e descubra o poder da excelência em engenharia e design.
          </p>
        </div>
      </div>
    </section>

    <section id="mission" class="section">
      <div class="section__content missao">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">NOSSA MISSÃO</h2>
          <p class="main-text">
            Nossa missão é proporcionar soluções de engenharia de alta qualidade e inovadoras para nossos clientes, garantindo a segurança e a eficiência dos projetos. Nós buscamos sempre superar as expectativas dos nossos clientes e contribuir para o desenvolvimento sustentável da sociedade. Nossa equipe de profissionais altamente capacitados e dedicados trabalha em estreita colaboração com nossos clientes para garantir que cada projeto seja entregue no prazo.
          </p>
        </div>
      </div>
    </section>

    <section id="vision" class="section">
      <div class="section__content missao">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">NOSSA VISÃO</h2>
          <p class="main-text">
            A nossa visão é ser uma empresa líder em engenharia civil, reconhecida pela excelência em projetos inovadores e construções. Buscamos constantemente aprimorar nossos conhecimentos e técnicas para atender às necessidades de nossos clientes de forma eficiente e eficaz que atendam às necessidades do mercado e contribuam para o desenvolvimento da sociedade. 
          </p>
        </div>
      </div>
    </section>

    <section id="values" class="section">
      <div class="section__content missao">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">NOSSOS VALORES</h2>
          <p class="main-text">
            Comprometimento, Transparência, Ética, Honestidade, Agilidade.
          </p>
        </div>
      </div>
    </section>

    <section class="section sponsors"></section>

    <section class="section">
      <div class="section__content">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="contact-title">Entre em <br /><strong class="section-title">contato</strong></h2>
          <p class="dark-text">
            Quer realizar seu próximo projeto? Entre em contato através dos canais abaixo.
          </p>
          <div class="contact telephone">
            <h3 class="subtitle">Telefones</h3>
            <a class="link" href="tel:5547984822911">+55 47 8482-2911</a>
            <a class="link" href="tel:5547984392757">+55 47 98439-2757</a>
          </div>
          <div class="contact email">
            <h3 class="subtitle">E-mail</h3>
            <a class="link" href="mailto:prengenharia@outlook.com.br">prengenharia@outlook.com.br</a>
          </div>
          <div class="contact location">
            <h3 class="subtitle">Endereço</h3>
            <p class="location">
              <strong
                >Rua: Geraldo Claudino dos Santos N° 171,
                Bairro: Gaspar Grande
                Cidade: Gaspar
                CEP: 89111-288,
                País: Brasil
              </strong
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__upper">
        <div class="section__content footer__content">
          <div class="footer__logo">
            <router-link :to="{name: 'about'}">
              <img class="logo__image" src="../assets/static/logo.png" alt="Logo da PR engenharia.">
            </router-link>
          </div>
          <div v-show="true" class="footer__nav">
            <ul class="footer__links">
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Home
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Serviços
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Contato 
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Mostras
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Orçamento
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Projetos
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Mídia
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Blog
                </router-link>
              </li>
              <li class="footer__link">
                <router-link :to="{name: 'about'}">
                  Sobre
                </router-link>
              </li>
            </ul>
          </div>
          <div class="footer__medias">
              <h3>Mídias sociais</h3>
              <ul class="icon-list">
                <li class="icon-list__item icon-list__item--instagram">
                  <a href="https://www.instagram.com/prengenhaaria/" target="_blank"></a>
                </li>
                <li class="icon-list__item icon-list__item--facebook">
                  <a href="https://www.facebook.com/prengenhariaa/" target="_blank"></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div class="footer__lower">
        <div class="footer__copyright">© 2023 PR ENGENHARIA <span v-show="false">| Created by</span> 
          <a v-show="false" href="https://personal-website-kohl-mu.vercel.app/" target="_blank">ABSTRATO.CO</a>
        </div>
        <router-link class="footer__privacy-policies" to="/policies">política de privacidade</router-link>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "@/components/MainHeader.vue";

export default defineComponent({
  name: "AboutView",
  components: { MainHeader },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap");

.about-view {
  overflow: hidden;
}

.section {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 60px;
}

.section__content {
  display: flex;
  flex-direction: column;
  max-width: 1180px;
  width: 100%;
  gap: 2rem;
  position: relative;
}

.section__content.quote {
  align-items: center;
}

.section__content.renato {
  flex-direction: column-reverse;
}

.competencies {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  font-weight: 500;
  margin-top: 5rem;
}

.section__content.renato .competencies {
  position: absolute;
  left: 0;
  bottom: -50px;
  align-items: flex-start;
}

.section__content.pamela .competencies {
  position: absolute;
  right: 0;
  bottom: -50px;
  align-items: flex-end;
}

.competencies > li {
  color: #8F8F8F;
  font-family: "Quicksand", Sans-serif;
  font-size: 20px;
  text-transform: uppercase;
}

.competencies > li:nth-child(1) {
  font-weight: bolder;
}

.competencies > li:nth-child(2) {
  font-weight: normal;
}

.competencies > li:nth-child(3) {
  font-weight: lighter;
}

.section.sponsors {
  height: 250px;
  background-color: #d6d6d6;
}

.section__text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section__image {
  text-align: end;
}

.section__image > img {
  /* max-width: 340px; */
  width: 100%;
  border-radius: 30px;
}

.main-text {
  color: #525252;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.dark-text {
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.5rem;
}

.fade-in {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
}

.fade-in-1s {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

.fade-in-2s {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 0.2s;
}

.fade-in-3s {
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    /* transform: translateX(-50px); */
  }
  to {
    opacity: 1;
  }
}

.slide-from-left {
  animation-name: slideFromLeft;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-200px);
  }
  to {
    transform: translateX(0);
  }
}

.slide-from-right {
  animation-name: slideFromRight;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

@keyframes slideFromRight {
  from {
    transform: translateX(200px);
  }
  to {
    transform: translateX(0);
  }
}

h2 > strong {
  font-weight: 600;
}

.section-title-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.main-title {
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 3rem;
  color: #3a3a3a;
  transition: 1s all ease-in-out;
  opacity: 0;
}

.section-title {
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 3rem;
  color: #3a3a3a;
}

.contact-title {
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #3a3a3a;
  transition: 1s all ease-in-out;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  margin-left: 50px;
}

.contact::before {
  content: "";
  position: absolute;
  left: -60px;
  height: 50px;
  width: 50px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.contact.telephone::before {
  background-image: url(../assets/static/icons/contact/telephone.png);
}

.contact.email::before {
  background-image: url(../assets/static/icons/contact/email.png);
}

.contact.location::before {
  background-image: url(../assets/static/icons/contact/location.png);
}

.subtitle {
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #99a19b;
}

.link {
  width: fit-content;
  color: #0170B9;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
}

.location {
  color: #373F41;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 600;
}

.footer {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
}

.footer__upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 310px;
  background-color: #282827;
  box-sizing: border-box;
  padding: 5rem 1rem;
}

.footer__content {
  justify-content: space-between;
  align-items: center;
}

.footer__lower {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  min-height: 45px;
  background-color: #1B1B1A;
}

.footer__copyright {
  box-sizing: border-box;
  padding: 1rem;
  text-decoration: none;
  color: #E6E4DE;
  font-size: 14px;
  font-family: "Montserrat", Sans-serif;
  font-weight: 500;
}

.footer__copyright > a {
  text-decoration: none;
  font-weight: 800;
  color: #0170B9;
}

.footer__privacy-policies {
  text-decoration: none;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  color: #E6E4DE;
  font-size: 14px;
  font-family: "Montserrat", Sans-serif;
  font-weight: 500;
}

.footer__nav {
  width: 100%;
}

.footer__links {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.footer__link {
  display: grid;
  place-items: center;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  transition: .3s;
  border-bottom: 0.2rem solid transparent;
}

.footer__link:hover {
  background-color: #3a3f45;
  color: #C6BBA6;
}

.footer__link > a {
  text-decoration: inherit;
  color: inherit;
  padding: 1rem;
  width: 100%;
  text-align: center;
}

.footer__medias {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  white-space: nowrap;
  text-transform: uppercase;
  text-decoration: none;
  color: #E6E4DE;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 1.3px;
  font-family: "Montserrat", Sans-serif;
}

.logo__image {
  width: 12rem;
}

.icon-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.icon-list__item > a {
  width: 30px;
  height: 30px;
}

.icon-list__item--pinterest > a{
  content: url("../assets/static/icons/social-medias/pinterest.svg");
}

.icon-list__item--instagram > a{
  content: url("../assets/static/icons/social-medias/instagram-white.png");
}

.icon-list__item--facebook > a {
  content: url("../assets/static/icons/social-medias/facebook-white.png");
}

.whatsapp-float-button {
	position:fixed;
	width:60px;
	height:60px;
	bottom:20px;
	right:20px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.whatsapp-icon {
	margin-top: 16px;
}

@media screen and (min-width: 800px) {
    .main-title {
      font-size: 2.5rem;
      line-height: 3.5rem;
    }
}

@media screen and (min-width: 1000px) {
  .section {
    padding: 3rem;
    display: flex;
    justify-content: center;
  }
  
  .section__content, .section__content.renato {
    flex-direction: row;
    width: 1180px;
  }
  
  .section__content.renato .competencies {
    left: initial;
    right: 20px;
    bottom: -50px;
  }

  .section__content.pamela .competencies {
    left: 20px;
    right: initial;
    bottom: -50px;
  }
  
  .section__image {
    text-align: initial;
  }

  .section__image > img {
    width: 310px;
    max-width: 600px;
  }
  
  .logo__image {
    width: 20rem;
  }
  
  .icon-list {
    justify-content: flex-end;
  }

  .footer__upper {
    padding: 5rem;
    justify-content: center;
  }
  
  .footer__lower {
    flex-direction: row;
    padding: 0 4rem;
  }
  
  .footer__links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  
  .footer__link:hover {
    background-color: transparent;
    border-bottom: 0.2rem solid #fff;
    color: #fff;
  }
}

@media screen and (min-width: 1300px) {
  .section__image > img {
    width: 450px;
    max-width: 600px;
  }

  .section__content.renato .competencies {
    left: initial;
    right: -290px;
    bottom: 100px;
    align-items: flex-start;
  }

  .section__content.renato > .section__text {
    justify-content: center;
    margin-bottom: 8rem;
  }
  
  .section__content.pamela .competencies {
    left: -270px;
    right: initial;
    bottom: 100px;
    align-items: flex-end;
  }
}

</style>
