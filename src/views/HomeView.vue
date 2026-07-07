<script setup>
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'

const router = useRouter()

// 六大营养素速览卡（对齐首页定稿）
const nutrients = [
  { id: 'protein', name: '蛋白质', en: 'Protein', icon: 'protein', color: '#ff8a5b', desc: '构成人体组织的基础，肌肉、酶、抗体都离不开它。', cal: '4 kcal/g', chip: '优质蛋白' },
  { id: 'fat', name: '脂肪', en: 'Fat', icon: 'fat', color: '#ffc24b', desc: '能量密度最高，也是脂溶性维生素的载体，重在选对种类。', cal: '9 kcal/g', chip: '选不饱和' },
  { id: 'carb', name: '碳水化合物', en: 'Carb', icon: 'carb', color: '#4cc38a', desc: '最主要、最经济的能量来源，大脑几乎只靠葡萄糖供能。', cal: '4 kcal/g', chip: '选低 GI' },
  { id: 'vitamin', name: '维生素', en: 'Vitamin', icon: 'vitamin', color: '#f0a030', desc: '不供能但是代谢的润滑剂，缺了哪种都会出特定问题。', cal: '微量', chip: '蔬果补充' },
  { id: 'mineral', name: '矿物质', en: 'Mineral', icon: 'mineral', color: '#7c9cf0', desc: '构成骨骼牙齿、维持体液平衡，钙铁锌最需要关注。', cal: '微量', chip: '钙铁锌' },
  { id: 'water', name: '水', en: 'Water', icon: 'water', color: '#48c6e8', desc: '占体重 50–60%，所有代谢反应都在水环境中进行。', cal: '1500ml+', chip: '少量多次' }
]

const stats = [
  { n: '23', l: '种营养素', icon: 'book', bg: '#e6f7f0', fg: '#00996a' },
  { n: '8', l: '膳食准则', icon: 'guide', bg: '#fff1e8', fg: '#ff8a5b' },
  { n: '61', l: '常见食物', icon: 'search', bg: '#e8f6fb', fg: '#48c6e8' },
  { n: '38', l: '道自测题', icon: 'quiz', bg: '#fdeef2', fg: '#f4849b' }
]

const steps = [
  { n: 1, icon: 'guide', title: '先搭地图', desc: '从「营养素图鉴」建立六大营养素框架，理解能量平衡' },
  { n: 2, icon: 'book', title: '记核心概念', desc: '过一遍「膳食指南」八准则，知道每天该怎么吃' },
  { n: 3, icon: 'calc', title: '边学边用', desc: '用「热量计算器」算需求，用「食物速查」看日常饮食' },
  { n: 4, icon: 'quiz', title: '巩固检验', desc: '「知识自测」刷题查漏补缺，破除营养谣言' }
]

const modules = [
  { to: '/nutrients', icon: 'book', color: '#00b578', title: '营养素图鉴', desc: '细分营养素逐个拆解，功能、来源、误区一目了然' },
  { to: '/guide', icon: 'guide', color: '#ff8a5b', title: '膳食指南', desc: '《中国居民膳食指南 2022》八条准则通俗解读' },
  { to: '/calculator', icon: 'calc', color: '#ffc24b', title: '热量计算器', desc: '算出你的每日能量需求与三大营养素克数' },
  { to: '/foods', icon: 'search', color: '#48c6e8', title: '食物速查', desc: '常见食物的热量与营养成分，随手查' },
  { to: '/recipes', icon: 'bowl', color: '#b78bd9', title: '每日食谱', desc: '减脂、增肌、均衡、食疗四种目标的一日三餐参考' },
  { to: '/quiz', icon: 'quiz', color: '#f4849b', title: '知识自测', desc: '刷题巩固，带解析，破除常见营养误区' }
]
</script>

