<template>
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

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" max-width="auto">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="250px"
          width="auto"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" max-width="auto">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="250px"
          width="auto"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
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

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" max-width="auto">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="250px"
          width="auto"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" max-width="auto">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="250px"
          width="auto"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </v-col>
    <!-- Dialogue -->

    <v-dialog v-model="dialog" persistent max-width="50%"   >
      <template>
        <v-col cols="12" md="6" sm="4">
          <v-card class="mx-auto" max-width="auto">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="300px"
              width="auto"
              @click="showDialog()"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="4">
          
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
        </v-col>
      </template>
    </v-dialog>
  </v-row>
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
.row {
  margin-top: 150px;
  margin-left: 10%;
  margin-right: 10%;
  max-width: 100%;
  margin-bottom: 150px;
}
</style>