<script setup>
import { ref, computed } from 'vue'
import AppIcon from '../components/AppIcon.vue'

const form = ref({
  gender: 'male',
  age: 25,
  height: 170,
  weight: 65,
  activity: 1.375,
  goal: 'maintain'
})

const activityLevels = [
  { value: 1.2, label: '久坐', desc: '几乎不运动，办公室为主' },
  { value: 1.375, label: '轻度活动', desc: '每周运动 1–3 天' },
  { value: 1.55, label: '中度活动', desc: '每周运动 3–5 天' },
  { value: 1.725, label: '高度活动', desc: '每周运动 6–7 天' },
  { value: 1.9, label: '极高强度', desc: '体力劳动或每天高强度训练' }
]

const goals = [
  { value: 'lose', label: '减脂', adjust: -0.2, desc: '热量缺口 20%' },
  { value: 'maintain', label: '维持', adjust: 0, desc: '维持当前体重' },
  { value: 'gain', label: '增肌', adjust: 0.15, desc: '热量盈余 15%' }
]

const isValid = computed(() => {
  const { age, height, weight } = form.value
  return age >= 10 && age <= 100 && height >= 100 && height <= 250 && weight >= 25 && weight <= 300
})

// Mifflin-St Jeor 公式计算 BMR
const bmr = computed(() => {
  const { gender, age, height, weight } = form.value
  if (!isValid.value) return 0
  const base = 10 * weight + 6.25 * height - 5 * age
  return Math.round(gender === 'male' ? base + 5 : base - 161)
})

const tdee = computed(() => Math.round(bmr.value * form.value.activity))

const targetCalories = computed(() => {
  const goal = goals.find(g => g.value === form.value.goal)
  return Math.round(tdee.value * (1 + goal.adjust))
})

const macros = computed(() => {
  const cal = targetCalories.value
  const { weight, goal } = form.value
  const proteinPerKg = goal === 'maintain' ? 1.5 : 2.0
  const proteinG = Math.round(weight * proteinPerKg)
  const fatG = Math.round(cal * 0.25 / 9)
  const carbG = Math.round(Math.max(cal - proteinG * 4 - cal * 0.25, 0) / 4)
  return { proteinG, fatG, carbG }
})

// 三大营养素供能占比（用于环形 + 进度条）
const percents = computed(() => {
  const { proteinG, fatG, carbG } = macros.value
  const pCal = proteinG * 4, fCal = fatG * 9, cCal = carbG * 4
  const total = pCal + fCal + cCal || 1
  return {
    carb: Math.round(cCal / total * 100),
    fat: Math.round(fCal / total * 100),
    protein: Math.round(pCal / total * 100)
  }
})

const ringStyle = computed(() => {
  const p = percents.value
  const c = p.carb, f = c + p.fat
  return { background: `conic-gradient(#4cc38a 0 ${c}%, #ffc24b ${c}% ${f}%, #ff8a5b ${f}% 100%)` }
})

const bmi = computed(() => {
  const { height, weight } = form.value
  if (!isValid.value) return 0
  return (weight / Math.pow(height / 100, 2)).toFixed(1)
})

const bmiStatus = computed(() => {
  const v = parseFloat(bmi.value)
  if (v < 18.5) return { text: '偏瘦', color: '#48c6e8', pos: 12 }
  if (v < 24) return { text: '正常', color: '#00b578', pos: 42 }
  if (v < 28) return { text: '超重', color: '#ffc24b', pos: 72 }
  return { text: '肥胖', color: '#ff8a5b', pos: 92 }
})
</script>

