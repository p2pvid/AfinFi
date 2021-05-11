export default {
  setLogin(vuexContext, loggedIn) {
    vuexContext.commit("setLogin", loggedIn);
  },
  setBalance(vuexContext, newBalance) {
    vuexContext.commit("setBalance", newBalance);
  }
};
