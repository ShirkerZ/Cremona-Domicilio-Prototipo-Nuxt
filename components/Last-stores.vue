<template>
  <div class="last-stores">
    <h3 v-if="$nuxt.context.route.params.municipality && selectedMunicipality">
      {{ $t("stores.storesDeliveryIn") }} {{ getMunicipality.title }}
      <span class="store-number"> ({{ getMunicipality.stores_number }})</span>
      <h6>
        {{ $t("stores.storesDeliveryIn") }}
        <span>{{ selectedMunicipality.title }}</span>
      </h6>
    </h3>

    <h3 v-else-if="$nuxt.context.route.params.municipality && getMunicipality">
      {{ $t("stores.storesDeliveryIn") }} {{ getMunicipality.title }}
      <span class="store-number"> ({{ getMunicipality.stores_number }})</span>
    </h3>

    <h3 v-else-if="selectedMunicipality">
      {{ $t("stores.storesDeliveryIn") }} {{ selectedMunicipality.title }} ({{
        selectedMunicipality.stores_number
      }})
    </h3>

    <h3
      v-else-if="
        $nuxt.context.route.path !== localePath('categories-category') ||
        $nuxt.context.route.path === '/'
      "
    >
      {{ $t("stores.lastStores") }}
      <span>{{
        selectedMunicipality ? selectedMunicipality.title : $t("zones.allZones")
      }}</span>
    </h3>

    <h3 v-else-if="getCategory">
      {{ $t("stores.storesCategoryIn") }} {{ getCategory.title }} ({{
        getCategory.stores_number
      }})
    </h3>

    <div v-if="filteredStores.length">
      <div class="card-container">
        <div class="card" v-for="store of paginate" :key="store.slug">
          <nuxt-link
            :to="
              localePath({
                name: 'stores-store',
                params: { store: store.slug },
              })
            "
          >
            <main>
              <img class="avatar" :src="store.logo" />
              <h3>{{ store.title }}</h3>
              <p class="summary" v-html="store.description" />
            </main>
            <footer>
              <ul>
                <li
                  class="delivery-cost"
                  v-if="store.delivery.delivery_cost > 0"
                >
                  Consegna {{ store.delivery.delivery_cost }}€
                </li>
                <li class="free-delivery" v-else>Consegna Gratuita</li>
                <li v-for="category of store.category" :key="category.slug">
                  {{ category.title }}
                </li>
              </ul>
            </footer>
          </nuxt-link>
        </div>
      </div>

      <div
        class="pagination"
        v-if="
          filteredStores.length > itemsPerPage && !$route.name.includes('index')
        "
      >
        <button v-if="totalPages - currentPage < 1" @click="goToFirst">
          First &#171;
        </button>
        <button v-if="currentPage !== 1" @click="goBack">&#171;</button>
        <button
          :class="{ current: currentPage === pageNumber }"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="setPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
        <button v-if="currentPage !== totalPages" @click="goForward">
          &#187;
        </button>
        <button v-if="totalPages - currentPage > 1" @click="goToLast">
          Last &#187;
        </button>
      </div>
    </div>

    <div v-else>
      <p>Nessun negozio trovato...</p>
    </div>

    <span v-if="$route.name.includes('index')">
      <nuxt-link
        v-if="selectedMunicipality"
        class="btn-link"
        :to="
          localePath({
            name: 'stores',
            query: { municipality: selectedMunicipality.slug },
          })
        "
        >{{ $t("stores.allShops") }}
        {{
          selectedMunicipality
            ? selectedMunicipality.title
            : $t("zones.allZones")
        }}
      </nuxt-link>
      <nuxt-link v-else class="btn-link" :to="localePath('stores')">
        {{ $t("stores.allShops") }}
        {{ $t("zones.allZones") }}
      </nuxt-link>
    </span>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      currentPage: 1,
      resultCount: 0,
      itemsPerPage: 21,
    };
  },

  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber;
      scrollTo(0, 0);
    },

    goBack: function () {
      this.currentPage--;
      scrollTo(0, 0);
    },

    goForward: function () {
      this.currentPage++;
      scrollTo(0, 0);
    },

    goToFirst: function () {
      this.currentPage = 1;
      scrollTo(0, 0);
    },

    goToLast: function () {
      this.currentPage = this.totalPages;
      scrollTo(0, 0);
    },
  },

  computed: {
    ...mapState(["selectedMunicipality", "stores"]),

    filteredStores() {
      if (
        this.$nuxt.context.route.params.category &&
        (this.selectedMunicipality ||
          this.$nuxt.context.route.query.municipality)
      ) {
        return this.$store.getters.getStoreByCategoryAndMunicipality(
          this.$nuxt.context.query.municipality,
          this.$nuxt.context.route.params.category
        );
      } else if (
        this.$nuxt.context.route.params.municipality &&
        this.selectedMunicipality
      ) {
        return this.$store.getters.getStoreByMoreMunicipality(
          this.$nuxt.context.route.params.municipality
        );
      } else if (this.$nuxt.context.route.params.category) {
        return this.$store.getters.getStoreByCategory(
          this.$nuxt.context.route.params.category
        );
      } else if (
        this.selectedMunicipality ||
        this.$nuxt.context.route.params.municipality ||
        this.$nuxt.context.route.query.municipality
      ) {
        return this.$store.getters.getStoreByMunicipality(
          this.$nuxt.context.route.params.municipality ||
            this.$nuxt.context.route.query.municipality ||
            this.selectedMunicipality.slug
        );
      } else {
        return this.stores;
      }
    },

    totalPages: function () {
      if (this.resultCount == 0) {
        return 1;
      } else {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      }
    },

    paginate: function () {
      if (this.$route.name.includes("index")) {
        return this.filteredStores.slice(0, 6);
      }
      if (this.filteredStores.length >= this.itemsPerPage) {
        this.resultCount = this.filteredStores.length;
        let index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
        return this.filteredStores.slice(index, index + this.itemsPerPage);
      }
      return this.filteredStores;
    },

    getCategory() {
      return this.$store.getters.getCategory(
        this.$nuxt.context.route.params.category
      );
    },

    getMunicipality() {
      return this.$store.getters.getMunicipality(
        this.$nuxt.context.route.params.municipality
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.last-stores {
  @apply py-12
    px-4
    w-screen
    flex
    flex-col
    items-center
    max-w-screen-2xl
    mx-auto
    lg:items-baseline;

  .pagination {
    @apply flex
        justify-center
        items-center
        mx-auto;

    button {
      @apply rounded-full
            py-2
            px-4
            mx-2
            outline-none
            opacity-50
            hover:opacity-100;
    }
    .current {
      @apply bg-green-cremona-domicilio
            text-white
            opacity-100;
    }
  }

  h3 {
    @apply text-2xl
      font-medium
      my-8
      md:text-4xl
      md:font-bold;

    span {
      @apply text-green-400;
    }
    .store-number {
      @apply text-lg
      text-dark-cremona-domicilio;
    }
  }

  h6 {
    @apply text-lg
    my-2
    md:text-2xl;
  }

  .card-container {
    @apply flex
      flex-nowrap
      overflow-x-scroll
      py-8
      px-4
      w-screen
      flex
      flex-col
      md:w-full
      md:grid
      md:grid-cols-2
      md:gap-8
      lg:grid-cols-3
      lg:pl-0;

    .card {
      @apply cursor-pointer
      bg-white
        overflow-hidden
        p-6
        shadow-md
        rounded 
        min-w-full
        flex
        flex-col
        justify-between
        my-4
        md:my-0
        md:mx-0
        md:w-auto
        transition-shadow
        hover:shadow-lg;

      a {
        @apply h-full
        flex
        flex-col
        justify-between;

        .avatar {
          @apply w-12
          h-12
          rounded-full
          bg-blue-200;
        }

        h3 {
          @apply text-lg
          my-2;
        }

        p {
          max-height: 5em;
          @apply block
          break-words
          text-xs
          leading-5
          overflow-hidden
          overflow-ellipsis;
        }

        footer {
          ul {
            @apply mt-4
            flex
            flex-wrap;

            li {
              @apply flex-initial
              bg-gray-100
              my-1
              mr-2
              px-4
              py-1
              rounded-full
              text-xs;
            }
            .delivery-cost {
              @apply bg-gray-cremona-domicilio
                text-white;
            }

            .free-delivery {
              @apply bg-green-cremona-domicilio
            text-white;
            }
          }
        }
      }
    }
  }
  span {
    @apply mx-auto;
  }
  .btn-link {
    @apply bg-purple-cremona-domicilio
      text-white
      rounded-full
      outline-none
      border-none
      p-4
      my-8
      w-full
      transition-colors
      md:flex
      md:w-auto
      lg:mx-auto
      hover:bg-opacity-80;
  }
}

// .last-stores .card-container .card {
//   height: 370px;
//   min-width: 250px;
// }
</style>