<template>
  <div class="columns">
    <div class="column">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">Total: ${{total}}</span>
          <span v-if="owed == 0" class="tag is-success">Paid</span>
          <span v-else class="tag is-danger">Remaining: ${{owed}}</span>
        </div>
      </div>
    </div>
    <div class="column">
      <h1>{{email}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["total", "owed", "email"]
};
</script>
