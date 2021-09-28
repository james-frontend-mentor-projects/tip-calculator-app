<template>
  <div>
    <label :for="id"><img :src="imgsrc" :alt="imgalt" /></label>
    <input
      :id="id"
      ref="inputRef"
      :value="modelValue"
      type="number"
      @input="updateValue($event.target.value)"
      :class="errorCondition && 'invalid'"
      min="0"
      placeholder="0"
    />
  </div>
</template>

<script>
export default {
  props: ["imgsrc", "id", "imgalt", "modelValue", "errorCondition"],
  emits: ["update:modelValue"],
  methods: {
    updateValue: function () {
      this.$emit("update:modelValue", this.$refs.inputRef.value);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0.375rem 0;
}

label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.25rem;
  height: 100%;
  display: flex;
  align-items: center;
}

input {
  display: inline-block;
  width: 100%;
  padding: 0.375rem 1.125rem 0.375rem 2rem;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: right;

  color: var(--input-number-text);
  background-color: var(--input-number-background);
  border: 2px solid transparent;
  border-radius: 5px;

  &:active,
  &:focus-visible,
  &:focus {
    outline: none;
    border: 2px solid var(--input-text-active-border);
    caret-color: var(--input-text-active-cursor);
  }

  &.invalid {
    border-color: var(--input-text-error-border);
  }
}
</style>
