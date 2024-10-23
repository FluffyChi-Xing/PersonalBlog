<script setup lang="ts">
import {$message} from "@/componsables/utils/element-plus";

withDefaults(defineProps<{
  title?: string;
  date?: string;
  desc?: string;
  route?: number;
}>(), {
  title: '测试标题',
  date: '2021-09-01',
  desc: '这是一段测试描述',
  route: -1
})

function handleRoute() {
  $message({
    type: "warning",
    message: "暂未开放",
    offset: 80
  })
}
</script>

<template>
  <div
    @click="handleRoute"
    class="w-full h-full max-h-52 flex flex-col show-card p-4 mb-4"
  >
    <!-- title & date -->
    <div class="w-full h-auto flex items-center justify-between">
      <span class="w-1/2 text-[1.5rem] h-auto flex font-bold text-white">{{ title }}</span>
      <span class="w-1/2 text-[1rem] h-auto flex text-gray-200">{{ date }}</span>
    </div>
    <div class="w-full h-auto flex whitespace-pre-line text-ellipsis overflow-hidden text-[1rem] text-gray-300">
      {{ desc }}
    </div>
  </div>
</template>

<style scoped>
.show-card:hover {
  scale: 1.05;
  box-shadow: 0 4px 30px rgba(197, 195, 195, 0.41);
}
</style>
