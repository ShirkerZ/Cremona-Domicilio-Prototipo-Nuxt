<template>
    <div class="language-switch">
      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        {{ $t("navbar.changeLanguage") }}: {{ locale.name }}
      </nuxt-link>
    </div>

</template>

<style lang="scss" scoped>
.switch-enter-active,
.switch-leave-active {
  transition: transform 0.5s;
}

.switch-enter,
.switch-leave-to {
  transform: translateY(-100%);
}

.language-switch {
  a {
    @apply bg-white
        text-dark-cremona-domicilio
        rounded-b-3xl
        p-4
        pt-8
        bg-opacity-30
        hidden
        transition-colors
        hover:bg-opacity-100
        lg:inline;
  }
}
</style>