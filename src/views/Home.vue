<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
           The Clean-up and Annual Meeting, (that were previously scheduled for June 6), have now been CANCELLED. This is to comply with the current state rules regarding "social distancing". Stay Safe, Stay Healthy, and we will see you next year! - P.H.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div> -->

          <div class="jumbotron pt-3 pb-3">
            <h1>Welcome!</h1>
            <p class="lead">
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Hyak,_Washington"
                >Hyak</a
              >
              is a growing community located on Snoqualmie Pass, WA.
            </p>

            <!-- <p class="lead mt-3">Connect with locals on Facebook</p> -->
            <p class="lead mt-3">
              <a
                target="_blank"
                class="btn btn-primary btn-lg groupo"
                href="https://www.facebook.com/groups/324191704292219/"
                >Snoqualmie Pass FB Group</a
              >
              <a
                target="_blank"
                class="btn btn-dark btn-lg groupo"
                href="https://www.facebook.com/groups/132036856811932/"
                >Hyak FB Group</a
              >
            </p>

            <div class="mt-3 ml-3 mr-3">
              <img
                src="teasers/interstate-love-song.jpg"
                class="teaser-image"
              />
            </div>

            <HyakMeetings />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HyakMeetings from "@/components/HyakMeetings.vue";

export default {
  name: "home",
  components: {
    HyakMeetings,
  },
};
</script>

<style scoped>
.groupo {
  margin: 5px;
}

.teaser-image {
  object-fit: contain;
  width: 100%;
  border: 3px goldenrod inset;
}
</style>