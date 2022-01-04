<template>
 <v-app>
    <Navbar/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
    Footer
  },
}


</script>

<style>

</style>