<template>
  <div class="mt-14 mb-10 Ipad w-11/12 m-auto ">
    <div class="container w-11/12 m-auto Ipad">
      <div class="row w-10/12 m-auto mt-8 lg:mt-10">
        <router-link class="block text-primary hover:text-black" to="/products/" 
          >Products /</router-link
        >
            <router-link class="block text-primary hover:text-black ml-1" :to="`/products/${Products.id}`"
          >{{Products.ProductName}} /</router-link
        >
        <p class="ml-1 block">Register Sale</p>
      </div>
    </div>
    <form
      id="form"
      @submit.prevent="RestockProduct()"
      enctype="multipart/form-data"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="UnitsInInventory"
        >
          Number of restock items:
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

      <input
        type="submit"
        value="Restock"
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
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
div {
  display: flex;
  flex-direction: column;

}
.row{
    display: flex;
    flex-direction: row;
}


@media screen and (min-width: 768px) {
  .Ipad{
    min-width: 70vw;
  }
}

</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Products: {
        ProductName: this.ProductName,
        SKU: "",
        Description: this.Description,
        categories_id_value: this.categories_id,
        UnitsInInventory: this.UnitsInInventory,
        MinStockLevel: this.MinStockLevel,
        Price: this.Price,
        file: this.file,
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

      this.Products = await resp.json();
    },

    async RestockProduct() {
      var Units = parseInt(this.UnitsInInventory);
      var Restock = Units + this.Products.UnitsInInventory;

      let productbody = {
        ProductName: this.Products.ProductName,
        SKU: this.Products.SKU,
        Description: this.Products.Description,
        categories_id: this.Products.categories_id,
        UnitsInInventory: Restock,
        MinStockLevel: this.Products.MinStockLevel,
        Price: this.Products.Price,
      };
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
      const resp = await fetch("http://127.0.0.1:8000/api/category/");

      const data = await resp.json();

      this.categories = data;
    },
  },
  mounted() {
    this.getProduct();
    this.getCategory();
  },
};
</script>
