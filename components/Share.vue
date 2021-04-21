<template>
  <div class="share">
    <h3>Condividi la piattaforma con i tuoi amici!</h3>
    <div class="social-container">
      <button class="facebook">Facebook <i class="fab fa-facebook"></i></button>
      <button class="whatsapp">Whatsapp <i class="fab fa-whatsapp"></i></button>
    </div>
    <img
      src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/share-with-friends_7a1299ee.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.share {
  @apply py-8
    px-4
    flex
    flex-col
    justify-center
    items-center
    lg:px-36;

  h3 {
    @apply px-4
        text-xl     
        font-medium
        text-center
        lg:text-2xl;
  }

  img {
    @apply w-64;
  }

  .social-container {
    @apply flex
        flex-col
        my-4
        lg:flex-row
        lg:w-full;

    button {
      @apply flex
        items-center
        py-2.5
        px-4
        my-2
        rounded-full
        mx-20
        text-white
        transition-colors
        md:px-6
        md:pr-4
        lg:mx-auto;

      i {
        @apply ml-4
            lg:text-xl;
      }
    }

    .facebook {
      @apply bg-purple-cremona-domicilio
        hover:bg-opacity-80;
    }

    .whatsapp {
      @apply bg-green-cremona-domicilio
        hover:bg-purple-cremona-domicilio;
    }
  }
}
</style>