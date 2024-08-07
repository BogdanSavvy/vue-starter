<script setup>
import Navigation from '@/components/MainNavigation.vue'
import logo from '@/assets/logo.png'
import { RouterLink } from 'vue-router'
</script>

<template>
   <header class="h-[100px] w-full fixed top-0 left-0">
      <div
         class="h-full max-w-[1230px] px-[15px] mx-auto flex items-center justify-between"
      >
         <div class="w-auto h-[60px]">
            <RouterLink to="/">
               <img class="object-cover w-full h-full" :src="logo" alt="logo" />
            </RouterLink>
         </div>
         <Navigation />
      </div>
   </header>
</template>
