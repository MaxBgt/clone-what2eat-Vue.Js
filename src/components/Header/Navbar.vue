<template>
  <div class="nav-container">
    <div class="title">WHAT2EAT</div>
    <div class="nav-elements">
      <h2 class="nav-title">Home</h2>
      <h2 class="nav-title">About</h2>
      <h2 class="nav-title">Blog</h2>
      <h2 class="nav-title">Contact</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="scss">
.nav-container {
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-weight: 900;
  }
  .nav-elements {
    display: flex;
    width: 40%;
    justify-content: space-evenly;

    .nav-title {
      font-size: 15px;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
</style>
