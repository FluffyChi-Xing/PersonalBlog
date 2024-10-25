<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import docModules from "@/componsables/doc";
import {onMounted} from "vue";


function initBlogScan() {
  const res = docModules['someKey']
}

onMounted(() => {
  initBlogScan()
})
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
