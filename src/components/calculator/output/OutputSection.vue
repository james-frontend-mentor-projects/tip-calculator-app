<template>
  <div>
    <h3>{{ k }}</h3>
    <span class="per-person">/ person</span>
    <span class="value">{{ v === Infinity ? "&infin;" : `$${value}` }}</span>
  </div>
</template>

<script>
export default {
  props: ["k", "v"],
  computed: {
    value() {
      return this.v.toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mq.scss";

div {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "k v" "per-person v";
  margin-bottom: 1.25rem;

  @include mq {
    grid-template-columns: 30% 70%;
  }
}

h3 {
  grid-area: k;
  color: var(--output-heading);
  font-size: 1rem;
}

.per-person {
  grid-area: per-person;
  color: var(--output-subheading);
  font-size: 0.813rem;
}

.value {
  grid-area: v;
  font-size: 2rem;
  color: var(--output-value);
  justify-self: end;
  display: flex;
  word-break: break-word;

  @include mq {
    font-size: 3rem;
  }
}
</style>
