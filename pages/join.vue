<template>
  <div class="join-container">
    <Zones />
    <JoinForm />
    <div class="banners">
      <Banner-more />
      <Banner-join />
    </div>
    <div class="social">
      <Share />
      <Contact />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.join-container {
  @apply bg-gray-50
    mt-16
    lg:pt-3;
}
.banners {
  @apply flex
    flex-col
    px-4
    my-8
    max-w-screen-2xl
    mx-auto
    md:grid
    md:grid-cols-2
    md:gap-4;
}
.social {
  @apply max-w-screen-2xl
    mx-auto
    md:grid
    md:grid-cols-2
    lg:px-4;
}
</style>