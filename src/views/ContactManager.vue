<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Contact Manager</h1>
        <Contact />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Contact from "@/components/Contact.vue";
export default {
  components: {
    Contact,
  },
};
</script>
