<script setup lang="ts">
import MobileMenu from "@/components/MobileMenu.vue";
import UserCard from "@/views/about/_components/UserCard.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="w-full h-full max-w-[1280px] mx-auto flex flex-col">
    <el-scrollbar class="w-full px-8 py-20">
      <div class="w-full h-full flex-col lg:grid lg:grid-cols-3 lg:gap-4">
        <!-- user card -->
        <UserCard />
        <!-- description card -->
        <div class="w-full h-full max-h-60 justify-center show-card items-center flex lg:col-span-2">
          <el-empty
            description="施工中"
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
