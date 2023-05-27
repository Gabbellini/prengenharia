<template>
  <div class="about-view">
    <MainHeader />
    <section class="section">
      <div v-scroll-animate="'fade-in'" class="section__text">
        <h2 class="section-title">
          Por trás da <br />
          <strong>PR ENGENHARIA</strong>, existem
          <strong>grandes profissionais</strong>
        </h2>
        <p class="main-text">
          A PR Engenharia é resultado da união de dois profissionais com
          conhecimentos e experiências diferentes, que juntas somam forças para
          concretizar os sonhos dos clientes.
        </p>
        <p class="main-text">
          O escritório se destaca pelo alto padrão de projetos e atendimento,
          qualidade na arquitetura e compromisso nas entregas.
        </p>
      </div>
      <div class="section__image">
        <img
          src="../assets/static/about/renato_pamela.jpg"
          alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
        />
      </div>
    </section>

    <section class="section">
      <div class="section">
        <div class="section__image">
          <img
            src="../assets/static/about/renato_pamela.jpg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
        </div>
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">Tudo começou quando...</h2>
          <p class="main-text">
            Maira e Fernanda se conheceram por amigos em comum na época da
            faculdade. Com as idas e vindas da vida, em 2016 decidiram fundar a
            Toddo.
          </p>
          <p class="main-text">
            A ideia surgiu da vontade de entregar serviços completos, uma
            arquitetura de ponta a ponta.
          </p>
          <p class="main-text">
            Além disso, o foco da empresa é na particularidade de cada cliente,
            buscando afinidades e conhecimento de seus desejos e expectativas
            sobre o processo de criação, tornando cada projeto especial e único.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section">
        <div class="section__image">
          <img
            src="../assets/static/about/renato_pamela.jpg"
            alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
          />
        </div>
        <div v-scroll-animate="'fade-in'" class="section__text">
          <h2 class="section-title">MAIRA DOLZAN</h2>
          <p class="main-text">
            “Eu nasci apaixonada por arquitetura de interiores. Onde estou,
            aonde vou, faz parte de mim, é o que faz meu olho brilhar!
          </p>
          <p class="main-text">
            Sou detalhista, perfeccionista e exigente (um pouco chata, faz
            parte! Rs). Gosto de ficar a par de toda a execução e fiscalizar os
            mínimos detalhes, pois acredito que eles fazem a diferença.”
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div v-scroll-animate="'fade-in'" class="section__text">
        <h2 class="section-title">FERNANDA DE MORAES</h2>
        <p class="main-text">
          “Arquiteta com o pé na obra! Gosto de criar e desenvolver projetos,
          mas vê-los tomar forma é a minha paixão. Esta é a minha proposta,
          entregar mais do que o projeto!
        </p>
        <p class="main-text">
          Criar espaços e edificações vai além de desenhar e conferir medidas.
          Se envolver com a trajetória é inevitável, passamos a fazer parte da
          história dos nossos clientes. Desde “o antes”, na contratação da nossa
          equipe, até “o depois”, quando o cliente já está usufruindo dos
          espaços que criamos.”
        </p>
      </div>
      <div class="section__image">
        <img
          src="../assets/static/about/renato_pamela.jpg"
          alt="imagem do casal Pamela (Arquiteta) e Renato (Engenheiro)"
        />
      </div>
    </section>

    <section class="section sponsors"></section>

    <section class="section">
      <div v-scroll-animate="'fade-in'" class="section__text">
        <h2 class="contact-title">Entre em <br /><strong class="section-title">contato</strong></h2>
        <p class="dark-text">
          Quer realizar seu próximo projeto? Preencha o formulário ao lado ou
          entre em contato através dos canais abaixo.
        </p>
        <div class="contact">
          <h3 class="subtitle">Telefones</h3>
          <a class="link" href="tel:5548988337474">+55 48 98833-7474</a>
          <a class="link" href="tel:5548996189628">+55 48 99618-9628</a>
        </div>
        <div class="contact">
          <h3 class="subtitle">E-mail</h3>
          <a class="link" href="mailto:contato@toddo.arq.br">contato@toddo.arq.br</a>
        </div>
        <div class="contact">
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
    </section>

    <footer class="footer"></footer>
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

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  box-sizing: border-box;
  padding: 4rem 1rem 5rem 1rem;
}

.footer {
  height: 400px;
  background-color: #282827;
  box-sizing: border-box;
  padding: 4rem 1rem 5rem 1rem;
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

h2 > strong:last-child {
  font-weight: 600;
}

.section-title {
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 2.5rem;
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
  background-image: url(../assets/static/icons/social-medias/facebook.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
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

.section__image > img {
  border-radius: 1rem;
  width: 80%;
}

@media screen and (min-width: 768px) {
  .section {
    flex-direction: row;
    padding: 2rem 1rem;
  }

  .section__text {
    width: 54.788%;
  }

  .section__image > img {
    max-width: 400px;
  }
}
</style>
