<script setup>
import { RouterView } from 'vue-router'
import AppNav from './components/AppNav.vue'
</script>

<template>
  <AppNav />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <footer class="app-footer">
    <div class="wrap">
      <span class="mk">团团营养学</span>
      <p>学习用途，内容仅供参考，不作为医疗建议</p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer{background:var(--card);border-top:1px solid var(--line);padding:36px 0;text-align:center}
.app-footer .mk{font-weight:700;color:var(--green-2);font-size:17px}
.app-footer p{color:var(--faint);font-size:13px;margin-top:6px}
.fade-enter-active,.fade-leave-active{transition:opacity .25s ease}
.fade-enter-from,.fade-leave-to{opacity:0}
</style>
