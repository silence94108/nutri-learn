<script setup>
import { ref, computed } from 'vue'
import { quizQuestions } from '../data/quiz.js'
import AppIcon from '../components/AppIcon.vue'

const started = ref(false)
const showResult = ref(false)
const currentIndex = ref(0)
const selectedOption = ref(null)
const answered = ref(false)
const answers = ref([])

const total = quizQuestions.length
const currentQuestion = computed(() => quizQuestions[currentIndex.value])
const isLast = computed(() => currentIndex.value === total - 1)
const finished = computed(() => showResult.value)
const score = computed(() => answers.value.filter(Boolean).length)
const progress = computed(() => Math.round((currentIndex.value / total) * 100))

// 结算环形
const ringLen = 2 * Math.PI * 52
const ringOffset = computed(() => ringLen * (1 - score.value / total))

function start() {
  started.value = true
  showResult.value = false
  currentIndex.value = 0
  selectedOption.value = null
  answered.value = false
  answers.value = []
}

function selectOption(i) {
  if (answered.value) return
  selectedOption.value = i
  answered.value = true
  answers.value.push(i === currentQuestion.value.answer)
}

function next() {
  if (isLast.value) return
  currentIndex.value++
  selectedOption.value = null
  answered.value = false
}

const scoreComment = computed(() => {
  const rate = score.value / total
  if (rate === 1) return '满分！你已经是营养学入门小能手了'
  if (rate >= 0.8) return '很棒！基础相当扎实，继续保持'
  if (rate >= 0.6) return '不错的开始，回图鉴再巩固几个薄弱点'
  return '刚起步很正常，建议先过一遍营养素图鉴和膳食指南'
})

function optionClass(i) {
  if (!answered.value) return ''
  if (i === currentQuestion.value.answer) return 'correct'
  if (i === selectedOption.value) return 'wrong'
  return 'dimmed'
}
</script>

<template>
  <div class="page">
    <div class="wrap quiz-wrap">
      <div class="page-head">
        <span class="pill"><span class="dot"></span>知识自测</span>
        <h1 class="page-title">知识自测</h1>
        <p class="page-subtitle">{{ total }} 道题，边测边学。每题都有解析，答错也是收获。</p>
      </div>

      <!-- 开始页 -->
      <div v-if="!started" class="quiz-intro card">
        <span class="intro-ic"><AppIcon name="quiz" :size="34" /></span>
        <h2>准备好了吗？</h2>
        <p>共 {{ total }} 道单选题，涵盖营养素、膳食指南、常见误区、热量计算。每答一题立即显示解析，最后给出成绩。</p>
        <button class="btn btn-primary" @click="start">开始答题</button>
      </div>

      <!-- 结算页 -->
      <div v-else-if="finished" class="quiz-result card">
        <div class="result-ring">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="52" fill="none" stroke="#e8eeeb" stroke-width="12" />
            <circle cx="70" cy="70" r="52" fill="none" stroke="url(#qg)" stroke-width="12" stroke-linecap="round" :stroke-dasharray="ringLen" :stroke-dashoffset="ringOffset" transform="rotate(-90 70 70)" />
            <defs><linearGradient id="qg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00b578" /><stop offset="1" stop-color="#3dd9a0" /></linearGradient></defs>
          </svg>
          <div class="ring-c"><span class="rscore num">{{ score }}<em>/{{ total }}</em></span><span class="rlabel">答对</span></div>
        </div>
        <p class="result-comment">{{ scoreComment }}</p>
        <div class="result-actions">
          <button class="btn btn-primary" @click="start">再测一次</button>
          <RouterLink to="/nutrients" class="btn btn-ghost">回图鉴复习</RouterLink>
        </div>
      </div>

      <!-- 答题页 -->
      <div v-else class="quiz-box">
        <div class="quiz-progress">
          <div class="pg-info"><span>第 {{ currentIndex + 1 }} / {{ total }} 题</span><span>已答对 {{ score }} 题</span></div>
          <div class="pg-bar"><div class="pg-fill" :style="{ width: progress + '%' }"></div></div>
        </div>

        <div class="question-card card">
          <span class="q-module">{{ currentQuestion.module }}</span>
          <h3 class="q-text">{{ currentQuestion.question }}</h3>
          <div class="options">
            <button v-for="(opt, i) in currentQuestion.options" :key="i" class="option" :class="optionClass(i)" @click="selectOption(i)" :disabled="answered">
              <span class="o-idx">{{ ['A', 'B', 'C', 'D'][i] }}</span>
              <span class="o-content">{{ opt }}</span>
              <span v-if="answered && i === currentQuestion.answer" class="o-mark"><AppIcon name="check" :size="18" /></span>
              <span v-else-if="answered && i === selectedOption" class="o-mark"><AppIcon name="close" :size="18" /></span>
            </button>
          </div>

          <transition name="slide">
            <div v-if="answered" class="explain" :class="answers[currentIndex] ? 'right' : 'miss'">
              <div class="ex-head">{{ answers[currentIndex] ? '答对了！' : '答错了，看看解析' }}</div>
              <p>{{ currentQuestion.explain }}</p>
            </div>
          </transition>

          <div v-if="answered" class="q-actions">
            <button v-if="!isLast" class="btn btn-primary" @click="next">下一题</button>
            <button v-else class="btn btn-primary" @click="showResult = true">查看成绩</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-wrap{max-width:720px}
