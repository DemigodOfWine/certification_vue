<template>
  <form>
    <div class="form-group">
      <label>Select DPC</label>
      <select class="form-control form-control-sm"
              v-model="selected_dpc"
              v-on:change="getMinMaxSerialNumber">
        <option v-for="option_dpc in options_dpc"
                v-bind:value="option_dpc.id">
          {{ option_dpc.model_name }}
        </option>
      </select>
    </div>
  </form>
  <hr>

  <label>Stage</label>
  <form name="stage">
    <div class="form-check">
      <input class="form-check-input" type="checkbox"
             v-model="production_status"
             v-on:change="getMinMaxSerialNumber"
             :disabled="control_status === false || selected_dpc === null">
      <label class="form-check-label">
        <i>Production</i>
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox"
             v-on:change="getMinMaxSerialNumber"
             v-model="control_status"
             :disabled="production_status === false || selected_dpc === null">
      <label class="form-check-label">
        <i>Control</i>
      </label>
    </div>
  </form>


  <hr>
  <label>SN down</label>
  <input class="form-control form-control-sm"
         type="text"
         v-model="serial_number_range.sn_min"
         :disabled="selected_dpc === null"
  >
  <hr>
  <label>SN up</label>
  <input class="form-control form-control-sm"
         type="text"
         v-model="serial_number_range.sn_max"
         :disabled="selected_dpc === null"
  >

  <hr>

  <div>
    <label>Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="date_down" class="mb-2"></b-form-datepicker>
    <p>Value: '{{ date_down }}'</p>
  </div>

  <hr/>
  <div v-if="loading" class="spinner-grow" role="status">
    <span class="sr-only"></span>
  </div>
  <button v-if="!loading" v-on:click="getCertificates"
          :disabled="serial_number_range.sn_max === [] || serial_number_range.sn_min === []"
          type="button" class="btn btn-primary">Find ...
  </button>
</template>

<script>
import axios from 'axios';

export default {
  name: "search-form",
  data() {
    return {
      errors: [],
      loading: false,
      await_status: '',
      date_down: '',

      selected_dpc: null,
      id_dpc: null,
      options_dpc: [
        {
          id: '',
          model_name: '',
          form_certificate: '',
        }
      ],

      production_status: true,
      control_status: false,

      serial_number_range: [
        {
          sn_max: [],
          sn_min: [],
        }
      ],
    }
  },
  mounted() {
    this.getModels()
  },
  methods: {
    getStage: function () {
      const indices = []
      const element = true;
      const array = [this.production_status, this.control_status]
      let idx = array.indexOf(element);
      while (idx !== -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
      }
      return indices
    },
    async getCertificates() {
      let indices = this.getStage()
      this.loading = true
      this.await_status = 'Get certificates ...'
      await axios
          .get('http://127.0.0.1:8000/dpc/dpc_certificate_sn_range_preview/'
              + this.selected_dpc + '/'
              + indices + '/'
              + this.serial_number_range.sn_min + '/'
              + this.serial_number_range.sn_max)
          .then((response) => {
            this.$store.commit('add', response.data)
          })
          .catch(error => {
            alert(error)
          })
          .finally(() => (this.loading = false));
    },

    async getModels() {
      this.loading = true
      this.await_status = 'Get list models ...'
      await axios
          .get('http://127.0.0.1:8000/dpc/dpc_models/')
          .then((response) => {
            this.options_dpc = response.data
          })
          .catch(error => {
            alert(error)
          })
          .finally(() => (this.loading = false))
    },
    async getMinMaxSerialNumber() {
      this.loading = true
      this.await_status = 'Get list models ...'
      let indices = this.getStage()
      await axios
          .get('http://127.0.0.1:8000/dpc/dpc_certificate_sn_range/' + this.selected_dpc + '/' +
              indices)
          .then((response) => {
            this.serial_number_range = response.data
          })
          .catch(error => {
            alert(error)
          })
          .finally(() => (this.loading = false))
    },
  },
}
</script>

<style scoped>

</style>