<script setup lang="ts">
import { useRouter } from "vue-router";


const router = useRouter();
</script>

<template>
  <div class="w-full h-10 flex justify-between px-10 fixed z-[299] header bg-white box-border">
    <!-- title -->
    <div class="w-auto h-full flex items-center justify-center text-gray-200 font-bold">
      炽煋的个人博客
    </div>
    <!-- functional banner -->
    <div class="w-full max-w-[100px] justify-end h-full flex items-center">
      <!-- github link -->
      <div class="w-10 h-10 flex github cursor-pointer" />
    </div>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 1px solid rgba(234, 234, 234, 0.3);
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(15.5px);
  backdrop-filter: saturate(50%) blur(4px);
}

.github {
  background-image: url("src/assets/img/github.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
