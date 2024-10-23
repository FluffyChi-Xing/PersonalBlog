<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
}>(), {
  title: '我是标题'
})
</script>

<template>
  <div class="w-full h-full max-h-16 flex items-center my-4 show-card p-4 rounded-[10px] text-white text-[1.5rem] truncate">
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>

</style>
