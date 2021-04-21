<template>
  <div class="home">
    <main>
      <h1>{{ $t("home.heroTitle") }} Cremona</h1>
      <p>
        {{ $t("home.heroSubTitle") }}
      </p>
      <form>
        <input type="text" :placeholder="$t('home.searchPlaceholder')" />
        <button type="submit">{{ $t("home.search") }}</button>
      </form>
    </main>
    <img
      class="left-img"
      src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/bg-intro-sx_f3d31398.png"
      alt=""
      srcset=""
    />
    <img
      class="right-img"
      src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/bg-intro-dx_edc995e6.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply relative
    flex
    flex-col
    bg-green-cremona-domicilio
    w-screen
    z-0
    md:mt-0
    md:w-full
    lg:w-screen
    lg:h-60vh
    lg:pt-12
    2xl:h-40vh;

  main {
    @apply flex
      flex-col
      justify-center
      items-center
      text-center
      text-white
      px-2
      pt-12
      pb-24
      z-10
      lg:py-16
      lg:min-h-full;

    h1 {
      @apply text-3xl
        font-medium
        mx-4
        md:text-4xl
        md:px-20
        lg:px-80
        2xl:w-1/2
        2xl:px-48;
    }

    p {
      @apply my-4
        mx-4
        text-base
        md:text-xl
        md:my-6;
    }

    form {
      @apply relative
        flex
        flex-col
        w-full
        px-4
        md:w-full
        md:my-4
        lg:px-56
        2xl:w-1/2
        2xl:px-12;

      input {
        @apply rounded-full
          bg-white
          text-gray-700
          border-none
          outline-none
          my-4
          p-4
          px-6
          w-full
          md:my-0
          md:px-6
          lg:text-lg;
      }

      button {
        @apply rounded-full
          bg-purple-cremona-domicilio
          border-none
          outline-none
          font-medium
          p-4
          w-full
          transition-colors
          md:absolute
          md:right-0
          md:py-2.5
          md:my-1.5
          md:mr-6
          md:w-28
          lg:text-lg
          lg:mr-56
          lg:right-1.5
          2xl:mr-12
          hover:bg-opacity-80;
      }
    }
  }

  .left-img {
    @apply absolute
      bottom-0
      left-0
      z-0
      h-2/3;
  }

  .right-img {
    @apply absolute
      bottom-0
      right-0
      z-0
      h-2/3;
  }
}
</style>