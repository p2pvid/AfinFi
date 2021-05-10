<template>
  <a class="button is-rounded is-primary" @click="logout($swal)">Logout</a>
</template>

<script>
export default {
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
