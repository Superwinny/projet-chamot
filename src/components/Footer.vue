<template>
  <v-footer  padless>
    <v-card
      width="100%"
      flat
      tile
      class=" white--text text-center"
      color="rgb( 29  29  27)"

    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Chamot Projet</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-instagram"],
  }),
};
</script>
<style scoped>
</style>