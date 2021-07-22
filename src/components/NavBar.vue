<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mortgage Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded>Contacts</v-btn>
      <v-btn text rounded>To Do</v-btn>
      <v-btn text rounded to="/login">Login</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    linkLabel() {
      return this.$store.state.link.label;
    },
    linkUrl() {
      return this.$store.state.link.url;
    },
  },
};
</script>
