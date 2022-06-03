import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],
  state() {
    return {
      list_certificates: [],
    }
  },
  mutations: {
    add(state, load_data) {
      state.list_certificates = load_data
    },
    removeCertificate(state, id) {
      state.list_certificates = state.list_certificates.filter(cer => cer.id !== id)
    }
  },
  getters: {
    len(state) {
      return state.list_certificates.length
    }
  },
  actions: {
  },
  modules: {
  }
})
