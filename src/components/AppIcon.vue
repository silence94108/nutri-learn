<script setup>
/**
 * 统一线性图标（描边风格，零 emoji）
 * 用法：<AppIcon name="book" /> ；size 可选，默认 24
 */
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 }
})

// 每个图标是一段 path，viewBox 统一 0 0 24 24
const paths = {
  // 品牌 / 通用
  leaf: '<path d="M12 21c4-2.5 7-6 7-11a7 7 0 0 0-14 0c0 5 3 8.5 7 11z"/><path d="M12 8v7M9 11h6"/>',
  home: '<path d="M4 11 12 4l8 7"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/>',
  arrow: '<path d="m9 6 6 6-6 6"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  // 六大营养素
  protein: '<path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-3 2-6 5-9z"/>',
  fat: '<circle cx="12" cy="12" r="8"/><path d="M8 12a4 4 0 0 1 8 0"/>',
  carb: '<path d="M4 15c4-8 12-8 16 0M7 15h10"/><circle cx="12" cy="9" r="1"/>',
  vitamin: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mineral: '<path d="M12 3l7 4v10l-7 4-7-4V7z"/>',
  water: '<path d="M12 3c4 5 7 9 7 12a7 7 0 0 1-14 0c0-3 3-7 7-12z"/>',
  // 五大模块
  book: '<path d="M4 5a2 2 0 0 1 2-2h9v16H6a2 2 0 0 0-2 2z"/><path d="M15 3h3a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2h-3"/>',
  guide: '<path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/>',
  calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/>',
  quiz: '<path d="M8.5 11.5l2.5 2.5 5-5.5"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"/>',
  // 膳食指南准则用
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3"/>',
  fire: '<path d="M12 3c1 4 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3-1-3 0-6 1-8z"/>',
  scale: '<path d="M12 4v16M7 8h10"/><path d="M4 12a3 3 0 0 0 6 0l-3-6zM14 12a3 3 0 0 0 6 0l-3-6z"/>',
  drop: '<path d="M12 3c4 5 7 9 7 12a7 7 0 0 1-14 0c0-3 3-7 7-12z"/>',
  bowl: '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 11a4 4 0 0 1 8 0"/><path d="M12 3v3"/>',
  salt: '<path d="M8 8h8l-1 12H9z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  tag: '<path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9z"/><circle cx="8" cy="8" r="1.5"/>',
  chopsticks: '<path d="M4 20 18 5M8 20 20 7"/>'
}
</script>

<template>
  <svg class="ico" :width="size" :height="size" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" v-html="paths[name] || ''" />
</template>
