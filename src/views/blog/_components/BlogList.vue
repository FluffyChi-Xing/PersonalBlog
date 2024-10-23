<script setup lang="ts">
import { ref } from 'vue';
import type { BlogTypes } from "@/componsables/apis/blogTypes";
import PageHeader from "@/components/PageHeader.vue";
import BlogItem from "@/views/blog/_components/BlogItem.vue";


/** ===== 文章列表初始化-start ===== **/
const blogList = ref<BlogTypes.BlogList[]>([]);
/** ===== 文章列表初始化-end ===== **/
</script>

<template>
  <div class="w-full h-auto max-w-[1280px] items-center flex flex-col rounded-[10px]">
    <el-scrollbar class="w-full">
      <!-- title -->
      <PageHeader title="博客列表" />
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
  width: 100%;
  height: 100%;
}
</style>
