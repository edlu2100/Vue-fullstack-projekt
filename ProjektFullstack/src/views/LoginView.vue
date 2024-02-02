<template>
  <div class="w-full max-w-xs loginform">
    <img
      class="hover:opacity-70 w-8/12 m-auto mb-14 place-content-center"
      src="../assets/images/logo.svg"
      alt=""
    />

    <form
      @submit.prevent="login()"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          id="email"
          type="email"
          v-model="email"
          required
          placeholder="test@gmail.com"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          id="password"
          type="password"
          v-model="password"
          required
          placeholder="*********"
        />
      </div>

      <input
        type="submit"
        value="Login"
        class="bg-primary rounded w-full py-2 px-3 text-white mb-3 leading-tigh hover:opacity-70"
      />
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy; Edwin Lundbäck. All rights reserved.
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.loginform {
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

</style>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (this.password.length > 4 && this.email.length > 8) {
        let loginBody = {
          email: this.email,
          password: this.password,
        };

        const resp = await fetch("http://127.0.0.1:8000/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(loginBody),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            console.log("du är inloggad");
            localStorage.setItem("token", data.token);
            localStorage.setItem("id", data.id);
            localStorage.setItem("email", this.email);
          })
          .catch((err) => console.log(err));

        this.email = "";
        this.password = "";

        this.$router.push("Home");
      }
    },
  },
};
</script>