<template>
  <div class="page">
    <div class="wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>热量计算器</span>
        <h1 class="page-title">每日热量 & 营养素计算</h1>
        <p class="page-subtitle">基于 Mifflin-St Jeor 公式估算基础代谢，帮你算出每日能量需求和三大营养素目标。</p>
      </div>

      <div class="calc-layout">
        <!-- 表单 -->
        <div class="calc-form card">
          <div class="form-group">
            <label>性别</label>
            <div class="seg">
              <button :class="{ on: form.gender === 'male' }" @click="form.gender = 'male'">男</button>
              <button :class="{ on: form.gender === 'female' }" @click="form.gender = 'female'">女</button>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group"><label>年龄</label><div class="input-wrap"><input type="number" v-model.number="form.age" /><span class="suffix">岁</span></div></div>
            <div class="form-group"><label>身高</label><div class="input-wrap"><input type="number" v-model.number="form.height" /><span class="suffix">cm</span></div></div>
            <div class="form-group"><label>体重</label><div class="input-wrap"><input type="number" v-model.number="form.weight" /><span class="suffix">kg</span></div></div>
          </div>

          <div class="form-group">
            <label>活动水平</label>
            <div class="opt-list">
              <button v-for="a in activityLevels" :key="a.value" class="opt" :class="{ on: form.activity === a.value }" @click="form.activity = a.value">
                <span class="opt-label">{{ a.label }}</span><span class="opt-desc">{{ a.desc }}</span>
              </button>
            </div>
          </div>

          <div class="form-group">
            <label>你的目标</label>
            <div class="seg goal">
              <button v-for="g in goals" :key="g.value" :class="{ on: form.goal === g.value }" @click="form.goal = g.value">
                <span>{{ g.label }}</span><small>{{ g.desc }}</small>
              </button>
            </div>
          </div>
        </div>

        <!-- 结果 -->
        <div class="calc-result">
          <div v-if="!isValid" class="invalid card">
            请填写合理的年龄（10–100）、身高（100–250cm）、体重（25–300kg）
          </div>

          <template v-else>
            <!-- 目标热量环 -->
            <div class="result-main card">
              <div class="ring" :style="ringStyle">
                <div class="ring-hole">
                  <span class="rlabel">每日目标</span>
                  <span class="rbig num">{{ targetCalories }}</span>
                  <span class="runit">kcal</span>
                </div>
              </div>
              <div class="result-info">
                <div class="ri-row"><span>基础代谢 BMR</span><b class="num">{{ bmr }}</b></div>
                <div class="ri-row"><span>日常消耗 TDEE</span><b class="num">{{ tdee }}</b></div>
                <div class="ri-legend">
                  <span><i style="background:#4cc38a"></i>碳水 {{ percents.carb }}%</span>
                  <span><i style="background:#ffc24b"></i>脂肪 {{ percents.fat }}%</span>
                  <span><i style="background:#ff8a5b"></i>蛋白 {{ percents.protein }}%</span>
                </div>
              </div>
            </div>

            <!-- BMI -->
            <div class="result-bmi card">
              <div class="bmi-top">
                <span class="bmi-label">你的 BMI</span>
                <span class="bmi-val num" :style="{ color: bmiStatus.color }">{{ bmi }}<em :style="{ background: bmiStatus.color }">{{ bmiStatus.text }}</em></span>
              </div>
              <div class="bmi-track">
                <div class="bmi-seg" style="background:#48c6e8"></div><div class="bmi-seg" style="background:#00b578"></div><div class="bmi-seg" style="background:#ffc24b"></div><div class="bmi-seg" style="background:#ff8a5b"></div>
                <span class="bmi-marker" :style="{ left: bmiStatus.pos + '%' }"></span>
              </div>
              <div class="bmi-scale"><span>偏瘦</span><span>正常 18.5–24</span><span>超重</span><span>肥胖</span></div>
            </div>

            <!-- 三大营养素 -->
            <div class="result-macros card">
              <h3>建议三大营养素分配</h3>
              <div class="macro-item">
                <div class="mi-top"><span><i style="background:#4cc38a"></i>碳水化合物</span><b class="num">{{ macros.carbG }} g</b></div>
                <div class="mbar"><span style="background:#4cc38a" :style="{ width: percents.carb + '%' }"></span></div>
              </div>
              <div class="macro-item">
                <div class="mi-top"><span><i style="background:#ff8a5b"></i>蛋白质</span><b class="num">{{ macros.proteinG }} g</b></div>
                <div class="mbar"><span style="background:#ff8a5b" :style="{ width: percents.protein + '%' }"></span></div>
              </div>
              <div class="macro-item">
                <div class="mi-top"><span><i style="background:#ffc24b"></i>脂肪</span><b class="num">{{ macros.fatG }} g</b></div>
                <div class="mbar"><span style="background:#ffc24b" :style="{ width: percents.fat + '%' }"></span></div>
              </div>
            </div>
          </template>

          <div class="disclaimer">
            本计算器基于通用公式估算，结果为理论参考值。个体代谢差异较大，实际需求请结合体重变化调整，特殊健康状况请咨询专业营养师或医生。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calc-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
