<template>
  <div class="header-img">
    <img :src="require('@/assets/img/cuate.png')" alt="" />
  </div>
</template>

<script>
export default {
  name: "HeaderImg",
};
</script>

<style scoped lang="scss">
.header-img {
  @media (max-width: 900px) {
    width: 50%;
  }

  img {
    height: 380px;
    width: 420px;
    @media (max-width: 900px) {
      height: 80%;
      width: 100%;
    }
  }
}
</style>
