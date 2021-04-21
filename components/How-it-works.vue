<template>
  <div class="how-it-works">
    <h3>{{ $t("howItWorks.howItWorks") }}</h3>
    <h5 class="summary">
      <strong>Cremona a domicilio</strong>
      {{ $t("howItWorks.howDesc") }}
    </h5>
    <div class="step-container">
      <div class="step">
        <div class="step-number"><strong>1</strong></div>
        <h3>{{ $t("howItWorks.card1") }}</h3>
        <img
          src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/steps/1_e5f44c0c.png"
          alt=""
          srcset=""
        />
      </div>

      <div class="step">
        <div class="step-number"><strong>2</strong></div>
        <h3>{{ $t("howItWorks.card2") }}</h3>
        <img
          src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/steps/2_7cbc3c05.png"
          alt=""
          srcset=""
        />
      </div>

      <div class="step">
        <div class="step-number"><strong>3</strong></div>
        <h3>{{ $t("howItWorks.card3") }}</h3>
        <img
          src="https://cremona.domicilio.app/app/themes/cremonadomicilio-theme/dist/images/steps/3_95504a5e.png"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.how-it-works {
  @apply mx-4
    flex
    flex-col
    justify-center
    text-center
    max-w-screen-2xl
    2xl:mx-auto;

  h3 {
    @apply text-2xl
      font-medium
      my-8
      lg:text-3xl;
  }

  .summary {
    @apply mb-8
      md:px-8
      md:text-lg
      lg:px-72;
  }

  .step-container {
    @apply flex
      flex-col
      md:grid
      md:grid-cols-3
      md:gap-6;

    .step {
      @apply my-4
        rounded-lg
        relative
        flex
        flex-col
        items-center
        w-auto
        h-80vh
        md:h-35vh
        lg:h-80vh
        2xl:h-60vh;

      &:nth-child(1) {
        @apply bg-green-cremona-domicilio;
      }

      &:nth-child(2) {
        @apply bg-blue-cremona-domicilio;
      }

      &:nth-child(3) {
        @apply bg-yellow-cremona-domicilio;
      }

      .step-number {
        @apply bg-gray-700
        bg-opacity-20
        p-6
        my-8
        w-10
        h-10
        rounded-full
        flex
        flex-initial
        justify-center
        items-center;
      }

      h3 {
        @apply px-4
          my-0
          text-xl
          font-medium
          text-gray-700
          md:px-8
          lg:text-2xl
          lg:px-20;
      }

      img {
        @apply absolute
          bottom-0;
      }
    }
  }
}
</style>