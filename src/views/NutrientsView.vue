<script setup>
import { ref, computed } from 'vue'
import { nutrients, nutrientCategories } from '../data/nutrients.js'
import AppIcon from '../components/AppIcon.vue'

const activeCategory = ref('全部')
const selected = ref(null)

const categories = ['全部', ...nutrientCategories]

const filtered = computed(() => {
  if (activeCategory.value === '全部') return nutrients
  return nutrients.filter(n => n.category === activeCategory.value)
})

function openDetail(n) {
  selected.value = n
  document.body.style.overflow = 'hidden'
}
function closeDetail() {
  selected.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="page">
    <div class="wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>营养素图鉴</span>
        <h1 class="page-title">六大营养素图鉴</h1>
        <p class="page-subtitle">整个营养学的地基。点开每张卡片，看它管什么、从哪来、有啥误区。</p>
      </div>

      <!-- 分类筛选 -->
      <div class="filter-bar">
        <button v-for="cat in categories" :key="cat" class="filter-chip" :class="{ active: activeCategory === cat }" @click="activeCategory = cat">{{ cat }}</button>
      </div>

      <!-- 卡片网格 -->
      <div class="nut-grid">
        <div class="nut" v-for="n in filtered" :key="n.id" :style="{ '--ac': n.color }" @click="openDetail(n)">
          <div class="nut-top">
            <span class="nut-ic"><AppIcon :name="n.icon" :size="26" /></span>
            <div><h3>{{ n.name }}</h3><span class="en">{{ n.en }}</span></div>
          </div>
          <p class="summary">{{ n.summary }}</p>
          <div class="nut-foot">
            <span class="energy num">{{ n.energy }}</span>
            <span class="view">查看详情 <AppIcon name="arrow" :size="14" /></span>
          </div>
        </div>
      </div>

      <!-- 详情弹窗 -->
      <transition name="modal">
        <div v-if="selected" class="modal-mask" @click.self="closeDetail">
          <div class="modal" :style="{ '--ac': selected.color }">
            <button class="modal-close" @click="closeDetail"><AppIcon name="close" :size="18" /></button>
            <div class="modal-header">
              <span class="modal-ic"><AppIcon :name="selected.icon" :size="30" /></span>
              <div>
                <h2>{{ selected.name }}</h2>
                <div class="modal-badges"><span class="chip">{{ selected.category }}</span><span class="energy-badge num">{{ selected.energy }}</span></div>
              </div>
            </div>

            <p class="modal-summary">{{ selected.summary }}</p>

            <div class="modal-section">
              <h4><AppIcon name="target" :size="17" /> 主要功能</h4>
              <ul><li v-for="(fn, i) in selected.functions" :key="i">{{ fn }}</li></ul>
            </div>

            <div class="modal-section">
              <h4><AppIcon name="bowl" :size="17" /> 常见食物来源</h4>
              <div class="source-tags"><span v-for="(s, i) in selected.sources" :key="i" class="source-tag">{{ s }}</span></div>
            </div>

            <div class="modal-section">
              <h4><AppIcon name="scale" :size="17" /> 参考摄入量</h4>
              <p>{{ selected.reference }}</p>
            </div>

            <div class="info-box tip">
              <h4>团团小贴士</h4>
              <p>{{ selected.tips }}</p>
            </div>

            <div class="info-box myth">
              <h4>破除误区</h4>
              <p>{{ selected.myth }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.filter-bar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:26px}
.filter-chip{padding:9px 18px;border-radius:var(--r-full);font-size:14px;font-weight:500;background:var(--card);color:var(--gray);box-shadow:var(--sh-sm);transition:.2s}
.filter-chip.active{background:var(--green);color:#fff;box-shadow:var(--sh-green)}

.nut-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.nut{background:var(--card);border-radius:var(--r-lg);padding:24px;box-shadow:var(--sh-sm);cursor:pointer;transition:.2s;position:relative;overflow:hidden}
.nut:hover{transform:translateY(-4px);box-shadow:var(--sh-md)}
.nut::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--ac)}
.nut-top{display:flex;align-items:center;gap:13px;margin-bottom:14px}
.nut-ic{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;color:#fff;background:var(--ac);flex:none}
.nut-top h3{font-size:20px;font-weight:700}
.nut-top .en{font-size:12px;color:var(--faint)}
.summary{font-size:14px;color:var(--gray);line-height:1.7;margin-bottom:16px;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.nut-foot{display:flex;justify-content:space-between;align-items:center}
.nut-foot .energy{font-weight:700;font-size:15px;color:var(--ac)}
.nut-foot .view{font-size:13px;font-weight:600;color:var(--gray);display:inline-flex;align-items:center;gap:4px}

/* Modal */
.modal-mask{position:fixed;inset:0;background:rgba(26,43,35,.5);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:100;padding:20px}
.modal{background:var(--card);border-radius:var(--r-xl);max-width:560px;width:100%;max-height:88vh;overflow-y:auto;padding:30px;position:relative;box-shadow:var(--sh-lg)}
.modal-close{position:absolute;top:18px;right:18px;width:34px;height:34px;border-radius:50%;background:var(--bg);color:var(--gray);display:grid;place-items:center;transition:.2s}
.modal-close:hover{background:var(--green-3);color:var(--green-2)}
.modal-header{display:flex;gap:16px;align-items:center;margin-bottom:20px}
.modal-ic{width:64px;height:64px;border-radius:18px;display:grid;place-items:center;color:#fff;background:var(--ac);flex:none}
.modal-header h2{font-size:24px;font-weight:800}
.modal-badges{display:flex;gap:8px;margin-top:8px}
.energy-badge{font-size:12px;font-weight:600;color:#fff;background:var(--ac);padding:4px 12px;border-radius:var(--r-full)}
.modal-summary{font-size:15px;background:var(--green-4);padding:16px;border-radius:var(--r-md);margin-bottom:20px;line-height:1.7}
.modal-section{margin-bottom:20px}
.modal-section h4{font-size:15px;margin-bottom:10px;display:flex;align-items:center;gap:7px;color:var(--ink)}
.modal-section h4 :deep(.ico){color:var(--ac)}
.modal-section ul{padding-left:4px;list-style:none}
.modal-section li{font-size:14px;color:var(--gray);margin-bottom:7px;padding-left:20px;position:relative;line-height:1.6}
.modal-section li::before{content:"";position:absolute;left:4px;top:9px;width:6px;height:6px;border-radius:50%;background:var(--ac)}
.modal-section p{font-size:14px;color:var(--gray);line-height:1.7}
.source-tags{display:flex;flex-wrap:wrap;gap:8px}
.source-tag{font-size:13px;background:var(--bg);color:var(--gray);padding:6px 14px;border-radius:var(--r-full)}
.info-box{padding:16px;border-radius:var(--r-md);margin-bottom:14px}
.info-box h4{font-size:14px;margin-bottom:7px}
.info-box p{font-size:14px;line-height:1.7}
.info-box.tip{background:#f0f9f4}
.info-box.tip h4{color:var(--green-2)}
.info-box.tip p{color:#3a6b52}
.info-box.myth{background:#fdeef2}
.info-box.myth h4{color:#c94a6b}
.info-box.myth p{color:#96566a}

.modal-enter-active,.modal-leave-active{transition:opacity .25s}
.modal-enter-from,.modal-leave-to{opacity:0}
.modal-enter-active .modal{transition:transform .25s}
.modal-enter-from .modal{transform:scale(.94)}

@media(max-width:820px){.nut-grid{grid-template-columns:1fr}}
</style>
