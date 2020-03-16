<template>
  <div>
    <h4 class="card-title mt-4">Board Meetings</h4>

    <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
      <p>This month's meeting (April) has been canceled due to the concerns of COVID-19.</p>

      <p>To avoid delays in construction, during the narrow summer building season, house plans may be sent electronically to the board, for review and approval.</p>

      <p>- Sally, 3/16/2020</p>

      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <ul class="list-group">
      <li class="list-group-item">
        <strong>When:</strong> First Tuesday of every month
        <br />
      </li>
      <li class="list-group-item">
        <strong>Time:</strong> 6:30 PM
      </li>
      <li class="list-group-item">
        <strong>Location:</strong>
        <a
          target="_blank"
          class="ml-3 btn btn-info"
          href="https://www.google.com/maps/place/snoqualmie+pass+fire+and+rescue/@47.4171668,-121.4147039,17z/data=!3m1!4b1!4m5!3m4!1s0x549a79a0476547c1:0x4bfe36062cb6f570!8m2!3d47.4171668!4d-121.4125152"
        >Fire Station</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "hyak-meetings",
  components: {},
  data: () => {
    return {};
  }
};
</script>

<style scoped>
</style>
