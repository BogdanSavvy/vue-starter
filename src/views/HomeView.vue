<script setup>
import { ref } from 'vue'

import Popup from '@/components/AboutPopup.vue'

const isOpened = ref(false)

const togglePopup = () => {
   isOpened.value = !isOpened.value
}

</script>

<template>
   <section class="h-screen flex flex-col gap-y-16 items-center justify-center">
      <h1 class="text-[72px] text-green-500 font-bold">
         Welcome to Vue starter template
      </h1>
      <button
         @click="togglePopup"
         class="flex items-center w-[300px] justify-center rounded-xl hover:bg-green-300 transition-colors text-white text-xl font-semibold backdrop-blur-sm px-8 py-4"
      >
         About
      </button>
      <Popup :isOpened="isOpened" :togglePopup="togglePopup" />
   </section>
</template>
