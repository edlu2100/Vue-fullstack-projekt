<template>
  <div class="w-full m-auto Ipad container">
    <div class="lg:ml-10 row mt-8 lg:mt-10">
      <router-link class="block text-primary hover:text-black" to="/home"
        >Dashboard /</router-link
      >
      <p class="ml-1 block">{{ User.name }}</p>
    </div>
    <div class="bg-white profilecard block m-auto mt-20">
      <img
        v-bind:src="User.image"
        class="img-responsive text-center block"
        alt="Image"
      />
      <h2 class="text-center">{{ User.name }}</h2>
      <a
        class="text-center block size hover:underline"
        href="mailto:name.email"
        >{{ User.email }}</a
      >
      <h2 class="text-center">0{{ User.phone }}</h2>
    </div>
    <button
      class="bg-primary text-white btn rounded-xl hover:opacity-70 hover:text-black mt-16 m-auto"
      @click="logout()"
    >
      Logga Ut
    </button>
  </div>
</template>
<style scoped>
.container {
  min-width: 80vw;
}
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
div {
  display: flex;
  flex-direction: column;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-inline: auto;
}
.profilecard {
  width: 80vw;
  max-width: 450px;
  border-radius: 10px;
  padding: 1em;
  border: solid 1px #4290a9;
}
.row {
  display: flex;
  flex-direction: row;
}
button {
  width: 10em;
  padding: 0.5em 0 0.5em 0;
}
</style>
<script>
import Users from "../components/Users.vue";

export default {
  data() {
    return {
      Products: [],
      User: [],
    };
  },

  methods: {
    async getProduct() {
      const resp = await fetch("http://127.0.0.1:8000/api/products");

      const data = await resp.json();

      this.Products = data;
      console.log(this.Products.UnitsInInventory);
    },
    async getUser() {
      var id = localStorage.getItem("id");

      const resp = await fetch("http://127.0.0.1:8000/api/getUser/" + id);
      const data = await resp.json();

      this.User = data;
    },
    async logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
