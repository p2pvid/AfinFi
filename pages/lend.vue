<template>
  <div v-if="loggedIn">
    <SendForm/>
    <LenderList/>
  </div>
</template>

<script>
import LenderList from "~/components/index/LenderList";
import SendForm from "~/components/index/SendForm";

export default {
  components: {
    LenderList,
    SendForm
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
