<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import ShowCard from "@/views/home/_components/ShowCard.vue";
import TheFooter from "@/components/TheFooter.vue";
import type {HomeTypes} from "@/componsables/apis/homeTypes";
import { useRouter } from "vue-router";
import {$api} from "@/componsables/api";


const router = useRouter()
const userAvatar = ref<string>('/static/images/avatar.jpg');
const gameImg = ref<string>('https://picsum.photos/200/300?random=1');
/** ===== 展示卡片初始化-start ===== **/
// 暂时卡片数据

const showCardData = ref<HomeTypes.homeCardTypes[]>([
  {
    id: 1,
    label: '📖',
    desc: 'IT 民工/PC Gamer/Furry/CIGer/P 社玩家/Javascript 爱好者',
    title: '我的博客',
    img: [
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20240119_124729.jpg',
    ],
    link: '/blog'
  },
  {
    id: 2,
    label: '🎨',
    desc: '一些图片, 记录日常',
    title: '我的画廊',
    img: [
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20240119_130709.jpg',
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20231113_170957_edit_1238125259337412.jpg',
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/IMG_20231105_181737_edit_754721217494368.jpg'
    ],
    link: '/gallery'
  },
  {
    id: 3,
    label: '📚',
    title: '我的简介',
    desc: '目前在校大学生，软件工程专业，IT 民工，常用技术栈Vue + Vite + TS + TW + Java等，喜欢看书',
    img: [
      'https://picsum.photos/200/300?5',
    ],
    link: '/'
  },
  {
    id: 4,
    label: '🎉',
    title: '我的游戏',
    desc: '星际公民/我的世界/死亡搁浅/黑悟空',
    link: '/',
    img: [
      gameImg.value,
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/Minecraft%202023_1_10%2012_53_22.png',
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/Death%20Stranding%202022_7_20%2010_02_47.png',
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/b1%20%20%202024_8_31%2014_52_18.png'
    ]
  },
  {
    id: 5,
    label: '🚀',
    title: '我的载具',
    desc: 'Purple Syulen',
    link: '/',
    img: [
      'https://nest-upload-oss.oss-cn-beijing.aliyuncs.com/images/Star%20Citizen%20%202024_10_14%2021_43_30.png'
    ]
  },
  {
    id: 6,
    label: '🥰',
    title: 'Contributions',
    desc: 'Github Contributions',
    link: '/about',
    img: ['https://green-wall.leoku.dev/api/og/share/FluffyChi-Xing'],
  }
])

function avatarErrorHandle() {
  userAvatar.value = 'https://picsum.photos/200/300?random=1'
}

function routerBlog() {
  router.push('/blog')
}

function routerGallery() {
  router.push('/gallery')
}

function routerAbout() {
  router.push('/about')
}

async function getData() {
  const result = await $api.getRandomImg();
  if (result.data) {
    gameImg.value = result.data[0]?.api_url;
    showCardData.value[3].img[0] = gameImg.value; // 更新 showCardData 中的图片
  }
}

onMounted(async () => {
  await getData();
})
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
              class="z-[99] select-none"
              :src="userAvatar"
              fit="cover"
              :size="200"
              @error="avatarErrorHandle"
            />
          </div>
          <!-- description -->
          <div class="w-full select-none h-1/2 flex flex-col lg:h-full">
            <div class="w-full words h-auto text-[3rem] lg:text-[4rem] flex whitespace-pre-line desc-name">
              炽煋
            </div>
            <div class="w-full words text-gray-200 text-[3rem] lg:text-[4rem] font-bold text-ellipsis h-auto flex whitespace-pre-line">
              FluffyChi_Xing
            </div>
            <div class="w-full words h-auto text-[2rem] lg:text-[2rem] text-gray-300 flex items-center">
              炽煋的个人博客
            </div>
            <div class="w-full h-auto flex items-center">
              <el-button @click="routerBlog" size="large" round class="primary-btn mr-2">我的博客</el-button>
              <el-button @click="routerGallery" size="large" round class="other-btn mr-2">我的画廊</el-button>
              <el-button @click="routerAbout" size="large" round class="other-btn mr-2">我的简介</el-button>
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
