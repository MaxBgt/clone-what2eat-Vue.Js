<template>
  <div class="header-element">
    <HeaderImg />
    <div class="title-header">
      <h1 class="slogan">Authentic Home food in UK</h1>
      <p class="description">
        What2Eat is a courier service in which authentic home cook is delivered
        to a customer
      </p>
      <div class="input-header">
        <InputSearchHeader />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImg from "./HeaderImg.vue";
import InputSearchHeader from "./InputSearchHeader.vue";
export default {
  name: "HeaderElements",
  components: {
    HeaderImg,
    InputSearchHeader,
  },
};
</script>

<style scoped lang="scss">
.header-element {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.title-header {
  color: white;
  width: 30%;
  margin-right: 180px;

  .slogan {
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 2px;
    font-weight: 400;
  }
  .description {
    font-size: 12px;
  }
}
</style>
