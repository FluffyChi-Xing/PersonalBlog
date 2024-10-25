<script setup lang="ts">
import MobileMenu from "@/components/MobileMenu.vue";
import PageHeader from "@/components/PageHeader.vue";
import { ref } from "vue";
import {FriendTypes} from "@/componsables/apis/friendTypes";
import FriendCard from "@/views/friend/_components/FriendCard.vue";
import {FriendsList} from "@/componsables/apis/staticCode";
import TheFooter from "@/components/TheFooter.vue";


/** ===== 友链卡片初始化-start ===== **/
const friendsList = ref<FriendTypes.friendCardTypes[]>(FriendsList);
/** ===== 友链卡片初始化-end ===== **/
</script>

<template>
  <div class="w-full h-full max-w-[1280px] py-20 flex mx-auto flex-col">
    <el-scrollbar class="px-4 w-full">
      <div class="w-full h-full flex flex-col">
        <!-- page header -->
        <div class="w-full h-auto flex px-4">
          <PageHeader title="友链" />
        </div>
        <!-- friends cards list -->
        <div
          v-if="friendsList?.length"
          class="w-full h-full flex flex-col px-4"
        >
          <FriendCard
            v-for="item in friendsList"
            :key="item.index"
            :index="item.index"
            :link="item.link"
            :name="item.name"
            :avatar="item.avatar"
          />
        </div>
        <div
          v-else
          class="w-full h-auto flex justify-center show-card"
        >
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
  width: 100%;
}
</style>
