<template>
  <v-card>
    <v-card-title>
      Lead Tracker
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="contacts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // in case you need a localComputed() {},
    ...mapState(["headers", "contacts"]),
  },
};
</script>
