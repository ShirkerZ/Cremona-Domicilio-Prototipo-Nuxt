<template>
  <div class="zones">
    <div class="municipality-selection">
      <transition name="municipality-selection-transition">
        <div v-if="isOpen" class="municipality-selection-overlay">
          <button class="overlay-close" @click="closeOverlay">
            {{ $t("zones.close") }}
            <div class="icon"></div>
          </button>
          <div class="municipality-selection-overlay-inner">
            <div class="municipality-selection-overlay-inner-content">
              <div class="form-wrapper">
                <h3 class="overlay-title">{{ $t("zones.selectZone") }}</h3>
                <model-list-select
                  :list="zones"
                  v-model="selected"
                  option-value="slug"
                  option-text="title"
                  :placeholder="$t('zones.selectZone')"
                />
              </div>
              <button
                @click="confirmSelection"
                class="selection-submit"
                :disabled="!selected"
              >
                {{ $t("zones.confirm") }}
              </button>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="!isOpen" class="selector">
        <span>{{ $t("zones.selectedArea") }}: </span>
        <strong class="selected" @click="openOverlay"
          >{{
            selectedMunicipality
              ? selectedMunicipality.title
              : $t("zones.allZones")
          }}
          <div class="icon"><i class="fas fa-angle-down"></i></div>
        </strong>
      </div>
      <div v-if="!isOpen" class="change-zone">
        <button @click="isOpen = true">
          <i class="fas fa-sync-alt"></i>{{ $t("zones.changeZone") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ModelListSelect } from "vue-search-select";

export default {
  data() {
    return {
      selected: "",
      isOpen: false,
      savedMunicipality: "",
    };
  },

  computed: {
    ...mapState(["municipality", "selectedMunicipality", "zones"]),

    getMunicipality() {
      return this.$store.getters.getMunicipality(
        this.$nuxt.context.route.params.municipality
      );
    },
  },

  components: {
    ModelListSelect,
  },

  methods: {
    openOverlay() {
      this.isOpen = true;
    },

    closeOverlay() {
      this.isOpen = false;
    },

    confirmSelection() {
      this.$router.push({
        path: this.$route.path,
        query: { municipality: this.selected },
      });
      this.closeOverlay();
    },
  },

  mounted() {
    // localStorage.clear();
    if (localStorage.getItem("municipality")) {
      this.$store.commit(
        "overwriteSelectedMunicipality",
        localStorage.getItem("municipality")
      );
    }
  },

  watch: {
    $route: {
      deep: true,
      handler() {
        this.$store.commit("changeMunicipality");
      },
    },
  },
};
</script>

<style lang="scss">
.zones {
  @apply w-screen
  bg-purple-cremona-domicilio;

  .municipality-selection {
    @apply max-w-screen-2xl
  mx-auto
  text-left
  flex
  py-2
  px-4
  md:py-6
  md:justify-between;

    .selector {
      @apply flex
    flex-col
    md:flex-row
    md:items-center;

      span {
        @apply font-medium
        text-white
        text-sm
        mr-2
        md:text-lg;
      }

      .selected {
        @apply flex
        text-yellow-cremona-domicilio
        text-lg
        cursor-pointer;

        .icon {
          @apply ml-4
          font-thin
          text-green-cremona-domicilio;
        }
      }
    }

    .change-zone {
      @apply hidden
    md:flex;

      button {
        @apply text-white
        bg-gray-900
        bg-opacity-50
        rounded-full
        p-2
        px-4
        text-xs
        transition-colors
        table-row-group
        outline-none
        hover:bg-white
        hover:text-purple-cremona-domicilio;

        i {
          @apply mr-2
          text-yellow-cremona-domicilio;
        }

        &:hover i {
          transition: all 0.5s ease;
          transform: rotate(180deg);
        }
      }
    }

    .municipality-selection-transition-active,
    .municipality-selection-transition-leave-active {
      transform: scale(1);
      transition: all 0.25s ease;
    }

    .municipality-selection-transition-enter,
    .municipality-selection-transition-leave-to {
      @apply opacity-0;

      transform: scale(1.01);
    }

    .municipality-selection-overlay {
      @apply h-screen
      fixed
      inset-0
      bg-purple-cremona-domicilio
      p-4
      z-10
      md:z-30;

      .overlay-close {
        @apply fixed
        top-4
        right-4
        text-white
        text-sm
        outline-none
        flex
        items-center
        z-10
        md:top-8
        md:text-base
        md:right-12;

        .icon {
          background-image: url("../assets/images/cross.svg");
          background-size: 40% auto;
          background-color: #300049;
          @apply bg-center
          bg-no-repeat
          rounded-full
          text-yellow-cremona-domicilio
          ml-2
          w-8
          h-8
          md:w-12
          md:h-12
          md:ml-6;
        }

        &:hover .icon {
          background-color: rgba(white, 0.2);
          transform: rotate(90deg);
          transition: transform 0.25s ease, all 0.15s ease;
        }
      }

      .municipality-selection-overlay-inner {
        @apply absolute
        inset-0
        flex
        justify-center
        items-start
        text-left
        pt-32
        md:pt-0
        md:text-center
        md:items-center;

        .municipality-selection-overlay-inner-content {
          max-width: 900px;
          @apply w-11/12
          relative
          md:transform
          md:-translate-y-2/4;

          .overlay-title {
            @apply text-lg
            w-full
            font-medium
            text-white
            sm:text-2xl
            md:text-3xl
            lg:text-4xl;
          }

          .dropdown {
            @apply relative
            z-10
            text-xl
            font-normal
            cursor-pointer
            text-white
            sm:text-3xl
            md:text-4xl
            lg:text-5xl;

            .icon {
              background-image: url("../assets/images/arrow-down.svg");
              @apply w-6
              h-6
              bg-center
              bg-contain
              bg-no-repeat
              absolute
              right-0
              top-1/2
              transform
              -translate-y-2/4
              sm:w-10
              sm:h-10;
            }

            .search {
              @apply leading-tight
              font-medium
              py-6
              h-auto
              w-full
              border-b-2
              border-gray-900
              outline-none
              bg-transparent;
            }

            .text {
              @apply font-bold
              text-yellow-cremona-domicilio
              absolute
              left-0
              top-1/2
              transform
              -translate-y-2/4;
            }

            .menu {
              @apply py-6
              mb-12
              font-bold
              text-left
              bg-purple-cremona-domicilio
              overflow-y-auto
              h-55vh
              absolute
              top-full
              w-full
              md:py-8
              md:h-50vh;

              .item {
                @apply mb-4
                leading-none
                cursor-pointer
                text-white
                opacity-40
                sm:mb-6;

                &.selected {
                  @apply opacity-100
                    text-white;
                }
              }
            }
          }

          .selection-submit {
            @apply absolute
              left-2/4
              w-64
              max-w-full
              transform
              -translate-x-1/2
              rounded-full
              py-4
              px-8
              mt-16
              text-lg
              text-white
              bg-green-cremona-domicilio
              outline-none
              transition-colors
              hover:text-green-cremona-domicilio
              hover:bg-white;

            &:hover {
              box-shadow: 0 0 15px rgba(white, 0.3);
            }
          }
        }
      }
    }
  }
}
</style>