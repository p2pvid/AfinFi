<template>
  <div class="box">
    <div class="columns form">
      <h2>Loan</h2>
      <h2>$</h2>
      <input class="input" v-model="loan" type="text" placeholder="10">
      <h2>To</h2>
      <input class="input" v-model="borrower" type="text" placeholder="Jeff">
      <a class="button is-rounded is-success send" @click="loanMoney">Send</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loanMoney() {
      if (this.loan <= 0 || isNaN(this.loan)) {
        this.$swal({
          type: "error",
          title: "Loan Amount Invalid",
          text: "Please enter a valid amount"
        });
        return;
      }
      const db = this.$fireStore;
      const auth = this.$fireAuth;
      db.collection("users")
        .where("email", "==", this.borrower)
        .get()
        .then(doc => {
          if (doc.docs.length === 0) {
            this.$swal({
              type: "error",
              title: "Sorry that user doesnt exist",
              text: "Please enter a valid user"
            });
            return;
          }
          db.collection("users")
            .where("email", "==", auth.currentUser.email)
            .get()
            .then(doc => {
              const data = doc.docs[0].data();
              this.balance = data.balance;
              if (this.balance < this.loan) {
                this.$swal({
                  type: "error",
                  title: "Little to hasty there",
                  text: "You dont have enough to loan that much money!"
                });
                return;
              }
              db.collection("loans").add({
                amount: this.loan,
                borrower: this.borrower,
                lender: auth.currentUser.email,
                owed: this.loan,
                paidoff: false
              });

              this.balance -= this.loan;
              console.log(doc.docs[0].ref.id);
              console.log(doc.docs[0]);
              db.collection("users")
                .doc(doc.docs[0].ref.id)
                .update({
                  balance: this.balance
                })
                .then(() => {
                  db.collection("users")
                    .where("email", "==", this.borrower)
                    .get()
                    .then(doc => {
                      doc.docs[0].ref.set({
                        balance:
                          doc.docs[0].data().balance + parseInt(this.loan),
                        email: doc.docs[0].data().email
                      });
                    });
                  this.$swal({
                    type: "success",
                    title: "We got you!",
                    text: "Now your friend can afford that snickers bar 😉!"
                  });
                });
            });
        });
    }
  },
  data() {
    return {
      loan: "",
      borrower: "",
      balance: 0
    };
  }
};
</script>

<style scoped>
.form {
  padding-top: 20px;
  padding-bottom: 20px;
}
.send {
  margin-left: 5px;
}
h2 {
  padding: 5px;
}
</style>

