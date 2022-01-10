<template>
  <div>
    <v-row>
      <v-col
        v-for="(list, index) in listprojet"
        :key="index"
        cols="4"
      >
        <v-img
          :src="list.imgPrincipal"
          aspect-ratio="1"
          class="grey lighten-2"
          @click="selectD3(list)"
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
                <v-carousel v-if="selectedD3" hide-delimiters>
                  <v-carousel-item
                    v-for="(img, index) in selectedD3.imgSecondaire"
                    :key="index"
                    :src="img"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    
                  ></v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col cols="12"  >
                <v-card-title class="descriptionD3" >
                  {{ selectedD3 && selectedD3.description }}</v-card-title
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import listJson from "../list.json";
export default {
  name: "D3",
  data() {
    return {
      dialog: false,
      selectedD3: null,
      //  Liaison de list.json
      listprojet: listJson.listD3,
    };
  },

  methods: {
    showDialog() {
      this.dialog = true;
    },
    selectD3(d3) {
      this.selectedD3 = d3;
      this.showDialog();
    },
  },
};
</script>

<style>
.descriptionD3{
  margin: auto;
}

</style>