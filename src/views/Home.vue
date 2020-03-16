<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
            <!-- <strong>Bear alert!</strong> Lots of droppings on the catwalks near Rampart -->

            Looking for something new? Try reading our recently recovered
            <router-link to="/meeting_notes">
              <span>Meeting Notes</span>
            </router-link>
            <!-- <a
              href="https://www.wsdot.com/traffic/passes/snoqualmie/"
              target="_blank"
              style="color: green; text-decoration: underline;"
            >Road &amp; Weather Conditions</a>-->

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

            <HyakBoard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstagramEmbed from "vue-instagram-embed";
// @ is an alias to /src
import HyakBoard from "@/components/HyakBoard.vue";

export default {
  name: "home",
  components: {
    InstagramEmbed,
    HyakBoard
  }
};
</script>

<style scoped>
.groupo {
  margin: 5px;
}
</style>