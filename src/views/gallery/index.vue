<script setup lang="ts">
import { ref } from 'vue';
import MobileMenu from "@/components/MobileMenu.vue";
import PageHeader from "@/components/PageHeader.vue";
import DisplaySection from "@/views/gallery/_components/DisplaySection.vue";


/** ===== 图库卡片初始化-start ===== **/
interface galleryListTypes {
  id: number;
  list: string[];
}
const galleryList = ref<galleryListTypes[]>([
  {
    id: 1,
    list: ['https://picsum.photos/200/300?1']
  },
  {
    id: 2,
    list: ['https://picsum.photos/200/300?2', 'https://picsum.photos/200/300?3', 'https://picsum.photos/200/300?4']
  }
])
/** ===== 图库卡片初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full flex flex-col bg py-20 relative">
    <el-scrollbar class="w-full px-4">
      <!-- page header -->
      <PageHeader title="画廊" />
      <div
        class="w-full h-full px-4"
        :class="galleryList?.length > 1 ? 'flex flex-col lg:grid lg:grid-cols-3 lg:gap-4' : ''"
      >
        <!-- img display section -->
        <DisplaySection
          v-for="(item, index) in galleryList"
          :key="index"
          :img-list="item.list"
        />
      </div>
    </el-scrollbar>
    <!-- mobile menu -->
    <MobileMenu />
  </div>
</template>

<style scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
  width: 100%;
}
</style>
