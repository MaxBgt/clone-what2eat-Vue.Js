<template>
  <div class="card-container" v-if="apiData.meals != null">
    <div class="card-meal" v-for="(meal, index) in apiData.meals" :key="index">
      <div class="image-container">
        <img :src="meal.strMealThumb" :alt="meal.idMeal" class="meal-img" />
        <p class="instructions">{{ meal.strTags }}</p>
      </div>
      <div class="desc">
        <h2 class="desc-title">{{ meal.strMeal }}</h2>
      </div>
    </div>
  </div>
  <div class="card-container" v-else>
    <div class="card-meal" v-for="(meal, index) in sliced_data" :key="index">
      <div class="image-container">
        <img :src="meal.strMealThumb" :alt="meal.idMeal" class="meal-img" />
        <p class="instructions">{{ meal.strTags }}</p>
      </div>
      <div class="desc">
        <h2 class="desc-title">{{ meal.strMeal }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import api from "/src/api/api.js";
import { computed, onMounted, ref } from "vue";
export default {
  name: "FoodCard",
  setup() {
    let meals_data = ref([]);
    let sliced_data = ref([]);
    const store = useStore();
    const apiData = computed(() => store.state.apiData);

    const getData = async () => {
      const res = await api.get("/api/json/v1/1/search.php?s=");
      meals_data.value = res.data.meals;
      sliced_data.value = meals_data.value.slice(0, 6);
    };
    onMounted(getData);

    return {
      meals_data,
      sliced_data,
      apiData,
    };
  },
};
</script>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  .card-meal {
    width: 30%;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 15px;
    margin-bottom: 80px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-out;
    }

    .image-container {
      position: relative;
      width: 100%;
      overflow: hidden;

      .meal-img {
        width: 100%;
        height: 250px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }
      .instructions {
        position: absolute;
        opacity: 0;
        margin: 0;
        top: 0;
        left: 0;
        color: white;
        background-color: rgb(34 34 34 / 74%);
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        height: 98%;
        width: 100%;
        -webkit-transition: all 400ms ease-out;
        -moz-transition: all 400ms ease-out;
        -o-transition: all 400ms ease-out;
        -ms-transition: all 400ms ease-out;
        transition: all 400ms ease-out;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        &:hover {
          opacity: 1;
        }
      }
    }
    .desc {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
      margin-right: 20px;
      .desc-title {
        margin-top: 5px;
        margin-bottom: 10px;
      }
      .desc-title {
        font-weight: 400;
      }
    }
  }
}
</style>
