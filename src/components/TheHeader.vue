<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import {ref, watch} from "vue";
import type {BlogTypes} from "@/componsables/apis/blogTypes";
import NestMenu from "@/components/NestMenu.vue";


const router = useRouter();
const route = useRoute();



/** ===== 导航菜单初始化-start ===== **/
const menuData = ref<BlogTypes.BlogMenu[]>([
  {
    index: '1',
    label: '首页',
    route: '/',
  },
  {
    index: '2',
    label: '友链',
    route: '/link',
  },
  {
    index: '3',
    label: '关于',
    route: '/about',
  }
])
function checkPath() {
  if (route.path !== '/') {
    return true;
  }
}

watch(() => route.path, () => {
  checkPath();
})
/** ===== 导航菜单初始化-end ===== **/
</script>

<template>
  <div class="w-full h-14 flex px-10 fixed z-[299] header bg-white box-border">
    <!-- title -->
    <div class="w-[120px] h-full flex items-center justify-center text-gray-200 font-bold">
      炽煋的个人博客
    </div>
    <!-- menu -->
    <div
      style="width: calc(100% - 220px);"
      class="h-full hidden lg:flex"
    >
      <el-menu
        v-if="checkPath()"
        text-color="#000"
        background-color="transparent"
        active-text-color="#fff"
        style="width: 100%;border-bottom: none !important;"
        mode="horizontal"
      >
        <NestMenu :data="menuData" />
      </el-menu>
    </div>
    <!-- functional banner -->
    <div class="w-full ml-auto max-w-[100px] justify-end h-full flex items-center">
      <!-- github link -->
      <div class="w-10 h-10 flex github cursor-pointer" />
    </div>
  </div>
</template>

<style scoped>

.header {
  border-bottom: 1px solid rgba(234, 234, 234, 0.3);
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(15.5px);
  backdrop-filter: saturate(50%) blur(4px);
  mix-blend-mode: difference;
}

.github {
  background-image: url("src/assets/img/github.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
