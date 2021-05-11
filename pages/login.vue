<template>
  <div>
    <h1 class="title has-text-centered hero">Login</h1>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "~/components/auth/LoginForm";
export default {
  components: {
    LoginForm
  }
};
</script>


<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
