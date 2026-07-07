/**
 * 常见食物营养速查数据
 * 单位：每 100g 可食部；能量 kcal，蛋白/脂肪/碳水/纤维 g，钠 mg。
 * 数据为常见参考范围的近似值，主要依据《中国食物成分表》标准版思路整理；
 * GI 分级参考《中国食物成分表》及国际 GI 表：低 ≤55 · 中 56~69 · 高 ≥70，「—」表示碳水极少无实际意义。
 * ⚠️ 仅供学习参考，不同品种/产地/烹饪方式会有差异，不作为精确营养计算或医疗依据。
 */
export const foods = [
  // 主食 / 谷薯
  { id: 'rice', name: '米饭（熟）', category: '主食谷薯', energy: 116, protein: 2.6, fat: 0.3, carb: 25.9, fiber: 0.3, sodium: 2.5, gi: '高', tag: '精制碳水', desc: '最常见的主食，精白米升糖快、纤维少。搭配蔬菜和蛋白质一起吃，血糖波动会平缓很多。' },
  { id: 'brown-rice', name: '糙米饭（熟）', category: '主食谷薯', energy: 112, protein: 2.7, fat: 0.9, carb: 23, fiber: 1.6, sodium: 3, gi: '中', tag: '全谷·低GI', desc: '保留了米糠和胚芽，B 族维生素和纤维都比白米多。可以按 1:1 和白米混煮，口感更容易接受。' },
  { id: 'steamed-bun', name: '馒头', category: '主食谷薯', energy: 223, protein: 7, fat: 1.1, carb: 47, fiber: 1.3, sodium: 165, gi: '高', tag: '精制碳水', desc: '发酵面食，好消化但 GI 很高。同样一个拳头大小，热量比米饭高不少——因为水分更少。' },
  { id: 'oats', name: '燕麦片（干）', category: '主食谷薯', energy: 338, protein: 15, fat: 6.7, carb: 61, fiber: 10.6, sodium: 3.7, gi: '低', tag: '全谷·高纤', desc: '含 β-葡聚糖，有助于控血脂。注意选「需要煮的生燕麦片」，即食/水果麦片往往加了糖，GI 也更高。' },
  { id: 'sweet-potato', name: '红薯', category: '主食谷薯', energy: 86, protein: 1.6, fat: 0.2, carb: 20, fiber: 3, sodium: 28, gi: '高', tag: '薯类·高纤', desc: '纤维和胡萝卜素丰富，但煮/烤后 GI 并不低（约 77）。当主食替代米面吃是好选择，别当加餐额外吃。' },
  { id: 'noodles', name: '面条（熟）', category: '主食谷薯', energy: 138, protein: 4.5, fat: 0.5, carb: 28, fiber: 0.8, sodium: 5, gi: '中', tag: '精制碳水', desc: '不同面条 GI 跨度很大（约 46~82）：意面、荞麦面偏低，煮得越软烂升糖越快。汤面注意汤里的盐。' },
  { id: 'corn', name: '玉米（鲜）', category: '主食谷薯', energy: 112, protein: 4, fat: 1.2, carb: 22.8, fiber: 2.9, sodium: 1.1, gi: '中', tag: '全谷', desc: '算主食不算蔬菜！一根中等玉米 ≈ 半碗米饭。甜玉米含糖高些，糯玉米支链淀粉多、升糖更快。' },
  { id: 'millet-porridge', name: '小米粥', category: '主食谷薯', energy: 46, protein: 1.4, fat: 0.7, carb: 8.4, fiber: 0.2, sodium: 4.1, gi: '中', tag: '易消化', desc: '养胃易消化，但熬得越久越糊化、升糖越快。控血糖人群喝粥要配蛋白质和蔬菜，别空口喝。' },
  { id: 'whole-wheat-bread', name: '全麦面包', category: '主食谷薯', energy: 246, protein: 8.5, fat: 3.4, carb: 45, fiber: 6, sodium: 400, gi: '中', tag: '全谷·看配料', desc: '认准配料表第一位是「全麦粉」。很多「全麦风味」面包其实是白面粉+焦糖色素，纤维没多少。' },
  { id: 'potato', name: '土豆', category: '主食谷薯', energy: 77, protein: 2, fat: 0.2, carb: 17.2, fiber: 0.7, sodium: 2.7, gi: '中', tag: '薯类·补钾', desc: '钾含量出色，热量只有米饭的 2/3。但它是主食不是菜——土豆丝配米饭等于碳水加碳水。放凉后抗性淀粉增加、GI 下降。' },
  { id: 'yam', name: '山药', category: '主食谷薯', energy: 57, protein: 1.9, fat: 0.2, carb: 12.4, fiber: 0.8, sodium: 18, gi: '低', tag: '薯类·低GI', desc: '薯类里 GI 较低的一位，黏液蛋白对胃肠friendly。同样当主食吃，替代部分米面。' },
  { id: 'quinoa', name: '藜麦（熟）', category: '主食谷薯', energy: 120, protein: 4.4, fat: 1.9, carb: 21.3, fiber: 2.8, sodium: 7, gi: '低', tag: '全谷·完全蛋白', desc: '少见的含全部必需氨基酸的谷物，蛋白质量高。价格偏贵，和大米混煮性价比更高。' },

  // 蛋白质来源
  { id: 'egg', name: '鸡蛋', category: '蛋白来源', energy: 144, protein: 13.3, fat: 8.8, carb: 2.8, fiber: 0, sodium: 131, gi: '—', tag: '优质蛋白', desc: '蛋白质氨基酸组成接近完美，性价比之王。健康人每天 1 个全蛋没问题，蛋黄里的卵磷脂和维生素别浪费。' },
  { id: 'chicken-breast', name: '鸡胸肉', category: '蛋白来源', energy: 118, protein: 24.6, fat: 1.9, carb: 0, fiber: 0, sodium: 34, gi: '—', tag: '高蛋白·低脂', desc: '健身房常客的主力蛋白：脂肪极低、蛋白极高。容易柴，低温慢煮或腌制后快炒口感更好。' },
  { id: 'chicken-leg', name: '鸡腿肉（去皮）', category: '蛋白来源', energy: 181, protein: 16, fat: 13, carb: 0, fiber: 0, sodium: 77, gi: '—', tag: '优质蛋白', desc: '比鸡胸多些脂肪所以更嫩更香。去皮能砍掉相当一部分脂肪，铁含量也比鸡胸高。' },
  { id: 'beef', name: '牛肉（瘦）', category: '蛋白来源', energy: 125, protein: 20, fat: 4.2, carb: 2, fiber: 0, sodium: 53, gi: '—', tag: '优质蛋白·补铁', desc: '血红素铁的优质来源，吸收率远高于植物铁，还富含锌和维生素 B12。缺铁人群优先选红肉。' },
  { id: 'lamb', name: '羊肉（瘦）', category: '蛋白来源', energy: 118, protein: 20.5, fat: 3.9, carb: 0.2, fiber: 0, sodium: 80, gi: '—', tag: '优质蛋白·补铁', desc: '和牛肉一样是补铁补锌的红肉。「吃羊肉上火」缺乏营养学证据，更多和烹饪方式（涮/烤+重口调料）有关。' },
  { id: 'pork', name: '猪肉（瘦）', category: '蛋白来源', energy: 143, protein: 20.3, fat: 6.2, carb: 1.5, fiber: 0, sodium: 57, gi: '—', tag: '优质蛋白·维B1', desc: '维生素 B1 含量在肉类里名列前茅。注意「瘦」是关键——五花肉脂肪能到 30% 以上，完全是另一种食物。' },
  { id: 'duck', name: '鸭肉', category: '蛋白来源', energy: 240, protein: 15.5, fat: 19.7, carb: 0.2, fiber: 0, sodium: 69, gi: '—', tag: '带皮脂肪高', desc: '带皮鸭肉脂肪不低（烤鸭更高），但脂肪酸组成里不饱和脂肪占比较高。去皮吃能大幅减脂。' },
  { id: 'salmon', name: '三文鱼', category: '蛋白来源', energy: 139, protein: 17.2, fat: 7.8, carb: 0, fiber: 0, sodium: 63, gi: '—', tag: 'Omega-3', desc: 'EPA/DHA（Omega-3）的代表食物，对心血管和大脑友好。膳食指南建议每周吃鱼 2 次或 300~500g。' },
  { id: 'cod', name: '鳕鱼', category: '蛋白来源', energy: 88, protein: 20.4, fat: 0.5, carb: 0.5, fiber: 0, sodium: 130, gi: '—', tag: '高蛋白·低脂', desc: '白肉鱼的低脂代表，肉嫩刺少，很适合老人小孩。买的时候留意别把「油鱼」当鳕鱼。' },
  { id: 'hairtail', name: '带鱼', category: '蛋白来源', energy: 127, protein: 17.7, fat: 4.9, carb: 3.1, fiber: 0, sodium: 150, gi: '—', tag: '海鱼·DHA', desc: '家常海鱼，DHA 和硒都不错。清蒸比干煎更能保住不饱和脂肪，热量也低得多。' },
  { id: 'shrimp', name: '虾', category: '蛋白来源', energy: 93, protein: 18.6, fat: 0.8, carb: 2.8, fiber: 0, sodium: 165, gi: '—', tag: '高蛋白·低脂', desc: '蛋白高脂肪极低。「虾+维C=砒霜」是老谣言，正常吃完全安全——剂量差了几个数量级。' },
  { id: 'tofu', name: '豆腐（北）', category: '蛋白来源', energy: 116, protein: 12.2, fat: 4.8, carb: 4.2, fiber: 0.5, sodium: 7.2, gi: '低', tag: '植物蛋白', desc: '大豆蛋白是植物蛋白里的「优质蛋白」。北豆腐用卤水点，钙含量比内酯豆腐高不少。' },
  { id: 'soybean', name: '黄豆（干）', category: '蛋白来源', energy: 390, protein: 35, fat: 16, carb: 34.2, fiber: 15.5, sodium: 2.2, gi: '低', tag: '植物蛋白·高纤', desc: '蛋白含量比肉还高的植物性食物，还有大豆异黄酮。干豆不好消化，打豆浆、做豆腐吸收更好。' },
  { id: 'soymilk', name: '豆浆（无糖）', category: '蛋白来源', energy: 31, protein: 3, fat: 1.6, carb: 1.2, fiber: 0.3, sodium: 3, gi: '低', tag: '植物蛋白', desc: '蛋白量和牛奶接近但钙少很多，两者不能互相替代。必须彻底煮沸——生豆浆含胰蛋白酶抑制剂。' },
  { id: 'milk', name: '牛奶', category: '蛋白来源', energy: 54, protein: 3, fat: 3.2, carb: 3.4, fiber: 0, sodium: 37, gi: '低', tag: '补钙', desc: '补钙效率最高的日常食物（约 104mg/100g 且吸收好）。膳食指南建议每天 300~500g 奶及奶制品。' },
  { id: 'yogurt', name: '酸奶（原味）', category: '蛋白来源', energy: 72, protein: 2.5, fat: 2.7, carb: 9.3, fiber: 0, sodium: 40, gi: '低', tag: '益生菌·补钙', desc: '乳糖不耐人群的好选择。看配料表：很多风味酸奶加糖量惊人，选「生牛乳+菌种」配料最短的。' },
  { id: 'cheese', name: '奶酪', category: '蛋白来源', energy: 328, protein: 25.7, fat: 23.5, carb: 3.5, fiber: 0, sodium: 700, gi: '—', tag: '浓缩补钙·高钠', desc: '约 10 斤奶浓缩 1 斤奶酪，钙极高但热量和钠也高。选天然奶酪、控制量，每天 20~30g 就够。' },

  // 蔬菜
  { id: 'broccoli', name: '西兰花', category: '蔬菜', energy: 36, protein: 4.1, fat: 0.6, carb: 4.3, fiber: 1.6, sodium: 18, gi: '低', tag: '高纤·维C', desc: '维 C 比橙子还高，还有萝卜硫素等植物化学物。焯水或快炒就好，煮太久维 C 损失大。' },
  { id: 'spinach', name: '菠菜', category: '蔬菜', energy: 28, protein: 2.6, fat: 0.3, carb: 4.5, fiber: 1.7, sodium: 85, gi: '低', tag: '深色菜·叶酸', desc: '叶酸和镁的好来源。含草酸较多，焯水 30 秒能去掉大半，再和高钙食物同吃就不亏了。菠菜补铁效率其实一般——植物铁吸收率低。' },
  { id: 'cabbage', name: '大白菜', category: '蔬菜', energy: 17, protein: 1.5, fat: 0.1, carb: 3.2, fiber: 0.8, sodium: 57, gi: '低', tag: '低热量', desc: '便宜大碗的维 C 来源，水分 95%。怎么吃都行，很适合用来撑起「每天一斤菜」的体积。' },
  { id: 'tomato', name: '番茄', category: '蔬菜', energy: 20, protein: 0.9, fat: 0.2, carb: 4, fiber: 1.9, sodium: 5, gi: '低', tag: '维C·番茄红素', desc: '番茄红素是强抗氧化剂，且加热+加油后吸收率更高——番茄炒蛋在营养上是有道理的。' },
  { id: 'cucumber', name: '黄瓜', category: '蔬菜', energy: 16, protein: 0.8, fat: 0.2, carb: 2.9, fiber: 0.5, sodium: 5, gi: '低', tag: '低热量', desc: '96% 是水，热量几乎可以忽略，适合当零食解馋。但营养密度也低，别指望它提供多少维生素。' },
  { id: 'carrot', name: '胡萝卜', category: '蔬菜', energy: 39, protein: 1, fat: 0.2, carb: 8.8, fiber: 3.2, sodium: 71, gi: '低', tag: '维A·胡萝卜素', desc: 'β-胡萝卜素在体内按需转化成维 A，不会中毒。它是脂溶性的——和含油的菜一起吃就行，不必专门用大量油炒。' },
  { id: 'celery', name: '芹菜', category: '蔬菜', energy: 17, protein: 0.8, fat: 0.1, carb: 3.9, fiber: 1.4, sodium: 159, gi: '低', tag: '高纤·钠偏高', desc: '茎叶都能吃，叶子的胡萝卜素比茎还多。注意它是少数自带较高钠的蔬菜，炒的时候可以少放盐。「芹菜降压」不能替代药物。' },
  { id: 'mushroom', name: '香菇（鲜）', category: '蔬菜', energy: 26, protein: 2.2, fat: 0.3, carb: 5.2, fiber: 3.3, sodium: 1.4, gi: '低', tag: '菌菇·鲜味', desc: '富含鲜味物质鸟苷酸，做菜可以少放盐和味精。晒干后维生素 D 前体含量增加，是素食者少有的维 D 来源思路。' },
  { id: 'bell-pepper', name: '彩椒', category: '蔬菜', energy: 22, protein: 1, fat: 0.2, carb: 5.4, fiber: 1.4, sodium: 3.3, gi: '低', tag: '维C冠军', desc: '维 C 含量在常见蔬菜里数一数二（约 100mg+/100g），且能生吃、零损耗。红黄彩椒比青椒更甜、胡萝卜素更多。' },
  { id: 'lettuce', name: '生菜', category: '蔬菜', energy: 15, protein: 1.3, fat: 0.3, carb: 2, fiber: 0.7, sodium: 32, gi: '低', tag: '低热量', desc: '生吃方便、体积大饱腹强，是「减脂碗」的常见基底。营养密度一般，记得搭配深色蔬菜。' },

  // 水果
  { id: 'apple', name: '苹果', category: '水果', energy: 54, protein: 0.2, fat: 0.2, carb: 13.5, fiber: 1.2, sodium: 1.6, gi: '低', tag: '高纤·果胶', desc: '果胶（可溶性纤维）丰富，饱腹感强。连皮吃纤维更多，洗干净就行。' },
  { id: 'banana', name: '香蕉', category: '水果', energy: 93, protein: 1.4, fat: 0.2, carb: 22, fiber: 1.2, sodium: 0.8, gi: '中', tag: '补钾·能量', desc: '钾多、供能快，运动前后很合适。越熟 GI 越高，青一点的香蕉抗性淀粉更多。「香蕉通便」对部分人反而是生香蕉里的鞣酸在帮倒忙。' },
  { id: 'orange', name: '橙子', category: '水果', energy: 48, protein: 0.8, fat: 0.2, carb: 11.1, fiber: 0.6, sodium: 1.2, gi: '低', tag: '维C', desc: '一个中等橙子基本满足全天维 C 需求的一半以上。吃整果远好于喝橙汁——榨汁丢了纤维、糖还浓缩了。' },
  { id: 'kiwi', name: '猕猴桃', category: '水果', energy: 56, protein: 0.8, fat: 0.6, carb: 14.5, fiber: 2.6, sodium: 10, gi: '低', tag: '维C·高纤', desc: '维 C 约 62mg/100g，纤维也不错。含蛋白酶，吃完嘴麻是正常现象，和奶制品同吃会发苦。' },
  { id: 'blueberry', name: '蓝莓', category: '水果', energy: 57, protein: 0.7, fat: 0.3, carb: 14.5, fiber: 2.4, sodium: 1, gi: '低', tag: '抗氧化', desc: '花青素代表食物。「吃蓝莓治近视」是营销话术——抗氧化 ≠ 恢复视力，但作为低 GI 水果它确实优秀。' },
  { id: 'strawberry', name: '草莓', category: '水果', energy: 32, protein: 1, fat: 0.2, carb: 7.1, fiber: 1.1, sodium: 4.2, gi: '低', tag: '低糖·维C', desc: '水果里的低热量选手，吃一大盒也不到 200kcal，维 C 还很高。适合控糖人群解水果瘾。' },
  { id: 'grape', name: '葡萄', category: '水果', energy: 44, protein: 0.5, fat: 0.2, carb: 10.3, fiber: 0.4, sodium: 1.3, gi: '低', tag: '易吃多', desc: '单颗热量不高但一口一个停不下来，很容易过量。葡萄干糖分浓缩约 4 倍，当零食要按「糖」看待。' },
  { id: 'watermelon', name: '西瓜', category: '水果', energy: 26, protein: 0.6, fat: 0.1, carb: 5.8, fiber: 0.3, sodium: 3.2, gi: '高', tag: '高GI·低热量密度', desc: 'GI 高（约 72）但每 100g 碳水其实很少，血糖负荷（GL）并不高——适量吃没那么可怕，怕的是抱着半个瓜用勺挖。' },
  { id: 'pear', name: '梨', category: '水果', energy: 44, protein: 0.4, fat: 0.2, carb: 13.3, fiber: 3.1, sodium: 2, gi: '低', tag: '高纤·水分足', desc: '纤维在常见水果里靠前，水分足。「冰糖炖梨止咳」主要是温水+糖的安抚作用，别指望治病。' },

  // 坚果 / 油脂
  { id: 'almond', name: '杏仁', category: '坚果油脂', energy: 578, protein: 21, fat: 51, carb: 20, fiber: 12, sodium: 8, gi: '低', tag: '好脂肪·高热量', desc: '维生素 E 和单不饱和脂肪丰富，纤维在坚果里也靠前。每天一小把（约 10g）足够，选原味非盐焗。' },
  { id: 'walnut', name: '核桃', category: '坚果油脂', energy: 654, protein: 15, fat: 65, carb: 14, fiber: 6.7, sodium: 6.4, gi: '低', tag: 'Omega-3·高热量', desc: '植物性 Omega-3（α-亚麻酸）的代表。「以形补形补脑」不科学，但它的脂肪酸确实对大脑友好——前提是别过量。' },
  { id: 'peanut', name: '花生', category: '坚果油脂', energy: 574, protein: 24.8, fat: 44.3, carb: 21.7, fiber: 5.5, sodium: 3.6, gi: '低', tag: '蛋白高·防霉变', desc: '坚果里蛋白最高的之一，性价比好。发霉花生含黄曲霉毒素（强致癌物），有哈喇味立刻整袋扔掉。' },
  { id: 'cashew', name: '腰果', category: '坚果油脂', energy: 553, protein: 18, fat: 44, carb: 30, fiber: 3.3, sodium: 12, gi: '低', tag: '碳水偏高', desc: '坚果里碳水偏高、口感偏甜的一位，镁和锌不错。市售多为盐焗/琥珀味，钠和糖都藏在调味里。' },
  { id: 'olive-oil', name: '橄榄油', category: '坚果油脂', energy: 899, protein: 0, fat: 99.9, carb: 0, fiber: 0, sodium: 0, gi: '—', tag: '不饱和脂肪', desc: '单不饱和脂肪酸为主，适合凉拌和中低温烹饪。再健康也是纯脂肪——膳食指南建议全天烹调油 25~30g。' },

  // 需要注意的
  { id: 'cola', name: '可乐', category: '需注意', energy: 43, protein: 0, fat: 0, carb: 10.8, fiber: 0, sodium: 12, gi: '中', tag: '添加糖⚠️', desc: '一罐 330ml ≈ 35g 添加糖，直接顶到每日添加糖建议上限（<50g，最好 <25g）。「无糖可乐」没有这些糖，但别用它奖励自己多吃别的。' },
  { id: 'instant-noodle', name: '方便面', category: '需注意', energy: 472, protein: 9.5, fat: 21.1, carb: 61, fiber: 1.5, sodium: 1144, gi: '高', tag: '高油高盐⚠️', desc: '面饼油炸+调料包重盐，一包的钠轻松超过全天建议量的一半。偶尔吃可以：少放半包调料、加个蛋和青菜。' },
  { id: 'fried-chicken', name: '炸鸡', category: '需注意', energy: 279, protein: 19, fat: 18, carb: 8, fiber: 0.5, sodium: 760, gi: '—', tag: '油炸⚠️', desc: '裹粉+油炸让鸡肉热量翻倍，高温反复用油还可能产生有害物。去皮去衣能救回一些，但不如直接选烤或卤。' },
  { id: 'potato-chips', name: '薯片', category: '需注意', energy: 548, protein: 7, fat: 37.6, carb: 49, fiber: 2, sodium: 630, gi: '高', tag: '高油高盐⚠️', desc: '「土豆做的」不等于健康——脱水+油炸后热量密度是土豆的 7 倍。一包 100g ≈ 慢跑一小时的消耗。' },
  { id: 'ham-sausage', name: '火腿肠', category: '需注意', energy: 212, protein: 10.5, fat: 15.6, carb: 7.8, fiber: 0, sodium: 1087, gi: '—', tag: '加工肉·高钠⚠️', desc: '加工肉制品被 WHO 列为 1 类致癌物（指证据等级，不是毒性等级），钠也非常高。当风味点缀偶尔吃，别当蛋白质主力。' },
  { id: 'ice-cream', name: '冰淇淋', category: '需注意', energy: 127, protein: 2.4, fat: 5.3, carb: 17.3, fiber: 0, sodium: 54, gi: '中', tag: '添加糖⚠️', desc: '糖+脂肪的组合最容易过量。乳脂含量高的反而饱腹感强些；「植物奶油」版本可能含反式脂肪，看配料表避开「氢化植物油」。' },
  { id: 'milk-tea', name: '奶茶（全糖）', category: '需注意', energy: 60, protein: 0.6, fat: 1.8, carb: 10.5, fiber: 0, sodium: 40, gi: '中', tag: '添加糖⚠️', desc: '每 100ml 看着不高，但一大杯 500ml 就是 300kcal 起步，加料另算。很多奶茶用植脂末而非牛奶——既没补钙还可能有反式脂肪。' }
]

export const foodCategories = ['主食谷薯', '蛋白来源', '蔬菜', '水果', '坚果油脂', '需注意']

/** GI 分级说明（供详情弹窗展示） */
export const giLevels = {
  '低': { label: '低 GI（≤55）', color: '#3d9a63', note: '升糖平缓，控糖友好' },
  '中': { label: '中 GI（56~69）', color: '#d9930d', note: '适量吃，注意搭配' },
  '高': { label: '高 GI（≥70）', color: '#c94a6b', note: '升糖快，建议搭配蛋白质和蔬菜' },
  '—': { label: '不适用', color: '#8a9590', note: '碳水极少，GI 无实际意义' }
}