<template>
  <div class="page home">
    <div class="wrap">
      <!-- Hero -->
      <section class="hero">
        <div class="hero-left">
          <span class="pill"><span class="dot"></span>零基础 · 系统入门</span>
          <h1>把<span class="accent">营养学</span><br>吃进日常里</h1>
          <p class="lead">不啃枯燥大部头，从看懂自己的餐盘开始。建框架、记概念、边学边用、刷题巩固——一条线走下来，不迷路。</p>
          <div class="cta">
            <button class="btn btn-primary" @click="router.push('/nutrients')">从营养素图鉴开始</button>
            <button class="btn btn-ghost" @click="router.push('/quiz')">先测测水平</button>
          </div>
        </div>

        <!-- 卡路里环形卡（数据可视化核心） -->
        <div class="dash-card">
          <div class="dash-head"><span class="t">每日能量参考</span><span class="day">成年女性</span></div>
          <div class="ring-row">
            <div class="ring">
              <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="64" fill="none" stroke="#e8eeeb" stroke-width="14" />
                <circle cx="75" cy="75" r="64" fill="none" stroke="url(#ringG)" stroke-width="14" stroke-linecap="round" stroke-dasharray="402" stroke-dashoffset="90" transform="rotate(-90 75 75)" />
                <defs><linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00b578" /><stop offset="1" stop-color="#3dd9a0" /></linearGradient></defs>
              </svg>
              <div class="ring-c"><span class="big num">1800</span><span class="unit">kcal / 天</span></div>
            </div>
            <div class="macro-list">
              <div class="macro"><div class="macro-top"><span class="name">碳水化合物</span><span class="val num">248g</span></div><div class="bar"><i style="width:78%;background:#4cc38a"></i></div></div>
              <div class="macro"><div class="macro-top"><span class="name">蛋白质</span><span class="val num">90g</span></div><div class="bar"><i style="width:55%;background:#ff8a5b"></i></div></div>
              <div class="macro"><div class="macro-top"><span class="name">脂肪</span><span class="val num">54g</span></div><div class="bar"><i style="width:42%;background:#ffc24b"></i></div></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 统计卡 -->
      <section class="stat-row">
        <div class="stat-card" v-for="s in stats" :key="s.l">
          <span class="si" :style="{ background: s.bg, color: s.fg }"><AppIcon :name="s.icon" :size="22" /></span>
          <div><div class="n num" :style="{ color: s.fg }">{{ s.n }}</div><div class="l">{{ s.l }}</div></div>
        </div>
      </section>

      <!-- 六大营养素 -->
      <section class="section">
        <div class="sec-head">
          <div><h2>六大营养素</h2><div class="sub">整个营养学的地基，逐个了解它们的作用</div></div>
          <span class="more" @click="router.push('/nutrients')">查看图鉴 <AppIcon name="arrow" :size="15" /></span>
        </div>
        <div class="nut-grid">
          <div class="nut" v-for="n in nutrients" :key="n.id" :style="{ '--ac': n.color }" @click="router.push('/nutrients')">
            <div class="nut-top">
              <span class="nut-ic"><AppIcon :name="n.icon" :size="24" /></span>
              <div><h3>{{ n.name }}</h3><span class="en">{{ n.en }}</span></div>
            </div>
            <p>{{ n.desc }}</p>
            <div class="nut-foot"><span class="cal num">{{ n.cal }}</span><span class="chip">{{ n.chip }}</span></div>
          </div>
        </div>
      </section>
    </div>

    <!-- 学习路径（浅绿背景通栏） -->
    <section class="path-sec">
      <div class="wrap">
        <div class="sec-head"><div><h2>推荐学习路径</h2><div class="sub">四步走，从建立框架到查漏补缺</div></div></div>
        <div class="path">
          <div class="pcard" v-for="s in steps" :key="s.n">
            <span class="step num">{{ s.n }}</span>
            <span class="pi"><AppIcon :name="s.icon" :size="24" /></span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="wrap">
      <!-- 五大模块 -->
      <section class="section">
        <div class="sec-head"><div><h2>六大学习模块</h2><div class="sub">点开任意一个，开始你的营养学之旅</div></div></div>
        <div class="mod-grid">
          <RouterLink class="mod" v-for="m in modules" :key="m.to" :to="m.to">
            <span class="mi" :style="{ background: m.color }"><AppIcon :name="m.icon" :size="26" /></span>
            <div class="body"><h3>{{ m.title }}</h3><p>{{ m.desc }}</p></div>
            <span class="go"><AppIcon name="arrow" :size="18" /></span>
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home{padding-top:8px}
/* Hero */
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:36px;align-items:stretch;padding:40px 0 32px}
.hero-left{display:flex;flex-direction:column;justify-content:center}
.pill{display:inline-flex;align-items:center;gap:8px;background:var(--green-3);color:var(--green-2);font-weight:600;font-size:13px;padding:7px 15px;border-radius:var(--r-full);width:fit-content;margin-bottom:20px}
.pill .dot{width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 0 4px rgba(0,181,120,.18)}
.hero h1{font-size:50px;font-weight:900;line-height:1.15;letter-spacing:-.5px;margin-bottom:18px}
.hero h1 .accent{color:var(--green)}
.hero .lead{font-size:17px;color:var(--gray);max-width:28em;margin-bottom:26px}
.cta{display:flex;gap:13px;flex-wrap:wrap}

