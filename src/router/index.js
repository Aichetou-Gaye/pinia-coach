import { createMemoryHistory, createRouter } from 'vue-router'

import PageFatima from '@/pages/PageFatima.vue'
import PageAssa from '@/pages/PageAssa.vue'

const routes = [
  { path: '/', component: PageFatima },
  { path: '/assa', component: PageAssa },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;