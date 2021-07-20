<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer :links="links" />
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
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Login",
        url: "/login",
      },
    ],
  }),
};
</script>
