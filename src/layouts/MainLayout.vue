<template>
  <div>
    <head-navigation

    />
    <router-view/>
  </div>
</template>

<script>
import HeadNavigation from '@/components/nav/HeadNavigation'
export default {
  name: 'main-layout',
  components: {
    'head-navigation': HeadNavigation,
  }
}
</script>

<style scoped>

</style>