<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import {ref, watch} from "vue";
import type {BlogTypes} from "@/componsables/apis/blogTypes";
import NestMenu from "@/components/NestMenu.vue";


const router = useRouter();
const route = useRoute();
/** ===== 导航菜单初始化-start ===== **/
const defaultMenu = ref<string>('1')
const github = ref<string>('/static/images/github.png');
const menuData = ref<BlogTypes.BlogMenu[]>([
  {
    index: '1',
    label: '首页',
    route: '/',
  },
  {
    index: '2',
    label: '友链',
    route: '/friends',
  },
  {
    index: '3',
    label: '关于',
    route: '/about',
  },
  {
    index: '4',
    label: '博客',
    route: '/blog',
  },
  {
    index: '5',
    label: '画廊',
    route: '/gallery',
  }
])
function checkPath() {
  switch (route.path) {
    case '/':
      defaultMenu.value = '1'
      break;
    case '/home':
      defaultMenu.value = '1'
      break;
    case '/friends':
      defaultMenu.value = '2'
      break;
    case '/about':
      defaultMenu.value = '3'
      break;
    case '/blog':
      defaultMenu.value = '4'
      break;
    case '/blog/:id':
      defaultMenu.value = '4'
      break;
    case '/gallery':
      defaultMenu.value = '5'
      break;
  }
}

function routerGithub() {
  window.open('https://github.com/FluffyChi-Xing/PersonalBlog')
}

watch(() => route.path, () => {
  checkPath();
})
/** ===== 导航菜单初始化-end ===== **/

/** ===== 夜间模式-start ===== **/
const darkMode = ref<boolean>(false)
/** ===== 夜间模式-end ===== **/
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
        text-color="#000"
        background-color="transparent"
        style="width: 100%;border-bottom: none !important;"
        :default-active="defaultMenu"
        mode="horizontal"
      >
        <NestMenu :data="menuData" />
      </el-menu>
    </div>
    <!-- functional banner -->
    <div class="w-auto ml-auto max-w-[100px] justify-end h-full flex items-center">
      <!-- dark mode -->
      <el-tooltip
        effect="dark"
        content="夜间模式"
        placement="bottom"
      >
        <el-switch v-model="darkMode" size="small" />
      </el-tooltip>
      <el-divider direction="vertical" />
      <!-- github link -->
      <div @click="routerGithub" class="w-10 h-10 words flex cursor-pointer">
        <img :src="github" alt="github" loading="lazy" class="w-10 h-10 github flex object-contain"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.github {
  filter: invert(1);
}

.header {
  border-bottom: 1px solid rgba(234, 234, 234, 0.3);
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(15.5px);
  backdrop-filter: saturate(50%) blur(4px);
  mix-blend-mode: difference;
}

:deep(.el-menu) {
  filter: invert(1);
}
</style>
