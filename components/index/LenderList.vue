<template>
  <div v-if="loans.length > 0">
    <div class="box">
      <h1 class="title is-1">Lended</h1>
      <div class="box">
        <ListItem
          v-for="loan in loans"
          v-bind:key="loan.ref.id"
          v-bind:total="loan.data().amount"
          v-bind:owed="loan.data().owed"
          v-bind:email="loan.data().borrower"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "~/components/index/ListItem";
export default {
  components: {
    ListItem
  },
  data() {
    return {
      loans: []
    };
  },
  beforeCreate() {
    this.$fireStore
      .collection("loans")
      .where("lender", "==", this.$fireAuth.currentUser.email)
      .onSnapshot(doc => {
        this.loans = doc.docs;
      });
  }
};
</script>
