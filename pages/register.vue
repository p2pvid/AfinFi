<template>
  <div>
    <h1 class="title has-text-centered hero">Register</h1>
    <RegisterForm/>
  </div>
</template>

<script>
import RegisterForm from "~/components/auth/RegisterForm";
export default {
  components: {
    RegisterForm
  }
};
</script>


<style scoped>
title {
  padding: 5px;
}
</style>