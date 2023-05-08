<template>
  <div class="footer">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../Header/Navbar.vue";
export default {
  name: "FooterMain",
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.footer {
  height: 10vh;
  background-color: #1ac073;

  @media (max-width: 1024px) {
    height: 15vh;
  }

  @media (max-width: 768px) {
    height: 20vh;
  }
}
</style>
