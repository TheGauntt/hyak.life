<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Team Members Row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="jumbotron pb-3 pt-1">
          <h2 class="my-4">HPOA Board</h2>

          <div class="py-2 bg-white">
            <div class="mt-2">
              <p>Michael James</p>
              <p>Patti Holman</p>
              <p>Scott Burbidge</p>
              <p>Jim Sammet</p>
              <p>Ernst Schubert</p>
              <p>Sally Bankson</p>
              <p>Betsy Bankson</p>
            </div>
          </div>

          <HyakMeetings />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HyakMeetings from "@/components/HyakMeetings.vue";

export default {
  name: "board",
  components: {
    HyakMeetings
  }
};
</script>

<style scoped>

</style>
