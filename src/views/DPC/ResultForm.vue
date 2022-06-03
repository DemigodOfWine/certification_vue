<template>
  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
    <tr>
      <th v-for="field in fields.tab" :key='field.tab'>
        {{ field }} <i class="bi bi-sort-alpha-down" aria-label='Sort Icon'></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in certificates" :key='item.id'>
      <td v-for="field in fields.data" :key='field.tab'> {{ item[field] }} </td>
      <td>
        <button type="button" class="btn btn-danger btn-sm"
                @click="removeCertificate(item.id)"
        >
          <i class="bi bi-trash"></i>
        </button>
      </td>
      <td>
        <button type="button" class="btn btn-info btn-sm">
          <router-link
              :to="{ name: 'print', params: {id: item.id}}"
              target="_blank">
            <i class="bi bi-filetype-html">
            </i>
          </router-link>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "result-form",
  emits: ['removeCertificate'],
  data() {
    return {
      fields: {
        tab: ['id', 'SN', 'AFC', 'AFC first wave', 'Sr', 'Sr halfwave', 'result', 'date'],
        data: ['id', 'serial_number', 'afc_frequency_maximum', 'afc_frequency_maximum_first_wave',
          'afc_maximum_s_rel', 'afc_maximum_s_rel_first_half_wave', 'result','date_time',],
      },
    }
  },
  computed: {
    certificates() {
      return this.$store.state.list_certificates
    },

  },
  methods: {
    // ...mapGetters( {
    //   certificates: 'list_certificates'
    // }),
    ...mapMutations({
      removeCertificate: 'removeCertificate'
    }),
  }
}
</script>

<style scoped>
#result-search {
  width: 100%;
  text-decoration: none;
  font-size: small;
  padding: 0;
  vertical-align: center;
}
.table th, .table td {
  padding: 0;
  vertical-align: center;
}
a {
  text-decoration: none;
}
</style>