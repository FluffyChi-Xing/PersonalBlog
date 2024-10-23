<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="w-screen h-screen relative bg flex flex-col">
    <!-- the header -->
    <TheHeader />
    <div class="w-full h-full flex flex-col">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
