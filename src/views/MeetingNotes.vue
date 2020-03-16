<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="jumbotron pb-3 pt-1">
          <h2 class="my-4">Meeting Notes</h2>

          <div class="py-2 bg-white">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Category</th>
                  <!-- <th>Download</th> -->
                </tr>
              </thead>

              <tbody>
                <tr v-for="note in meetingNotes" :key="note.date + '_' + note.title">
                  <td>{{note.date | dated}}</td>
                  <td>
                    <a :href="getLink(note)" target="_blank">{{note.title}}</a>
                  </td>
                  <td>{{note.category | capitalize}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { MEETING_NOTES_DATA, IMeeting } from "@/data/meetingNotes";
import moment from "moment";

export default {
  name: "meeting-notes",
  components: {},
  data() {
    return {
      meetingNotes: MEETING_NOTES_DATA
    };
  },
  filters: {
    dated: function(value: string) {
      if (!value) return "";

      const valueAsMoment = moment(value);
      return valueAsMoment.format("MMM D, YYYY")
    }
  },
  methods: {
    getLink(note: IMeeting) {
      const year = moment(note.date, moment.ISO_8601).year();
      return `hyak_files/meeting_notes/${year}/${note.filename}`;
    }
  }
};
</script>

<style scoped>
</style>
