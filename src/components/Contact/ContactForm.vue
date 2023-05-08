<template>
  <div class="form-container">
    <form>
      <div class="top">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
      </div>
      <textarea
        id=""
        cols="30"
        rows="10"
        placeholder="Your message"
        class="textarea"
      ></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style scoped lang="scss">
.form-container {
  margin-top: 0;
  margin-left: 10%;
  margin-right: 10%;

  form {
    display: flex;
    flex-direction: column;
    width: 30em;

    input,
    .textarea {
      border-radius: 15px;
      border: 1px solid #d9d9d9;
    }
    input[type="text"],
    .textarea {
      padding: 10px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
    }
  }
}
</style>
