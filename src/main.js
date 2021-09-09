import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      billAmount: 142.55,
      tipPercentage: 0.15,
      numberOfPeople: 5,
    };
  },
  getters: {
    tipAmountPerPerson(state) {
      if (!state.numberOfPeople) return Infinity;
      if (!state.tipPercentage) return state.billAmount;
      return (state.billAmount * state.tipPercentage) / state.numberOfPeople;
    },
    totalAmount(state, getters) {
      if (!state.numberOfPeople) return Infinity;
      if (!state.tipPercentage) return state.billAmount;
      return (
        state.billAmount / state.numberOfPeople + getters.tipAmountPerPerson
      );
    },
    everythingIsZero(state) {
      return (
        state.billAmount === 0 &&
        state.tipPercentage === 0 &&
        state.numberOfPeople === 0
      );
    },
  },
  mutations: {
    updateBillAmount(state, amount) {
      state.billAmount = amount;
    },
    updateTipPercentage(state, amount) {
      state.tipPercentage = amount;
    },
    updateNumberOfPeople(state, amount) {
      state.numberOfPeople = amount;
    },
  },
  actions: {
    resetAllValues({ commit }) {
      commit("updateBillAmount", 0);
      commit("updateTipPercentage", 0);
      commit("updateNumberOfPeople", 0);
    },
  },
  devtools: true,
});

const app = createApp(App);

app.use(store);

app.mount("#app");
