<template>
  <div class="join-form">
    <h2 class="title">{{ $t("navbar.join") }}</h2>
    <h6>
      Vuoi essere anche tu nell’elenco delle attività che fanno servizio a
      domicilio a Cremona?<br /><br />
      Basta che compili il form qui sotto in tutti i suoi campi e invii la
      richiesta (è gratis!).<br />
      Riceverai un avviso non appena ti avremo inserito.<br /><br />
      Lavoriamo affinché l’aggiornamento avvenga nel più breve tempo
      possibile.<br /><br />
      Intanto grazie per la tua iscrizione e per il tuo servizio!
    </h6>
    <div class="steps">
      <ul>
        <li :class="{ active: step === 1 }">
          <p><span> 1</span>Informazioni personali</p>
        </li>
        <li :class="{ active: step === 2 }">
          <p><span>2</span>Informazioni sul negozio/servizio</p>
        </li>
        <li :class="{ active: step === 3 }">
          <p><span>3</span>Informazioni sulla consegna</p>
        </li>
        <li :class="{ active: step === 4 }">
          <p><span>4</span>Trattattamento dei dati</p>
        </li>
      </ul>
    </div>
    <form>
      <div v-if="step === 1" class="step step-1">
        <h3>Nominativo <span>*</span></h3>
        <div class="field-container full-name">
          <div class="field">
            <input name="name" type="text" />
            <label for="name">Nome</label>
            <p>Inserire nome e cognome di chi compila</p>
          </div>

          <div class="field">
            <input name="surname" type="text" />
            <label for="surname">Cognome</label>
          </div>
        </div>

        <div class="field-container contact-info">
          <div class="field">
            <h3>Telefono personale</h3>
            <input name="phone" type="text" />
            <p>Inserire telefono personale di chi compila</p>
          </div>

          <div class="field">
            <h3>Email personale <span>*</span></h3>
            <input name="email" type="text" />
            <p>Inserire email personale di chi compila</p>
          </div>
        </div>
      </div>

      <div v-if="step === 2" class="step step-2">
        <div class="field-container">
          <div class="field">
            <h3>Nome del negozio/servizio <span>*</span></h3>
            <input name="store-name" type="text" />
          </div>

          <div class="field">
            <h3>Indirizzo <span>*</span></h3>
            <input name="address" type="text" />
            <p>Inserici anche il comune</p>
          </div>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Telefono negozio/servizio</h3>
            <input name="store-phone" type="text" />
            <p>
              Inserire il numero di telefono del negozio oppure quello dove
              ricevere gli ordini
            </p>
          </div>

          <div class="field">
            <h3>Email negozio/servizio</h3>
            <input name="store-email" type="text" />
            <p>
              Inserire l'indirzzo email del negozio oppure quello dove ricevere
              gli ordini
            </p>
          </div>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Immagine di profilo</h3>
            <input name="avatar" type="file" />
            <p>Inserisci il logo della tua attività</p>
          </div>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Sito web del negozio</h3>
            <input name="web-site" type="text" placeholder="https://" />
            <p>Inserire l'indirizzo del sito web del negozio/servizio</p>
          </div>

          <div class="field">
            <h3>Indirizzo pagina Facebook</h3>
            <input name="facebook" type="text" placeholder="https://" />
            <p>Inserire l'indirizzo della tua pagina Facebook</p>
          </div>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Numero di whatsapp</h3>
            <input name="whatsapp" type="text" />
            <p>
              Inserire il numero di whatsapp che i clienti possono usare per
              contattarti. Anche se è lo stesso del "Numero di telefono"
              inseriscilo nuovamente.
            </p>
          </div>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Categoria merceologica <span>*</span></h3>
            <select name="category">
              <option value="veicoli">Veicoli</option>
              <option value="hobby-tempo-libero">Hobby/Tempo libero</option>
              <option value="bar">Bar</option>
              <option value="ristorazione">Ristorazione</option>
            </select>
            <p>Selezionare al massimo 4</p>
          </div>
        </div>
      </div>

      <div v-if="step === 3" class="step">
        <div class="field">
          <h3>Pagina prenotazione online</h3>
          <input type="text" name="online-reservation" placeholder="https://" />
          <p>Inserire se il servizio ha una pagina web per la prenotazione</p>
        </div>

        <div class="field">
          <h3>Servizio dedicato solamente alle categorie più fragili?</h3>
          <div class="field-checkbox">
            <input type="checkbox" name="fragile" id="" />
            <label for="fragile"
              >Dedicato solamente alle categorie più fragili</label
            >
          </div>
          <p>
            Selezionare la spunta nel caso che questo servizio sia dedicato
            solamente alle categorie più fragili.
          </p>
        </div>

        <div class="field">
          <h3>Comuni e zone in cui si effettua il servizio <span>*</span></h3>
          <select name="zones">
            <option value="cremona">Cremona</option>
            <option value="Bonemerse">Bonemerse</option>
            <option value="Sospiro">Sospiro</option>
          </select>
          <p>
            Selezionare tutti i comuni e le zone in cui si effettua il servizio
            di consegna a domicilio
          </p>
        </div>

        <div class="field">
          <h3>Altri comuni in cui si effettuano consegne</h3>
          <textarea name="other-zones" cols="30" rows="5"></textarea>
          <p>
            Inserire i comuni in cui si effettua la consegna se non sono
            presenti nella lista precedente.
          </p>
        </div>

        <div class="field">
          <h3>Giorni di consegna</h3>
          <textarea name="delivery-days" cols="30" rows="5"></textarea>
          <p>
            Inserire i giorni in cui si effettuano le consegne (es. "Da lunedì a
            venerdì escluso il martedì" oppure "Tutti i giorni su richiesta")
          </p>
        </div>

        <div class="field">
          <h3>Modalità di pagamento</h3>
          <textarea name="payment-option" cols="30" rows="5"></textarea>
          <p>
            Inserire i metodi di pagamento accettati (es. Contanti, Carta e
            Bancomat, Satispay, Bonifico, ecc..)
          </p>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Tipologia di consegna <span>*</span></h3>
            <select name="delivery-category">
              <option value="">Non specificato</option>
              <option value="">Consegna gratuita</option>
              <option value="">Consegna a pagamento</option>
            </select>
            <p>
              Selezionare il tipo di consegna. Se esistono costi differenti in
              base al comune o ulteriori dettagli specificarlo nella
              "Descrizione libera".
            </p>
          </div>

          <div class="field">
            <h3>Importo di spesa minima</h3>
            <input type="text" />
            <p>
              Inserire l'importo minimo di spesa (se esite). Indicare solo
              l'importo con il simbolo di €.
            </p>
          </div>
        </div>

        <div class="field-container">
          <div class="field">
            <h3>Descrizione libera</h3>
            <textarea name="description" cols="30" rows="5"></textarea>
            <p>
              Inserisci tutte le informazioni riguardo al servizio a domicilio e
              altre informazioni utili per chi vuole ordinare da voi.
            </p>
          </div>
        </div>

        <div class="field">
          <h3>Descrizione prodotti</h3>
          <textarea name="prododucts" cols="30" rows="5"></textarea>
          <p>
            Inserisci delle informazioni riguardo i tuoi prodotti che consegni a
            domicilio.
          </p>
        </div>

        <div class="field">
          <h3>Listino prezzi o menu</h3>
          <input name="menu" type="file" />
          <p>
            Carica il file del tuo listino prezzi o del menu. Questa
            informazione permetterà a molte persone di contattarti con le idee
            già chiara su ciò che vogliono ordinare. Questo ti farà risparmiare
            del tempo prezioso.
          </p>
        </div>

        <div class="field">
          <h3>Immagini aggiuntive</h3>
          <input name="gallery" type="file" />
          <p>
            Carica qualche immagine aggiuntiva dei tuoi prodotti o della tua
            realtà, potranno aiutare gli utenti!
          </p>
        </div>
      </div>

      <p @click="goBack" v-if="step > 1" class="navigation previous">
        Precedente
      </p>
      <p @click="goForward" v-if="step < 4" class="navigation next">
        Successivo
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },

  scrollToTop: true,

  methods: {
    goForward() {
      if (this.step < 4) {
        this.step++;
      }
      scrollTo(0, 0);
    },

    goBack() {
      if (this.step > 0) {
        this.step--;
      }
      scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.join-form {
  @apply p-4
      px-36
    max-w-screen-xl
    mx-auto;

  .title {
    @apply text-2xl
      font-medium
      my-8
      md:mt-16
      md:mb-12
      md:text-4xl
      md:font-bold;
  }

  h6 {
    @apply
      my-8
      md:mb-24;
  }

  .steps {
    @apply flex
    w-full

    my-4;

    ul {
      @apply flex
        w-full
        justify-between;

      li {
        @apply text-sm
                flex
                flex-row
                flex-nowrap
                text-gray-cremona-domicilio
                opacity-50;

        span {
          @apply rounded-full
            bg-gray-cremona-domicilio
            text-white
            py-1
            px-2.5
            mr-2;
        }
      }

      .active {
        @apply opacity-100
            text-dark-cremona-domicilio;
        span {
          @apply bg-green-cremona-domicilio;
        }
      }
    }
  }

  form {
    .step {
      @apply flex
        flex-col
        border-t
        border-b
        py-8;

      h3 {
        @apply font-bold
            text-dark-cremona-domicilio
            my-2;

        span {
          @apply text-red-800;
        }
      }

      .field-container {
        @apply flex
            flex-col
            my-4
            md:flex-row
            md:justify-between    
            md:gap-4;
      }
      .field {
        @apply flex
            flex-col
            my-1
            md:w-full;

        .field-checkbox {
          @apply flex
            flex-row
            justify-start
            items-center;

          input {
            appearance: checkbox;
            @apply mr-4
                    w-auto;
          }
        }

        input,
        select,
        textarea {
          @apply p-1
            border
            rounded
            appearance-none
            outline-none
            focus:ring-1
            focus:ring-green-cremona-domicilio;
        }

        label {
          @apply text-xs
            my-0.5;
        }
      }

      p {
        @apply text-xs
            my-2
            text-gray-cremona-domicilio;
      }
    }

    .navigation {
      @apply my-4
            flex
            justify-center
            py-5
            px-6
            rounded-full
            w-full
            text-white
            cursor-pointer
            transition-colors
            hover:bg-purple-cremona-domicilio
            md:w-36
            md:py-3;
    }

    .previous {
      @apply bg-gray-cremona-domicilio;
    }

    .next {
      @apply bg-green-cremona-domicilio;
    }
  }
}
</style>