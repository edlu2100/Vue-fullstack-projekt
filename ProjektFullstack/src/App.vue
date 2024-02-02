<template>
  <div>
    <Header class="lg:hidden" v-if="route.path != '/'" />
    <div class="flex flex-row w-full">
      <HeaderDesktop class="hidden lg:flex" v-if="route.path != '/'" />
      <section class="section Ipad mb-32 m-auto">
        <RouterView />
      </section>
    </div>
    

    <Footer />
  </div>
</template>

<style scoped>
.Ipad{
  margin-inline: auto;
}

@media screen and (min-width: 1024px) {
    div{
    display: flex;
    flex-direction: row;
}
section{
    min-height: 100vh;
}
}




</style>
<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import HeaderDesktop from "./components/HeaderDesktop.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
