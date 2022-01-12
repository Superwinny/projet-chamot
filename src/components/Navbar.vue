<template>
  <v-app-bar
    class="indigo lighten-1 white--text text-center"
    dense
    dark
    :height="this.$route.name === 'Home' ? '600px' : '250px'"
    :absolute="this.$route.name === 'Home'"
    :hide-on-scroll="this.$route.name === 'Home'"
    app
    scroll-target="#scrolling-techniques-4"
  >
    <v-container>
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12">
          <img
            class="rounded-image"
            height="150"
            width="150"
            src="https://picsum.photos/id/11/500/300"
          />
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="text-center">
        <v-col cols="12">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon to="/" v-bind="attrs" v-on="on">
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </template>
            <span>Home</span>
          </v-tooltip>

          <v-btn icon to="/illustration">
            <v-icon>mdi-image-outline</v-icon>
          </v-btn>
          <v-btn icon to="/d3">
            <v-icon>mdi-video-3d</v-icon>
          </v-btn>
          <v-btn icon to="/d2">
            <v-icon>mdi-video-3d-off</v-icon>
          </v-btn>
          <v-btn icon to="/contact">
            <v-icon>mdi-account-box</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.rounded-image {
  border-radius: 50%;
}
</style>