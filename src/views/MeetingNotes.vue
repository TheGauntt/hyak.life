<template>
  <!-- Page Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="jumbotron pb-3 pt-1">
          <h2 class="my-4">Meeting Notes</h2>

          <div class="row">
            <div class="col-lg-6">
              <select class="form-control form-control-lg" v-model="selectedYear">
                <option selected>All Years</option>
                <option v-for="year in years" :key="year">{{year}}</option>
              </select>
            </div>

            <div class="col-lg-6">
              <select class="form-control form-control-lg" v-model="selectedType">
                <option selected>All Types</option>
                <option>Annual</option>
                <option>Regular</option>
              </select>
            </div>
          </div>

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
                <tr v-for="note in filteredMeetingNotes" :key="note.date + '_' + note.title">
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

<script>
import {
  MEETING_NOTES_DATA,
  MEETING_NOTES_YEARS,
  IMeeting
} from "@/data/meetingNotes";
import moment from "moment";

export default {
  name: "meeting-notes",
  components: {},
  computed: {
    filteredMeetingNotes: function() {
      return this.meetingNotes.filter(entry => {
        // Everything
        if (
          this.selectedYear == "All Years" &&
          this.selectedType == "All Types"
        ) {
          return true;
        }

        // All Years
        if (this.selectedYear == "All Years") {
          if (this.selectedType.toLowerCase() == "annual") {
            return entry.category && entry.category.toLowerCase() == "annual";
          } else {
            return entry.category && entry.category.toLowerCase() == "regular";
          }
        }

        const entryYear = moment(entry.date, "YYYY-MM-DD").year();

        // All Types
        if (this.selectedType == "All Types") {
          return entryYear == this.selectedYear;
        }

        // Wrong year?
        if (entryYear != this.selectedYear) {
          return false;
        }

        // Right type?
        if (this.selectedType.toLowerCase() == "annual") {
          return entry.category && entry.category.toLowerCase() == "annual";
        } else {
          return entry.category && entry.category.toLowerCase() == "regular";
        }
      });
    }
  },
  data() {
    return {
      meetingNotes: MEETING_NOTES_DATA,
      years: MEETING_NOTES_YEARS,
      selectedYear: "All Years",
      selectedType: "All Types"
    };
  },
  filters: {
    dated: function(value) {
      if (!value) return "";

      const valueAsMoment = moment(value);
      return valueAsMoment.format("MMM D, YYYY");
    }
  },
  methods: {
    getLink(note) {
      const year = moment(note.date, moment.ISO_8601).year();
      return `hyak_files/meeting_notes/${year}/${note.filename}`;
    }
  }
};
</script>

<style scoped>
</style>
