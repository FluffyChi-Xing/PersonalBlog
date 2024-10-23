import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const scrollY = ref<boolean>(false)

  return { scrollY }
})
