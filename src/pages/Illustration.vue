<template>
  <v-container>
    <v-row>
      <!-- Ligne une  -->
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              width="auto"
              @click="showDialog()"
          ></v-img>

          <v-card-title> Top western road trips</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              width="auto"
          ></v-img>

          <v-card-title> Top western road trips</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              width="auto"
          ></v-img>

          <v-card-title> Top western road trips</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
        </v-card>
      </v-col>
      <!-- Ligne deux -->
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              width="auto"
          ></v-img>

          <v-card-title> Top western road trips</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              width="auto"
          ></v-img>

          <v-card-title> Top western road trips</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              width="auto"
          ></v-img>

          <v-card-title> Top western road trips</v-card-title>

          <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
        </v-card>
      </v-col>

      <!-- Dialogue -->

      <v-dialog v-model="dialog" max-width="50%">
        <v-card max-width="auto">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="300px"
                      width="auto"
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <v-card-title> Top western road trips</v-card-title>
                  <v-card-subtitle> 1,000 miles of wonder</v-card-subtitle>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Illustration",

  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    showDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style>

</style>