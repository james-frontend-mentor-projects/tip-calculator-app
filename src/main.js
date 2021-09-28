import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      billAmount: null,
      tipPercentage: null,
      numberOfPeople: null,
    };
  },
  getters: {
    tipAmountPerPerson(state) {
      if (state.numberOfPeople === 0) return Infinity;
      if (!state.numberOfPeople) return 0;
      if (!state.tipPercentage) return state.billAmount;
      return (state.billAmount * state.tipPercentage) / state.numberOfPeople;
    },
    totalAmount(state, getters) {
      if (state.numberOfPeople === 0) return Infinity;
      if (!state.numberOfPeople) return 0;
      if (!state.tipPercentage) return state.billAmount;
      return (
        state.billAmount / state.numberOfPeople + getters.tipAmountPerPerson
      );
    },
    everythingIsZero(state) {
      return (
        state.billAmount === null &&
        state.tipPercentage === null &&
        state.numberOfPeople === null
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
      commit("updateBillAmount", null);
      commit("updateTipPercentage", null);
      commit("updateNumberOfPeople", null);
    },
  },
  devtools: true,
});

const app = createApp(App);

app.use(store);

app.mount("#app");
