<template>
  <div class="home">
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="alert alert-warning alert-dismissible fade show mt-2" role="alert">
            <!-- <strong>Bear alert!</strong> Lots of droppings on the catwalks near Rampart -->
            Just about time to procrastinate putting the snow tires on...
            <a
              href="https://www.wsdot.com/traffic/passes/snoqualmie/"
              target="_blank"
              style="color: green; text-decoration: underline;"
            >Road &amp; Weather Conditions</a>

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="jumbotron">
            <h1>Welcome!</h1>
            <p class="lead">
              <a target="_blank" href="https://en.wikipedia.org/wiki/Hyak,_Washington">Hyak</a> is a growing community located on Snoqualmie Pass, WA.
            </p>

            <!-- <p class="lead mt-3">Connect with locals on Facebook</p> -->
            <p class="lead mt-5">
              <a
                target="_blank"
                class="btn btn-primary btn-lg"
                href="https://www.facebook.com/groups/324191704292219/"
              >Snoqualmie Pass FB Group</a>
              <a
                target="_blank"
                class="btn btn-dark btn-lg"
                href="https://www.facebook.com/groups/132036856811932/"
              >Hyak FB Group</a>
            </p>

            <div style="margin-left: auto; margin-right: auto; max-width: 540px;" class="mt-5">
              <instagram-embed :max-width="540" url="https://www.instagram.com/p/BRmWveND_QI" />
            </div>

            <h4 class="card-title mt-5">Board Meetings</h4>

            <ul class="list-group">
              <li class="list-group-item">
                <strong>When:</strong> First Tuesday of every
                <u>odd</u> month.
                <br />
                <small class="text-muted">That's January, March, May, July, September, and November</small>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramEmbed from "vue-instagram-embed";

export default {
  name: "home",
  components: {
    InstagramEmbed
  }
};
</script>
