<template>
  <div class="index-container">
    <Home />
    <Zones />
    <Type />
    <Last-stores />
    <How-it-works />
    <Locations />
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

<script>
export default {
  transition: "slide-bottom",
  // mounted() {
  //   console.log('refs',this.$refs)
  //   this.$nextTick(() => {
  //     this.$gsap.from(this.$refs, 2, {
  //       opacity: 0,
  //     });
  //   });
  // },
};
</script>

<style lang="postcss" scoped>
.index-container {
  @apply bg-gray-50
    mt-8;
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
