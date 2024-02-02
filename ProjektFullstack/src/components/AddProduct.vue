<template>
  <div class="mt-14 mb-10">
    <form
      id="form"
      @submit.prevent="addProduct()"
      enctype="multipart/form-data"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
          v-model="ProductName"
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
          v-model="SKU"
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
          v-model="Description"
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
          v-model="UnitsInInventory"
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
          v-model="MinStockLevel"
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
          v-model="Price"
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

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
          Product Image:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          type="file"
          id="file"
          ref="file"
          @change="uploadFile"
          required
        />
      </div>

      <input
        type="submit"
        value="Add Product"
        class="bg-primary rounded w-full py-2 px-3 text-white mb-3 leading-tigh hover:opacity-70"
      />
    </form>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ProductName: "",
      SKU: "",
      Description: "",
      categories_id_value: "",
      UnitsInInventory: "",
      MinStockLevel: "",
      Price: "",
      file: "",
      categories: [],
    };
  },
  methods: {
    //ladda upp bilden
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },

    async addProduct() {
      //instansiera ny formdata
      const formData = new FormData();

      //tar vädet från select (categorien) och sparar i variabel
      var categoryid = this.selected.id;

      //lägger till allt i formdata
      formData.append("ProductName", this.ProductName);
      formData.append("SKU", this.SKU);
      formData.append("Description", this.Description);
      formData.append("categories_id", categoryid);
      formData.append("UnitsInInventory", this.UnitsInInventory);
      formData.append("MinStockLevel", this.MinStockLevel);
      formData.append("Price", this.Price);
      formData.append("Image", this.file, this.file.name);

      //Skicka formdatan med axios till databasen
      axios
        .post("http://127.0.0.1:8000/api/products", formData, {})
        .then((res) => {
          console.log(res);
        });
      //Skicka tillbaka till förgående sida
      this.$router.push("Products");
    },

    //ta in categorierna från databasen
    async getCategory() {
      const resp = await fetch("http://127.0.0.1:8000/api/category/");

      const data = await resp.json();

      this.categories = data;
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>
