<script setup lang="ts">
import {Menu} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const props = withDefaults(defineProps<{
  data?: any[];
}>(), {

})

const router = useRouter()


function switchRoute(index: string) {
  router.push(index)
}
</script>

<template>
  <div
    v-for="(item, index) in props.data"
    :key="index"
    class="w-auto h-full flex"
  >
    <el-sub-menu
      v-if="item?.children"
      :index="item?.index"
    >
      <template #title>
        <el-icon><component :is="item?.icon ? item?.icon : Menu" /></el-icon>
        <span>{{ item.label }}</span>
      </template>
      <NestMenu :data="item?.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item?.index"
      @click="switchRoute(item?.route)"
    >
      <span>{{ item?.label }}</span>
    </el-menu-item>
  </div>
</template>

<style scoped>

</style>
