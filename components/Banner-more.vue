<template>
  <a href="https://domicilio.app/">
    <div class="banner more-banner">
      <h3>Il progetto è attivo anche in altre città!</h3>
      <button>Scopri di più</button>
    </div>
  </a>
</template>

<style lang="scss" scoped>
a {
  @apply lg:my-20
  lg:mr-1;

  .banner {
    @apply relative
      w-full
      h-64
      flex
      flex-col
      justify-between
      items-baseline
      rounded
      py-8
      my-8
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

  .more-banner {
    @apply bg-green-cremona-domicilio
      bg-more-banner-img;
  }

  button {
    @apply bg-purple-cremona-domicilio;
  }

  &:hover .more-banner button {
    @apply bg-white
      text-purple-cremona-domicilio
      shadow-lg;
  }
}
</style>