<template>
  <div class="spacer"></div>
  <button @click="resetAllValues" :disabled="everythingIsZero">Reset</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["everythingIsZero"]),
  },
  methods: {
    ...mapActions(["resetAllValues"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_mq.scss";

button {
  padding: 0.625rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: var(--reset-text);
  background-color: var(--reset-background);
  border-radius: 5px;
  text-align: center;
  border: none;
  font-weight: 700;
  margin-top: 0.5rem;

  &:active {
    background-color: var(--reset-background-active);
  }

  &:disabled {
    background-color: var(--reset-background-disabled);
    color: var(--reset-text-disabled);
  }
}

.spacer {
  @include mq {
    flex: 1 1 auto;
  }
}
</style>
