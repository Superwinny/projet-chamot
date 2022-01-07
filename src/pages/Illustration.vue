<template>
  <v-container>
    <v-row>
      <!-- Ligne une  -->
      <v-col
        v-for="(list, index) in listprojet"
        :key="index"
        cols="12"
        md="4"
        class="ligneUne"
      >
        <v-card class="mx-auto" max-width="auto">
          <v-img
            :src="list.imgPrincipal"
            height="250px"
            width="auto"
            @click="selectIllustration(list)"
          ></v-img>

          <v-card-title> {{ list.nomProjet }}</v-card-title>

          <v-card-subtitle> {{ list.descriptions }}</v-card-subtitle>
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
                    :src="selectedIllustration && selectedIllustration.imgPrincipal"
                    height="300px"
                    width="auto"
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <v-card-title>
                    {{
                      selectedIllustration && selectedIllustration.nomProjet
                    }}</v-card-title
                  >
                  <v-card-title> </v-card-title>
                  <v-card-subtitle>
                    {{
                      selectedIllustration && selectedIllustration.description
                    }}</v-card-subtitle
                  >
                  <v-select
                    v-model="selectedFormat"
                    class="format"
                    :items="format"
                    item-text="name"
                    item-value="price"
                    label="Format*"
                    return-object
                    required
                  ></v-select>
                  {{ selectedFormat && selectedFormat.price }}
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
import listJson from "../list.json";
export default {
  name: "Illustration",

  data() {
    return {
      selectedIllustration: null,
      dialog: false,
      selectedFormat: null,
      //  Liaison de list.json
      listprojet: listJson.listIllustration,
      format: [
        {
          name: "20x20",
          price: 150,
        },
        {
          name: "30x40",
          price: 200,
        },
      ],
    };
  },

  methods: {
    showDialog() {
      this.dialog = true;
    },
    selectIllustration(ill) {
      this.selectedIllustration = ill;
      this.showDialog();
    },
  },
};
</script>

<style>
.ligneUne {
  margin-top: 400px;
  margin-bottom: 50px;
}

.ligneDeux {
  margin-bottom: 100px;
}

.format {
  margin: auto;
}
</style>