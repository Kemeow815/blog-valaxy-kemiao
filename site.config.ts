import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "https://blog.kemiaosw.top",
  favicon: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/Kemeow815avatar.png",
  lang: "zh-CN",
  title: "喵落阁",
  author: {
    name: "克喵爱吃卤面",
    avatar: "https://s2.loli.net/2025/04/17/RpTyvlwan1WJDmt.jpg",
    email: "kemiaofx@163.com",
    link: "https://www.kemiao.online",
  },
  description: "每一段旅行都有终点！",
  subtitle: "来逛逛吧！",

  feed: {
    favicon: "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/Kemeow815avatar.png",
  },

  cdn: {
    prefix: "https://npm.elemecdn.com/",
  },

  social: [
    {
      name: "GitHub",
      link: "https://github.com/Kemeow815",
      icon: "ri-github-line",
      color: "#6e5494",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/479627766",
      icon: "ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "E-Mail",
      link: "mailto:kemiaofx@163.com",
      icon: "ri-mail-line",
      color: "#8E71C1",
    },
  ],

  search: {
    enable: true,
    type: "fuse",
  },

  sponsor: {
    enable: true,
    description: "给我打钱，助力资源分享计划",
    methods: [
      {
        name: "支付宝",
        url: "https://s2.loli.net/2025/04/05/EXl1ANdSiPvpMCr.jpg",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
    ],
  },

  comment: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },

  statistics: {
    enable: true,
  },

  vanillaLazyload: {
    enable: false,
  },
});
