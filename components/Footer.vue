<template>
  <div class="footer">
    <div class="breadcrumbs">
      <div v-if="$route.path !== localePath('index')">
        <span>
          <nuxt-link :to="localePath('index')">{{
            $t("navbar.home")
          }}</nuxt-link
          >>
          <span v-for="(link, index) of path" :key="index">
            <nuxt-link :to="`/${link}`">{{ link }}</nuxt-link
            >>
          </span>
          <span v-for="(current, index) of lastElement" :key="index">
            <span> {{ current }} </span>
          </span>
        </span>
      </div>
      <div v-else>
        <span>Home</span>
      </div>
    </div>

    <div class="block-container">
      <div class="block">
        <h4>Cremona a domicilio</h4>
        <ul>
          <li>
            <nuxt-link to="/about">Chi siamo</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project">Il Progetto</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/join">Segnala la tua attività</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"
              >Porta questa piattaforma nella tua cittò</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/privacy">Privacy & Cookie Policy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms">Termini e condizioni</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contattaci</nuxt-link>
          </li>
        </ul>
        <h4 class="hashtag">#iorestoacasa</h4>
      </div>
      <div class="block">
        <h4>Il progetto</h4>
        <p class="summary">
          <strong>Cremona a domicilio</strong>
          è una piattaforma gratuita per tutti quelli che vogliono effettuare
          una spesa o un ordine e riceverli a casa. Trovate le attività che
          effettuano il servizio a domicilio in città, i contatti, le
          condizioni. In questo periodo di emergenza in cui è importante restare
          a casa, possiamo comunque usufruire di alcuni servizi e contribuire a
          sostenere le attività locali!
        </p>
        <nuxt-link to="/project">Scopri il progetto</nuxt-link>
      </div>

      <div class="block active-portals">
        <h4>Portali attivi</h4>
        <ul>
          <li>
            <nuxt-link to="/">Cremona</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Taranto</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Firenze</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Mantova</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Bergamo</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Lussemburgo</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Versilia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Brescia</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Lecco</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Como</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Monza e Brianza</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Alicante ES</nuxt-link>
          </li>
        </ul>
        <h4>
          <nuxt-link to="/"
            >Ti piacerebbe avere questa piattaforma nella tua città?</nuxt-link
          >
        </h4>
      </div>

      <div class="block">
        <h4>
          <p>Hai visto un errore e vuoi segnalarcelo?</p>
          <p>Vuoi darci un consiglio su come migliorare il servizio?</p>
          <p>Vuoi solamente salutarci?</p>
        </h4>
        <button>
          <nuxt-link to="/contact">Contattaci</nuxt-link>
        </button>
      </div>
    </div>
    <footer>
      <p>
        Designed and Developed by
        <a href="https://dueper.net">Dueper Studio</a> •
      </p>
      <p>
        DevOps and automation by <a href="https://emberware.it">Emberware</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: [],
      lastElement: "",
    };
  },

  methods: {
    preadcrumbs() {
      this.path = this.$route.path.split("/");
      this.lastElement = this.path[this.path.length - 1].split("-");
      this.path.shift();
      this.path.pop();
      this.path = this.path.filter((link) => link !== this.$i18n.locale);
    },
  },

  watch: {
    $route: function () {
      this.preadcrumbs();
    },
  },

  mounted() {
    this.preadcrumbs();
  },
};
</script>

<style lang="scss" scoped>
.footer {
  @apply md:pt-4;

  .breadcrumbs {
    @apply px-4
    capitalize
      text-sm
      my-4
      max-w-screen-2xl
      mx-auto;

    a {
      @apply underline
        mx-1
        text-dark-cremona-domicilio
        hover:no-underline;
    }
  }

  .block-container {
    @apply px-4
        border-t
      text-dark-cremona-domicilio
        max-w-screen-2xl
        mx-auto
        md:grid
        md:grid-cols-2
        lg:flex
        lg:justify-between;

    .block {
      @apply my-16
        md:my-8
        lg:w-64;

      h4 {
        @apply text-green-cremona-domicilio
            font-medium;

        p {
          @apply text-dark-cremona-domicilio
            text-sm
            font-medium
            leading-6;
        }
      }

      ul {
        @apply my-4;

        li a {
          @apply text-xs
            no-underline
            font-normal
            hover:underline;
        }
      }

      .hashtag {
        @apply text-purple-cremona-domicilio
          my-4;
      }

      .summary {
        @apply text-xs
          my-4
          leading-6
          lg:flex
          lg:flex-col;
      }

      a {
        @apply my-4
          underline
          text-xs
          font-medium
          hover:no-underline;
      }

      button {
        @apply my-8;

        a {
          @apply no-underline
            bg-green-cremona-domicilio
            text-white
            py-2
            px-6
            rounded-full
            text-base
            transition-colors
            hover:bg-purple-cremona-domicilio;
        }
      }
    }

    .active-portals {
      @apply lg:flex
        lg:flex-col;

      ul {
        @apply grid
          grid-cols-2
          mb-8;
      }

      h4 {
        a {
          @apply text-base
            font-medium
            text-dark-cremona-domicilio;
        }
      }
    }
  }

  footer {
    @apply text-center
        w-full
        pb-24
        p-8
        bg-gray-100
        text-gray-cremona-domicilio
        text-xs
        md:mt-8
        md:flex
        md:justify-center
        md:py-8;

    p {
      @apply md:mx-1;

      a {
        @apply underline
          text-gray-900;
      }
    }
  }
}
</style>