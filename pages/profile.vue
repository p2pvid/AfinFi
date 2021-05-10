<template>
  <div class="box">
    <h2 class="subtitle is-3">
      Welcome back
      <b>{{user.email}}</b>
      <Balance/>
    </h2>
      <a class="button is-rounded is-primary" @click="logout($swal)">Logout</a>

    <LogoutButton/>
  </div>
</template>

<script>
import Balance from "~/components/index/Balance";
import LogoutButton from "~/components/auth/LogoutButton";

export default {
  components: {
    Balance,
    LogoutButton
  },
  data() {
    return {
      user: [],
      loggedIn: false
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
        this.user = user;
      } else {
        this.$swal({
          type: "error",
          title: "Opps your not logged in",
          text: "Login to access this page"
        });
        this.$router.push({ name: "index" });
      }
    });
  },
  methods: {
    logout(swal) {
      this.$fireAuth
        .signOut()
        .then(function() {
          swal({
            type: "success",
            title: "Bye 👋",
            text: "Successfully logged out!"
          });
        })
        .catch(function(err) {
          swal({ type: "error", text: "err" });
        });
    }
  }
};
</script>
