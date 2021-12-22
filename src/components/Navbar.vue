<template>
  <v-card>
    <v-app-bar absolute color="#6A76AB" dark prominent height="500px">
      <div class="header">
        <div class="image">
          <img
            height="150"
            width="150"
            src="https://picsum.photos/id/11/500/300"
            
          />
        </div>

        <div class="icon">
          <v-btn icon to="/">
            <v-icon>mdi-home</v-icon>
          </v-btn>
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
        </div>
      </div>
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="500"
    >
      <v-container style="height: 500px"></v-container>
    </v-sheet>
  </v-card>
  <!-- Dialogue -->
  




  
</template>



<script>
export default {
  
};
</script>

<style>
.header {
  width: 100%;
}
.image {
  justify-content: center;
  display: flex;
  width: 100%;
}
.image img {
  border-radius: 50%;
  margin-top: 20px;
}

.icon {
  justify-content: center;
  display: flex;
  width: 100%;
  margin-top: 50px;
}
</style>