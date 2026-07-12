const inspirations = [
  {
    keyword: "Calm Dashboard",
    palette: "冰川蓝、纯白、雾灰",
    scene: "SaaS 数据看板、团队协作工具",
    colors: [
      { name: "主色", value: "#1769D8" },
      { name: "辅助色", value: "#8FC2FF" },
      { name: "背景色", value: "#F2F7FF" },
    ],
    description:
      "使用清晰的留白、克制的线条和柔和蓝色强调重点，让复杂信息更易扫描。",
    theme: {
      accent: "#1769d8",
      accentDark: "#0f57ba",
      accentSoft: "#f2f7ff",
      cardBorder: "rgba(78, 140, 220, 0.18)",
      shadow: "rgba(41, 91, 156, 0.14)",
      pageGlow: "rgba(219, 235, 255, 0.72)",
    },
  },
  {
    keyword: "Focused Workspace",
    palette: "深海蓝、浅天蓝、云白",
    scene: "效率工具、项目管理、文档编辑器",
    colors: [
      { name: "主色", value: "#2246A3" },
      { name: "辅助色", value: "#77A7FF" },
      { name: "背景色", value: "#EEF3FF" },
    ],
    description:
      "以稳定的蓝色建立信任感，通过紧凑的信息层级帮助用户快速进入工作状态。",
    theme: {
      accent: "#2246a3",
      accentDark: "#162d72",
      accentSoft: "#eef3ff",
      cardBorder: "rgba(34, 70, 163, 0.18)",
      shadow: "rgba(34, 70, 163, 0.13)",
      pageGlow: "rgba(226, 233, 255, 0.76)",
    },
  },
  {
    keyword: "Soft Finance",
    palette: "宝石蓝、薄荷绿、冷白",
    scene: "金融科技、预算管理、投资产品",
    colors: [
      { name: "主色", value: "#087EA4" },
      { name: "辅助色", value: "#70D7BF" },
      { name: "背景色", value: "#EEFBF8" },
    ],
    description:
      "用明亮但不刺眼的色彩表达专业与安全，适合展示数字、趋势和关键决策。",
    theme: {
      accent: "#087ea4",
      accentDark: "#065f7d",
      accentSoft: "#eefbf8",
      cardBorder: "rgba(8, 126, 164, 0.18)",
      shadow: "rgba(8, 126, 164, 0.13)",
      pageGlow: "rgba(219, 249, 243, 0.78)",
    },
  },
  {
    keyword: "Clean Portfolio",
    palette: "湖蓝、珍珠白、浅灰蓝",
    scene: "设计作品集、案例研究、个人主页",
    colors: [
      { name: "主色", value: "#3C84B8" },
      { name: "辅助色", value: "#C8DCE8" },
      { name: "背景色", value: "#F4F8FB" },
    ],
    description:
      "弱化装饰元素，突出项目图片与叙事节奏，让作品本身成为页面的视觉中心。",
    theme: {
      accent: "#3c84b8",
      accentDark: "#235a86",
      accentSoft: "#f4f8fb",
      cardBorder: "rgba(60, 132, 184, 0.18)",
      shadow: "rgba(60, 132, 184, 0.12)",
      pageGlow: "rgba(232, 243, 250, 0.86)",
    },
  },
  {
    keyword: "Modern Onboarding",
    palette: "电光蓝、白色、淡薰衣草",
    scene: "注册流程、新手引导、产品介绍页",
    colors: [
      { name: "主色", value: "#315CF6" },
      { name: "辅助色", value: "#B7C5FF" },
      { name: "背景色", value: "#F2F1FF" },
    ],
    description:
      "使用明确的步骤感、友好的说明文字和轻量视觉反馈，降低第一次使用的压力。",
    theme: {
      accent: "#315cf6",
      accentDark: "#2441b8",
      accentSoft: "#f2f1ff",
      cardBorder: "rgba(49, 92, 246, 0.17)",
      shadow: "rgba(49, 92, 246, 0.13)",
      pageGlow: "rgba(235, 233, 255, 0.82)",
    },
  },
  {
    keyword: "Warm Editorial",
    palette: "琥珀橙、墨黑、奶油白",
    scene: "内容社区、品牌杂志、故事型产品页",
    colors: [
      { name: "主色", value: "#D97706" },
      { name: "辅助色", value: "#1F2937" },
      { name: "背景色", value: "#FFF7ED" },
    ],
    description:
      "用温暖橙色制造亲近感，搭配深色文字形成清晰对比，适合更有叙事感的产品展示。",
    theme: {
      accent: "#d97706",
      accentDark: "#92400e",
      accentSoft: "#fff7ed",
      cardBorder: "rgba(217, 119, 6, 0.18)",
      shadow: "rgba(146, 64, 14, 0.12)",
      pageGlow: "rgba(255, 237, 213, 0.76)",
    },
  },
  {
    keyword: "Fresh Wellness",
    palette: "森林绿、鼠尾草绿、晨雾白",
    scene: "健康管理、习惯追踪、生活方式应用",
    colors: [
      { name: "主色", value: "#2F7D5B" },
      { name: "辅助色", value: "#A7D8BF" },
      { name: "背景色", value: "#F1FAF5" },
    ],
    description:
      "使用低饱和绿色营造自然和稳定感，让界面显得轻松、有呼吸感，也适合长期使用。",
    theme: {
      accent: "#2f7d5b",
      accentDark: "#1f5c42",
      accentSoft: "#f1faf5",
      cardBorder: "rgba(47, 125, 91, 0.18)",
      shadow: "rgba(47, 125, 91, 0.12)",
      pageGlow: "rgba(220, 248, 232, 0.78)",
    },
  },
  {
    keyword: "Creative Studio",
    palette: "紫罗兰、淡紫灰、月光白",
    scene: "AI 创作工具、设计平台、灵感收集器",
    colors: [
      { name: "主色", value: "#7C3AED" },
      { name: "辅助色", value: "#C4B5FD" },
      { name: "背景色", value: "#F5F3FF" },
    ],
    description:
      "以紫色传达创造力和探索感，浅紫背景降低视觉压力，适合突出生成、编辑和灵感类功能。",
    theme: {
      accent: "#7c3aed",
      accentDark: "#5b21b6",
      accentSoft: "#f5f3ff",
      cardBorder: "rgba(124, 58, 237, 0.17)",
      shadow: "rgba(91, 33, 182, 0.12)",
      pageGlow: "rgba(237, 233, 254, 0.82)",
    },
  },
  {
    keyword: "Coral Commerce",
    palette: "珊瑚红、蜜桃粉、暖白",
    scene: "电商活动页、会员权益、轻量促销工具",
    colors: [
      { name: "主色", value: "#E85D5A" },
      { name: "辅助色", value: "#FFB4A2" },
      { name: "背景色", value: "#FFF1EE" },
    ],
    description:
      "用柔和珊瑚色制造热情但不过度刺激的氛围，适合需要行动号召又保持高级感的页面。",
    theme: {
      accent: "#e85d5a",
      accentDark: "#b33b38",
      accentSoft: "#fff1ee",
      cardBorder: "rgba(232, 93, 90, 0.18)",
      shadow: "rgba(179, 59, 56, 0.12)",
      pageGlow: "rgba(255, 226, 221, 0.78)",
    },
  },
  {
    keyword: "Quiet Studio",
    palette: "炭黑、冷灰、雾白",
    scene: "作品展示、专业服务、极简工具界面",
    colors: [
      { name: "主色", value: "#27313F" },
      { name: "辅助色", value: "#94A3B8" },
      { name: "背景色", value: "#F8FAFC" },
    ],
    description:
      "以中性色建立冷静、克制的专业感，减少颜色干扰，适合强调内容质量和排版秩序。",
    theme: {
      accent: "#27313f",
      accentDark: "#111827",
      accentSoft: "#f8fafc",
      cardBorder: "rgba(39, 49, 63, 0.14)",
      shadow: "rgba(39, 49, 63, 0.1)",
      pageGlow: "rgba(226, 232, 240, 0.74)",
    },
  },
  {
    keyword: "Candy SaaS",
    palette: "气泡粉、莓果紫、糖霜白",
    scene: "年轻化 SaaS、活动页、轻量创作工具",
    colors: [
      { name: "主色", value: "#F472B6" },
      { name: "辅助色", value: "#C084FC" },
      { name: "背景色", value: "#FFF7FB" },
    ],
    description:
      "粉紫临近色让界面甜美但不跳脱，适合想表达年轻、友好和创意感的产品。",
    theme: {
      accent: "#f472b6",
      accentDark: "#be185d",
      accentSoft: "#fff7fb",
      cardBorder: "rgba(244, 114, 182, 0.18)",
      shadow: "rgba(190, 24, 93, 0.11)",
      pageGlow: "rgba(250, 232, 255, 0.78)",
    },
  },
  {
    keyword: "Aqua Growth",
    palette: "海洋蓝、湖水青、冰白",
    scene: "增长看板、环保科技、数据分析工具",
    colors: [
      { name: "主色", value: "#0EA5E9" },
      { name: "辅助色", value: "#14B8A6" },
      { name: "背景色", value: "#F0FDFA" },
    ],
    description:
      "蓝青临近色兼顾科技感和清爽感，既适合数据产品，也能表达增长、流动和可持续。",
    theme: {
      accent: "#0ea5e9",
      accentDark: "#0369a1",
      accentSoft: "#f0fdfa",
      cardBorder: "rgba(14, 165, 233, 0.18)",
      shadow: "rgba(3, 105, 161, 0.12)",
      pageGlow: "rgba(204, 251, 241, 0.78)",
    },
  },
  {
    keyword: "Lemon Grape",
    palette: "柠檬黄、蜜橙、浅奶白",
    scene: "创意活动、教育产品、趣味问卷",
    colors: [
      { name: "主色", value: "#FACC15" },
      { name: "辅助色", value: "#FB923C" },
      { name: "背景色", value: "#FEFCE8" },
    ],
    description:
      "黄橙临近色明亮温暖，用浅背景缓和饱和度，适合制造活泼、积极的页面情绪。",
    theme: {
      accent: "#facc15",
      accentDark: "#b45309",
      accentSoft: "#fefce8",
      cardBorder: "rgba(250, 204, 21, 0.22)",
      shadow: "rgba(180, 83, 9, 0.11)",
      pageGlow: "rgba(254, 240, 138, 0.68)",
    },
  },
  {
    keyword: "Tangerine Tech",
    palette: "活力橙、珊瑚红、米白",
    scene: "开发者工具、发布页、产品更新页面",
    colors: [
      { name: "主色", value: "#F97316" },
      { name: "辅助色", value: "#F43F5E" },
      { name: "背景色", value: "#FFFBEB" },
    ],
    description:
      "橙红临近色负责行动感和热度，适合让功能发布页面醒目，同时保持统一的暖色气质。",
    theme: {
      accent: "#f97316",
      accentDark: "#c2410c",
      accentSoft: "#fffbeb",
      cardBorder: "rgba(249, 115, 22, 0.18)",
      shadow: "rgba(194, 65, 12, 0.11)",
      pageGlow: "rgba(255, 237, 213, 0.76)",
    },
  },
  {
    keyword: "Neon Planner",
    palette: "玫红、紫红、冷白",
    scene: "任务计划、社群工具、活动日历",
    colors: [
      { name: "主色", value: "#E11D48" },
      { name: "辅助色", value: "#C026D3" },
      { name: "背景色", value: "#F8FAFC" },
    ],
    description:
      "玫红与紫红保持接近色相，既有能量也更统一，适合突出提醒、状态和行动。",
    theme: {
      accent: "#e11d48",
      accentDark: "#9f1239",
      accentSoft: "#f8fafc",
      cardBorder: "rgba(225, 29, 72, 0.17)",
      shadow: "rgba(159, 18, 57, 0.11)",
      pageGlow: "rgba(252, 231, 243, 0.72)",
    },
  },
  {
    keyword: "Lagoon Pop",
    palette: "湖水青、海岸蓝、薄荷白",
    scene: "旅行产品、生活方式、电商精选页",
    colors: [
      { name: "主色", value: "#14B8A6" },
      { name: "辅助色", value: "#38BDF8" },
      { name: "背景色", value: "#F0FDFA" },
    ],
    description:
      "青蓝临近色清爽、明亮、有流动感，适合呈现轻松且带探索感的消费体验。",
    theme: {
      accent: "#14b8a6",
      accentDark: "#0f766e",
      accentSoft: "#f0fdfa",
      cardBorder: "rgba(20, 184, 166, 0.18)",
      shadow: "rgba(15, 118, 110, 0.11)",
      pageGlow: "rgba(224, 242, 254, 0.74)",
    },
  },
  {
    keyword: "Royal Lime",
    palette: "皇家蓝、亮紫蓝、浅灰白",
    scene: "运动数据、排行榜、挑战型产品",
    colors: [
      { name: "主色", value: "#2563EB" },
      { name: "辅助色", value: "#6366F1" },
      { name: "背景色", value: "#F8FAFC" },
    ],
    description:
      "蓝紫临近色带来秩序与速度感，适合强调进度、竞争和即时反馈，同时更稳定协调。",
    theme: {
      accent: "#2563eb",
      accentDark: "#1d4ed8",
      accentSoft: "#f8fafc",
      cardBorder: "rgba(37, 99, 235, 0.17)",
      shadow: "rgba(29, 78, 216, 0.12)",
      pageGlow: "rgba(224, 231, 255, 0.72)",
    },
  },
  {
    keyword: "Peach Indigo",
    palette: "靛蓝、紫罗兰、柔雾白",
    scene: "品牌官网、课程产品、会员中心",
    colors: [
      { name: "主色", value: "#4F46E5" },
      { name: "辅助色", value: "#8B5CF6" },
      { name: "背景色", value: "#F5F3FF" },
    ],
    description:
      "靛蓝与紫罗兰相邻，能保持专业感并增加一点创意气质，适合可信但不沉闷的服务型产品。",
    theme: {
      accent: "#4f46e5",
      accentDark: "#3730a3",
      accentSoft: "#f5f3ff",
      cardBorder: "rgba(79, 70, 229, 0.17)",
      shadow: "rgba(55, 48, 163, 0.11)",
      pageGlow: "rgba(237, 233, 254, 0.72)",
    },
  },
  {
    keyword: "Mint System",
    palette: "薄荷绿、青柠绿、晨雾白",
    scene: "健康应用、清单工具、轻量仪表盘",
    colors: [
      { name: "主色", value: "#10B981" },
      { name: "辅助色", value: "#84CC16" },
      { name: "背景色", value: "#F0FDF4" },
    ],
    description:
      "绿到黄绿的临近色清新自然，适合表达轻盈、成长和持续改善的产品体验。",
    theme: {
      accent: "#10b981",
      accentDark: "#047857",
      accentSoft: "#f0fdf4",
      cardBorder: "rgba(16, 185, 129, 0.18)",
      shadow: "rgba(4, 120, 87, 0.11)",
      pageGlow: "rgba(220, 252, 231, 0.72)",
    },
  },
  {
    keyword: "Cobalt Flow",
    palette: "钴蓝、青蓝、冷白",
    scene: "协作平台、自动化流程、开发者控制台",
    colors: [
      { name: "主色", value: "#2563EB" },
      { name: "辅助色", value: "#06B6D4" },
      { name: "背景色", value: "#EFF6FF" },
    ],
    description:
      "蓝到青蓝的临近色稳定且有流动感，适合呈现流程、状态和系统化操作。",
    theme: {
      accent: "#2563eb",
      accentDark: "#1d4ed8",
      accentSoft: "#eff6ff",
      cardBorder: "rgba(37, 99, 235, 0.17)",
      shadow: "rgba(29, 78, 216, 0.11)",
      pageGlow: "rgba(207, 250, 254, 0.72)",
    },
  },
  {
    keyword: "Rose Studio",
    palette: "玫瑰粉、暖红、浅粉白",
    scene: "美妆产品、品牌活动、创作者主页",
    colors: [
      { name: "主色", value: "#F43F5E" },
      { name: "辅助色", value: "#FB7185" },
      { name: "背景色", value: "#FFF1F2" },
    ],
    description:
      "红粉临近色柔和但有情绪记忆点，适合需要温度、亲密感和精致感的品牌界面。",
    theme: {
      accent: "#f43f5e",
      accentDark: "#be123c",
      accentSoft: "#fff1f2",
      cardBorder: "rgba(244, 63, 94, 0.17)",
      shadow: "rgba(190, 18, 60, 0.11)",
      pageGlow: "rgba(255, 228, 230, 0.74)",
    },
  },
  {
    keyword: "Amber Notes",
    palette: "琥珀黄、橙金、奶油白",
    scene: "笔记工具、知识库、阅读产品",
    colors: [
      { name: "主色", value: "#F59E0B" },
      { name: "辅助色", value: "#F97316" },
      { name: "背景色", value: "#FFFBEB" },
    ],
    description:
      "黄橙临近色温暖明亮，适合营造记录、灵感和知识沉淀的柔和氛围。",
    theme: {
      accent: "#f59e0b",
      accentDark: "#b45309",
      accentSoft: "#fffbeb",
      cardBorder: "rgba(245, 158, 11, 0.2)",
      shadow: "rgba(180, 83, 9, 0.11)",
      pageGlow: "rgba(254, 243, 199, 0.74)",
    },
  },
  {
    keyword: "Lilac Board",
    palette: "淡紫、紫粉、月光白",
    scene: "灵感看板、AI 工具、设计协作空间",
    colors: [
      { name: "主色", value: "#8B5CF6" },
      { name: "辅助色", value: "#D946EF" },
      { name: "背景色", value: "#FAF5FF" },
    ],
    description:
      "紫到紫粉的临近色带来创造力和柔和能量，适合灵感、生成和编辑类界面。",
    theme: {
      accent: "#8b5cf6",
      accentDark: "#6d28d9",
      accentSoft: "#faf5ff",
      cardBorder: "rgba(139, 92, 246, 0.17)",
      shadow: "rgba(109, 40, 217, 0.11)",
      pageGlow: "rgba(245, 208, 254, 0.68)",
    },
  },
  {
    keyword: "Ocean Desk",
    palette: "深海蓝、孔雀蓝、雾蓝白",
    scene: "企业后台、数据工作台、B 端工具",
    colors: [
      { name: "主色", value: "#1D4ED8" },
      { name: "辅助色", value: "#0284C7" },
      { name: "背景色", value: "#F0F9FF" },
    ],
    description:
      "蓝色系内部的临近搭配让界面更稳重，适合需要长时间使用和高信息密度的产品。",
    theme: {
      accent: "#1d4ed8",
      accentDark: "#1e3a8a",
      accentSoft: "#f0f9ff",
      cardBorder: "rgba(29, 78, 216, 0.17)",
      shadow: "rgba(30, 58, 138, 0.11)",
      pageGlow: "rgba(224, 242, 254, 0.74)",
    },
  },
  {
    keyword: "Citrus Habit",
    palette: "青柠绿、柠檬黄、浅绿白",
    scene: "习惯养成、运动打卡、目标追踪",
    colors: [
      { name: "主色", value: "#65A30D" },
      { name: "辅助色", value: "#EAB308" },
      { name: "背景色", value: "#F7FEE7" },
    ],
    description:
      "黄绿临近色有积极、轻快的节奏感，适合目标、进度和日常激励类功能。",
    theme: {
      accent: "#65a30d",
      accentDark: "#3f6212",
      accentSoft: "#f7fee7",
      cardBorder: "rgba(101, 163, 13, 0.18)",
      shadow: "rgba(63, 98, 18, 0.1)",
      pageGlow: "rgba(236, 252, 203, 0.74)",
    },
  },
  {
    keyword: "Sunset CRM",
    palette: "暮橙、暖红、桃雾白",
    scene: "客户管理、销售看板、活动运营",
    colors: [
      { name: "主色", value: "#EA580C" },
      { name: "辅助色", value: "#DC2626" },
      { name: "背景色", value: "#FFF7ED" },
    ],
    description:
      "橙红临近色带来行动感和热度，适合销售、转化和运营类场景中的重点信息。",
    theme: {
      accent: "#ea580c",
      accentDark: "#9a3412",
      accentSoft: "#fff7ed",
      cardBorder: "rgba(234, 88, 12, 0.18)",
      shadow: "rgba(154, 52, 18, 0.11)",
      pageGlow: "rgba(255, 237, 213, 0.74)",
    },
  },
];

