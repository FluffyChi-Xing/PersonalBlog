<script setup lang="ts">
import {$message} from "@/componsables/utils/element-plus";
import { useRouter } from "vue-router";

const props = withDefaults(defineProps<{
  title?: string;
  date?: string;
  desc?: string;
  route?: number | string;
}>(), {
  title: '测试标题',
  date: '2021-09-01',
  desc: '这是一段测试描述',
  route: -1
})


const router = useRouter()
function handleRoute() {
  router.push(`/blog/${props.route}`)
}
</script>

<template>
  <div
    @click="handleRoute"
    class="w-full h-auto min-h-20 flex flex-col show-card p-4 mb-4"
  >
    <!-- title & date -->
    <div class="w-full h-auto flex items-center justify-between">
      <span class="w-1/2 text-[1.5rem] h-auto flex font-bold text-white">{{ title }}</span>
      <span class="w-1/2 text-[1rem] justify-end h-auto flex text-gray-200">{{ date }}</span>
    </div>
    <div class="w-full h-auto flex whitespace-pre-line text-ellipsis overflow-hidden text-[1rem] text-gray-300">
      {{ desc }}
    </div>
  </div>
</template>

<style scoped>
.show-card:hover {
  box-shadow: 0 4px 30px rgba(197, 195, 195, 0.41);
}
</style>
