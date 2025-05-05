// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8", // 紫色主色
        secondary: "#F472B6", // 粉色次要色
        background: "#1E1E2F", // 深灰背景色
        card: "#2A2A3C", // 浅灰卡片色
        text: "#E4E4E7", // 浅色文字
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"], // 等宽字体
      },
    },
  },
  plugins: [],
};
