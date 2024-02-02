<template>
  <div class="">
    <RouterLink :to="`/category/${id}`">

        <p>{{ CategoryName.CategoryName }}</p>

    </RouterLink>
  </div>
</template>
<style scoped>
div {
  background: white;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid #4290A9;
}
</style>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    key: Number,
    CategoryName: Object,
  },
  data() {
    return {
      id: null,
    };
  },
  mounted() {
    this.id = this.CategoryName.id;
  },
};
</script>
