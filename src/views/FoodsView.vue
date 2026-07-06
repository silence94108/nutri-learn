<script setup>
import { ref, computed } from 'vue'
import { foods, foodCategories } from '../data/foods.js'
import AppIcon from '../components/AppIcon.vue'

const search = ref('')
const activeCategory = ref('全部')
const sortBy = ref('default')

const categories = ['全部', ...foodCategories]

const filtered = computed(() => {
  let list = foods
  if (activeCategory.value !== '全部') list = list.filter(f => f.category === activeCategory.value)
  const kw = search.value.trim()
  if (kw) list = list.filter(f => f.name.includes(kw) || f.tag.includes(kw))
  if (sortBy.value === 'energy') list = [...list].sort((a, b) => b.energy - a.energy)
  else if (sortBy.value === 'protein') list = [...list].sort((a, b) => b.protein - a.protein)
  return list
})

function reset() {
  search.value = ''
  activeCategory.value = '全部'
}
</script>

<template>
  <div class="page">
    <div class="wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>食物速查</span>
        <h1 class="page-title">食物营养速查</h1>
        <p class="page-subtitle">常见食物每 100g 的热量与营养成分，随手查。学会看这些数字，日常吃饭心里有谱。</p>
      </div>

      <!-- 搜索栏 -->
      <div class="search-box">
        <AppIcon name="search" :size="20" />
        <input v-model="search" placeholder="搜索食物名称或标签，如「鸡蛋」「高蛋白」" />
        <button v-if="search" class="clear" @click="search = ''"><AppIcon name="close" :size="16" /></button>
      </div>

      <!-- 筛选 + 排序 -->
      <div class="controls">
        <div class="filter-bar">
          <button v-for="cat in categories" :key="cat" class="filter-chip" :class="{ active: activeCategory === cat }" @click="activeCategory = cat">{{ cat }}</button>
        </div>
        <div class="sort-bar">
          <span class="sort-label">排序</span>
          <select v-model="sortBy">
            <option value="default">默认</option>
            <option value="energy">热量高→低</option>
            <option value="protein">蛋白高→低</option>
          </select>
        </div>
      </div>

      <!-- 结果表格 -->
      <div class="food-table card" v-if="filtered.length">
        <div class="thead">
          <span class="col-name">食物</span><span>热量</span><span>蛋白质</span><span>脂肪</span><span>碳水</span><span class="col-fiber">纤维</span>
        </div>
        <div class="trow" v-for="f in filtered" :key="f.id">
          <span class="col-name">
            <span class="fname">{{ f.name }}</span>
            <span class="ftag" :class="{ warn: f.tag.includes('⚠️') }">{{ f.tag.replace('⚠️', '') }}</span>
          </span>
          <span class="num energy">{{ f.energy }}</span>
          <span class="num">{{ f.protein }}</span>
          <span class="num">{{ f.fat }}</span>
          <span class="num">{{ f.carb }}</span>
          <span class="num col-fiber">{{ f.fiber }}</span>
        </div>
      </div>

      <!-- 空态 -->
      <div v-else class="empty card">
        <span class="empty-ic"><AppIcon name="search" :size="32" /></span>
        <p>没找到「{{ search }}」相关的食物</p>
        <button class="btn btn-primary" @click="reset">重置筛选</button>
      </div>

      <p class="table-note">单位：每 100g 可食部；热量 kcal，其余 g。</p>
      <div class="disclaimer">
        数据为常见参考值的近似整理，主要参考《中国食物成分表》思路。不同品种、产地、烹饪方式会有差异，仅供学习，不作为精确营养计算或医疗依据。
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-box{display:flex;align-items:center;gap:11px;background:var(--card);border:1.5px solid transparent;border-radius:var(--r-lg);padding:14px 18px;margin-bottom:18px;box-shadow:var(--sh-sm);color:var(--faint);transition:.2s}
.search-box:focus-within{border-color:var(--green);color:var(--green)}
.search-box input{flex:1;border:none;outline:none;font-size:15px;color:var(--ink);background:transparent}
.clear{width:24px;height:24px;border-radius:50%;background:var(--bg);color:var(--gray);display:grid;place-items:center}

.controls{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px;flex-wrap:wrap}
.filter-bar{display:flex;gap:8px;flex-wrap:wrap}
.filter-chip{padding:8px 16px;border-radius:var(--r-full);font-size:13px;font-weight:500;background:var(--card);color:var(--gray);box-shadow:var(--sh-sm);transition:.2s}
.filter-chip.active{background:var(--green);color:#fff;box-shadow:var(--sh-green)}
.sort-bar{display:flex;align-items:center;gap:8px}
.sort-label{font-size:13px;color:var(--gray)}
.sort-bar select{padding:8px 14px;border-radius:var(--r-md);border:1.5px solid var(--line);font-size:13px;color:var(--ink);background:var(--card);cursor:pointer}

.food-table{overflow:hidden}
.thead,.trow{display:grid;grid-template-columns:2.2fr 1fr 1fr 1fr 1fr 1fr;align-items:center;padding:14px 20px}
.thead{background:var(--green-4);font-size:13px;font-weight:700;color:var(--green-2)}
.thead span:not(.col-name),.trow .num{text-align:right}
.trow{border-top:1px solid var(--line);font-size:14px;transition:background .15s}
.trow:hover{background:var(--green-4)}
.col-name{display:flex;flex-direction:column;gap:4px}
.fname{font-weight:600}
.ftag{font-size:11px;color:var(--green-2);background:var(--green-3);padding:2px 10px;border-radius:var(--r-full);width:fit-content}
.ftag.warn{color:#c94a6b;background:#fdeef2}
.num{color:var(--gray)}
.num.energy{color:var(--c-fat);font-weight:700}

.empty{padding:52px;text-align:center}
.empty-ic{display:inline-grid;place-items:center;width:64px;height:64px;border-radius:50%;background:var(--bg);color:var(--faint);margin-bottom:14px}
.empty p{color:var(--gray);margin-bottom:18px}

.table-note{font-size:12px;color:var(--faint);margin-top:12px;text-align:right}

@media(max-width:820px){
  .thead,.trow{grid-template-columns:1.6fr .8fr .8fr .8fr .8fr;padding:12px 14px;font-size:13px}
  .col-fiber{display:none}
}
</style>
