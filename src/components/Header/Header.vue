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

  // Styles pour les écrans entre 768px et 900px (tablettes)
  @media (min-width: 768px) and (max-width: 900px) {
    height: 45vh;
  }

  // Styles pour les écrans jusqu'à 767px (mobiles)
  @media (max-width: 769px) {
    height: 50vh;
  }
}
</style>
