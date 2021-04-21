<template>
  <div class="type">

    <h3 v-if="$nuxt.context.route.name !== 'stores-store'">
      {{ $t("categories.storeType") }}
      <span>{{
        selectedMunicipality ? selectedMunicipality.title : $t("zones.allZones")
      }}</span
      >?
    </h3>
    <h3 v-else>{{ $t("categories.lookingForMore") }} ?</h3>

    <ul class="link-container">
      <li v-for="category in categories" :key="category.slug">
        <nuxt-link
          :to="
            localePath({
              name: 'categories-category',
              params: { category: category.slug },
            })
          "
        >
          {{ category.title }} <span>({{ category.stores_number }})</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["selectedMunicipality", "stores", "categories"]),
  },
};
</script>

<style lang="scss" scoped>
.type {
  @apply py-8
    px-4
    w-screen
    mx-auto
    max-w-screen-2xl;

  h3 {
    @apply text-2xl
        font-medium
        my-8
        md:text-3xl;

    span {
      @apply text-green-cremona-domicilio;
    }
  }
  .link-container {
    @apply flex
        flex-wrap;
    li {
      a {
        @apply flex
            items-center
            bg-gray-100
            text-dark-cremona-domicilio
            my-2
            mr-4
            px-4
            py-1
            rounded-full
            font-semibold
            lg:text-xl
            lg:px-6
            lg:py-2
            transition-colors
            hover:bg-green-cremona-domicilio
            hover:text-white;

        &.nuxt-link-exact-active {
          @apply bg-green-cremona-domicilio
                text-white;
        }

        span {
          @apply text-xs
            ml-1
            lg:text-sm;
        }
      }
    }
  }
}
</style>