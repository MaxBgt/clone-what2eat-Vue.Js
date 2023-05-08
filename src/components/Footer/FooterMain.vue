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
}
</style>
