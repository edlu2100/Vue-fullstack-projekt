<template>
  <div class="mt-14 mb-10">
    <form
      id="form"
      @submit.prevent="addUser()"
      enctype="multipart/form-data"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="name"
          placeholder="Name"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="email"
          type="email"
          v-model="email"
          placeholder="test@gmail.com"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
          Phonenumber:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="phone"
          type="integer"
          v-model="phone"
          placeholder="072-7316972"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="file">
          Profile-image:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          type="file"
          id="file"
          ref="file"
          @change="uploadFile"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password:
        </label>
        <input
          class="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          id="password"
          type="password"
          v-model="password"
          placeholder="*********"
        />
      </div>

      <input
        type="submit"
        value="Add User"
        class="bg-primary rounded w-full py-2 px-3 text-white mb-3 leading-tigh hover:opacity-70"
      />
    </form>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      file: "",
    };
  },
  methods: {
    //ladda upp bilden
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },
    async addUser() {
      if (
        this.name.length > 2 &&
        this.password.length > 4 &&
        this.email.length > 8
      ) {
        //gör ny instans av formdata
        const formData = new FormData();

        //lägg till värderna i formdata
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("phone", this.phone);
        formData.append("image", this.file, this.file.name);

        //Skicka formdatan med axios till backend
        axios
          .post("http://127.0.0.1:8000/api/register", formData, {})
          .then((res) => {
            console.log(res);
          });
        //Skicka tillbaka till förgående sida
        this.$router.push("Products");
      }
    },
  },
};
</script>
