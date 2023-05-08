<template>
  <div class="nav-container">
    <router-link to="/" class="router-link">
      <div class="title">WHAT2EAT</div>
    </router-link>
    <div class="nav-elements">
      <router-link to="/" class="router-link">
        <h2 class="nav-title">Home</h2>
      </router-link>
      <router-link to="/About" class="router-link">
        <h2 class="nav-title">About</h2>
      </router-link>
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
  .router-link {
    text-decoration: none;
    color: #ffffff;
  }
}
</style>
