<template>
  <main>
    <section class="bill-section">
      <h2>Bill</h2>
      <basic-input
        v-model.number="billAmount"
        imgsrc="/images/icon-dollar.svg"
        id="bill"
        imgalt="dollar sign"
      />
    </section>
    <section class="tip-percentage-section">
      <h2>Select Tip %</h2>
      <percent-input />
    </section>
    <section class="number-of-people-section">
      <h2>Number of People</h2>
      <label
        for="numberOfPeople"
        v-if="numberOfPeople === 0"
        class="error-message"
        >Can't be zero</label
      >
      <basic-input
        v-model.number="numberOfPeople"
        imgsrc="/images/icon-person.svg"
        id="numberOfPeople"
        imgalt="person outline"
        :errorCondition="numberOfPeople === 0"
      />
    </section>
    <section class="output-section">
      <h2 class="sr-only">Totals</h2>
      <output-section k="Tip Amount" :v="tipAmountPerPerson" />
      <output-section k="Total" :v="totalAmount" />
      <reset-button />
    </section>
  </main>
</template>

<script>
import BasicInput from "./input/BasicInput.vue";
import PercentInput from "./input/PercentInput.vue";
import OutputSection from "./output/OutputSection.vue";
import ResetButton from "./output/ResetButton.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BasicInput,
    PercentInput,
    OutputSection,
    ResetButton,
  },
  computed: {
    billAmount: {
      get() {
        return this.$store.state.billAmount;
      },
      set(amount) {
        this.$store.commit("updateBillAmount", amount);
      },
    },
    numberOfPeople: {
      get() {
        return this.$store.state.numberOfPeople;
      },
      set(amount) {
        this.$store.commit("updateNumberOfPeople", amount);
      },
    },
    ...mapGetters(["tipAmountPerPerson", "totalAmount"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mq.scss";

main {
  background-color: var(--foreground);
  box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.2);
  border-radius: 25px 25px 0px 0px;
  padding: 2rem;

  @include mq {
    border-radius: 25px;
    max-width: $breakpoint;
    display: grid;
    grid-template-areas:
      "bill-section             output-section"
      "tip-percentage-section   output-section"
      "number-of-people-section output-section";
    gap: 2.5rem;

    .bill-section {
      grid-area: bill-section;
    }

    .tip-percentage-section {
      grid-area: tip-percentage-section;
    }

    .number-of-people-section {
      grid-area: number-of-people-section;
    }

    .output-section {
      grid-area: output-section;
      width: 26rem;
    }
  }
}

section {
  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 2rem;

    @include mq {
      &.output-section {
        margin-top: 0;
      }
    }
  }
}

h2 {
  font-size: 1rem;
  color: var(--input-heading);
}

.number-of-people-section {
  display: grid;
  grid-template-areas: "nop-heading nop-error-message" "nop-input nop-input";

  & > {
    h2 {
      grid-area: nop-heading;
    }

    label {
      grid-area: nop-error-message;
      text-align: right;
    }

    div {
      grid-area: nop-input;
    }
  }
}

.output-section {
  background-color: var(--output-background);
  border-radius: 15px;
  padding: 2.25rem 1.5rem 1.5rem 1.5rem;
}

.error-message {
  color: var(--input-text-error-label);
}
</style>
