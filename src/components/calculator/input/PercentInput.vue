<template>
  <div class="grid">
    <button
      :class="comparison(0.05) && 'active'"
      @click="setTipPercentageWithButton(0.05)"
    >
      5%
    </button>
    <button
      :class="comparison(0.1) && 'active'"
      @click="setTipPercentageWithButton(0.1)"
    >
      10%
    </button>
    <button
      :class="comparison(0.15) && 'active'"
      @click="setTipPercentageWithButton(0.15)"
    >
      15%
    </button>
    <button
      :class="comparison(0.25) && 'active'"
      @click="setTipPercentageWithButton(0.25)"
    >
      25%
    </button>
    <button
      :class="comparison(0.5) && 'active'"
      @click="setTipPercentageWithButton(0.5)"
    >
      50%
    </button>
    <input placeholder="Custom" v-model.number="customAmount" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      customAmount: null,
    };
  },
  computed: {
    ...mapState(["tipPercentage"]),
  },
  methods: {
    setTipPercentageWithButton(value) {
      this.$store.commit("updateTipPercentage", value);
      this.customAmount = null;
    },
    comparison(value) {
      return (
        (!this.customAmount || this.customAmount === 0) &&
        this.tipPercentage === value
      );
    },
  },
  watch: {
    customAmount: function (value) {
      if (this.customAmount)
        this.$store.commit("updateTipPercentage", value / 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mq.scss";

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @include mq {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

button {
  background-color: var(--input-percentage-background);
  color: var(--input-percentage-text);
  border: none;
  border-radius: 5px;
  padding: 0.375rem;
  font-size: 1.5rem;

  &.active {
    background-color: var(--input-percentage-background-active);
    color: var(--input-percentage-text-active);
  }
}

input {
  background-color: var(--input-number-background);
  color: var(--input-number-text);
  text-align: right;
  font-size: 1.5rem;
  padding: 0.375rem 1rem;
  border: none;
  border-radius: 5px;

  &::placeholder {
    color: var(--input-percentage-text-placeholder);
  }
}
</style>