.quiz-intro,.quiz-result{padding:48px 32px;text-align:center}
.intro-ic{display:inline-grid;place-items:center;width:76px;height:76px;border-radius:22px;background:var(--green-3);color:var(--green-2);margin-bottom:18px}
.quiz-intro h2{font-size:24px;font-weight:800;margin-bottom:12px}
.quiz-intro p{color:var(--gray);margin-bottom:26px;max-width:34em;margin-left:auto;margin-right:auto}

.quiz-progress{margin-bottom:20px}
.pg-info{display:flex;justify-content:space-between;font-size:14px;color:var(--gray);margin-bottom:9px}
.pg-bar{height:8px;background:var(--card);border-radius:var(--r-full);overflow:hidden;box-shadow:var(--sh-sm)}
.pg-fill{height:100%;background:linear-gradient(90deg,var(--green),var(--mint));border-radius:var(--r-full);transition:width .3s}

.question-card{padding:30px}
.q-module{display:inline-block;font-size:12px;font-weight:600;color:var(--green-2);background:var(--green-3);padding:4px 12px;border-radius:var(--r-full);margin-bottom:14px}
.q-text{font-size:20px;font-weight:700;margin-bottom:22px;line-height:1.5}
.options{display:flex;flex-direction:column;gap:12px}
.option{display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:var(--r-md);background:var(--bg);text-align:left;font-size:15px;border:1.5px solid transparent;transition:.2s}
.option:not(:disabled):hover{border-color:var(--green);background:var(--green-4)}
.o-idx{width:30px;height:30px;border-radius:50%;background:var(--card);color:var(--gray);display:grid;place-items:center;font-weight:700;font-size:14px;flex:none;box-shadow:var(--sh-sm)}
.o-content{flex:1}
.o-mark{display:grid;place-items:center}
.option.correct{border-color:var(--green);background:var(--green-3)}
.option.correct .o-idx{background:var(--green);color:#fff}
.option.correct .o-mark{color:var(--green-2)}
.option.wrong{border-color:#f4849b;background:#fdeef2}
.option.wrong .o-idx{background:#f4849b;color:#fff}
.option.wrong .o-mark{color:#c94a6b}
.option.dimmed{opacity:.5}

.explain{margin-top:20px;padding:16px 18px;border-radius:var(--r-md)}
.explain.right{background:var(--green-3)}
.explain.miss{background:#fff8ec}
.ex-head{font-weight:700;margin-bottom:8px;font-size:15px}
.explain.right .ex-head{color:var(--green-2)}
.explain.miss .ex-head{color:#a05a00}
.explain p{font-size:14px;color:var(--ink);line-height:1.7}
.q-actions{margin-top:22px;display:flex;justify-content:flex-end}

.result-ring{position:relative;width:140px;height:140px;margin:0 auto 8px}
.result-ring .ring-c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.rscore{font-size:36px;font-weight:800;color:var(--green-2)}
.rscore em{font-style:normal;font-size:18px;color:var(--faint)}
.rlabel{font-size:13px;color:var(--faint)}
.result-comment{color:var(--gray);margin:16px 0 26px;font-size:16px}
.result-actions{display:flex;gap:12px;justify-content:center}

.slide-enter-active{transition:all .3s ease}
.slide-enter-from{opacity:0;transform:translateY(-8px)}

@media(max-width:600px){.q-text{font-size:17px}.option{padding:13px 14px;font-size:14px}.question-card{padding:22px}}
</style>
