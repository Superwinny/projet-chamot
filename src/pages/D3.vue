<template>
  <div class="margin-d3">
    <v-row>
      <v-col v-for="(list, index) in listprojet" :key="index" cols="4">
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

    <v-dialog
      v-model="dialog"
      max-width="50%"
      @click:outside="hideDialog()"
      @keydown.esc="hideDialog()"
    >
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
              <v-col cols="12">
                <v-card-title class="descriptionD3">
                  {{ selectedD3 && selectedD3.description }}</v-card-title
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1"> </v-col>
              <v-col cols="10">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="form.name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    color="deep-purple"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.lastname"
                    :counter="15"
                    :rules="lastnameRules"
                    label="LastName"
                    required
                    color="deep-purple"
                  ></v-text-field>

                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    color="deep-purple"
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    large
                    @click="sendRequest()"
                  >
                    Validate
                  </v-btn>
                  <v-btn
                    class="red darken-1 white--text"
                    large
                    @click="hideDialog()"
                  >
                    <v-icon left>mdi-cancel</v-icon>
                    Cancel
                  </v-btn>
                </v-form>
              </v-col>
              <v-col cols="1"> </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Error dialog-->
    <v-dialog v-model="showMessageError" width="600px">
      <v-card>
        <v-card-text>Error</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" class="mr-4" @click="hideDialogError()">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import D3Service from "../services/d3Service.js";
import listJson from "../list.json";
export default {
  name: "D3",
  data() {
    return {
      valid: true,
      showMessageError: false,
      select: null,
      checkbox: false,
      dialog: false,
      selectedD3: null,
      //  Liaison de list.json
      listprojet: listJson.listD3,
      form: {
        name: null,
        lastname: null,
        email: null,
      },
      // Rules D3

      name: "",
      nameRules: [(v) => !!v || "Name is required"],
      lastname: "",
      lastnameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [(v) => !!v || "E-mail is required"],
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
    validate() {
      this.$refs.form.validate();
    },
    hideDialog() {
      this.dialog = false;
      this.form = {
        name: null,
        lastname: null,
        email: null,
      };
      (this.selectedD3 = null), this.$refs.form.reset();
    },
    // Dialog pour les ereurs services
    hideDialogError() {
      this.showMessageError = false;
    },
    // Dialog pour les ereurs services
    showDialogError() {
      this.showMessageError = true;
    },

    async sendRequest() {
      try {
        console.log("[Pages][sendRequest] Send Message Request");
        const isValid = this.$refs.form.validate();
        if (!isValid) return;
        await D3Service.sendRequest(
          this.form.name,
          this.form.lastname,
          this.form.email,
          this.selectedD3
        );
        this.hideDialog();
      } catch (e) {
        console.error(
          "[Pages][D3][SendRequest] An error occurred when send request",
          e
        );
        this.showDialogError();
      }
    },
  },
};
</script>

<style>
.margin-d3 {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>