<template>
  <div>
    <v-row>
      <!-- Ligne une  -->
      <v-col
        v-for="(list, index) in listprojet"
        :key="index"
        cols="12"
        md="4"
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
                    :src="
                      selectedIllustration && selectedIllustration.imgPrincipal
                    "
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

              <v-row>
                <v-col cols="1"> </v-col>
                <v-col cols="10">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      :rules="nameRules"
                      label="Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="lastname"
                      :counter="10"
                      :rules="lastnameRules"
                      label="LastName"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
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
                      @click="validate"
                    >
                      Validate
                    </v-btn>

                    
                  </v-form>
                </v-col>
                <v-col cols="1"> </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import listJson from "../list.json";
export default {
  name: "Illustration",

  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      lastname: "",
      lastnameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
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
     validate() {
      this.$refs.form.validate();
    },


async sendRequest() {
      try {
        console.log("[Component][sendRequest] Send Message Requeste");
        const isValid = this.$refs.insertForm.validate();
        if (!isValid) return
        await ThingsService.sendRequest(this.form.name, this.form.lastname, this.form.email);
        this.hideInsertDialog()
      } catch (e) {
        console.error("[Component][Things][insertThings] An error occurred when insert thing", e);
        this.showDialogError();
      }
    },








   
  },
  
};
</script>

<style>


.format {
  margin: auto;
}
</style>