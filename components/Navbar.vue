<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <strong>Afinfi Cash</strong>
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="true">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" v-if="loggedIn" to="/lend">Lend</nuxt-link>
        <nuxt-link class="navbar-item" v-if="loggedIn" to="/borrow">Borrow</nuxt-link>
        <nuxt-link class="navbar-item" v-if="loggedIn" to="/profile">Profile</nuxt-link>
      </div>

      <div class="navbar-end" v-if="!loggedIn">
        <div class="navbar-item">
          <div class="buttons">
            <nuxt-link class="button is-primary" to="/register">
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link class="button is-light" to="/login">Log in</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.$swal({
          type: "error",
          title: "Opps your not logged in",
          text: "Login to access this page"
        });
      }
    });
  }
};
</script>


<style scoped>
.navbar {
  padding-left: 3%;
  padding-right: 3%;
}
</style>
