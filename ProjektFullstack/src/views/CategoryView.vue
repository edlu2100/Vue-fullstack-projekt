<template>
  <div class="w-11/12 m-auto Ipad container">
    <div class="mt-16 row justify-between">
      <h2 class="text-2xl">Categories</h2>
      <button
        class="bg-primary text-white block rounded hover:opacity-70 hover:text-black"
      >
        <router-link class="flex flex-row" to="/addCategory">
          <img class="plus" src="../assets/images/plus.png" alt="" />
          <p class="text-lg text ml-1">Add Category</p></router-link
        >
      </button>
    </div>

    <div class="gridProduct category mt-20">
      <Categories
        v-for="CategoryName in Categories"
        :CategoryName="CategoryName"
        :key="CategoryName.id"
      />
    </div>
  </div>
</template>

<style scoped>
.category {
  margin-inline: auto;
  display: grid;
  grid-template-columns: auto auto;
}
div {
  display: flex;
  flex-direction: column;
}
.row {
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
  width: 10em;
}
.plus {
  width: 30px;
}
.text {
  margin-top: 0.1em;
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
import Categories from "../components/Categories.vue";

export default {
  data() {
    return {
      Categories: [],
      User: [],
    };
  },
  components: {
    Categories,
  },
  methods: {
    async getCategory() {
      const resp = await fetch("http://127.0.0.1:8000/api/category");

      const data = await resp.json();

      this.Categories = data;
    },
    async getUser() {
      var id = localStorage.getItem("id");

      const resp = await fetch("http://127.0.0.1:8000/api/getUser/" + id);
      const data = await resp.json();

      this.User = data;
    },
  },
  mounted() {
    this.getCategory();
    this.getUser();
  },
};
</script>
