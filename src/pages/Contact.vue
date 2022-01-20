<template>
  <div class="contact">
    <span class="bg"></span>

    <v-row>
      <v-col cols="4"> </v-col>
      <v-col cols="4">
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
          <v-textarea
            v-model="form.message"
            :rules="messageRules"
            required
            auto-grow
            filled
            placeholder="Message"
            color="deep-purple"
            rows="2"
          ></v-textarea>

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
          <v-btn class="red darken-1 white--text" large @click="hideDialog()">
            <v-icon left>mdi-cancel</v-icon>
            Cancel
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="4"> </v-col>
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
import ContactService from "../services/contactService.js";

export default {
  name: "Contact",
  data: () => ({
    dialog: false,
    checkbox: true,
    valid: true,
    showMessageError: false,

    // Rules Contact Form
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    lastname: "",
    lastnameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [(v) => !!v || "E-mail is required"],
    message: "",
    messageRules: [(v) => !!v || "Message is required"],
    form: {
      name: null,
      lastname: null,
      email: null,
      message: null,
    },
  }),

  methods: {
    hideDialog() {
      this.dialog = false;
      this.form = {
        name: null,
        lastname: null,
        email: null,
        message: null,
      };
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
    validate() {
      this.$refs.form.validate();
    },
    async sendRequest() {
      try {
        console.log("[Pages][sendRequest] Send Message Request");
        const isValid = this.$refs.form.validate();
        if (!isValid) return;
        await ContactService.sendRequest(
          this.form.name,
          this.form.lastname,
          this.form.email,
          this.form.message
        );
        this.hideDialog();
      } catch (e) {
        console.error(
          "[Pages][Contact][SendRequest] An error occurred when send request",
          e
        );
        this.showDialogError();
      }
    },
  },
};
</script>

<style>
.contact {
  margin-top: 100px;
  margin-bottom: 100px;
  /* background-image: "/img/Illustration/Geneve.png" no-repeat center center; */
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image:  ("/img/Illustration/Geneve.png" no-repeat center center);
  background-size: cover;
  transform: scale(1.1);
}
</style>