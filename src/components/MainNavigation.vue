<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const routes = ref([
   {
      name: 'Home',
      path: '/',
      isActive: route.path === '/',
   },
   {
      name: 'Another',
      path: '/another',
      isActive: route.path === '/another',
   },
])

watch(
   () => route.path,
   newPath => {
      routes.value.forEach(route => {
         route.isActive = route.path === newPath
      })
   }
)
</script>

<template>
   <nav>
      <ul class="flex flex-row gap-x-3">
         <li v-for="(route, index) in routes" :key="index">
            <RouterLink
               :class="route.isActive ? 'text-green-500' : 'text-white'"
               class="text-2xl font-bold"
               :to="route.path"
               >{{ route.name }}</RouterLink
            >
         </li>
      </ul>
   </nav>
</template>
