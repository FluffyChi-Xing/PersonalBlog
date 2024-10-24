<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
const props = withDefaults(defineProps<{
  imgList?: string[];
}>() , {

})


const imageList = ref<string[]>(null);

function validateList() {
  if (props.imgList?.length) {
    imageList.value = props.imgList;
  } else {
    imageList.value = [];
  }
}


onMounted(() => {
  validateList();
})


watch(() => props.imgList, () => {
  validateList();
})
</script>

<template>
  <div
    class="w-full h-full min-h-56 show-card p-2 my-4 overflow-hidden"
    :class="imageList?.length > 1 ? 'grid-cols-2 grid gap-2' : 'flex'"
  >
    <!-- first -->
    <div class="w-full h-56 flex">
      <img
        :src="imgList[0]"
        alt="图片"
        class="w-full h-full flex object-cover rounded-[10px] overflow-hidden"
        loading="lazy"
      />
    </div>
    <div
      v-if="imageList?.length > 1"
      class="w-full h-full flex"
    >
      <div class="w-full h-full grid grid-rows-2 gap-2">
        <div
          v-for="(img, index) in imageList.slice(1)"
          :key="index"
          class="w-full h-full flex row-span-1"
        >
          <img
            :src="img"
            alt="图片"
            class="w-full h-[108px] flex object-cover rounded-[10px] overflow-hidden"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show-card:hover {
  scale: 1.05;
  box-shadow: 0 4px 30px rgba(197, 195, 195, 0.41);
}
</style>
