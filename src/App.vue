<script lang="ts">
// import vueLogo from './assets/images/vue.jpg';
export default {
  data() {
    return {
      greeting: "Hello, World!",
    };
  },
};
</script>

<template>
  <div class="message">{{ greeting }}</div>
  <img src="./assets/images/vue.jpg" />
</template>

<style lang="scss">
@import "./styles.scss";
</style>