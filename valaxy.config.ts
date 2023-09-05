import { defineValaxyConfig } from "valaxy";
import type { UserThemeConfig } from "valaxy-theme-yun";
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";

const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "Zhuba`Blog",
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: "我的小伙伴们",
        url: "/links/",
        icon: "i-ri-genderless-line",
        color: "dodgerblue",
      },
    ],

    // footer: {
    //   since: 2023,
    //   beian: {
    //     enable: true,
    //     icp: '苏ICP备17038157号',
    //   },
    // },
  },

  unocss: { safelist },

  // 启用评论
  // comment: {
  //   enable: true
  // },
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonComponents(),
    addonWaline({
      serverURL: "https://waline-data-hiui8s59u-zhuba-ahhh.vercel.app",
    }),
  ],

  vite: {
    plugins: [],
  },
});
