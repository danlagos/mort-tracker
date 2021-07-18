<template>
  <v-app>
    <NavBar />
    <Home />
    <Footer />
  </v-app>
</template>

<script>
import Home from "@/views/Home.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Home, NavBar, Footer },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
