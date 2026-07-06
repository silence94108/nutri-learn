<script setup>
import { ref } from 'vue'
import { guidelines } from '../data/guidelines.js'
import AppIcon from '../components/AppIcon.vue'

const openId = ref(1)

function toggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="page">
    <div class="wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>膳食指南</span>
        <h1 class="page-title">中国居民膳食指南 2022</h1>
        <p class="page-subtitle">中国营养学会发布的权威膳食纲领，共八条准则。这是你整套营养知识的官方地基。</p>
      </div>

      <div class="guide-list">
        <div class="guide-item" v-for="g in guidelines" :key="g.id" :class="{ open: openId === g.id }">
          <button class="guide-header" @click="toggle(g.id)">
            <span class="guide-ic"><AppIcon :name="g.icon" :size="24" /></span>
            <div class="guide-titles">
              <span class="guide-num">准则 {{ g.id }}</span>
              <span class="guide-title">{{ g.title }}</span>
            </div>
            <span class="guide-arrow" :class="{ open: openId === g.id }"><AppIcon name="arrow" :size="20" /></span>
          </button>

          <transition name="expand">
            <div v-if="openId === g.id" class="guide-body">
              <div class="guide-core">
                <span class="core-label">核心量化</span>
                <p>{{ g.core }}</p>
              </div>
              <p class="guide-detail">{{ g.detail }}</p>
              <div class="guide-action">
                <span class="action-ic"><AppIcon name="check" :size="16" /></span>
                <div><span class="action-label">怎么做</span><p>{{ g.action }}</p></div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="disclaimer">
        以上为膳食指南准则要点的通俗整理，具体数值适用于一般成年人。孕妇、儿童、老年人及慢性病患者有专门的膳食指导，请以官方完整版或专业建议为准。
      </div>
    </div>
  </div>
</template>

<style scoped>
.guide-list{display:flex;flex-direction:column;gap:14px}
.guide-item{background:var(--card);border-radius:var(--r-lg);box-shadow:var(--sh-sm);overflow:hidden;transition:box-shadow .2s}
.guide-item.open{box-shadow:var(--sh-md)}
.guide-header{display:flex;align-items:center;gap:16px;width:100%;padding:20px 22px;text-align:left}
.guide-ic{width:48px;height:48px;border-radius:13px;background:var(--green-3);color:var(--green-2);display:grid;place-items:center;flex:none;transition:.2s}
.guide-item.open .guide-ic{background:var(--green);color:#fff}
.guide-titles{flex:1;display:flex;flex-direction:column;gap:2px}
.guide-num{font-size:12px;font-weight:600;color:var(--green-2)}
.guide-title{font-size:18px;font-weight:700}
.guide-arrow{color:var(--faint);transition:transform .25s;transform:rotate(90deg)}
.guide-arrow.open{transform:rotate(-90deg);color:var(--green)}

.guide-body{padding:0 22px 22px 22px}
.guide-core{background:var(--green-4);border-radius:var(--r-md);padding:14px 16px;margin-bottom:14px}
.core-label{font-size:12px;font-weight:700;color:var(--green-2);display:block;margin-bottom:4px}
.guide-core p{font-size:15px;font-weight:600;color:var(--ink)}
.guide-detail{font-size:14px;color:var(--gray);margin-bottom:14px;line-height:1.75}
.guide-action{display:flex;gap:12px;align-items:flex-start;background:#fff8ec;border-radius:var(--r-md);padding:14px 16px}
.action-ic{width:28px;height:28px;border-radius:8px;background:#ffd591;color:#a05a00;display:grid;place-items:center;flex:none}
.action-label{font-size:13px;font-weight:700;color:#a05a00;display:block;margin-bottom:2px}
.guide-action p{font-size:14px;color:#7a5410;line-height:1.65}

.expand-enter-active,.expand-leave-active{transition:all .3s ease;overflow:hidden;max-height:320px}
.expand-enter-from,.expand-leave-to{max-height:0;opacity:0}

@media(max-width:600px){.guide-title{font-size:16px}.guide-header{gap:12px;padding:16px}}
</style>
