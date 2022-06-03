<template>
  <h1>DPC</h1>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1">
        <search-form/>
      </div>
      <div class="col">
        <result-form/>
      </div>
      <div class="col-1">
        <div>
          <label> Found: <i> {{ $store.getters.len }} </i></label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SearchForm from '@/views/DPC/SearchForm'
import ResultForm from '@/views/DPC/ResultForm'
import { mapGetters } from 'vuex'

export default {
  name: "PassportDPC",
  components: {
    'search-form': SearchForm,
    'result-form': ResultForm,
  },
  // computed: mapGetters(['len']),
  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>