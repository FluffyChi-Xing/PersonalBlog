<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { useRoute } from "vue-router";
import {onMounted, ref} from 'vue';
import docModules from "@/componsables/doc";




const route = useRoute();
const routeParams = ref<string>('');
const text = ref('# Hello Editor');

async function checkContent() {
  if (route.params.id) {
    routeParams.value = String(route.params.id);
    // console.log(typeof docModules, docModules, routeParams.value)
    const result = await docModules[routeParams.value];
    if (result) {
      text.value = result;
    } else {
      text.value = '## 暂无数据'
    }
  } else {
    routeParams.value = '';
    text.value = '## 暂无数据'
  }
}

onMounted(async () => {
  await checkContent();
})
</script>

<template>
  <div class="w-full h-full flex flex-col max-w-[1280px]">
    <el-scrollbar class="w-full px-4">
      <!-- the header -->
      <PageHeader title="博客详情" />
      <!-- the content -->
      <div class="w-full h-auto flex show-card p-4 flex-col">
        <MdPreview
          v-model="text"
          class="w-full h-full"
        />
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
:deep(.el-scrollbar__view) {
  width: 100%;
  height: 100%;
}
</style>
