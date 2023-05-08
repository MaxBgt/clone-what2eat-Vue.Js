<template>
  <Wrapper>
    <div id="app"><router-view></router-view></div>
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";
export default {
  name: "App",
  components: {
    Wrapper,
  },
};
</script>

<style>
body {
  margin-top: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
