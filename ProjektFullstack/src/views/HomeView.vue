<template>
  <div class="w-11/12 m-auto Ipad">
    <h2 class="text-2xl mt-16">Welcome back, {{ User.name }}!</h2>
    <div class="mt-20">
      <h2>Antal Produkter: {{ this.Products.length }}</h2>
    </div>
    <div class="gridProduct mt-4">
      <Products
        v-for="ProductName in Products"
        :ProductName="ProductName"
        :key="ProductName.id"
      />
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.gridProduct {
  display: grid;
  grid-template-columns: auto auto;
  gap: 2em;
}
.Ipad {
  min-width: 70vw;
}
@media screen and (min-width: 768px) {
  .gridProduct {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2em;
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
import Products from "../components/Products.vue";

export default {
  data() {
    return {
      Products: [],
      User: [],
    };
  },
  components: {
    Products,
  },
  methods: {
    async getProduct() {
      const resp = await fetch("http://127.0.0.1:8000/api/products");

      const data = await resp.json();

      this.Products = data;
    },
    async getUser() {
      var id = localStorage.getItem("id");

      const resp = await fetch("http://127.0.0.1:8000/api/getUser/" + id);
      const data = await resp.json();

      this.User = data;
    },
  },
  mounted() {
    this.getProduct();
    this.getUser();
  },
};
</script>
