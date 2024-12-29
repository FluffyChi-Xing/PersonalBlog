<script setup lang="ts">
import MobileMenu from "@/components/MobileMenu.vue";
import UserCard from "@/views/about/_components/UserCard.vue";
import { ref } from "vue";



const myContributions = ref<string>('https://green-wall.leoku.dev/api/og/share/FluffyChi-Xing');
const myAccount = ref<string>('https://github.com/FluffyChi-Xing');


function viewMyAccount() {
  window.open(myAccount.value);
}
</script>

<template>
  <div class="w-full h-full max-w-[1280px] mx-auto flex flex-col">
    <el-scrollbar class="w-full px-8 py-20">
      <div class="w-full h-auto flex-col lg:grid lg:grid-cols-3 lg:gap-4">
        <!-- user card -->
        <UserCard />
        <!-- description card -->
        <div class="w-full h-full max-h-60 justify-center show-card items-center flex lg:col-span-2">
          <el-empty
            description="施工中"
          />
        </div>
      </div>
      <!-- github contributions graph -->
      <div
        @click="viewMyAccount"
        class="w-full h-auto flex flex-col mt-4 p-4 show-card"
      >
        <el-scrollbar class="w-full h-full">
          <el-image
            :src="myContributions"
            :fit="'contain'"
            loading="lazy"
          />
        </el-scrollbar>
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
