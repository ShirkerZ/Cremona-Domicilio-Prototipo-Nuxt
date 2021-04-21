<template>
  <div class="locations">
    <h3>Vuoi sapere tutti i negozi che consegnano nel tuo comune?</h3>

    <div class="municipality-container">
      <ul>
        <li class="municipality" v-for="zone in zones" :key="zone.slug">
          <nuxt-link :to="localePath({ name: 'municipalities-municipality', params: { municipality: zone.slug }})">
            {{zone.title}} <span>({{zone.stores_number}})</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["zones"])
  }
}
</script>


<style lang="scss" scoped>
.locations {
  @apply flex
    flex-col
    max-w-screen-2xl
    mx-auto
    px-4
    lg:text-left
    lg:my-12;

  h3 {
    @apply text-2xl
        font-medium
        my-8
        lg:text-3xl;
  }

  .municipality-container {
    @apply my-12
      lg:my-0;

    ul {
      @apply grid
        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4;

      .municipality {
        @apply flex
          my-2
          mr-4
          text-sm
          lg:text-base;

        a {
          @apply transition-colors
            hover:text-purple-cremona-domicilio
            hover:underline;

          span {
            @apply text-xs
              ml-1;
          }
        }
      }
    }
  }
}
</style>
