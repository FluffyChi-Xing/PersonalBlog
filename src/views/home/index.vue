<script setup lang="ts">
import { ref } from 'vue';
import ShowCard from "@/views/home/_components/ShowCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import type {HomeTypes} from "@/componsables/apis/homeTypes";

const userAvatar = ref<string>('src/assets/img/avatar.jpg');

/** ===== 展示卡片初始化-start ===== **/
// 暂时卡片数据

const showCardData = ref<HomeTypes.homeCardTypes[]>([
  {
    id: 1,
    label: '🚀',
    desc: '我的博客',
    title: 'FluffyChi_Xing',
    img: [
      'https://picsum.photos/200/300?1',
      'https://picsum.photos/200/300?2',
      'https://picsum.photos/200/300?3'
    ],
    link: '/'
  },
  {
    id: 2,
    label: '🎨',
    desc: '我的画廊',
    title: '这是测试标题',
    img: [
      'https://picsum.photos/200/300?4',
    ],
    link: '/'
  },
  {
    id: 3,
    label: '📚',
    desc: '我的简介',
    title: '这是测试标题uuuuuuuuuuuuuu',
    img: [
      'https://picsum.photos/200/300?5',
    ],
    link: '/'
  }
])

function avatarErrorHandle() {
  userAvatar.value = 'https://picsum.photos/200/300?random=1'
}
/** ===== 展示卡片初始化-end ===== **/
</script>

<template>
  <el-scrollbar max-height="1000px">
    <div class="w-full h-full flex flex-col items-center">
      <!-- the body -->
      <div class="w-full h-full max-w-[1280px] pt-16 flex flex-col">
        <!-- description part -->
        <div class="w-full h-[600px] block p-4 lg:flex lg:h-[350px]">
          <!-- user avatar -->
          <div class="w-full h-1/2 flex items-center relative justify-center lg:h-full">
            <div class="w-[200px] h-[200px] absolute flex avatar-container" />
            <el-avatar
              class="z-[99]"
              :src="userAvatar"
              fit="cover"
              :size="200"
              @error="avatarErrorHandle"
            />
          </div>
          <!-- description -->
          <div class="w-full h-1/2 flex flex-col lg:h-full">
            <div class="w-full h-auto text-[3rem] lg:text-[4rem] flex whitespace-pre-line desc-name">
              炽煋
            </div>
            <div class="w-full text-gray-200 text-[3rem] lg:text-[4rem] font-bold text-ellipsis h-auto flex whitespace-pre-line">
              FluffyChi_Xing
            </div>
            <div class="w-full h-auto text-[2rem] lg:text-[2rem] text-gray-300 flex items-center">
              炽煋的个人博客
            </div>
            <div class="w-full h-auto flex items-center">
              <el-button size="large" round class="primary-btn mr-2">我的博客</el-button>
              <el-button size="large" round class="other-btn mr-2">我的画廊</el-button>
              <el-button size="large" round class="other-btn mr-2">我的简介</el-button>
            </div>
          </div>
        </div>
        <!-- functional cards -->
        <div class="w-full h-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ShowCard
            v-for="(item, index) in showCardData"
            :key="index"
            :img="item.img"
            :title="item.title"
            :label="item.label"
            :desc="item.desc"
            :link="item.link"
          />
        </div>
      </div>
      <!-- the footer -->
      <TheFooter />
    </div>
  </el-scrollbar>
</template>

<style scoped>

.desc-name {
  background: -webkit-linear-gradient(120deg, theme('colors.darkTheme') -80%, theme('colors.theme'));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
}

.primary-btn {
  background: -webkit-linear-gradient(120deg, theme('colors.darkTheme') -80%, theme('colors.theme'));
  color: white !important;
  border: none !important;
  outline: none !important;
}

.other-btn {
  background: theme('colors.lightGray') !important;
  color: black !important;
  border: none !important;
  outline: none !important;
}

.avatar-container {
  background: linear-gradient(-45deg, theme('colors.theme') 30%, theme('colors.darkTheme'));
  filter: blur(50px);
}
</style>
