<template>
  <div>Your balance is ${{balance}}</div>
</template>

<script>
export default {
  data() {
    return {
      balance: null
    };
  },
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.$fireStore
          .collection("users")
          .where("email", "==", user.email)
          // .get()
          // .then(doc => {
          //   const data = doc.docs[0].data();
          //   console.log(data);
          //   this.balance = data.balance;
          // });
          .onSnapshot(doc => {
            const data = doc.docs[0].data();
            this.balance = data.balance;
          });
      }
    });
  }
};
</script>
