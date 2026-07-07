<script setup>
import { ref } from 'vue'
import { myths, labelGuide, deficiencies, groups } from '../data/topics.js'
import AppIcon from '../components/AppIcon.vue'

const tabs = [
  { id: 'myths', label: '谣言粉碎机', icon: 'quiz' },
  { id: 'label', label: '营养标签实操', icon: 'tag' },
  { id: 'deficiency', label: '常见缺乏症', icon: 'drop' },
  { id: 'groups', label: '特殊人群', icon: 'protein' }
]
const activeTab = ref('myths')

const openedMyth = ref(null)
function toggleMyth(id) {
  openedMyth.value = openedMyth.value === id ? null : id
}
</script>

<template>
  <div class="page">
    <div class="wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>知识专题</span>
        <h1 class="page-title">营养知识专题</h1>
        <p class="page-subtitle">四个实用专题：粉碎谣言、看懂标签、识别缺乏、按人群吃对。都是日常用得上的硬知识。</p>
      </div>

      <!-- Tab 切换 -->
      <div class="filter-bar">
        <button v-for="t in tabs" :key="t.id" class="filter-chip" :class="{ active: activeTab === t.id }" @click="activeTab = t.id">
          <AppIcon :name="t.icon" :size="15" /> {{ t.label }}
        </button>
      </div>

      <!-- 谣言粉碎机 -->
      <div v-if="activeTab === 'myths'" class="myth-list">
        <div class="myth card" v-for="m in myths" :key="m.id" @click="toggleMyth(m.id)">
          <div class="myth-head">
            <span class="verdict" :class="m.verdict === '谣言' ? 'v-false' : 'v-partial'">{{ m.verdict }}</span>
            <span class="claim">「{{ m.claim }}」</span>
            <span class="toggle" :class="{ open: openedMyth === m.id }"><AppIcon name="arrow" :size="16" /></span>
          </div>
          <p v-show="openedMyth === m.id" class="truth">{{ m.truth }}</p>
        </div>
      </div>

      <!-- 营养标签实操 -->
      <div v-else-if="activeTab === 'label'" class="label-sec">
        <p class="group-intro">{{ labelGuide.intro }}</p>
        <div class="step-grid">
          <div class="step-card card" v-for="(s, i) in labelGuide.steps" :key="i">
            <span class="step-n num">{{ i + 1 }}</span>
            <h3>{{ s.title.replace(/^第.步：/, '') }}</h3>
            <p>{{ s.body }}</p>
          </div>
        </div>
        <div class="label-example card">
          <h3><AppIcon name="tag" :size="18" /> {{ labelGuide.example.name }}</h3>
          <div class="ex-table">
            <div class="ex-row" v-for="r in labelGuide.example.rows" :key="r.k">
              <span class="ek">{{ r.k }}</span>
              <span class="ev num">{{ r.v }}</span>
              <span class="en-note">{{ r.note }}</span>
            </div>
          </div>
          <div class="ex-conclusion">{{ labelGuide.example.conclusion }}</div>
        </div>
      </div>

      <!-- 常见缺乏症 -->
      <div v-else-if="activeTab === 'deficiency'" class="def-list">
        <div class="def card" v-for="d in deficiencies" :key="d.id">
          <h2>{{ d.name }}</h2>
          <p class="who"><b>高发人群：</b>{{ d.who }}</p>
          <div class="def-cols">
            <div class="def-col">
              <h4>可能的信号</h4>
              <ul><li v-for="(s, i) in d.signs" :key="i">{{ s }}</li></ul>
            </div>
            <div class="def-col">
              <h4>怎么吃回来</h4>
              <ul class="eat"><li v-for="(e, i) in d.eat" :key="i">{{ e }}</li></ul>
            </div>
          </div>
          <div class="def-note">{{ d.note }}</div>
        </div>
      </div>

      <!-- 特殊人群 -->
      <div v-else class="grp-list">
        <div class="grp card" v-for="g in groups" :key="g.id" :style="{ '--ac': g.color }">
          <div class="grp-head">
            <span class="grp-ic"><AppIcon :name="g.icon" :size="24" /></span>
            <h2>{{ g.name }}</h2>
          </div>
          <ul><li v-for="(p, i) in g.points" :key="i">{{ p }}</li></ul>
          <div class="def-note">{{ g.note }}</div>
        </div>
      </div>

      <div class="disclaimer">
        本页内容依据《中国居民膳食指南（2022）》、GB 28050 及《中国居民膳食营养素参考摄入量（2023 版）》思路整理，仅供学习参考。症状识别与饮食建议不构成诊断或治疗意见，身体不适请就医。
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-bar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px}
.filter-chip{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:var(--r-full);font-size:14px;font-weight:500;background:var(--card);color:var(--gray);box-shadow:var(--sh-sm);transition:.2s}
.filter-chip.active{background:var(--green);color:#fff;box-shadow:var(--sh-green)}
.group-intro{font-size:14px;color:var(--gray);background:var(--green-4);border-left:3px solid var(--green);border-radius:var(--r-md);padding:12px 16px;margin-bottom:22px;line-height:1.7}

/* 谣言 */
.myth-list{display:flex;flex-direction:column;gap:12px}
.myth{padding:18px 22px;cursor:pointer;transition:.2s}
.myth:hover{box-shadow:var(--sh-md)}
.myth-head{display:flex;align-items:center;gap:12px}
.verdict{flex:none;font-size:12px;font-weight:700;color:#fff;padding:4px 12px;border-radius:var(--r-full)}
.v-false{background:#c94a6b}
.v-partial{background:#d9930d}
.claim{flex:1;font-size:15px;font-weight:600}
.toggle{color:var(--faint);transition:transform .2s}
.toggle.open{transform:rotate(90deg)}
.truth{font-size:14px;color:var(--gray);line-height:1.8;margin-top:14px;padding-top:14px;border-top:1px dashed var(--line)}

/* 标签实操 */
.step-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:20px}
.step-card{padding:22px;position:relative}
.step-n{position:absolute;top:18px;right:20px;font-size:13px;font-weight:700;color:var(--green);background:var(--green-3);width:30px;height:30px;border-radius:50%;display:grid;place-items:center}
.step-card h3{font-size:17px;font-weight:700;margin-bottom:10px}
.step-card p{font-size:14px;color:var(--gray);line-height:1.8}
.label-example{padding:24px}
.label-example h3{font-size:17px;font-weight:700;margin-bottom:16px;display:flex;align-items:center;gap:8px}
.label-example h3 :deep(.ico){color:var(--green)}
.ex-table{border:1px solid var(--line);border-radius:var(--r-md);overflow:hidden;margin-bottom:16px}
.ex-row{display:grid;grid-template-columns:1fr 1.2fr 2fr;gap:10px;padding:12px 16px;font-size:14px;align-items:center}
.ex-row+.ex-row{border-top:1px solid var(--line)}
.ek{font-weight:600}
.ev{color:var(--ink)}
.en-note{font-size:13px;color:#c94a6b}
.ex-conclusion{font-size:14px;font-weight:600;color:var(--green-2);background:var(--green-4);padding:14px 16px;border-radius:var(--r-md);line-height:1.7}

/* 缺乏症 */
.def-list,.grp-list{display:flex;flex-direction:column;gap:18px}
.def,.grp{padding:26px}
.def h2{font-size:20px;font-weight:800;margin-bottom:8px}
.who{font-size:13px;color:var(--gray);background:var(--bg);padding:10px 14px;border-radius:var(--r-md);margin-bottom:16px;line-height:1.6}
.def-cols{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:14px}
.def-col h4{font-size:14px;font-weight:700;margin-bottom:10px;color:var(--ink)}
.def-col ul{list-style:none}
.def-col li{font-size:13px;color:var(--gray);line-height:1.7;padding-left:18px;position:relative;margin-bottom:7px}
.def-col li::before{content:"";position:absolute;left:3px;top:8px;width:5px;height:5px;border-radius:50%;background:#c94a6b}
.def-col .eat li::before{background:var(--green)}
.def-note{font-size:13px;color:#8a6430;background:#fff7ec;padding:12px 16px;border-radius:var(--r-md);line-height:1.7}

/* 特殊人群 */
.grp{position:relative;overflow:hidden}
.grp::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--ac)}
.grp-head{display:flex;align-items:center;gap:13px;margin-bottom:16px}
.grp-ic{width:48px;height:48px;border-radius:13px;display:grid;place-items:center;color:#fff;background:var(--ac);flex:none}
.grp-head h2{font-size:20px;font-weight:800}
.grp ul{list-style:none;margin-bottom:14px}
.grp li{font-size:14px;color:var(--gray);line-height:1.8;padding-left:20px;position:relative;margin-bottom:9px}
.grp li::before{content:"";position:absolute;left:4px;top:10px;width:6px;height:6px;border-radius:50%;background:var(--ac)}

@media(max-width:820px){
  .step-grid,.def-cols{grid-template-columns:1fr}
  .ex-row{grid-template-columns:1fr 1fr;gap:6px}
  .en-note{grid-column:1/-1}
}
</style>
