<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/">
        <span class="navbar-brand">Hyak Property Owners Association (HPOA)</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto" id="top_links">
          <li class="nav-item active">
            <span class="nav-link">
              <router-link to="/">Home</router-link>
            </span>
          </li>
          <li class="nav-item">
            <span class="nav-link">
              <router-link to="/about">About</router-link>
            </span>
          </li>
          <li class="nav-item">
            <router-link to="/about">Meeting Notes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">Links</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">Division Maps</router-link>
          </li>
          <!-- <li class="nav-item">
						<span class="nav-link">History, Bylaws, CC&amp;Rs </span>
          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "hyak-header",
  components: {}
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>