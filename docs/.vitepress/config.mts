import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Supe Projects Docs",
  description: "The place where all your technological super powers meet!",
  themeConfig: {
    logo: '/assets/logo.png',
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        locales: {
          zh: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Introduction', link: '/markdown-examples' },
            { text: 'Getting Started', link: '/api-examples' }
          ]
        },
        {
          text: 'Section Title B',
          items: [
            { text: 'Item C', link: '/item-c' },
            { text: 'Item D', link: '/item-d' },
          ]
        },
        {
          text: 'Level 1',
          items: [
            {
              text: 'Level 2',
              items: [
                {
                  text: 'Level 3',
                  items: [
                    { text: 'Item A', link: '/item-a' },
                    { text: 'Item B', link: '/item-b' },
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Index', link: '/examples/' },
            { text: 'Three', link: '/examples/api-examples' },
            { text: 'Four', link: '/examples/markdown-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JSR</title><path d="M3.692 5.538v3.693H0v7.384h7.385v1.847h12.923v-3.693H24V7.385h-7.385V5.538Zm1.846 1.847h1.847v7.384H1.846v-3.692h1.846v1.846h1.846zm3.693 0h5.538V9.23h-3.692v1.846h3.692v5.538H9.231V14.77h3.692v-1.846H9.231Zm7.384 1.846h5.539v3.692h-1.846v-1.846h-1.846v5.538h-1.847z"></path></svg>'
        }, link: 'https://github.com/vuejs/vitepress'
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Burgil'
    }
  }
})
