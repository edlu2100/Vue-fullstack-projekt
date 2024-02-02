<template>
  <div>
    <div class="card text-sm md:text-base mt-10">
      <img
        v-bind:src="name.image"
        class="img-responsive text-center block"
        alt="Image"
      />
      <h2 class="text-center">{{ name.name }}</h2>

      <a class="text-center block size hover:underline" href="mailto:name.email">{{ name.email }}</a>
      <h3 class="text-center ">0{{ name.phone }}</h3>
    </div>
  </div>
</template>
<style scoped>
img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin-inline: auto;
}
.card {
  max-width: 45vw;
}
.size{
  font-size: 8px;
}
</style>
<script>
export default {
  props: {
    name: Object,
    email: Object,
    image: Object,
  },
};
</script>
<style scoped></style>
