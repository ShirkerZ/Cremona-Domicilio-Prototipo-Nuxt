<template>
  <nuxt-link :to="localePath('join')">
    <div class="banner join-banner">
      <h3>Hai un'attivivtà che offre servizio a domicilio?</h3>
      <button>Aderisci ora</button>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
a {
  @apply lg:my-20
  lg:ml-1;

  .banner {
    @apply relative
      w-full
      h-64
      flex
      flex-col
      justify-between
      items-baseline
      rounded
      my-8
      py-8
      px-8
      bg-contain
      bg-right-bottom
      bg-no-repeat
      group
      max-h-80
      lg:h-45vh
      lg:my-0;

    img {
      @apply absolute
        w-full;
    }

    h3 {
      @apply text-xl
        text-white
        font-medium
        max-w-lg
        md:text-2xl
        lg:pr-64;
    }

    button {
      @apply text-white
        py-3
        px-8
        rounded-full
        transition-colors;
    }
  }

  .join-banner {
    @apply bg-purple-cremona-domicilio
      bg-join-banner-img;

    button {
      @apply bg-green-cremona-domicilio;
    }
  }

  &:hover .join-banner button {
    @apply bg-white
      text-green-cremona-domicilio
      shadow-lg;
  }
}
</style>