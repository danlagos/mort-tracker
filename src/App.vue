<template>
  <v-app>
    <NavBar />
    <Home />
  </v-app>
</template>

<script>
import Home from "@/views/Home.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: { Home, NavBar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
