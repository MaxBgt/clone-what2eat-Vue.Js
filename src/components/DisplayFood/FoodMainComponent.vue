<template>
  <div class="food-main">
    <h1 class="main-title">Home Kitchen</h1>
    <FoodCard />
  </div>
</template>

<script>
import FoodCard from "./FoodCard.vue";
export default {
  name: "FoodMainComponent",
  components: {
    FoodCard,
  },
};
</script>

<style scoped lang="scss">
.food-main {
  margin-left: 10%;
  margin-right: 10%;

  .main-title {
    font-weight: 400;
    font-size: 30px;
    margin-top: 25px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
}
</style>
