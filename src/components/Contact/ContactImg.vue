import Contact from '@/components/Contact/Contact.vue';
<template>
  <div class="contact-img">
    <img
      :src="
        require('@/assets/img/Food_delivery_cute_man_riding_motorcycles_cartoon_art_illustration.png')
      "
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "ContactImg",
};
</script>

<style scoped lang="scss">
.Contact-img {
  max-width: 80%;
}
img {
  height: 90%;
  width: 90%;
  margin-bottom: 50px;
}
</style>
