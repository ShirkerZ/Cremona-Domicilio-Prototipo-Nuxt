<template>
  <div class="navbar">
    <nav>
      <div class="logo">
        <nuxt-link :to="localePath('index')">{{ $t("navbar.logo") }}</nuxt-link>
      </div>
      <LanguageSwitch />
      <div class="main-nav">
        <ul class="desktop-navbar">
          <li>
            <nuxt-link :to="localePath('index')">{{
              $t("navbar.home")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('categories')">{{
              $t("navbar.categories")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('stores')">{{
              $t("navbar.stores")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('join')">{{
              $t("navbar.join")
            }}</nuxt-link>
          </li>
        </ul>
        <div class="search"><i class="fas fa-search"></i></div>
      </div>
      <ul class="mobile-nav">
        <li>
          <nuxt-link :to="localePath('stores')">
            <div class="icon">
              <i class="fas fa-store"></i>
            </div>
            <p>{{ $t("navbar.stores") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('categories')">
            <div class="icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <p>{{ $t("navbar.categories") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('index')">
            <div class="icon"><i class="fas fa-search"></i></div>
            <p>{{ $t("home.search") }}</p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('join')">
            <div class="icon">
              <i class="far fa-check-circle"></i>
            </div>
            <p>{{ $t("navbar.join") }}</p>
          </nuxt-link>
        </li>
        <li>
          <button class="icon" @click="toggleMenu">
            <i class="fas fa-bars"></i>
            <p>Menu</p>
          </button>
        </li>
      </ul>
      <div class="menu" ref="menu">
        <ul class="main-links" @click="closeMenu">
          <li>
            <nuxt-link :to="localePath('index')">
              {{ $t("navbar.home") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('categories')">{{
              $t("navbar.categories")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('stores')">{{
              $t("navbar.stores")
            }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('join')">{{
              $t("navbar.join")
            }}</nuxt-link>
          </li>
        </ul>

        <ul class="other-links">
          <li>
            <nuxt-link to="/about">Chi siamo</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project">Il Progetto</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/activity">Segnala la tua attività</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/new-city"
              >Porta questa piattaforma nella tua città</nuxt-link
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
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      if (!this.menuOpen) {
        this.$nextTick(() => {
          this.$gsap.to(".menu", 0.5, { left: 0 });
        });
      } else {
        this.$nextTick(() => {
          this.$gsap.to(".menu", 0.5, { left: "100%" });
        });
      }
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      console.log("Cloes?");
      this.$nextTick(() => {
        this.$gsap.to(".menu", 0.5, { left: "100%" });
      });
      this.menuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  @apply z-20
  w-full
  md:fixed
  md:top-0

  md:bg-green-cremona-domicilio 
  md:px-4;

  nav {
    @apply md:flex
  md:items-center
  md:justify-between mx-auto max-w-screen-2xl;

    .logo {
      @apply fixed
      z-10
      top-0
      left-0
      w-screen
      text-center
      font-medium
      py-5
      h-10vh
      text-lg
      cursor-pointer
      bg-green-cremona-domicilio
      text-white
      md:flex
      md:relative
      md:w-56
      md:text-xl
      md:py-6
      md:h-auto;
    }

    .main-nav {
      @apply flex
      items-center;

      .desktop-navbar {
        @apply hidden
        md:flex
        items-center
        justify-around
        mx-4
        lg:w-96;

        a {
          @apply text-white
          font-medium
          mx-4
          relative
          flex
          justify-center
          items-center
          transition-colors
          hover:text-opacity-50;

          &.nuxt-link-exact-active::before {
            content: "";
            @apply absolute
            -bottom-3
            bg-yellow-cremona-domicilio
            w-2
            h-2
            rounded-full;
          }
        }
        li:last-child a {
          @apply bg-white
          text-purple-cremona-domicilio
          py-3
          px-6
          mx-4
          rounded-full
          hover:bg-yellow-cremona-domicilio;

          &.nuxt-link-exact-active::before {
            @apply hidden;
          }
        }
      }
      .search {
        @apply hidden
        md:flex
        justify-center
        items-center
        text-yellow-cremona-domicilio
        p-4
        ml-1
        rounded-full
        cursor-pointer
        bg-purple-cremona-domicilio
        transition-colors
        hover:bg-opacity-80;
      }
    }
    .mobile-nav {
      @apply w-screen
      z-20
      fixed
      bottom-0
      left-0
      flex
      justify-around
      px-1.5
      bg-white 
      md:hidden;

      li {
        @apply text-xs
        text-gray-800
        pt-2
        pb-4
        flex
        flex-col;

        .icon {
          @apply flex
          justify-center
          items-center;

          i {
            @apply text-xl
          text-gray-400;
          }
        }

        a.nuxt-link-exact-active {
          @apply text-green-cremona-domicilio;

          .icon i {
            @apply text-green-cremona-domicilio;
          }
        }

        button {
          @apply flex
          flex-col
          outline-none;
        }
      }
    }
    .menu {
      @apply fixed
  z-10
  top-0
  left-full
  overflow-x-hidden
  h-screen
  w-screen
  bg-dark-cremona-domicilio
  px-6
  py-4;

      .main-links {
        @apply my-16;

        li {
          @apply text-4xl
        font-bold
        text-white
        my-2;
        }
      }
      .other-links {
        li {
          @apply my-3
      text-white;
        }
      }

      a.nuxt-link-exact-active {
        @apply text-green-cremona-domicilio;
      }
    }
  }
}
</style>
