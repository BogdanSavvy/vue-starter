<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/MainHeader.vue'
</script>

<template>
   <Header />
   <main class="bg-gradient-to-tl from-blue-100 via-violet-900 to-current">
      <RouterView />
   </main>
</template>
