<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mortgage Tracker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-footer`"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // in case you need a localComputed() {},
    ...mapState(["links"]),
  },
};
</script>
