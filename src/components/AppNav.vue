<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { to: '/home', label: '首页' },
  { to: '/nutrients', label: '营养素图鉴' },
  { to: '/guide', label: '膳食指南' },
  { to: '/calculator', label: '热量计算' },
  { to: '/foods', label: '食物速查' },
  { to: '/recipes', label: '每日食谱' },
  { to: '/topics', label: '知识专题' },
  { to: '/quiz', label: '知识自测' }
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="nav">
    <div class="wrap nav-in">
      <RouterLink to="/home" class="brand" @click="closeMenu">
        <span class="logo"><AppIcon name="sprout" :size="20" /></span>
        团团营养学
      </RouterLink>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="菜单">
        <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="22" />
      </button>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ on: route.path === link.to }"
          @click="closeMenu"
        >{{ link.label }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav{position:sticky;top:0;z-index:50;background:rgba(242,247,244,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;height:70px}
.brand{display:flex;align-items:center;gap:11px;font-weight:700;font-size:20px;color:var(--ink)}
.logo{width:38px;height:38px;border-radius:12px;background:var(--green);color:#fff;display:grid;place-items:center;box-shadow:0 4px 12px rgba(0,181,120,.35)}
.nav-links{display:flex;gap:6px}
.nav-link{padding:9px 16px;border-radius:var(--r-full);font-size:15px;font-weight:500;color:var(--gray);transition:.18s}
.nav-link:hover{background:var(--green-3);color:var(--green-2)}
.nav-link.on{background:var(--green);color:#fff;box-shadow:0 4px 12px rgba(0,181,120,.3)}
.menu-toggle{display:none;color:var(--ink);padding:6px}

@media(max-width:820px){
  .menu-toggle{display:grid;place-items:center}
  .nav-links{position:absolute;top:70px;left:0;right:0;flex-direction:column;background:var(--card);border-bottom:1px solid var(--line);padding:10px;gap:3px;max-height:0;overflow:hidden;transition:max-height .3s ease;box-shadow:var(--sh-md)}
  .nav-links.open{max-height:560px}
  .nav-link{padding:12px 16px}
}
</style>
