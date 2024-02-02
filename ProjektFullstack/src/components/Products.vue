<template>
  <div>
    <RouterLink
      :to="`/products/${id}`"
      class="bg-white rounded hover:opacity-70 card"
    >
      <img
        class="rounded-tl rounded-tr"
        v-bind:src="ProductName.Image"
        alt=""
      />
      <div class="w-11/12 m-auto p-2 text-sm md:text-base">
        <h3>{{ ProductName.ProductName }}</h3>
        <p class="text-darkgrey text-sm md:text-base">{{ ProductName.SKU }}</p>
        <div class="flex flex-row justify-between pt-4">
          <p class="text-sm md:text-base">
            {{ ProductName.UnitsInInventory }} Units
          </p>
          <p class="text-sm md:text-base">${{ ProductName.Price }}</p>
        </div>
      </div>
    </RouterLink>
    
  </div>
</template>
<style scoped>
img {
  width: 220px;
  height: 145px;
}
.card {
  max-width: 220px;
}
</style>
<script>
export default {
  props: {
    key: Number,
    ProductName: Object,
    UnitsInInventory: Object,
    Price: Object,
    SKU: Object,
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this.ProductName.id;
  },
};
</script>

