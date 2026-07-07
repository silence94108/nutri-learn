<script setup>
import { ref, computed } from 'vue'
import { recipes, recipeTypes } from '../data/recipes.js'
import AppIcon from '../components/AppIcon.vue'

const activeType = ref('全部')
const types = ['全部', ...recipeTypes.map(t => t.name)]

const typeMap = Object.fromEntries(recipeTypes.map(t => [t.id, t]))

const filtered = computed(() => {
  if (activeType.value === '全部') return recipes
  return recipes.filter(r => typeMap[r.type].name === activeType.value)
})

const activeIntro = computed(() => {
  if (activeType.value === '全部') return ''
  return recipeTypes.find(t => t.name === activeType.value)?.intro || ''
})
</script>

<template>
  <div class="page">
    <div class="wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>每日食谱</span>
        <h1 class="page-title">每日健康食谱</h1>
        <p class="page-subtitle">四种目标、四种吃法。每份都是完整一天的三餐安排，附全天热量、宏量与背后的营养学原理。</p>
      </div>

      <!-- 类型筛选 -->
      <div class="filter-bar">
        <button v-for="t in types" :key="t" class="filter-chip" :class="{ active: activeType === t }" @click="activeType = t">{{ t }}</button>
      </div>
      <p v-if="activeIntro" class="group-intro">{{ activeIntro }}</p>

      <!-- 食谱卡 -->
      <div class="recipe-list">
        <div class="recipe card" v-for="r in filtered" :key="r.id" :style="{ '--ac': typeMap[r.type].color }">
          <div class="r-head">
            <span class="r-ic"><AppIcon :name="typeMap[r.type].icon" :size="24" /></span>
            <div class="r-title">
              <h2>{{ r.name }}</h2>
              <div class="r-badges">
                <span class="type-chip">{{ typeMap[r.type].name }}</span>
                <span v-if="r.disclaimer" class="warn-chip">传统食疗视角 · 不宣称疗效</span>
              </div>
            </div>
            <div class="r-energy">
              <span class="ev num">{{ r.energy }}</span>
              <span class="el">kcal / 全天</span>
            </div>
          </div>

          <!-- 宏量 -->
          <div class="macro-row">
            <span class="macro-item"><i style="background:#4cc38a"></i>碳水 <b class="num">{{ r.macros.carb }}g</b></span>
            <span class="macro-item"><i style="background:#ff8a5b"></i>蛋白 <b class="num">{{ r.macros.protein }}g</b></span>
            <span class="macro-item"><i style="background:#ffc24b"></i>脂肪 <b class="num">{{ r.macros.fat }}g</b></span>
          </div>

          <!-- 三餐 -->
          <div class="meals">
            <div class="meal" v-for="m in r.meals" :key="m.label">
              <div class="meal-head"><span class="meal-label">{{ m.label }}</span><span class="meal-kcal num">≈{{ m.kcal }} kcal</span></div>
              <ul><li v-for="(it, i) in m.items" :key="i">{{ it }}</li></ul>
            </div>
          </div>

          <div class="info-box principle">
            <h4><AppIcon name="book" :size="15" /> 为什么这么搭</h4>
            <p>{{ r.principle }}</p>
          </div>
          <div class="info-box tip">
            <h4>团团小贴士</h4>
            <p>{{ r.tips }}</p>
          </div>
        </div>
      </div>

      <div class="disclaimer">
        热量与宏量为按常见食物成分近似估算的参考值，随食材分量与烹饪方式波动。食谱仅供学习参考，不作为个体化营养处方或医疗依据；特殊人群（孕产妇、慢病患者等）请遵医嘱。
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-bar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px}
.filter-chip{padding:9px 18px;border-radius:var(--r-full);font-size:14px;font-weight:500;background:var(--card);color:var(--gray);box-shadow:var(--sh-sm);transition:.2s}
.filter-chip.active{background:var(--green);color:#fff;box-shadow:var(--sh-green)}
.group-intro{font-size:14px;color:var(--gray);background:var(--green-4);border-left:3px solid var(--green);border-radius:var(--r-md);padding:12px 16px;margin-bottom:22px;line-height:1.7}

.recipe-list{display:flex;flex-direction:column;gap:22px}
.recipe{padding:28px;position:relative;overflow:hidden}
.recipe::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--ac)}

.r-head{display:flex;align-items:center;gap:14px;margin-bottom:18px;flex-wrap:wrap}
.r-ic{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;color:#fff;background:var(--ac);flex:none}
.r-title{flex:1;min-width:200px}
.r-title h2{font-size:22px;font-weight:800;margin-bottom:6px}
.r-badges{display:flex;gap:8px;flex-wrap:wrap}
.type-chip{font-size:12px;font-weight:600;color:#fff;background:var(--ac);padding:3px 12px;border-radius:var(--r-full)}
.warn-chip{font-size:12px;font-weight:600;color:#96566a;background:#fdeef2;padding:3px 12px;border-radius:var(--r-full)}
.r-energy{text-align:right}
.r-energy .ev{font-size:28px;font-weight:800;color:var(--ac);line-height:1}
.r-energy .el{display:block;font-size:12px;color:var(--faint);margin-top:3px}

.macro-row{display:flex;gap:18px;flex-wrap:wrap;background:var(--bg);border-radius:var(--r-md);padding:12px 16px;margin-bottom:18px}
.macro-item{display:inline-flex;align-items:center;gap:7px;font-size:13px;color:var(--gray)}
.macro-item i{width:10px;height:10px;border-radius:3px}
.macro-item b{color:var(--ink);font-weight:700}

.meals{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:18px}
.meal{background:var(--bg);border-radius:var(--r-md);padding:16px}
.meal-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.meal-label{font-size:14px;font-weight:700;color:var(--ac)}
.meal-kcal{font-size:12px;color:var(--faint)}
.meal ul{list-style:none}
.meal li{font-size:13px;color:var(--gray);line-height:1.6;padding-left:16px;position:relative;margin-bottom:5px}
.meal li::before{content:"";position:absolute;left:2px;top:8px;width:5px;height:5px;border-radius:50%;background:var(--ac)}

.info-box{padding:16px;border-radius:var(--r-md);margin-bottom:12px}
.info-box h4{font-size:14px;margin-bottom:7px;display:flex;align-items:center;gap:6px}
.info-box p{font-size:14px;line-height:1.8}
.info-box.principle{background:var(--green-4)}
.info-box.principle h4{color:var(--green-2)}
.info-box.principle p{color:#3a6b52}
.info-box.tip{background:#fff7ec}
.info-box.tip h4{color:#b0761a}
.info-box.tip p{color:#8a6430}

@media(max-width:820px){
  .meals{grid-template-columns:1fr}
  .r-energy{width:100%;text-align:left}
}
</style>
