import { defineValaxyConfig } from "valaxy";
import type { ThemeConfig } from "valaxy-theme-custom";
import { addonLightGallery } from "valaxy-addon-lightgallery";
import compression from "vite-plugin-compression2";
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { tab } from "@mdit/plugin-tab";
import { addonWaline } from 'valaxy-addon-waline'

/**
 * User Config
 */
export default defineValaxyConfig<ThemeConfig>({
  addons: [
    addonLightGallery(),
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline-valaxy-blog.314926.xyz',
    }),
  ],
  
  vite: {
    optimizeDeps: {
      include: ["axios"],
    },
    plugins: [
      compression(),
      ViteMinifyPlugin({
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      }),
    ],
  },

  theme: "custom",

  themeConfig: {
    author: {
      slogan: "总有些事情高于其他！",
    },

    footer: {
      left_top:[
        {
          name: "十年之约",
          url: "https://www.foreverblog.cn/",
          img: "https://img.foreverblog.cn/logo_en_default.png",
          width: '150',
          height: '18'
        },
        {
          name: "穿梭虫洞-随机访问十年之约友链博客",
          url: "https://www.foreverblog.cn/go.html",
          img: "https://img.foreverblog.cn/wormhole_3_tp.gif",
          width: '60',
          height: '18'
        },
        {
          name: "开往",
          url: "https://www.travellings.cn/go.html",
          img: "https://www.travellings.cn/assets/logo.gif",
          width: '90',
          height: '10'
        },
        {
          name: "无聊湾 🥱 The Boring Bay",
          url: "https://boringbay.com",
          img: "https://boringbay.com/api/badge/blog.storical.space",
          width: '115',
          height: '18'
        },
        {
          name: "本站已加入BLOGS·CN",
          url: "https://blogscn.fun/",
          img: "https://photo.xiangming.site/img/blogscn.png",
          width: '140',
          height: '18'
        },
        {
          name: "BLOGS·CN随机访问",
          url: "https://blogscn.fun/random.html",
          img: "https://photo.xiangming.site/img/footer.gif",
          width: '80',
          height: '18'
        },
        {
          name: "空间穿梭-随机访问BlogsClub成员博客",
          url: "https://www.blogsclub.org/go",
          img: "https://www.blogsclub.org/images/shuttle_1.png",
          width: '65',
          height: '18'
        },
        {
          name: "本站已支持HTTP/3",
          url: "https://http3.wcode.net/?q=blog.storical.space",
          img: "https://http3.wcode.net/badges/http3.svg?host=blog.storical.space",
          width: '160',
          height: '18'
        }
      ],
      left_bottom:[
        // {
        //   name: "萌ICP备20231033号",
        //   url: "https://icp.gov.moe/?keyword=20231033"
        // },
        // {
        //   name: "团ICP备20250007号",
        //   url: "https://icp.星.fun/id.php?keyword=20250007"
        // },
        // {
        //   name: "MIIT备20240818号",
        //   url: "https://beian.miit.cn.com/gov/search.php?query=20240818"
        // },
        // {
        //   name: "官码2024000155号",
        //   url: "https://guan.ma/hao/2024000155/"
        // },
        // {
        //   name: "SICP备20243448号",
        //   url: "https://icp.sepocatch.xyz/search.php?keyword=blog.storical.space"
        // },
        // {
        //   name: "追梦ICP备20251025号",
        //   url: "https://icp.20097747.xyz/id.php?keyword=20251025"
        // }
      ],
      since: 2025,
      beian: {
        icp: {
          enable: false,
          info: "",
        },
        moe: {
          enable: false,
          info: "20230105",
        },
      },
      hitokoto: {
        enable: true,
      }
    },

    pages: [
      {
        name: "归档",
        url: "/archives",
      },
      {
        name: "友链",
        url: "/links",
      },
    ],

    asidePages: [
      {
        name: "隐私政策",
        url: "/policies/privacy",
      },
      {
        name: "音乐盒",
        url: "/music",
      },
      {
        name: "关于我",
        url: "/about",
      },
    ],

    asideLinks:[
      {
        name: '中文博客列表',
        url: 'https://zhblogs.ohyee.cc/'
      },
      {
        name: '个站商店',
        url: 'https://storeweb.cn/member/o/1585'
      },
      {
        name: 'BlogFinder',
        url: 'https://bf.zzxworld.com/s/995'
      },
      {
        name: '站点聚合平台',
        url: 'https://sites.applinzi.com/site-info?siteType=life&siteId=64cb373190e35300a8eec654'
      },
      {
        name: '博客录',
        url: 'https://boke.lu/'
      },
      {
        name: '十年之约',
        url: 'https://www.foreverblog.cn/blog/6371.html'
      },
      {
        name: 'RssBlog',
        url: 'https://rssblog.cn/member/d711afd659d65c2ba2d3b18697818cf7/'
      },
      {
        name: '笔墨迹',
        url: 'https://blogscn.fun/'
      },
      {
        name: '博客大全',
        url: 'https://daohang.lusongsong.com/'
      },
      {
        name: 'BlogsClub',
        url: 'https://www.blogsclub.org/blog/99.html'
      },
      {
        name: 'OurBlogs',
        url: 'https://ourblo.gs/blogs/55/'
      },
    ],

    quickAccess: [
      {
        name: "RSS",
        url: "/atom.xml",
        icon: "i-ri-rss-line",
      },
    ],

    announcement: {
      enable: true,
      type: "warning",
      content: "欢迎来到我的博客，这里记录了我的生活和思考。",
    },

    valaxyDarkOptions: {
      useDarkOptions: {
        selector: "html",
        attribute: 'data-theme',
        valueDark: "dark",
        valueLight: "light",
        disableTransition: false,
      },

      circleTransition: false,
    },

    pageLoading: true,

    webmention: {
      enable: false,
      mention: 'https://webmention.io/blog.storical.space/webmention',
    },

    indiewebring: true,
  },

  features: {
    katex: false,
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    config(md) {
      md.use(tab, {
        // 你的选项，name 是必填的
        tabClass: 'custom-tab',
      });
    }
  },

  build: {
    ssgForPagination: false,
  },

  modules: {
    rss: {
      enable: true,
      fullText: false,
    },
  }
});
