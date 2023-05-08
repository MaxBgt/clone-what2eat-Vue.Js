<template>
  <div class="about">
    <div class="nav">
      <Navbar />
    </div>
    <AboutContent />
    <Contact />
    <FooterMain />
  </div>
</template>

<script>
import Navbar from "@/components/Header/Navbar.vue";
import AboutContent from "@/components/About/AboutContent.vue";
import Contact from "@/components/Contact/Contact.vue";
import FooterMain from "@/components/Footer/FooterMain.vue";
export default {
  name: "AboutPage",
  components: {
    Navbar,
    AboutContent,
    Contact,
    FooterMain,
  },
};
</script>

<style scoped lang="scss">
.about {
  .nav {
    background-color: #1ac073;
  }
}
</style>
