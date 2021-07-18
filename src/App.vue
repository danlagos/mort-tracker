<template>
  <v-app>
    <NavBar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { NavBar, Footer },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
