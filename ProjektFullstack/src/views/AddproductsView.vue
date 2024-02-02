<template>
  <div class="container w-11/12 m-auto Ipad ">
    <div class="flex flex-row w-10/12 m-auto mt-8 lg:mt-10">
      <router-link class="block text-primary hover:text-black" to="/products"
        >Products /</router-link
      >
      <p class="ml-1 block">Add Product</p>
    </div>
    <AddProduct class="lg:mt-20 w-full m-auto" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

}



</style>

<script>

import AddProduct from "../components/AddProduct.vue";

export default {

  components: {
    AddProduct,
  },

};
</script>
