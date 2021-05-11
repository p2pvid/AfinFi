<template>
  <section>
    <div>
      <h1 class="title is-1">Afinfi Cash 💸</h1>
      <h2 class="subtitle is-2">Fast p2p loans</h2>
      <div>
        <nuxt-link
          to="/login"
          v-if="loggedIn == false"
          class="button is-rounded is-primary"
        >Login / Register</nuxt-link>
        <nuxt-link class="button is-rounded is-primary" to="/profile">My Profile</nuxt-link>
        <nuxt-link class="button is-rounded is-primary" to="/lend">Lend</nuxt-link>
        <nuxt-link class="button is-rounded is-primary" to="/borrow">Borrow</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      loggedIn: null
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
};
</script>
