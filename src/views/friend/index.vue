<script setup lang="ts">
import MobileMenu from "@/components/MobileMenu.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div class="w-full h-full max-w-[1280px] flex mx-auto flex-col">
    <el-scrollbar class="w-full px-8 py-20">
      <div class="w-full h-full flex flex-col">
        <!-- page header -->
        <PageHeader title="友链" />
        <div class="w-full h-auto flex justify-center show-card">
          <el-empty
            description="暂无数据"
          />
        </div>
      </div>
    </el-scrollbar>
    <!-- mobile menu -->
    <MobileMenu />
  </div>
</template>

<style scoped>
:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
