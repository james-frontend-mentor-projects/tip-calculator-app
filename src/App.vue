<template>
  <my-header />
  <calculator />
</template>

<script>
// rename to avoid conflict with HTML5 header element
import MyHeader from "./components/Header.vue";
import Calculator from "./components/calculator/Calculator.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    Calculator,
  },
};
</script>

<style lang="scss">
@import "@/styles/_mq.scss";

:root {
  --background: #c5e4e7;
  --foreground: #ffffff;

  --input-heading: #5e7a7d;

  --input-number-background: #f3f9fa;
  --input-number-text: #00474b;

  --input-text-active-border: #26c2ae;
  --input-text-active-cursor: #26c2ae;

  --input-text-error-border: #e17052;
  --input-text-error-label: #e17457;

  --input-percentage-background: #00474b;
  --input-percentage-text: #ffffff;
  --input-percentage-text-placeholder: #547878;

  --input-percentage-background-active: #26c2ae;
  --input-percentage-text-active: #00474b;

  --output-heading: #ffffff;
  --output-subheading: #7f9d9f;
  --output-background: #00474b;
  --output-value: #26c2ae;

  --reset-background: #26c2ae;
  --reset-background-active: #9fe8df;
  --reset-background-disabled: #0d686d;
  --reset-text: #00474b;
  --reset-text-disabled: #065c61;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background);

  &,
  button,
  input {
    font-family: "Space Mono", monospace;
  }
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include mq {
    padding-bottom: 8rem;
  }

  main {
    flex: 1 1 auto;

    @include mq {
      flex: 0 0 auto;
    }
  }
}

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}
</style>
