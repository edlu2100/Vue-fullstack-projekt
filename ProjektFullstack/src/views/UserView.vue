<template>
  <div class="w-11/12 m-auto Ipad container">
    <div class="mt-16 row justify-between">
      <h2 class="text-2xl">Users</h2>
      <button
        class="bg-primary text-white block rounded hover:opacity-70 hover:text-black"
      >
        <router-link class="flex flex-row" to="/AddUser">
          <img class="plus" src="../assets/images/plus.png" alt="" />
          <p class="text-lg text ml-1">Add User</p></router-link
        >
      </button>
    </div>
    <div class="users">
      <Users v-for="name in Users" :name="name" :key="name.id" />
    </div>
  </div>
</template>
<style scoped>
.users {
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
  width: 8em;
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
  .users {
    grid-template-columns: auto auto auto auto;
    gap: 2em;
  }
}
@media screen and (min-width: 1024px) {
  .users {
    grid-template-columns: auto auto auto auto auto;
    gap: 2em;
  }
}
</style>
<script>
import Users from "../components/Users.vue";
import AddUser from "../components/AddUser.vue";

export default {
  data() {
    return {
      Users: [],
    };
  },
  components: {
    Users,
    AddUser,
  },
  methods: {
    async getUser() {
      const resp = await fetch("http://127.0.0.1:8000/api/getUser");

      const data = await resp.json();

      this.Users = data;
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style scoped>
@media screen and (min-width: 1024px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
