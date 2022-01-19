<template>
  <div class="margin-illustration">
    <v-row>
      <!-- Ligne -->
      <v-col v-for="(list, index) in listprojet" :key="index" cols="12" md="4">
        <v-card class="mx-auto" max-width="auto">
          <v-img
            :src="list.imgPrincipal"
            height="300px"
            width="auto"
            @click="selectIllustration(list)"
          ></v-img>

          <v-card-title> {{ list.nomProjet }}</v-card-title>

          <v-card-subtitle> {{ list.description }}</v-card-subtitle>
        </v-card>
      </v-col>

      <!-- Dialog -->

      <v-dialog
        v-model="dialog"
        max-width="50%"
        @click:outside="hideDialog()"
        @keydown.esc="hideDialog()"
        class="dialog"
        dark
        >
        <v-card max-width="auto">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-img
                    :src="
                      selectedIllustration && selectedIllustration.imgPrincipal
                    "
                    height="300px"
                    width="auto"
                    class="img-illustration"
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <v-card-title>
                    {{
                      selectedIllustration && selectedIllustration.nomProjet
                    }}</v-card-title
                  >
                  <v-card-title> </v-card-title>
                  <!-- <v-card-title>
                    {{
                      selectedIllustration && selectedIllustration.description
                    }}</v-card-title
                  > -->
                   <v-card-title>
                    {{
                      selectedIllustration && selectedIllustration.entreprise
                    }} {{
                      selectedIllustration && selectedIllustration.date
                    }}</v-card-title
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

              <v-row>
                <v-col cols="1"> </v-col>
                <v-col cols="10">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="form.name"
                      :counter="10"
                      :rules="nameRules"
                      label="Name"
                      required
                       placeholder="Name"
                      color="deep-purple"
                    ></v-text-field>
                    <v-text-field
                      v-model="form.lastname"
                      :counter="15"
                      :rules="lastnameRules"
                      label="LastName"
                      required
                       placeholder="LastName"
                      color="deep-purple"
                    ></v-text-field>

                    <v-text-field
                      v-model="form.email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                       placeholder="E-mail"
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

      <!-- error dialog-->
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
    </v-row>
  </div>
</template>

<script>
import listJson from "../list.json";
import IllustrationService from "../services/illustrationService.js";

export default {
  name: "Illustration",

  data() {
    return {
      valid: true,
      showMessageError: false,
      select: null,
      checkbox: false,
      selectedIllustration: null,
      dialog: false,
      selectedFormat: null,
      //  Liaison de list.json
      listprojet: listJson.listIllustration,
      format: [
        {
          name: "20x20",
          price: "24CHF"
        },
        {
          name: "30x40",
          price: "39CHF",
        },
      ],
      form: {
        name: null,
        lastname: null,
        email: null,
      },
      // Rules Illustration

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
    selectIllustration(ill) {
      this.selectedIllustration = ill;
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
      (this.selectedIllustration = null),
        (this.selectedFormat = null),
        this.$refs.form.reset();
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
        await IllustrationService.sendRequest(
          this.form.name,
          this.form.lastname,
          this.form.email,
          this.selectedFormat,
          this.selectedIllustration
        );
        this.hideDialog();
      } catch (e) {
        console.error(
          "[Pages][Illustration][SendRequest] An error occurred when send request",
          e
        );
        this.showDialogError();
      }
    },
  },
};
</script>

<style>
.dialog{
  border-block-color: red ;
}


.margin-illustration {
  margin-top: 250px;
  margin-bottom: 250px;
}

.format {
  margin: auto;
}
.img-illustration{
  border-radius: 25px;
  margin-top: 20px;
}
</style>