<template>
  <div>
    <v-footer color="primary lighten-1" padless absolute>
      <v-row justify="center" no-gutters>
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
        <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Mortgage Tracker</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
