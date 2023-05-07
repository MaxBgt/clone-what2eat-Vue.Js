<template>
  <Wrapper>
    <div id="app"><Home /></div>
  </Wrapper>
</template>

<script>
import Home from "./pages/Home.vue";
import Wrapper from "./components/Wrapper.vue";
export default {
  name: "App",
  components: {
    Home,
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
