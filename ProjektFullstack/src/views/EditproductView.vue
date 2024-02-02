<template>
  <div class="mt-14 mb-10 Ipad w-11/12 m-auto">
    <div class="container w-11/12 m-auto Ipad">
      <div class="row w-10/12 m-auto mt-8 lg:mt-10">
        <router-link class="block text-primary hover:text-black" to="/products/"
          >Products /</router-link
        >
        <router-link
          class="block text-primary hover:text-black ml-1"
          :to="`/products/${pro.id}`"
          >{{ pro.ProductName }} /</router-link
        >
        <p class="ml-1 block">Edit</p>
      </div>
    </div>
    <router-link :to="`/updateImage/${pro.id}`" class="update mt-6">
      <button class="bg-primary text-white rounded hover:opacity-70 hover:text-black flex flex-row editBtn">
              <p class="text-lg p-2">Update Image</p>
      </button>
    </router-link>
            
    <form
      id="form"
      @submit.prevent="editProduct()"
      enctype="multipart/form-data"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form mt-6"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="ProductName"
        >
          Productname:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ProductName"
          type="string"
          v-model="pro.ProductName"
          placeholder="ProductName"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="SKU">
          SKU:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="SKU"
          type="string"
          v-model="pro.SKU"
          placeholder="ERO921"
          required
          minlength="6"
          maxlength="6"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="Description"
        >
          Description:
        </label>
        <textarea
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="Description"
          rows="6"
          v-model="pro.Description"
          placeholder="Description of the product"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="UnitsInInventory"
        >
          Units In Inventory:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="UnitsInInventory"
          type="integer"
          v-model="pro.UnitsInInventory"
          placeholder="1000"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="MinStockLevel"
        >
          Min Stock Level:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="MinStockLevel"
          type="integer"
          v-model="pro.MinStockLevel"
          placeholder="500"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="Price">
          Price:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="Price"
          type="integer"
          v-model="pro.Price"
          placeholder="15"
          required
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="categories_id"
        >
          Category:
        </label>
        <select
          id="categories_id"
          name="categories_id"
          v-model="selected"
          required
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
        >
          <option
            :value="category"
            v-for="category in categories"
            :key="category.id"
          >
            {{ category.CategoryName }}
          </option>
        </select>
      </div>

      <input
        type="submit"
        value="Edit Product"
        class="bg-primary rounded w-full py-2 px-3 text-white mb-3 leading-tigh hover:opacity-70"
      />
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.form {
  width: 40vw;
  margin-inline: auto;
}
div {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
}
.update{
  width: 10em;

  margin-inline:auto;
}
@media screen and (min-width: 768px) {
  .Ipad {
    min-width: 70vw;
  }
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pro: {
        ProductName: "",
        SKU: "",
        Description: "",
        categories_id_value: "",
        UnitsInInventory: "",
        MinStockLevel: "",
        Price: "",
        file: "",
      },
      categories: [],
    };
  },
  methods: {
    //ladda upp bilden
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },
    async getProduct() {
      const id = this.$route.params.id;

      const resp = await fetch("http://127.0.0.1:8000/api/products/" + id);
      const data = await resp.json();

      this.pro = data;
    },

    async editProduct() {
      var categoryid = this.selected.id;
      let productbody = {
        ProductName: this.pro.ProductName,
        SKU: this.pro.SKU,
        Description: this.pro.Description,
        categories_id: categoryid,
        UnitsInInventory: this.pro.UnitsInInventory,
        MinStockLevel: this.pro.MinStockLevel,
        Price: this.pro.Price,
      };
      console.log(productbody);
      var editId = this.$route.params.id;
      const resp = await fetch("http://127.0.0.1:8000/api/products/" + editId, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(productbody),
      });
      this.$router.push("/products/" + editId);
      const data = await resp.json();
    },

    //ta in categorierna från databasen
    async getCategory() {
      const resp = await fetch("http://127.0.0.1:8000/api/category");

      this.categories = await resp.json();
    },
  },
  mounted() {
    this.getProduct();
    this.getCategory();
  },
};
</script>
