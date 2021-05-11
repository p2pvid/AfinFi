<template>
  <BorrowerList v-if="loggedIn"/>
</template>

<script>
import BorrowerList from "~/components/index/BorrowerList";

export default {
  components: {
    BorrowerList
  },
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
        this.$router.push({ name: "index" });
      }
    });
  }
};
</script>
