<template>
  <div class="mt-14 mb-10 container">
    <div class="flex flex-row w-10/12 m-auto mt-8 lg:mt-10">
      <router-link class="block text-primary hover:text-black" to="/categories"
        >Category /</router-link
      >
      <p class="ml-1 block">Add Category</p>
    </div>
    <form
      id="form"
      @submit.prevent="AddCategory()"
      enctype="multipart/form-data"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-40"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="CategoryName"
        >
          Category Name:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="CategoryName"
          type="string"
          v-model="CategoryName"
          placeholder="Name of Category"
          required
        />
      </div>

      <input
        type="submit"
        value="Add Category"
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
</style>

<script>
import axios from "axios";

export default {
  data() {},
  methods: {
    async AddCategory() {
      let categorybody = {
        CategoryName: this.CategoryName,
      };

      const resp = await fetch("http://127.0.0.1:8000/api/category", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(categorybody),
      });
      this.$router.push("categories");
      const data = await resp.json();
    },
  },
};
</script>
