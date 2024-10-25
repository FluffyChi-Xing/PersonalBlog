<script setup lang="ts">
import { ref } from 'vue'
import {$message} from "@/componsables/utils/element-plus";
const props = withDefaults(defineProps<{
  avatar?: string;
  name?: string;
  link?: string;
  index: number;
  shape?: 'circle' | 'square';
}>(), {
  avatar: '/static/images/error-img.png',
  name: '张三的博客',
  index: -1,
  shape: 'circle'
})

const userAvatar = ref<string>(props.avatar);


function handleImgError() {
  userAvatar.value = '/static/images/error-img.png'
}

function routeFriends() {
  if (props.link) {
    window.open(props.link, '_blank');
  } else {
    $message({
      type: "warning",
      message: "暂无链接",
      offset: 80
    })
  }
}
</script>

<template>
  <!-- 左右布局 -->
  <div
    @click="routeFriends"
    class="w-full select-none lg:w-full h-full max-h-60 my-4 flex-col flex p-4 show-card"
  >
    <!-- user avatar & name area -->
    <div class="w-full h-[100px] flex">
      <!-- user avatar -->
      <div class="w-[100px] h-full flex">
        <el-avatar
          :src="userAvatar"
          :size="100"
          :shape="props.shape"
          @error="handleImgError"
        />
      </div>
      <!-- name area -->
      <div
        style="calc(100% - 100px)"
        class="h-full flex items-center words ml-4 truncate text-[2rem] text-white"
      >
        {{ name }}
      </div>
    </div>
    <!-- link area -->
    <div
      style="height: calc(100% - 100px);"
      class="w-full flex items-center words truncate text-[1rem] text-white"
    >
      {{ link ? link : '暂无链接' }}
    </div>
  </div>
</template>

<style scoped>
.show-card:hover {
  scale: 1.01;
  box-shadow: 0 4px 30px rgba(197, 195, 195, 0.41);
}
</style>
