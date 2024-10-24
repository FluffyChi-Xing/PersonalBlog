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
    list: ['https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20240119_130709.jpg']
  },
  {
    id: 2,
    list: [
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20231113_170957_edit_1238125259337412.jpg',
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20231105_181737_edit_754721217494368.jpg',
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20231016_154014.jpg'
    ]
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
