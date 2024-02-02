<template>
  <div class="container w-11/12 m-auto Ipad ">
    <div class="flex flex-row w-10/12 m-auto mt-8 lg:mt-10">
      <router-link class="block text-primary hover:text-black" to="/users"
        >Users /</router-link
      >
      <p class="ml-1 block">Add User</p>
    </div>
        <AddUser class="lg:mt-32 w-full m-auto" />

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;

}



</style>

<script>

import AddUser from "../components/AddUser.vue";

export default {

  components: {
    AddUser,
  },

};
</script>
