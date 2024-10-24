<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import { useRoute, useRouter } from "vue-router";
import {$enum} from "@/componsables/enum";



const route = useRoute()
const router = useRouter()
/** ===== 移动端菜单-start ===== **/
const active = ref<number>(0)


function checkActive() {
  if (route.path.includes('/blog')) {
    active.value = 1
    return
  }
  active.value = $enum.useValueGetKey(route.path) ;
}

function handleChange(index: number) {
  router.push($enum.RouteEnum[index])
}

onMounted(() => {
  checkActive()
})


watch(() => route.path, () => {
  checkActive()
})
/** ===== 移动端菜单-end ===== **/
</script>

<template>
  <div class="w-full h-10 flex lg:hidden absolute bottom-0">
    <van-tabbar @change="handleChange" v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">博客</van-tabbar-item>
      <van-tabbar-item icon="photo-o">画廊</van-tabbar-item>
      <van-tabbar-item icon="friends-o">友链</van-tabbar-item>
      <van-tabbar-item icon="setting-o">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
