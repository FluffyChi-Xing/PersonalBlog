<script setup lang="ts">
import { ref } from 'vue';
import type { BlogTypes } from "@/componsables/apis/blogTypes";
import PageHeader from "@/components/PageHeader.vue";
import BlogItem from "@/views/blog/_components/BlogItem.vue";


/** ===== 文章列表初始化-start ===== **/
const blogList = ref<BlogTypes.BlogList[]>([
  {
    index: 'intro',
    desc: "这是一篇关于前端",
    date: "2024-10-24",
    title: "写在前端的大路上",
  },
  {
    index: 'babel',
    desc: '关于Babel的基本情况',
    date: '2024-10-26',
    title: '什么是Babel'
  }
]);
/** ===== 文章列表初始化-end ===== **/
</script>

<template>
  <div class="w-full h-auto max-w-[1280px] items-center flex flex-col rounded-[10px]">
    <el-scrollbar class="w-full">
      <!-- title -->
      <div class="w-full h-auto flex px-4">
        <PageHeader title="博客列表" />
      </div>
      <!-- blog item component -->
      <div
        v-if="blogList?.length"
        class="w-full h-full flex flex-col p-4"
      >
        <BlogItem
          v-for="(item, index) in blogList"
          :key="index"
          :desc="item.desc"
          :title="item.title"
          :date="item.date"
          :route="item.index"
        />
      </div>
      <div
        v-else
        class="w-full h-auto flex flex-col items-center justify-center show-card"
      >
        <el-empty
          description="暂无数据"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
