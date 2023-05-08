<template>
  <div>
    <Header />
    <FoodMainComponent />
    <Contact />
  </div>
</template>

<script>
import Header from "@/components//Header/Header.vue";
import FoodMainComponent from "@/components/DisplayFood/FoodMainComponent.vue";
import Contact from "@/components/Contact/Contact.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    FoodMainComponent,
    Contact,
  },
};
</script>

<style scoped></style>
