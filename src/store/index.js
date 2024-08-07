import { createStore } from 'vuex'
import counter from '@/store/modules/counter'
import about from '@/store/modules/about'

const store = createStore({
   modules: {
      counter,
      about,
   },
})

export default store
