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
export default {
  data() {
    return {
      headers: [
        {
          text: " Owner",
          align: "start",
          sortable: false,
          value: "owner",
        },
        { text: "Client", value: "client" },
        { text: "Pre App", value: "preApp" },
        { text: "Date", value: "date" },
        { text: "Referal Source", value: "referalSource" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Email", value: "email" },
        { text: "Type of Loan", value: "tpyeOfLoan" },
        { text: "Notes", value: "notes" },
      ],
      contacts: [
        {
          owner: "DL",
          client: "David Supina",
          preApp: "App",
          date: "7/11",
          referalSource: "PCR",
          phoneNumber: "619-948-2070",
          email: "davidsupina@icloud.com",
          tpyeOfLoan: "Conv Refi",
          notes: "He inherited the home from husband",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: inline-flex;
}
li {
  margin: 0 10px;
}
</style>
