<script setup lang="ts">
import MobileMenu from "@/components/MobileMenu.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col relative items-center px-4 py-20 bg">
    <RouterView />
    <!-- mobile menu -->
    <MobileMenu />
  </div>
</template>

<style scoped>

</style>
