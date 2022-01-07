<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 6" :key="n" class="D3" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
          @click="showDialog()"
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
              <v-col cols="6">
                <template>
                  <v-carousel hide-delimiters>
                    <v-carousel-item
                      v-for="(item, i) in items"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </template>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>



<script>
export default {
  name: "D3",
 data() {
    return {
      dialog: false,
             items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

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
.D3 {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>