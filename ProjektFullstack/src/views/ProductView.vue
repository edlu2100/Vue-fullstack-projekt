<template>
  <div class="container m-auto">
    <div class="flex flex-row w-10/12 m-auto mt-8 lg:mt-10">
      <router-link class="block text-primary hover:text-black" to="/products"
        >Products /</router-link
      >
      <p class="ml-1 block">{{ Products.ProductName }}</p>
    </div>
    <div class="flex flex-col md:flex-row md:w-full lg:w-10/12 m-auto">
      <div
        class="flex flex-row small mb-8 w-10/12 md:w-full m-auto mt-6 lg:mt-8"
      >
        <div>
          <img
            class="image m-auto md:mr-4 md:ml-4 lg:ml-0 productImg"
            v-bind:src="Products.Image"
            alt=""
          />
        </div>
        <div class="ml-2">
          <h1 class="text-2xl font-bold">{{ Products.ProductName }}</h1>
          <p class="text-base mt-1">{{ Products.SKU }}</p>
          <Router-link :to="`/products/Edit/${Products.id}`">
            <button
              class="bg-primary text-white rounded hover:opacity-70 hover:text-black flex flex-row editBtn mt-1"
            >
              <img src="../assets/images/edit.png" alt="" />
              <p class="text-lg ml-1">Edit</p>
            </button>
          </Router-link>

          <button
            class="bg-red-600 text-white rounded hover:opacity-70 hover:text-black flex flex-row deleteBtn"
            @click="deleteProduct(Products.id)"
          >
            <img
              class="rotate-45 delete"
              src="../assets/images/plus.png"
              alt=""
            />
            <p class="text-lg">Delete</p>
          </button>
        </div>
      </div>

      <div
        class="flex flex-row justify-between w-10/12 m-auto mb-6 md:m-auto md:justify-end"
      >
        <router-link :to="`/products/Restock/${Products.id}`">
          <button
            class="bg-primary text-white btn rounded-xl hover:opacity-70 hover:text-black"
          >
            <div class="">
              <img
                class="text-center w-1/5 m-auto block"
                src="../assets/images/arrowcircle.png"
                alt=""
              />
              <p class="text-lg">Restock Items</p>
            </div>
          </button>
        </router-link>
        <router-link :to="`/products/Sale/${Products.id}`">
          <button
            class="bg-primary text-white btn rounded-xl hover:opacity-70 hover:text-black md:ml-6"
          >
            <img
              class="text-center w-1/5 m-auto block"
              src="../assets/images/arrowup.png"
              alt=""
            />
            <p class="text-lg">Register Sale</p>
          </button>
        </router-link>
      </div>
    </div>

    <div class="bg-white lg:w-10/12 lg:m-auto pb-6 pt-6 rounded">
      <div
        class="w-11/12 m-auto border rounded border-primary md:flex md:flex-row"
      >
        <div
          class="bg-backgroundBlue w-11/12 md:w-5/12 m-auto border rounded border-primary pl-6 pr-6 pt-4 pb-4 mt-6 mb-4 md:mt-6 md:mb-6"
        >
          <h3 class="font-bold">Current Inventory:</h3>
          <p class="text-3xl font-semibold">
            {{ Products.UnitsInInventory }} Units
          </p>
        </div>
        <div
          class="bg-backgroundBlue w-11/12 md:w-5/12 m-auto border rounded border-primary pl-6 pr-6 pt-4 pb-4 mt-4 mb-6 md:mt-6 md:mb-6"
        >
          <h3 class="font-bold">Min Stock Level:</h3>
          <p class="text-3xl font-semibold">
            {{ Products.MinStockLevel }} Units
          </p>
        </div>
      </div>

      <div
        class="w-11/12 m-auto border rounded border-primary pl-6 pr-6 pt-4 pb-4 mt-10"
      >
        <div class="flex flex-row justify-between md:justify-start">
          <div class="md:mr-60">
            <h3 class="text-lg">Category</h3>
            <p
              v-for="ProductName in cat"
              :ProductName="ProductName"
              :key="ProductName.id"
            >
              {{ ProductName.CategoryName }}
            </p>
          </div>
          <div>
            <h3 class="text-lg">SKU:</h3>
            <p>{{ Products.SKU }}</p>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-lg">Price</h3>
          <p>${{ Products.Price }}</p>
        </div>
        <div class="md:">
          <h3 class="mt-4 text-lg">Description:</h3>
          <p>
            {{ Products.Description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 95vw;
}
.btn {
  height: 3.5em;
  width: 8em;
}
img {
  max-width: 300px;
}
.delete {
  width: 37.5%;
}
.editBtn {
  margin-bottom: 0.5em;
}
.editBtn,
.deleteBtn {
  width: 6em;
  padding: 0.3em 0.5em 0.3em 0.5em;
}

@media screen and (max-width: 400px) {
  .small {
    flex-direction: column;
  }
  .productImg {
    width: 90vw;
  }
  button p {
    font-size: 8px;
  }
}
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
    width: auto;
    min-width: 80vw;
  }
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      Products: [],
      categories: [],
      cat: [],
      cati: "",
    };
  },
  components: {
    RouterLink,
  },

  methods: {
    async getProduct() {
      const id = this.$route.params.id;

      const resp = await fetch("http://127.0.0.1:8000/api/products/" + id);

      const data = await resp.json();

      localStorage.removeItem("cat");
      localStorage.setItem("cat", data.categories_id);
  
      this.Products = data;
    },

    async deleteProduct(id) {
      //Frågar användaren om man verkligen vill radera produkten
      if (confirm("Do you really want to delete product?")) {
        const resp = await fetch("http://127.0.0.1:8000/api/products/" + id, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        });
        const data = await resp.json();
        //Skicka tillbaka till förgående sida
        this.$router.push("/Products");
      }
    },
    async getCat() {

      var id = localStorage.getItem("cat");
      const resp = await fetch(
        "http://127.0.0.1:8000/api/category/search/product/" + id
      );

      const data = await resp.json();
      this.cat = data;
    },
  },
  mounted() {
    this.getProduct();
    this.getCat();
  },
};
</script>
