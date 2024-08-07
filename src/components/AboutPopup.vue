<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import close from '@/assets/close.svg'

const props = defineProps(['isOpened', 'togglePopup'])

const store = useStore()

const listItems = computed(() => {
   return store.state.about.listItems
})
</script>

<template>
   <div
      :class="props.isOpened ? 'visible opacity-100 ' : 'invisible opacity-0'"
      class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 transition-opacity flex items-center justify-center"
   >
      <div
         class="relative w-full max-w-[1000px] h-auto p-16 bg-white rounded-3xl flex flex-col gap-y-4"
      >
         <p>
            A starter template for developing projects with Vue, Tailwind, Vuex, and Vite
            provides a foundational structure and configuration for quickly starting new
            web applications.
         </p>
         <p class="heading">This template includes:</p>
         <ul class="flex flex-col gap-y-3">
            <li v-for="(item, index) in listItems" :key="index" class="list-item">
               {{ item.text }}
            </li>
         </ul>
         <p>
            This template is designed to simplify the setup and launch process for
            projects while providing the flexibility and scalability needed for further
            development. You can learn more on
            <a class="text-green-500" href="">GitHub</a>.
         </p>
         <p>Happy coding :)</p>
         <button
            @click="togglePopup"
            class="absolute top-3 right-3 w-10 h-10 p-2 items-center justify-center rounded-full transition-colors group-[close] hover:bg-red-500"
         >
            <img aria-hidden :src="close" alt="close" />
         </button>
      </div>
   </div>
</template>
