<template>
  <div class="contact">
    <h3>Non perderti nemmeno un aggiornamento della tua zona!</h3>
    <form action="">
      <div class="field">
        <label for="email">Inserisci la tua email</label>
        <input type="text" name="email" placeholder="example@domain.info*" />
      </div>
      <div class="field">
        <label for=""
          >Seleziona la zona di cui vuoi ricevere gli aggiornamenti</label
        >
        <select name="" id="">
          <option value="" disabled selected>Seleziona comune o zona*</option>
          <option value="zone.slug" v-for="zone in zones" :key="zone.slug">
            {{ zone.title }}
          </option>
        </select>
      </div>

      <button type="submit">Iscriviti*</button>
      <p class="note">
        * Confermo di aver preso visione dell'<a href="#"
          >informativa sul trattamento dei dati</a
        >
      </p>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["zones"]),
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @apply py-8
    px-8
        flex
        flex-col
        md:px-16
        lg:px-24;

  h3 {
    @apply text-xl
        font-medium
        text-center
        my-4
        lg:text-2xl
        lg:px-16;
  }

  form {
    @apply flex
      flex-col
      justify-center;

    .field {
      @apply my-4
        lg:my-2;

      label {
        @apply text-xs
          text-gray-cremona-domicilio;
      }

      input, select {
        @apply px-4
          py-2
          w-full
          border-gray-200
          border
          rounded
          outline-none
          focus:ring-1
          focus:ring-green-cremona-domicilio;
      }
    }

    button {
      @apply w-full
        bg-purple-cremona-domicilio
        text-white
        px-4
        py-3
        rounded-full
        my-8
        transition-colors
        md:w-40
        md:mx-auto
        md:my-4
        hover:bg-opacity-80;
    }

    .note {
      @apply text-xs
        text-center
        text-gray-cremona-domicilio;

      a {
        @apply text-dark-cremona-domicilio
          underline
          hover:no-underline;
      }
    }
  }
}
</style>