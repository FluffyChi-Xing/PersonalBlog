<script setup lang="ts">

</script>

<template>
  <div class="w-full h-auto min-h-20 flex flex-col justify-center items-center mt-auto">
    <div class="w-auto h-auto whitespace-nowrap overflow-hidden text-ellipsis text-[10px] text-gray-200">
      FluffyChi_Xing 版权所有 © 2024
    </div>
    <div class="w-auto h-auto whitespace-nowrap overflow-hidden text-ellipsis text-[10px] text-gray-200">
      由 Vue 3.5 + Vite 4.0 + TailWindCSS 3.0 驱动
    </div>
    <slot name="more" />
  </div>
</template>

<style scoped>

</style>
