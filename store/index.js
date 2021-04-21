export const state = () => ({
    selectedMunicipality: null,

    stores: [],

    zones: [],

    categories: [],

    // types: {
    //     type: [
    //         { name: 'Veicoli', quantity: 4, slug: 'veicoli' },
    //         { name: 'Hobby/Tempo libero', quantity: 7, slug: 'hobby-tempo-libero' },
    //         { name: 'Bar', quantity: 6, slug: 'bar' },
    //         { name: 'Gioielleria', quantity: 2, slug: 'gioielleria' },
    //         { name: 'Infanzia', quantity: 9, slug: 'infanzia' },
    //         { name: 'Casa', quantity: 12, slug: 'casa' },
    //         { name: 'Abbigliamento', quantity: 20, slug: 'abbigliamento' },
    //         { name: 'Minimarket', quantity: 7, slug: 'minimarket' },
    //         { name: 'Bevande', quantity: 17, slug: 'bevande' },
    //         { name: 'Libreria', quantity: 4, slug: 'libreria' },
    //         { name: 'Alimentari', quantity: 40, slug: 'alimentari' },
    //         { name: 'Cura del corpo', quantity: 11, slug: 'cura-del-corpo' },
    //         { name: 'Enoteca', quantity: 5, slug: 'enoteca' },
    //         { name: 'Pasticceria', quantity: 12, slug: 'pasticceria' },
    //         { name: 'Animali', quantity: 3, slug: 'animali' },
    //         { name: 'Cartoleria', quantity: 10, slug: 'cartoleria' },
    //         { name: 'Elettronica', quantity: 5, slug: 'elettronica' },
    //         { name: 'Erboristeria', quantity: 2, slug: 'erboristeria' },
    //         { name: 'Farmacia', quantity: 5, slug: 'farmacia' },
    //         { name: 'Abbigliamento', quantity: 20, slug: 'abbigliamento' },
    //         { name: 'Ristorazione', quantity: 43, slug: 'ristorazione' },
    //     ]
    // },

    // municipality: [
    //     { name: 'Cremona', slug: 'cremona' },
    //     { name: 'Bonemerse', slug: 'bonemerse' },
    //     { name: 'Cella Dati', slug: 'cella-dati' },
    //     { name: 'Sospiro', slug: 'sospiro' },
    //     { name: 'Castelverde', slug: 'castelverde' },
    //     { name: "Cingia Dei Botti", slug: 'cingia-de-botti' },
    //     { name: "Casalmaggiore", slug: 'casalmaggiore' },
    //     { name: "Vescovato", slug: 'vescovato' },
    //     { name: "Cicognolo", slug: 'cicognolo' },
    //     { name: "Formigara", slug: 'formigara' },
    //     { name: "Piadena", slug: 'piadena' },
    //     { name: "Soresina", slug: 'soresina' },
    //     { name: "Malagnino", slug: 'malagnino' },
    // ],

    // stores: [
    //     { name: "Terremoto Bike", slug: "terremoto-bike", id: 1, comuni: [{ name: "Cremona", slug: "cremona" }, { name: "Bonemerse", slug: "bonemerse" }, { name: 'Castelverde', slug: 'castelverde' }, { name: 'Cella Dati', slug: 'cella-dati' }], categories: [{ name: "Hobby/Tempo libero", slug: "hobby-tempo-libero" }, { name: "Veicoli", slug: "veicoli" }] },
    //     { name: "Softworld Snc", slug: "softworld-snc", id: 2, comuni: [{ name: "Cremona", slug: "cremona" }, { name: 'Bonemerse', slug: 'bonemerse' }, { name: "Malagnino", slug: 'malagnino' }], categories: [{ name: "Elettronica", slug: "elettronica" }] },
    //     { name: "Caffè Tubino", slug: "caffe-tubino", id: 3, comuni: [{ name: "Cremona", slug: "cremona" }], categories: [{ name: "Bar", slug: "bar" }] },
    //     { name: "Trattoria la Resca", slug: "trattoria-la-resca", id: 4, comuni: [{ name: "Vescovato", slug: "vescovato" }, { name: "Piadena", slug: 'piadena' }], categories: [{ name: "Ristorazione", slug: "ristorazione" }] },
    //     { name: "La locanda dei taglieri e bicchieri", slug: "la-locanda-dei-taglieri-e-bicchieri", id: 5, comuni: [{ name: "Casalmaggiore", slug: "casalmaggiore" }], categories: [{ name: "Ristorazione", slug: "ristorazione" }] },
    //     { name: "UGO GRILL", slug: "ugo-grill", id: 6, comuni: [{ name: "Cremona", slug: "cremona" }], categories: [{ name: "Alimentari", slug: "alimentari" }, { name: "Bar", slug: "bar" }, { name: "Panetteria", slug: "panetteria" }] },
    //     { name: "Agriturismo Le Campagnole", slug: "agriculturismo-le-campagnole", id: 7, comuni: [{ name: "Cella Dati", slug: "cella-dati" }], categories: [{ name: "Alimentari", slug: "alimentari" }, { name: "Gelateria", slug: "gelateria" }, { name: "Macelleria", slug: "macelleria" }, { name: "Ristorazione", slug: "ristorazione" }] },
    //     { name: "Dalla Simo", slug: "dalla-simo", id: 7, comuni: [{ name: "Cremona", slug: "cremona" }], categories: [{ name: "Abbigliamento", slug: "abbigliamento" }] },
    // ]
})

