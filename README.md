# 🌱 团团营养学 · nutri-learn

> 一个零基础友好的**营养学入门学习工具**——从看懂自己的餐盘开始，系统建立营养知识框架。
> 建框架 → 记概念 → 边学边用 → 刷题巩固，一条线走下来不迷路。

![Vue](https://img.shields.io/badge/Vue-3.4-42b883?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-42b883)

---

## ✨ 功能特性

| 模块 | 说明 |
|------|------|
| 🏠 **首页** | 学习路径导航、六大营养素概览、五大模块入口 |
| 📖 **营养素图鉴** | 六大类营养素细分 **23 种**（三大产能 + 11 种维生素 + 8 种矿物质 + 水），点开看功能、来源、权威推荐量、破除误区 |
| 📋 **膳食指南** | 《中国居民膳食指南（2022）》八条准则，手风琴展开，含核心量化与"怎么做" |
| 🧮 **热量计算器** | 基于 Mifflin-St Jeor 公式估算 BMR / TDEE，计算 BMI 与三大营养素分配，支持减脂/维持/增肌目标 |
| 🔍 **食物速查** | 常见食物每 100g 营养成分速查，支持搜索、分类筛选、按热量/蛋白排序 |
| ✅ **知识自测** | **38 道**分模块单选题（营养素 / 膳食指南 / 常见误区 / 热量），即时解析、成绩结算 |

## 🛠️ 技术栈

- **Vue 3.4**（Composition API · `<script setup>`）
- **Vue Router 4**（hash 路由）
- **Vite 5**（构建 / 开发服务器）
- 纯 CSS 设计系统（CSS 变量 + 自定义组件，无第三方 UI 库）
- 无后端，数据以静态 JS 模块维护

## 🚀 快速开始

> 需要 Node.js 18+

```bash
# 克隆（本仓库走 SSH）
git clone git@github.com:silence94108/nutri-learn.git
cd nutri-learn

# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 本地预览构建产物
npm run preview
```

## 📁 项目结构

```
src/
├── main.js            # 应用入口
├── App.vue            # 根组件（导航 + 路由出口 + 页脚）
├── components/        # AppNav 顶部导航、AppIcon 线性图标
├── views/             # 六大页面：Home / Nutrients / Guide / Calculator / Foods / Quiz
├── data/              # 数据层：nutrients / foods / guidelines / quiz
├── router/            # 路由配置（hash 模式）
└── styles/            # 全局设计系统与 CSS 变量
```

## 📚 数据来源

所有营养数据均依据公开权威标准整理，并标注参考值与版本：

- 《中国居民膳食指南（2022）》中国营养学会
- 《中国居民膳食营养素参考摄入量（2023 版）》中国营养学会
- 国家卫生行业标准 **WS/T 578** 系列（脂溶性 / 水溶性维生素等）
- 《中国食物成分表》

## 🗺️ 开发进度

知识库正分批深化中，详见 [`PROGRESS.md`](./PROGRESS.md)。

- ✅ 第 1 批 营养素图鉴深化（6 → 23 种）
- ✅ 第 2 批 测验题库扩容（10 → 38 题）
- ⬜ 第 3 批 食物库扩容
- ⬜ 第 4 批 每日健康食谱
- ⬜ 第 5 批 新增知识模块

## ⚠️ 免责声明

本项目为**学习与科普用途**。所有营养数据为一般成年人参考值，受年龄、性别、生理状态等影响会有差异，**不构成医疗建议或营养治疗方案**。传统食疗相关内容属于传统经验视角、非现代营养学结论。孕妇、儿童、老年人及慢性病患者请咨询专业营养师或医生。

## 📄 License

仅供个人学习使用。
