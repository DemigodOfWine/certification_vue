<template>
  <div>
    <print-form-1
        v-for="id_certificate in id_certificates"
        :id_certificate="id_certificate"
        :key="id_certificate"
    />
  </div>
</template>

<script>
import PrintForm1 from '@/views/DPC/PrintForm/PrintForm1.vue'

export default {
  name: "print",
  components: {
    'print-form-1': PrintForm1
  },
  data() {
    return {
      id_certificates: '',
    }
  },
  mounted() {
    this.id_certificates = [this.$route.params.id]
  }

}
</script>

<style scoped>

</style>