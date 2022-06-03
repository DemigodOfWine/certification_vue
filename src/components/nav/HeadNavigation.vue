<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">
                  Home
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dpc">
                DPC
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rs_s">
                RS / S
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: "head-navigation",
  props: ['projects']
}
</script>

<style scoped>


</style>