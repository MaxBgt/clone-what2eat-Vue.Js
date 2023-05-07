<template>
  <div class="input-header">
    <input
      type="text"
      placeholder="Search food you love"
      v-model="search_text"
      @input="getSearch"
    />
    <input type="button" value="Search" />
  </div>
</template>

<script>
export default {
  name: "InputSearchHeader",

  data() {
    return {
      search_text: "",
    };
  },
  methods: {
    getSearch() {
      console.log(this.search_text);
    },
  },
};
</script>

<style scoped lang="scss">
.input-header {
  margin-top: 40px;
  input[type="text"] {
    padding: 15px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    width: 70%;

    &:focus {
      border: none;
      outline: none;
    }
  }
  input[type="button"] {
    border: none;
    padding: 15px;
    background: #f3ba00;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
