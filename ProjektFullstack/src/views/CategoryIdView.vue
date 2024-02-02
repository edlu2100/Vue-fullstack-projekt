<template>
  <div class="container w-11/12 m-auto Ipad">
    <div class="row w-10/12 mt-8 lg:mt-10">
      <router-link class="block text-primary hover:text-black" to="/categories"
        >Category /</router-link
      >
      <p class="ml-1 block">{{this.categories.CategoryName }}</p>
    </div>
    <div class="mt-16 justify-between">
      <h2 class="text-2xl">{{ this.categories.CategoryName }}</h2>

      <div class="mt-20">
        <h2>Antal Produkter: {{ this.pro.length }}</h2>
      </div>
      <div class="gridProduct mt-4 card">
        <Products
          v-for="ProductName in pro"
          :ProductName="ProductName"
          :key="ProductName.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
.row{
  display: flex;
  flex-direction: row;
}

.gridProduct {
  display: grid;
  grid-template-columns: auto auto;
  gap: 2em;
}
button {
  padding: 0.3em;
  width: 9.5em;
}
.plus {
  width: 30px;
}
.text {
  margin-top: 0.1em;
}

@media screen and (min-width: 768px) {
  .gridProduct {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2em;
  }
  .Ipad {
    min-width: 70vw;
  }
}
@media screen and (min-width: 1024px) {
  .gridProduct {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 2em;
  }
}
</style>

<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import Products from "../components/Products.vue";

export default {
  data() {
    return {
      Products: [],
      categories: [],
      category: true,
      pro: [],
    };
  },
  components: {
    RouterLink,
    Products,
  },

  methods: {
    async getCategory() {
      const id = this.$route.params.id;
      const resp = await fetch("http://127.0.0.1:8000/api/category/" + id);

      const data = await resp.json();

      this.categories = data;
    },
    async getPro() {
      const id = this.$route.params.id;
      const resp = await fetch(
        "http://127.0.0.1:8000/api/products/search/categories_id/" + id
      );

      const data = await resp.json();

      this.pro = data;

    },
  },

  mounted() {
    this.getCategory();
    this.getPro();

  },
};
</script>
