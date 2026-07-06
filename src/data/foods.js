/**
 * 常见食物营养速查数据
 * 单位：每 100g 可食部；能量 kcal，其余 g。
 * 数据为常见参考范围的近似值，主要依据《中国食物成分表》标准版思路整理，
 * ⚠️ 仅供学习参考，不同品种/产地/烹饪方式会有差异，不作为精确营养计算或医疗依据。
 */
export const foods = [
  // 主食 / 谷薯
  { id: 'rice', name: '米饭（熟）', category: '主食谷薯', energy: 116, protein: 2.6, fat: 0.3, carb: 25.9, fiber: 0.3, tag: '精制碳水' },
  { id: 'brown-rice', name: '糙米饭（熟）', category: '主食谷薯', energy: 112, protein: 2.7, fat: 0.9, carb: 23, fiber: 1.6, tag: '全谷·低GI' },
  { id: 'steamed-bun', name: '馒头', category: '主食谷薯', energy: 223, protein: 7, fat: 1.1, carb: 47, fiber: 1.3, tag: '精制碳水' },
  { id: 'oats', name: '燕麦片（干）', category: '主食谷薯', energy: 338, protein: 15, fat: 6.7, carb: 61, fiber: 10.6, tag: '全谷·高纤' },
  { id: 'sweet-potato', name: '红薯', category: '主食谷薯', energy: 86, protein: 1.6, fat: 0.2, carb: 20, fiber: 3, tag: '薯类·高纤' },
  { id: 'noodles', name: '面条（熟）', category: '主食谷薯', energy: 138, protein: 4.5, fat: 0.5, carb: 28, fiber: 0.8, tag: '精制碳水' },

  // 蛋白质来源
  { id: 'egg', name: '鸡蛋', category: '蛋白来源', energy: 144, protein: 13.3, fat: 8.8, carb: 2.8, fiber: 0, tag: '优质蛋白' },
  { id: 'chicken-breast', name: '鸡胸肉', category: '蛋白来源', energy: 118, protein: 24.6, fat: 1.9, carb: 0, fiber: 0, tag: '高蛋白·低脂' },
  { id: 'beef', name: '牛肉（瘦）', category: '蛋白来源', energy: 125, protein: 20, fat: 4.2, carb: 2, fiber: 0, tag: '优质蛋白·补铁' },
  { id: 'pork', name: '猪肉（瘦）', category: '蛋白来源', energy: 143, protein: 20.3, fat: 6.2, carb: 1.5, fiber: 0, tag: '优质蛋白' },
  { id: 'salmon', name: '三文鱼', category: '蛋白来源', energy: 139, protein: 17.2, fat: 7.8, carb: 0, fiber: 0, tag: 'Omega-3' },
  { id: 'shrimp', name: '虾', category: '蛋白来源', energy: 93, protein: 18.6, fat: 0.8, carb: 2.8, fiber: 0, tag: '高蛋白·低脂' },
  { id: 'tofu', name: '豆腐（北）', category: '蛋白来源', energy: 116, protein: 12.2, fat: 4.8, carb: 4.2, fiber: 0.5, tag: '植物蛋白' },
  { id: 'milk', name: '牛奶', category: '蛋白来源', energy: 54, protein: 3, fat: 3.2, carb: 3.4, fiber: 0, tag: '补钙' },
  { id: 'yogurt', name: '酸奶（原味）', category: '蛋白来源', energy: 72, protein: 2.5, fat: 2.7, carb: 9.3, fiber: 0, tag: '益生菌·补钙' },

  // 蔬菜
  { id: 'broccoli', name: '西兰花', category: '蔬菜', energy: 36, protein: 4.1, fat: 0.6, carb: 4.3, fiber: 1.6, tag: '高纤·维C' },
  { id: 'spinach', name: '菠菜', category: '蔬菜', energy: 28, protein: 2.6, fat: 0.3, carb: 4.5, fiber: 1.7, tag: '深色菜·补铁' },
  { id: 'tomato', name: '番茄', category: '蔬菜', energy: 20, protein: 0.9, fat: 0.2, carb: 4, fiber: 1.9, tag: '维C·番茄红素' },
  { id: 'cucumber', name: '黄瓜', category: '蔬菜', energy: 16, protein: 0.8, fat: 0.2, carb: 2.9, fiber: 0.5, tag: '低热量' },
  { id: 'carrot', name: '胡萝卜', category: '蔬菜', energy: 39, protein: 1, fat: 0.2, carb: 8.8, fiber: 3.2, tag: '维A·胡萝卜素' },

  // 水果
  { id: 'apple', name: '苹果', category: '水果', energy: 54, protein: 0.2, fat: 0.2, carb: 13.5, fiber: 1.2, tag: '高纤' },
  { id: 'banana', name: '香蕉', category: '水果', energy: 93, protein: 1.4, fat: 0.2, carb: 22, fiber: 1.2, tag: '补钾·能量' },
  { id: 'orange', name: '橙子', category: '水果', energy: 48, protein: 0.8, fat: 0.2, carb: 11.1, fiber: 0.6, tag: '维C' },
  { id: 'blueberry', name: '蓝莓', category: '水果', energy: 57, protein: 0.7, fat: 0.3, carb: 14.5, fiber: 2.4, tag: '抗氧化' },

  // 坚果 / 油脂
  { id: 'almond', name: '杏仁', category: '坚果油脂', energy: 578, protein: 21, fat: 51, carb: 20, fiber: 12, tag: '好脂肪·高热量' },
  { id: 'walnut', name: '核桃', category: '坚果油脂', energy: 654, protein: 15, fat: 65, carb: 14, fiber: 6.7, tag: 'Omega-3·高热量' },
  { id: 'olive-oil', name: '橄榄油', category: '坚果油脂', energy: 899, protein: 0, fat: 99.9, carb: 0, fiber: 0, tag: '不饱和脂肪' },

  // 需要注意的
  { id: 'cola', name: '可乐', category: '需注意', energy: 43, protein: 0, fat: 0, carb: 10.8, fiber: 0, tag: '添加糖⚠️' },
  { id: 'instant-noodle', name: '方便面', category: '需注意', energy: 472, protein: 9.5, fat: 21.1, carb: 61, fiber: 1.5, tag: '高油高盐⚠️' },
  { id: 'fried-chicken', name: '炸鸡', category: '需注意', energy: 279, protein: 19, fat: 18, carb: 8, fiber: 0.5, tag: '油炸⚠️' }
]

export const foodCategories = ['主食谷薯', '蛋白来源', '蔬菜', '水果', '坚果油脂', '需注意']
