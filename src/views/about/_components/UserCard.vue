<script setup lang="ts">
import { ref } from 'vue';
import docModules from "@/componsables/doc";
import {getListLength} from "@/componsables/utils/utils";
import {FriendsList} from "@/componsables/apis/staticCode";


const avatar = ref<string>('/static/images/avatar.jpg');
interface baseInfoTypes {
  label: string;
  value: string | number;
}
/** ===== 用户基本信息-start ===== **/
const baseInfo = ref<baseInfoTypes[]>([
  {
    label: '仓库数',
    value: 28,
  },
  {
    label: '友链数',
    value: getListLength(FriendsList),
  },
  {
    label: '文章数',
    value: Object.keys(docModules)?.length,
  }
])
/** ===== 用户基本信息-end ===== **/
</script>

<template>
  <div class="w-full h-auto max-h-32 flex mb-4 p-4 show-card">
    <!-- avatar -->
    <el-avatar :src="avatar" size="large" />
    <!-- base info -->
    <div
      style="width: calc(100% - 56px);"
      class="h-auto flex flex-col px-4"
    >
      <div class="text-[1rem] w-full h-auto flex items-center text-white">
        炽煋 - FluffyChi_Xing
      </div>
      <div class="w-full mt-auto h-auto grid grid-cols-3 gap-4">
        <div
          v-for="(item, index) in baseInfo"
          :key="index"
          class="w-full h-auto flex flex-col"
        >
          <div class="w-full h-auto justify-center flex items-center text-white">
            {{ item.label }}
          </div>
          <div class="w-full h-auto justify-center flex items-center text-white">
            {{ item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
