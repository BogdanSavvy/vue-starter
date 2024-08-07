<script setup>
import SimpleCounter from '@/components/SimpleCounter.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
   <section class="h-screen flex flex-col items-center justify-center gap-y-10">
      <h1 class="text-[72px] font-bold text-green-500">Another View</h1>
      <SimpleCounter />
      <div>
         <p class="text-white text-2xl font-semibold">
            Doubled count: <span>{{ store.getters.getDoubleCount }}</span>
         </p>
      </div>
   </section>
</template>
