<template>
  <div class="box">
    <div class="columns inputColumn">
      <h2>Email</h2>
      <input class="input" v-model="email" type="text" placeholder="catslayer994@dogs.com">
    </div>
    <div class="columns inputColumn">
      <h2 class>Password</h2>
      <input class="input" v-model="password" type="text" placeholder="123password">
    </div>
    <div class="columns inputColumn">
      <a class="button is-rounded is-success" v-on:click="loginUser($swal, $router)">Login</a>
      <nuxt-link to="/register" class="button is-rounded is-primary">Register</nuxt-link>
      <nuxt-link to="/" class="button is-rounded is-primary">Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
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
    loginUser(swal, router) {
      this.$fireAuth.signInWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          let userData = user.user;
          console.log(userData);
          swal({
            type: "success",
            title: "WoooHoo! Your in.",
            text: `Logged in as ${userData.email}!`
          });
          router.push({ name: "index" });
        },
        function(err) {
          swal({
            type: "error",
            title: ":/",
            text: "Please check your credentials again!"
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
