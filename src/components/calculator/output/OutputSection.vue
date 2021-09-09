<template>
  <div>
    <h3>{{ k }}</h3>
    <aside>/ person</aside>
    <span>{{ v === Infinity ? "&infin;" : `$${value}` }}</span>
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
div {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "k v" "aside v";
  margin-bottom: 1.25rem;
}

h3 {
  grid-area: k;
  color: var(--output-heading);
  font-size: 1rem;
}

aside {
  grid-area: aside;
  color: var(--output-subheading);
  font-size: 0.813rem;
}

span {
  grid-area: v;
  font-size: 2rem;
  color: var(--output-value);
  justify-self: end;
  display: flex;
  word-break: break-word;
}
</style>
