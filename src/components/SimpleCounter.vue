<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const counter = computed(() => {
   return store.state.counter
})

const handleIncrement = () => {
   store.commit('increment')
}

const handleDecrement = () => {
   store.commit('decrement')
}
</script>

<template>
   <div class="flex items-center gap-x-5">
      <button
         class="flex items-center justify-center leading-none w-16 h-16 border border-red-600 text-white bg-red-500 font-bold rounded-full"
         @click="handleDecrement"
      >
         -
      </button>
      <span class="txt-4xl font-bold text-white">
         {{ counter.count }}
      </span>
      <button
         class="flex items-center justify-center leading-none w-16 h-16 border border-blue-600 text-white bg-blue-500 font-bold rounded-full"
         @click="handleIncrement"
      >
         +
      </button>
   </div>
</template>
