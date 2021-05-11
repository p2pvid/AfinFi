<template>
  <div class="box">
    <div class="columns inputColumn">
      <h2>Email</h2>
      <input class="input" type="text" v-model="email" placeholder="catslayer994@dogs.com">
    </div>
    <div class="columns inputColumn">
      <h2 class>Password</h2>
      <input class="input" type="text" v-model="password" placeholder="123password">
    </div>
    <div class="columns inputColumn">
      <a
        class="button is-rounded is-success"
        @click="createUser($swal, $router, $fireStore)"
      >Register</a>
      <nuxt-link to="/login" class="button is-rounded is-primary">Login</nuxt-link>
      <nuxt-link to="/" class="button is-rounded is-primary">Home</nuxt-link>
    </div>
  </div>
</template>

<script>
  // import {reqSignup} from "../../api/sdkService";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.$swal({
          type: "success",
          title: "WoooHoo! Your in.",
          text: `Logged in as ${user.email}!`
        });
        this.$router.push({ name: "index" });
      }
    });
  },
  methods: {
    createUser(swal, router, firestore) {
      //  const signUpParams = { username, password }
      //  const { data: token } =  await cloudWalletApi.post('/users/signup', signUpParams)

      // return token
      this.$fireAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            let userData = user.user;
            firestore.collection("users").add({
              email: userData.email,
              balance: 100
            });
            swal({
              type: "success",
              title: "WoooHoo!",
              text: `Your account has been created with ${userData.email}!`
            });
            // router.push({ name: "index" });
          },
          function(err) {
            swal({
              type: "error",
              title: ":/",
              text:
                "The email you enter may be in use or your password is not long enough!"
            });
          }
        );
    }
  }
};
</script>

<style scoped>
.inputColumn {
  padding: 10px;
}
.inputColumn > * {
  margin: auto;
}
.inputColumn > h2 {
  padding-right: 10px;
}
</style>
