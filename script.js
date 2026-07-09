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
];

const keywordEl = document.querySelector("#keyword");
const paletteEl = document.querySelector("#palette");
const sceneEl = document.querySelector("#scene");
const colorListEl = document.querySelector("#colorList");
const descriptionEl = document.querySelector("#description");
const generateBtn = document.querySelector("#generateBtn");

let currentIndex = 0;

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
    .map((color) => {
      const textColor = getTextColor(color.value);

      return `
        <div class="color-item" style="background-color: ${color.value}; color: ${textColor}">
          <span class="color-name">${color.name}</span>
          <span class="color-value">${color.value}</span>
        </div>
      `;
    })
    .join("");

  root.setProperty("--accent", card.theme.accent);
  root.setProperty("--accent-dark", card.theme.accentDark);
  root.setProperty("--accent-soft", card.theme.accentSoft);
  root.setProperty("--card-border", card.theme.cardBorder);
  root.setProperty("--shadow-color", card.theme.shadow);
  root.setProperty("--page-glow", card.theme.pageGlow);
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
  currentIndex = getRandomIndex();
  renderCard(inspirations[currentIndex]);
});

renderCard(inspirations[currentIndex]);