const keywordEl = document.querySelector("#keyword");
const paletteEl = document.querySelector("#palette");
const sceneEl = document.querySelector("#scene");
const colorListEl = document.querySelector("#colorList");
const descriptionEl = document.querySelector("#description");
const generateBtn = document.querySelector("#generateBtn");
const cardEl = document.querySelector(".card");

let currentIndex = 0;
let isAnimating = false;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const pointer = {
  currentX: 18,
  currentY: 16,
  targetX: 18,
  targetY: 16,
};

function updatePointerGlow() {
  pointer.currentX += (pointer.targetX - pointer.currentX) * 0.12;
  pointer.currentY += (pointer.targetY - pointer.currentY) * 0.12;

  document.body.style.setProperty("--mouse-x", `${pointer.currentX}%`);
  document.body.style.setProperty("--mouse-y", `${pointer.currentY}%`);
  window.requestAnimationFrame(updatePointerGlow);
}

function handlePointerMove(event) {
  pointer.targetX = (event.clientX / window.innerWidth) * 100;
  pointer.targetY = (event.clientY / window.innerHeight) * 100;
}

function getTextColor(hex) {
  const normalizedHex = hex.replace("#", "");
  const red = parseInt(normalizedHex.slice(0, 2), 16);
  const green = parseInt(normalizedHex.slice(2, 4), 16);
  const blue = parseInt(normalizedHex.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  return brightness > 170 ? "#26344d" : "#ffffff";
}

function renderCard(card) {
  const root = document.body.style;

  keywordEl.textContent = card.keyword;
  paletteEl.textContent = card.palette;
  sceneEl.textContent = card.scene;
  descriptionEl.textContent = card.description;
  colorListEl.innerHTML = card.colors
    .map((color, index) => {
      const textColor = getTextColor(color.value);

      return `
        <div class="color-item" style="--swatch-index: ${index}; background-color: ${color.value}; color: ${textColor}">
          <span class="color-name">${color.name}</span>
          <span class="color-value">${color.value}</span>
        </div>
      `;
    })
    .join("");

  root.setProperty("--accent", card.theme.accent);
  root.setProperty("--accent-dark", card.theme.accentDark);
  root.setProperty("--accent-soft", card.theme.accentSoft);
  root.setProperty("--secondary", card.colors[1].value);
  root.setProperty("--card-border", card.theme.cardBorder);
  root.setProperty("--shadow-color", card.theme.shadow);
  root.setProperty("--page-glow", card.theme.pageGlow);
}

function createMiniFirework() {
  const firework = document.createElement("div");
  firework.className = "mini-firework";

  for (let index = 0; index < 10; index += 1) {
    const particle = document.createElement("span");
    const angle = index * 36 - 8;
    const distance = 28 + (index % 3) * 9;

    particle.style.setProperty("--angle", `${angle}deg`);
    particle.style.setProperty("--distance", `${distance}px`);
    particle.style.setProperty("--delay", `${index * 14}ms`);
    firework.append(particle);
  }

  cardEl.append(firework);
  window.setTimeout(() => firework.remove(), 920);
}

function animateToCard(card) {
  if (prefersReducedMotion) {
    renderCard(card);
    return;
  }

  isAnimating = true;
  generateBtn.disabled = true;
  generateBtn.classList.add("is-loading");
  cardEl.classList.add("is-switching-out");

  window.setTimeout(() => {
    renderCard(card);
    createMiniFirework();
    cardEl.classList.remove("is-switching-out");
    cardEl.classList.add("is-switching-in");

    window.setTimeout(() => {
      cardEl.classList.remove("is-switching-in");
      generateBtn.classList.remove("is-loading");
      generateBtn.disabled = false;
      isAnimating = false;
    }, 760);
  }, 180);
}

function getRandomIndex() {
  let nextIndex = Math.floor(Math.random() * inspirations.length);

  if (inspirations.length > 1) {
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * inspirations.length);
    }
  }

  return nextIndex;
}

generateBtn.addEventListener("click", () => {
  if (isAnimating) {
    return;
  }

  currentIndex = getRandomIndex();
  animateToCard(inspirations[currentIndex]);
});

if (!prefersReducedMotion) {
  window.addEventListener("pointermove", handlePointerMove);
  window.requestAnimationFrame(updatePointerGlow);
}

renderCard(inspirations[currentIndex]);
