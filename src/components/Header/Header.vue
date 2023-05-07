<template>
  <div class="header">
    <Navbar />
    <HeaderElements />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HeaderElements from "./HeaderElements.vue";
export default {
  name: "HeaderComponent",
  components: {
    Navbar,
    HeaderElements,
  },
};
</script>

<style scoped lang="scss">
.header {
  position: static;
  height: 60vh;
  background-color: #1ac073;
}
</style>
