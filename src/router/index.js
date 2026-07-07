import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('../views/HomeView.vue'), meta: { title: '首页' } },
  { path: '/nutrients', name: 'nutrients', component: () => import('../views/NutrientsView.vue'), meta: { title: '营养素图鉴' } },
  { path: '/guide', name: 'guide', component: () => import('../views/GuideView.vue'), meta: { title: '膳食指南' } },
  { path: '/calculator', name: 'calculator', component: () => import('../views/CalculatorView.vue'), meta: { title: '热量计算器' } },
  { path: '/foods', name: 'foods', component: () => import('../views/FoodsView.vue'), meta: { title: '食物速查' } },
  { path: '/recipes', name: 'recipes', component: () => import('../views/RecipesView.vue'), meta: { title: '每日食谱' } },
  { path: '/topics', name: 'topics', component: () => import('../views/TopicsView.vue'), meta: { title: '知识专题' } },
  { path: '/quiz', name: 'quiz', component: () => import('../views/QuizView.vue'), meta: { title: '知识自测' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

export default router
