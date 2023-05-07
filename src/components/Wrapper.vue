<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WrapperComponent",
};
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
