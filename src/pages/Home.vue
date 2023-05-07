<template>
  <div>
    <Header />
    <FoodMainComponent />
  </div>
</template>

<script>
import Header from "@/components//Header/Header.vue";
import FoodMainComponent from "@/components/DisplayFood/FoodMainComponent.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    FoodMainComponent,
  },
};
</script>

<style scoped></style>
