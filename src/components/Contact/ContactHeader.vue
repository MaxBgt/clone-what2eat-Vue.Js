<template>
  <div class="contact-header">
    <h2 class="title">Do you have a question or want to become a seller ?</h2>
    <p class="para">
      Fill this form and our manager will contact you next 48 hours
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactHeader",
};
</script>

<style scoped lang="scss">
.contact-header {
  width: 30%;
  margin-right: 10%;
  margin-left: 10%;

  .title {
    font-weight: 400;
    margin-bottom: 2px;
    padding-top: 50px;
  }
  .para {
    font-size: 11px;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin-right: 5%;
    margin-left: 5%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    text-align: center;

    .title {
      padding-top: 20px;
    }
  }
}
</style>
