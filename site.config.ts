import { defineSiteConfig } from "valaxy";

export default defineSiteConfig({
  url: "",
  lang: "zh-CN",
  title: "Welcome To ZhuBa'blog",
  author: {
    name: "ZhuBa",
    avatar: "https://avatars.githubusercontent.com/u/84793349?v=4",
  },
  favicon: "https://avatars.githubusercontent.com/u/84793349?v=4",
  description: "ZhuBa'blog",
  subtitle: "",
  social: [
    {
      name: "GitHub",
      link: "https://github.com/zhuba-Ahhh",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/424243300",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "E-Mail",
      link: "mailto:yanwenjunxtu@gmail.com",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },

  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      // threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  sponsor: {
    enable: false,
    title: "我很可爱，请给我钱！",
    methods: [],
  },

  /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
});
