<template>
  <header>
    <nav
      class="w-3/12 bg-white min-h-full max-w-xs place-content-center pl-4 pr-4"
    >
      <ul class="mt-12 fixed">
        <RouterLink active-class="active" to="/home"
          ><li class="flex flex-row mb-14 place-content-center">
            <img
              class="hover:opacity-70"
              src="../assets/images/logo.svg"
              alt="logo"
            /></li
        ></RouterLink>
        <RouterLink active-class="active" to="/home"
          ><li
            class="flex flex-row mb-14 place-content-center hover:text-primary"
          >
            <div class="block">
              <img class="w-6 m-auto" src="../assets/images/home.png" alt="" />
            </div>
            <div class="block w-24 ml-2">
              <p class="text-base ml-2">Dashboard</p>
            </div>
          </li></RouterLink
        >
        <RouterLink active-class="active" to="/Products"
          ><li
            class="flex flex-row mb-14 place-content-center hover:text-primary"
          >
            <div class="block">
              <img
                class="w-5 text-left m-auto mt-0.5 ml-1"
                src="../assets/images/products.png"
                alt=""
              />
            </div>
            <div class="block w-24 ml-2">
              <p class="text-base ml-2">Products</p>
            </div>
          </li></RouterLink
        >
        <RouterLink active-class="active" to="/categories"
          ><li
            class="flex flex-row mb-14 place-content-center hover:text-primary"
          >
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/category.png"
                alt=""
              />
            </div>
            <div class="block w-24 ml-2">
              <p class="text-base ml-2">Category</p>
            </div>
          </li></RouterLink
        >
        <RouterLink active-class="active" to="/users"
          ><li
            class="flex flex-row mb-14 place-content-center hover:text-primary"
          >
            <div class="block">
              <img
                class="w-6 text-center m-auto"
                src="../assets/images/users.png"
                alt=""
              />
            </div>
            <div class="block w-24 ml-2">
              <p class="text-base ml-2">Users</p>
            </div>
          </li></RouterLink
        >
        <li
          class=""
        >
          <div class="dropdown">
            <button class="dropbtn flex flex-row place-content-center hover:text-primary marginTop">
              <div class="block ">
                <img
                  class="w-10 text-center m-auto mt-1"
                  src="../assets/images/profile.png"
                  alt=""
                />
              </div>
              <div class="block w-24 ">
                <p class="text-base text-left ml-2">{{ User.name }}</p>
              </div>
            </button>
            <div class="dropdown-content">
              <router-link to="/Profile">Profile</router-link>
              <router-link @click="logout()" to="#">Logga ut</router-link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      User: [],
    };
  },
  components: {
    RouterLink,
  },
  methods: {
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
<style scoped>
.marginTop {
  bottom: 0;
}
nav {
  min-width: 200px;
}
ul {
  min-height: 100vh;
}
.active {
  color: #4290a9;
}
.dropbtn {
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
  color: #4290a9;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
