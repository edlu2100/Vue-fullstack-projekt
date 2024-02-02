<template>
  <div class="container w-11/12 m-auto Ipad">
    <div class=" mt-16 row justify-between">
      <h2 class="text-2xl">Products</h2>
      <button
        class="bg-primary text-white block rounded hover:opacity-70 hover:text-black "
      >
        <router-link class="flex flex-row" to="/AddProduct">
          <img class="plus" src="../assets/images/plus.png" alt="" />
          <p class="text-lg text ml-1">Add Product</p></router-link
        >
      </button>
    </div>
   <div class="mt-20">
      <h2>Antal Produkter: {{ this.Products.length }}</h2>
    </div>
    <div class="gridProduct mt-4 card">
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
.Ipad{
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
import AddProduct from "../components/AddProduct.vue";

export default {
  data() {
    return {
      Products: [],
    };
  },
  components: {
    Products,
    AddProduct,
  },
  methods: {
    async getProduct() {
      const resp = await fetch("http://127.0.0.1:8000/api/products");

      const data = await resp.json();

      this.Products = data;
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
