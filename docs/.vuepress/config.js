module.exports = {
  title: 'PopMenu',
  description: 'A fully customizable popup style menu for iOS',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#32b436' }],
    ['meta', { rel: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: true }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira:400,500,600,700,800' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A fully customizable popup style menu for iOS'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '全方面可自定义的iOS弹出菜单'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English (U.S.)',
        nav: [
          { text: 'Guide', icon: { name: 'book', type: 'solid' }, link: '/guide/' },
          {
            link: 'https://join.slack.com/t/newpopmenu/shared_invite/enQtMzQ4OTExMzE0OTM1LWFhM2IxYmYxOGZmMTgzNjQxMWRiNzUyZmYwN2M4ZmQ2YWYxY2VhNWI3MDlmM2JhOTM5NjAwODlmNjQzMmVlODM',
            text: 'Support',
            icon: { name: 'envelope-open', type: 'solid' },
            items: [
              {
                text: 'Slack',
                icon: { name: 'slack', type: 'brand' },
                link: 'https://join.slack.com/t/newpopmenu/shared_invite/enQtMzQ4OTExMzE0OTM1LWFhM2IxYmYxOGZmMTgzNjQxMWRiNzUyZmYwN2M4ZmQ2YWYxY2VhNWI3MDlmM2JhOTM5NjAwODlmNjQzMmVlODM'
              },
              {
                text: 'Open Issue',
                icon: { name: 'github', type: 'brand' },
                link: 'https://github.com/CaliCastle/popmenu/issues/new'
              },
              {
                text: 'Twitter',
                icon: { name: 'twitter', type: 'brand' },
                link: 'https://twitter.com/calicastlemusic'
              }
            ]
          },
          { text: 'GitHub', icon: { name: 'github', type: 'brand' }, link: 'https://github.com/CaliCastle/PopMenu' },
        ],
        sidebar: [
          {
            title: 'Guide',
            path: '/guide',
            collapsable: false,
            children: [
              ['/guide/', 'Introduction'],
              '/guide/getting-started',
              '/guide/how-to-use',
              '/guide/using-controller',
              '/guide/using-manager',
              '/guide/configurations'
            ]
          },
          {
            title: 'Customization',
            path: '/customization',
            collapsable: false,
            children: [
              '/customization/'
            ]
          }
        ],
        editLinkText: 'Help improve this page'
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '开发指南', icon: { name: 'book', type: 'solid' }, link: '/zh/guide/' },
          {
            text: '联系',
            icon: { name: 'envelope-open', type: 'solid' },
            items: [
              {
                text: '加入Slack',
                icon: { name: 'slack', type: 'brand' },
                link: 'https://join.slack.com/t/newpopmenu/shared_invite/enQtMzQ4OTExMzE0OTM1LWFhM2IxYmYxOGZmMTgzNjQxMWRiNzUyZmYwN2M4ZmQ2YWYxY2VhNWI3MDlmM2JhOTM5NjAwODlmNjQzMmVlODM'
              },
              {
                text: '创建Issue',
                icon: { name: 'github', type: 'brand' },
                link: 'https://github.com/CaliCastle/popmenu/issues/new'
              },
              {
                text: 'Twitter',
                icon: { name: 'twitter', type: 'brand' },
                link: 'https://twitter.com/calicastlemusic'
              }
            ]
          },
          { text: 'GitHub', icon: { name: 'github', type: 'brand' }, link: 'https://github.com/CaliCastle/PopMenu' },
        ],
        sidebar: [
          {
            title: '开发指南',
            path: '/zh/guide',
            collapsable: false,
            children: [
              '/zh/guide/',
              '/zh/guide/getting-started',
              '/zh/guide/how-to-use',
              '/zh/guide/using-controller',
              '/zh/guide/using-manager',
              '/zh/guide/configurations'
            ]
          },
          {
            title: '自定义样式',
            path: '/zh/customization',
            collapsable: false,
            children: [
              '/zh/customization/'
            ]
          }
        ],

        editLinkText: '帮忙优化此页面'
      }
    },
    logo: '/logo.png',

    docsRepo: 'CaliCastle/popmenu.docs',
    docsDir: 'docs',
    editLinks: true,
  },
  plugins: {
    '@vuepress/active-header-links': {},
    '@vuepress/back-to-top': {},
    '@vuepress/clean-urls': {
      normalSuffix: ''
    },
    '@vuepress/last-updated': {},
    '@vuepress/medium-zoom': {}
  }
};
