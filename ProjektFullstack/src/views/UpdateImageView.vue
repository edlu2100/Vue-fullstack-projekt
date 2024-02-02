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
        <p class="ml-1 block">Update Image</p>
      </div>
    </div>
    <form
      id="form"
      @submit.prevent="updateImage()"
      enctype="multipart/form-data"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 form"
    >
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
        value="Update Image"
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
  left: 53%;
  margin-right: -40%;
  transform: translate(-50%, -50%);
}
div {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
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
    };
  },
  methods: {
    //ladda upp bilden
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },

    async updateImage() {
      //instansiera ny formdata
      const formData = new FormData();

      formData.append("Image", this.file, this.file.name);
      const id = this.$route.params.id;
      //Skicka formdatan med axios till databasen
      axios
        .post("http://127.0.0.1:8000/api/updateImage/" + id, formData, {})
        .then((res) => {
          console.log(res);
        });
      //Skicka tillbaka till förgående sida
      this.$router.push("/products/" + id);
    },
        async getProduct() {
      const id = this.$route.params.id;

      const resp = await fetch("http://127.0.0.1:8000/api/products/" + id);
      const data = await resp.json();

      this.pro = data;
    },
  },
  mounted() {

     this.getProduct();
  },
};
</script>
