<script setup lang="ts">
import { useRouter } from "vue-router";

const props = withDefaults(defineProps<{
  title?: string;
  desc?: string;
  img?: string[];
  link?: string;
  label?: string;
}>(), {
  title: '展示卡片',
  desc: '这是一个展示卡片这是一个展示卡片这是一个展示卡片这是一个展示卡片',
  label: '🚀',
  link: '/'
})

const router = useRouter()


function handleTouch() {
  if (props.link) {
    router.push(props.link)
  }
}
</script>

<template>
  <div
    @click="handleTouch"
    class="w-full h-full max-h-60 select-none flex show-card p-4"
  >
    <!-- desc part -->
    <div class="w-1/2 h-full flex flex-col px-4">
      <!-- label -->
      <div class="w-full words h-10 flex">
        <span class="w-10 h-full flex bg-[#E7E8EC80] text-[1.5rem] rounded-[5px] overflow-hidden items-center justify-center">
          {{ label }}
        </span>
      </div>
      <!-- title -->
      <div class="w-full words h-auto text-[1.0rem] max-w-[200px] font-bold flex whitespace-nowrap text-ellipsis overflow-hidden text-white">
        {{ title }}
      </div>
      <!-- link -->
      <div
        style="height: calc(100% - 88px)"
        class="w-full words flex text-ellipsis overflow-hidden text-gray-300"
      >
        {{ desc }}
      </div>
    </div>
    <!-- img part -->
    <div
      class="w-1/2 h-full"
      :class="Number(props.img?.length) > 1 ? 'grid grid-cols-2 gap-2 grid-rows-2' : 'flex'"
    >
      <img
        v-for="(item, index) in props.img"
        :key="index"
        :src="item"
        alt="图片"
        loading="lazy"
        class="w-full h-full flex object-cover rounded-[10px] overflow-hidden"
      />
    </div>
  </div>
</template>

<style scoped>
.show-card:hover {
  scale: 1.05;
  box-shadow: 0 4px 30px rgba(197, 195, 195, 0.41);
}
</style>
