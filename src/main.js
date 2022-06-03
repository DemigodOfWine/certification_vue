import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
// import XLSX from "xlsx";
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.component('downloadCsv', JsonCSV)
// Make BootstrapVue available throughout your project


createApp(App).use(store).use(router).mount('#app')
