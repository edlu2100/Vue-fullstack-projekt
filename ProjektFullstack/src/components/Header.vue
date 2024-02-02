<template>
  <header>
    <nav class="bg-white fixed bottom-0 w-full mt-10">
      <ul
        class="mb-3 mt-3 flex flex-row w-10/12 md:w-7/12 m-auto justify-between"
      >
        <RouterLink to="/Home" active-class="active"
          ><li class="flex flex-col">
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/home.png"
                alt=""
              />
            </div>
            <div class="block">
              <p class=" text-sm">Dashboard</p>
            </div>
          </li></RouterLink
        >
        <RouterLink to="/Products" active-class="active"
          ><li class="flex flex-col">
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/products.png"
                alt=""
              />
            </div>
            <div class="block">
              <p class="text-sm">Products</p>
            </div>
          </li></RouterLink
        >
        <RouterLink to="/categories" active-class="active"
          ><li class="flex flex-col">
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/category.png"
                alt=""
              />
            </div>
            <div class="block">
              <p class="text-sm e">Category</p>
            </div>
          </li></RouterLink
        >
        <RouterLink to="/users" active-class="active"
          ><li class="flex flex-col">
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/users.png"
                alt=""
              />
            </div>
            <div class="block">
              <p class="text-sm">Users</p>
            </div>
          </li></RouterLink
        >
        <RouterLink to="/Profile" active-class="active"
          ><li class="flex flex-col">
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/profile.png"
                alt=""
              />
            </div>
            <div class="block">
              <p class="text-sm">Admin</p>
            </div>
          </li></RouterLink
          
        >
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.active {
  color: #4290A9;
}
nav{

}
</style>
<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