.dash-card{background:var(--card);border-radius:var(--r-xl);box-shadow:var(--sh-lg);padding:28px;display:flex;flex-direction:column;gap:20px;justify-content:center}
.dash-head{display:flex;align-items:center;justify-content:space-between}
.dash-head .t{font-weight:700;font-size:16px}
.dash-head .day{font-size:13px;color:var(--faint);background:var(--green-4);padding:4px 12px;border-radius:var(--r-full)}
.ring-row{display:flex;align-items:center;gap:24px}
.ring{position:relative;width:150px;height:150px;flex:none}
.ring-c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.ring-c .big{font-size:34px;font-weight:800;line-height:1}
.ring-c .unit{font-size:12px;color:var(--faint);margin-top:3px}
.macro-list{flex:1;display:flex;flex-direction:column;gap:14px}
.macro{display:flex;flex-direction:column;gap:5px}
.macro-top{display:flex;justify-content:space-between;font-size:13px}
.macro-top .name{color:var(--gray);font-weight:500}
.macro-top .val{font-weight:600;color:var(--ink)}
.bar{height:7px;background:var(--line);border-radius:var(--r-full);overflow:hidden}
.bar i{display:block;height:100%;border-radius:var(--r-full)}

/* 统计卡 */
.stat-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:16px}
.stat-card{background:var(--card);border-radius:var(--r-lg);padding:20px 22px;box-shadow:var(--sh-sm);display:flex;align-items:center;gap:14px;transition:.2s}
.stat-card:hover{transform:translateY(-3px);box-shadow:var(--sh-md)}
.stat-card .si{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;flex:none}
.stat-card .n{font-size:24px;font-weight:800;line-height:1}
.stat-card .l{font-size:13px;color:var(--faint);margin-top:3px}

/* section */
.section{padding:44px 0}
.more{font-size:14px;font-weight:600;color:var(--green-2);display:inline-flex;align-items:center;gap:5px;cursor:pointer}

/* 六大营养素卡 */
.nut-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.nut{background:var(--card);border-radius:var(--r-lg);padding:22px;box-shadow:var(--sh-sm);cursor:pointer;transition:.2s;position:relative;overflow:hidden}
.nut:hover{transform:translateY(-4px);box-shadow:var(--sh-md)}
.nut::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--ac)}
.nut-top{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.nut-ic{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;color:#fff;background:var(--ac)}
.nut-top h3{font-size:19px;font-weight:700}
.nut-top .en{font-size:12px;color:var(--faint)}
.nut p{font-size:14px;color:var(--gray);line-height:1.7;margin-bottom:14px;min-height:47px}
.nut-foot{display:flex;justify-content:space-between;align-items:center}
.nut-foot .cal{font-weight:700;font-size:15px;color:var(--ac)}

/* 学习路径通栏 */
.path-sec{background:var(--green-4);padding:52px 0;border-top:1px solid var(--green-3);border-bottom:1px solid var(--green-3)}
.path{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.pcard{background:var(--card);border-radius:var(--r-lg);padding:24px;box-shadow:var(--sh-sm);position:relative;transition:.2s}
.pcard:hover{transform:translateY(-4px);box-shadow:var(--sh-md)}
.pcard .step{position:absolute;top:20px;right:20px;font-size:13px;font-weight:700;color:var(--green);background:var(--green-3);width:30px;height:30px;border-radius:50%;display:grid;place-items:center}
.pcard .pi{width:50px;height:50px;border-radius:14px;background:var(--green-3);color:var(--green-2);display:grid;place-items:center;margin-bottom:16px}
.pcard h3{font-size:18px;font-weight:700;margin-bottom:8px}
.pcard p{font-size:13px;color:var(--gray);line-height:1.7}

/* 五大模块 */
.mod-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.mod{display:flex;align-items:center;gap:18px;background:var(--card);border-radius:var(--r-lg);padding:22px;box-shadow:var(--sh-sm);cursor:pointer;transition:.2s}
.mod:hover{transform:translateY(-3px);box-shadow:var(--sh-md)}
.mod .mi{width:56px;height:56px;border-radius:15px;display:grid;place-items:center;color:#fff;flex:none}
.mod .body{flex:1}
.mod .body h3{font-size:19px;font-weight:700;margin-bottom:3px}
.mod .body p{font-size:14px;color:var(--gray)}
.mod .go{width:34px;height:34px;border-radius:50%;background:var(--bg);display:grid;place-items:center;color:var(--gray);transition:.2s}
.mod:hover .go{background:var(--green);color:#fff}

@media(max-width:820px){
  .hero{grid-template-columns:1fr;gap:28px;padding:24px 0}
  .hero h1{font-size:36px}
  .stat-row{grid-template-columns:1fr 1fr}
  .nut-grid,.path,.mod-grid{grid-template-columns:1fr}
}
</style>