export const getters = {

    //  Get selected store (payload: based on url)
    getStoreData: (state) => (payload) => {
        let store = state.stores.find(store => store.slug === payload[payload.length - 1])
        return store
    },

    getCategory: state => payload => {
        let result = state.categories.find(el => el.slug === payload)
        return result
    },

    getMunicipality: state => payload => {
        let result = state.zones.find(el => el.slug === payload)
        return result
    },

    //  Filter stores by category
    getStoreByCategory: state => payload => {
        return state.stores.filter(store => store.category.find(el => el.slug === payload))
    },

    //  Filter stores by municipality
    getStoreByMunicipality: state => payload => {
        if (payload === "all-zones") {
            return state.stores
        }
        let municipalitySlug = payload || state.selectedMunicipality.slug
        let result = state.stores.filter(store => (store.delivery.zone.municipality.filter(el => el.slug == municipalitySlug)).length > 0)
        return result
    },

    //  Filter stores by 2 municipalities
    getStoreByMoreMunicipality: (state, getters) => (municipality) => {
        if (state.selectedMunicipality.slug === "all-zones") {
            return getters.getStoreByMunicipality(municipality)
        }
        let getter1 = getters.getStoreByMunicipality(municipality)
        let result = getter1.filter(store => (store.delivery.zone.municipality.filter(el => el.slug == state.selectedMunicipality.slug)).length > 0)
        return result
    },

    //  Filter stores by category and municipality
    getStoreByCategoryAndMunicipality: (state, getters) => (municipality, category) => {
        if (municipality === "all-zones") {
            return state.stores.filter(store => store.category.find(el => el.slug === category))
        }
        let municipalitySlug = municipality || state.selectedMunicipality.slug
        let storesMunicipality = getters.getStoreByMunicipality(municipalitySlug)
        let result = storesMunicipality.filter(store => store.category.find(el => el.slug === category))
        return result
    },
}

export const mutations = {

    //  Change selected municipality
    changeMunicipality(state) {
        if ($nuxt.context.query.municipality) {
            state.selectedMunicipality = state.zones.find(comune => comune.slug === $nuxt.context.query.municipality)
            localStorage.setItem("municipality", state.selectedMunicipality.slug)
            console.log("Selected Municipality changed to:", state.selectedMunicipality.slug)
        } else {
            console.log('Nope')
        }
    },

    overwriteSelectedMunicipality(state, payload) {
        if (state.zones.length) {
            state.selectedMunicipality = state.zones.find(zone => zone.slug === payload)
        } else {
            setTimeout(() => {
                state.selectedMunicipality = state.zones.find(zone => zone.slug === payload)
            }, 1000)
        }
    },

    sortMunicipality(state) {
        state.zones = state.zones.sort((a, b) => b.name < a.name ? 1 : -1)
    },

    updateStores(state, payload) {
        state.stores = payload
    },

    updateZones(state, payload) {
        state.zones = payload
    },

    updateCategories(state, payload) {
        state.categories = payload
    }
}

export const actions = {
    async fetchDati(context) {
        let dataContainer = await fetch("/data/data.json")
            .then(res => res.json())
        context.commit("updateStores", dataContainer.stores)
        context.commit("updateZones", dataContainer.zones)
        context.commit("updateCategories", dataContainer.categories)
    }
}


