<template>
  <div>
    <Header />
    <FoodMainComponent />
    <Contact />
    <FooterMain />
  </div>
</template>

<script>
import Header from "@/components//Header/Header.vue";
import FoodMainComponent from "@/components/DisplayFood/FoodMainComponent.vue";
import Contact from "@/components/Contact/Contact.vue";
import FooterMain from "@/components/Footer/FooterMain.vue";
export default {
  name: "HomePage",
  components: {
    Header,
    FoodMainComponent,
    Contact,
    FooterMain,
  },
};
</script>

<style scoped></style>
