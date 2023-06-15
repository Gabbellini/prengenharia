<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a href="https://api.whatsapp.com/send?phone=554797342592&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="whatsapp-float-button" target="_blank">
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>
  <div class="about-view">
    <MainHeader />
    <section class="section">
      <div class="section__content">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <!-- <h2 class="section-title">
            Por trás da <br />
            <strong>PR ENGENHARIA</strong>, existem
            <strong>grandes profissionais</strong>
          </h2>
          Construímos sonhos e transformamos ideias em realidade, com expertise, inovação e excelência em cada projeto. -->
          <h2 class="section-title">
            Construímos <br />
            <strong>sonhos</strong> e transformamos ideias em
            <strong>realidade</strong>, com expertise, inovação e excelência em cada projeto.
          </h2>
          <p class="main-text">
            Se você procura uma empresa de engenharia comprometida com a excelência, a PR Engenharia é a escolha certa.
          </p>
          <p class="main-text">
            Com uma equipe altamente qualificada, tecnologia de ponta e anos de experiência no mercado, a empresa oferece soluções completas e personalizadas para cada projeto, sempre com o compromisso de entregar o melhor resultado.
          </p>
          <p class="main-text">
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
      <div class="section__content">
        <div v-scroll-animate="'slide-from-left'" class="section__image">
          <img
            src="../assets/static/about/renato_pamela.jpg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
        </div>
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">TUDO COMEÇOU QUANDO...</h2>
          <p class="main-text">
            Maira e Fernanda se conheceram por amigos em comum na época da faculdade. Com as idas e vindas da vida, em 2016 decidiram fundar a Toddo.
          </p>
          <p class="main-text">
            A ideia surgiu da vontade de entregar serviços completos, uma arquitetura ponta a ponta.
          </p>
          <p class="main-text">
            Além disso, o foco da empresa é na particularidade de cada cliente, buscando afinidades e conhecimento de seus desejos e expectativas sobre o processo de criação, tornando cada projeto especial e único.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__content quote">
        <div v-scroll-animate="'slide-from-left'" class="section__image">
          <img
            src="../assets/static/about/renato_pamela.jpg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
        </div>
        <div v-scroll-animate="'fade-in'" class="section__text">
          <p class="dark-text">
            "O amor e a dedicação que temos em nosso trabalho refletem no retorno e na satisfação dos nossos clientes, o que nos faz acreditar que estamos no caminho certo."
          </p>
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
            <li>OBRAS</li>
            <li>EXECUÇÃO</li>
            <li>PROJETO ARQUITETÔNICO</li>
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
            <li>DESIGN</li>
            <li>DECORAÇÃO</li>
            <li>PROJETO DE INTERIORES</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section sponsors"></section>

    <section class="section">
      <div class="section__content">
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="contact-title">Entre em <br /><strong class="section-title">contato</strong></h2>
          <p class="dark-text">
            Quer realizar seu próximo projeto? Preencha o formulário ao lado ou
            entre em contato através dos canais abaixo.
          </p>
          <div class="contact telephone">
            <h3 class="subtitle">Telefones</h3>
            <a class="link" href="tel:5548988337474">+55 48 98833-7474</a>
            <a class="link" href="tel:5548996189628">+55 48 99618-9628</a>
          </div>
          <div class="contact email">
            <h3 class="subtitle">E-mail</h3>
            <a class="link" href="mailto:contato@toddo.arq.br">contato@toddo.arq.br</a>
          </div>
          <div class="contact location">
            <h3 class="subtitle">Endereço</h3>
            <p class="location">
              <strong
                >Ed. Blue Diamond Rua Idalina Pereira dos Santos, 67, sala 904
                Agronômica Florianópolis, Brasil</strong
              >
            </p>
          </div>
        </div>
        <div v-show="false" class="section__image">
          <form  class="elementor-form" method="post" name="Orçamento">
            <div class="elementor-form-fields-wrapper elementor-labels-above">
              <div class="">
                <label for="form-field-email" class="elementor-field-label">
                  Nome
                </label>
                <input
                  size="1"
                  type="text"
                  name="form_fields[email]"
                  id="form-field-email"
                  class="elementor-field elementor-size-sm elementor-field-textual"
                  placeholder="Digite seu nome"
                  required="required"
                  aria-required="true"
                />
              </div>
              <div
                class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-field_3e08a01 elementor-col-100 elementor-field-required"
              >
                <label
                  for="form-field-field_3e08a01"
                  class="elementor-field-label"
                >
                  E-mail
                </label>
                <input
                  size="1"
                  type="email"
                  name="form_fields[field_3e08a01]"
                  id="form-field-field_3e08a01"
                  class="elementor-field elementor-size-sm elementor-field-textual"
                  placeholder="Digite o seu melhor e-mail"
                  required="required"
                  aria-required="true"
                />
              </div>
              <div
                class="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_63907b2 elementor-col-100 elementor-field-required"
              >
                <label
                  for="form-field-field_63907b2"
                  class="elementor-field-label"
                >
                  Telefone
                </label>
                <input
                  size="1"
                  type="tel"
                  name="form_fields[field_63907b2]"
                  id="form-field-field_63907b2"
                  class="elementor-field elementor-size-sm elementor-field-textual"
                  placeholder="Digite seu telefone"
                  required="required"
                  aria-required="true"
                  pattern="[0-9()#&amp;+*-=.]+"
                  title="Only numbers and phone characters (#, -, *, etc) are accepted."
                />
              </div>
              <div
                class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-estado elementor-col-50"
              >
                <label for="form-field-estado" class="elementor-field-label">
                  Estado
                </label>
                <div
                  class="elementor-field elementor-select-wrapper remove-before"
                >
                  <div class="select-caret-down-wrapper">
                    <i aria-hidden="true" class="eicon-caret-down"></i>
                  </div>
                  <select
                    name="form_fields[estado]"
                    id="form-field-estado"
                    class="elementor-field-textual elementor-size-sm"
                  >
                    <option value="">Selecione um estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AM">Amazonas</option>
                    <option value="AP">Amapá</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="PR">Paraná</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
              </div>
              <div
                class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-cidade elementor-col-50"
              >
                <label for="form-field-cidade" class="elementor-field-label">
                  Cidade
                </label>
                <div
                  class="elementor-field elementor-select-wrapper remove-before"
                >
                  <div class="select-caret-down-wrapper">
                    <i aria-hidden="true" class="eicon-caret-down"></i>
                  </div>
                  <select
                    name="form_fields[cidade]"
                    id="form-field-cidade"
                    class="elementor-field-textual elementor-size-sm"
                  >
                    <option value="">Selecione uma cidade</option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
              <div
                class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-assunto elementor-col-100"
              >
                <label for="form-field-assunto" class="elementor-field-label">
                  Assunto
                </label>
                <input
                  size="1"
                  type="text"
                  name="form_fields[assunto]"
                  id="form-field-assunto"
                  class="elementor-field elementor-size-sm elementor-field-textual"
                  placeholder="Digite o assunto"
                />
              </div>
              <div
                class="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-menssagem elementor-col-100"
              >
                <label for="form-field-menssagem" class="elementor-field-label">
                  Mensagem
                </label>
                <textarea
                  class="elementor-field-textual elementor-field elementor-size-sm"
                  name="form_fields[menssagem]"
                  id="form-field-menssagem"
                  rows="4"
                  placeholder="Digite a mensagem"
                ></textarea>
              </div>
              <div
                class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons"
              >
                <button type="submit" class="elementor-button elementor-size-sm">
                  <span>
                    <span class="elementor-button-icon"> </span>
                    <span class="elementor-button-text">Enviar</span>
                  </span>
                </button>
              </div>
            </div>
          </form>
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
  align-items: flex-end;
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
  color: #7a7a7a;
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
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

.section-title {
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 3rem;
  color: #3a3a3a;
  transition: 1s all ease-in-out;
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
    .section-title {
      font-size: 3rem;
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
  
  .section__content.pamela .competencies {
    left: -270px;
    right: initial;
    bottom: 100px;
    align-items: flex-end;
  }
}

</style>
