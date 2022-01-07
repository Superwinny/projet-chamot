<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(list, index) in listprojet"
        :key="index"
        class="D2"
        cols="4"
      >
        <v-img
          :src="list.imgPrincipal"
          aspect-ratio="1"
          class="grey lighten-2"
          @click="selectD2(list)"
        >
        </v-img>
      </v-col>
    </v-row>
    <!-- Dialogue -->

    <v-dialog v-model="dialog" max-width="50%">
      <v-card max-width="auto">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-carousel v-if="selectedD2" hide-delimiters>
                  <v-carousel-item
                    v-for="(img, index) in selectedD2.imgSecondaire"
                    :key="index"
                    :src="img"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12"  >
                <v-card-title class="descriptionD2" >
                  {{ selectedD2 && selectedD2.description }}</v-card-title
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>



<script>
import listJson from "../list.json";
export default {
  name: "D2",
  data() {
    return {
      dialog: false,
      selectedD2: null,
      //  Liaison de list.json
      listprojet: listJson.listD2,
    };
  },

  methods: {
    showDialog() {
      this.dialog = true;
    },
    selectD2(d2) {
      this.selectedD2 = d2;
      this.showDialog();
    },
  },
};
</script>

<style>
.D2{
  margin-top: 150px;
  margin-bottom: 50px;
}
.descriptionD2{
  margin: auto;
}

</style>