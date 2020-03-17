<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
            <!-- <p>
              <strong>Heads up!</strong>
            </p> -->

            <p>
              This month's meeting (April) has been canceled due to the concerns of COVID-19
            </p>

            <p>
              To avoid delays in construction, during the narrow summer building season, house plans may be sent electronically to the board, for review and approval.
            </p>

            <p>- Sally, 3/16/2020</p>

            <!-- Looking for something new? Try reading our recently recovered
            <router-link to="/meeting_notes">
              <span>Meeting Notes</span>
            </router-link>-->
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="jumbotron pt-3 pb-3">
            <h1>Welcome!</h1>
            <p class="lead">
              <a target="_blank" href="https://en.wikipedia.org/wiki/Hyak,_Washington">Hyak</a> is a growing community located on Snoqualmie Pass, WA.
            </p>

            <!-- <p class="lead mt-3">Connect with locals on Facebook</p> -->
            <p class="lead mt-3">
              <a
                target="_blank"
                class="btn btn-primary btn-lg groupo"
                href="https://www.facebook.com/groups/324191704292219/"
              >Snoqualmie Pass FB Group</a>
              <a
                target="_blank"
                class="btn btn-dark btn-lg groupo"
                href="https://www.facebook.com/groups/132036856811932/"
              >Hyak FB Group</a>
            </p>

            <div
              style="margin-left: auto; margin-right: auto; max-width: 540px; min-height: 400px;"
              class="mt-3"
            >
              <instagram-embed
                :max-width="540"
                url="https://www.instagram.com/p/B9lGiexn5kv"
                :hide-caption="true"
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
import InstagramEmbed from "vue-instagram-embed";
// @ is an alias to /src
import HyakMeetings from "@/components/HyakMeetings.vue";

export default {
  name: "home",
  components: {
    InstagramEmbed,
    HyakMeetings
  }
};
</script>

<style scoped>
.groupo {
  margin: 5px;
}
</style>