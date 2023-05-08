<template>
  <div class="contact-main">
    <ContactHeader />
    <div class="contact-form-img">
      <ContactForm />
      <ContactImg />
    </div>
  </div>
</template>

<script>
import ContactHeader from "./ContactHeader.vue";
import ContactForm from "./ContactForm.vue";
import ContactImg from "./ContactImg.vue";
export default {
  name: "ContactMainComponent",
  components: {
    ContactHeader,
    ContactForm,
    ContactImg,
  },
};
</script>

<style scoped lang="scss">
.contact-main {
  background-color: white;
  margin-top: 150px;

  .contact-form-img {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1024px) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
}
</style>