.calc-form{padding:26px}
.form-group{margin-bottom:22px}
.form-group:last-child{margin-bottom:0}
.form-group label{display:block;font-size:14px;font-weight:600;margin-bottom:9px}
.form-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.input-wrap{position:relative;display:flex;align-items:center}
input[type=number]{width:100%;padding:11px 40px 11px 14px;border:1.5px solid var(--line);border-radius:var(--r-md);font-size:15px;font-family:"Inter";color:var(--ink);background:var(--bg);transition:.2s}
input[type=number]:focus{outline:none;border-color:var(--green);background:#fff}
.input-wrap .suffix{position:absolute;right:14px;font-size:13px;color:var(--faint)}

.seg{display:flex;gap:10px}
.seg button{flex:1;padding:11px;border-radius:var(--r-md);background:var(--bg);font-size:15px;font-weight:600;color:var(--gray);transition:.2s;border:1.5px solid transparent}
.seg button.on{background:var(--green-3);color:var(--green-2);border-color:var(--green)}
.seg.goal button{display:flex;flex-direction:column;gap:2px}
.seg.goal small{font-size:11px;font-weight:400;opacity:.8}

.opt-list{display:flex;flex-direction:column;gap:9px}
.opt{display:flex;flex-direction:column;align-items:flex-start;padding:11px 15px;border-radius:var(--r-md);background:var(--bg);text-align:left;border:1.5px solid transparent;transition:.2s}
.opt.on{background:var(--green-3);border-color:var(--green)}
.opt-label{font-size:14px;font-weight:600}
.opt-desc{font-size:12px;color:var(--gray)}

/* 结果 */
.calc-result{display:flex;flex-direction:column;gap:18px}
.result-main{padding:28px;display:flex;align-items:center;gap:26px}
.ring{width:150px;height:150px;border-radius:50%;flex:none;display:grid;place-items:center;box-shadow:var(--sh-sm)}
.ring-hole{width:112px;height:112px;background:var(--card);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}
.rlabel{font-size:12px;color:var(--faint)}
.rbig{font-size:32px;font-weight:800;line-height:1.1;color:var(--ink)}
.runit{font-size:12px;color:var(--faint)}
.result-info{flex:1}
.ri-row{display:flex;justify-content:space-between;font-size:14px;color:var(--gray);padding:7px 0;border-bottom:1px solid var(--line)}
.ri-row b{color:var(--ink);font-weight:700}
.ri-legend{display:flex;flex-wrap:wrap;gap:12px;margin-top:12px}
.ri-legend span{font-size:12px;color:var(--gray);display:flex;align-items:center;gap:5px}
.ri-legend i{width:9px;height:9px;border-radius:50%}

.result-bmi{padding:22px 26px}
.bmi-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.bmi-label{font-size:14px;color:var(--gray);font-weight:600}
.bmi-val{font-size:30px;font-weight:800;display:flex;align-items:center;gap:10px}
.bmi-val em{font-style:normal;font-size:12px;font-weight:600;color:#fff;padding:3px 12px;border-radius:var(--r-full)}
.bmi-track{position:relative;display:flex;height:8px;border-radius:var(--r-full);overflow:visible;margin-bottom:8px}
.bmi-seg{flex:1;height:100%}
.bmi-seg:first-child{border-radius:var(--r-full) 0 0 var(--r-full)}
.bmi-seg:last-child{border-radius:0 var(--r-full) var(--r-full) 0}
.bmi-marker{position:absolute;top:50%;width:16px;height:16px;background:#fff;border:3px solid var(--ink);border-radius:50%;transform:translate(-50%,-50%);box-shadow:var(--sh-sm)}
.bmi-scale{display:flex;justify-content:space-between;font-size:11px;color:var(--faint)}

.result-macros{padding:24px 26px}
.result-macros h3{font-size:16px;font-weight:700;margin-bottom:18px}
.macro-item{margin-bottom:16px}
.macro-item:last-child{margin-bottom:0}
.mi-top{display:flex;justify-content:space-between;font-size:14px;margin-bottom:7px}
.mi-top span{display:flex;align-items:center;gap:7px;color:var(--gray)}
.mi-top i{width:10px;height:10px;border-radius:3px}
.mi-top b{font-weight:700;color:var(--ink)}
.mbar{height:8px;background:var(--bg);border-radius:var(--r-full);overflow:hidden}
.mbar span{display:block;height:100%;border-radius:var(--r-full);transition:width .5s ease}

.invalid{padding:22px;text-align:center;color:#c94a6b;background:#fdeef2}

@media(max-width:820px){.calc-layout{grid-template-columns:1fr}.result-main{flex-direction:column}}
</style>
