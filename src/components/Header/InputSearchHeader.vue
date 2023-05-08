<template>
  <div class="input-header">
    <input
      type="text"
      placeholder="Search food you love"
      @input="onInputTextChanged($event.target.value)"
    />
    <input type="button" value="Search" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  name: "InputSearchHeader",
  setup() {
    const store = useStore();
    const query = ref("");
    const apiData = computed(() => store.state.apiData);

    const onInputTextChanged = (value) => {
      query.value = value;
      store.dispatch("fetchApiData", query.value);
    };

    return {
      apiData,
      onInputTextChanged,
    };
  },
};
</script>

<style scoped lang="scss">
.input-header {
  position: relative;
  margin-top: 30px;

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

    @media (max-width: 1024px) {
      width: 60%;
      padding: 10px;
    }

    @media (max-width: 768px) {
      width: 50%;
      padding: 5px;
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

    @media (max-width: 1024px) {
      padding: 10px;
    }

    @media (max-width: 768px) {
      padding: 5px;
    }
  }
}
</style>
