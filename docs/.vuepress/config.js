module.exports = {
  title: 'PopMenu',
  description: 'Easily customizable popup style menu for iOS',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#32b436' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Saira:400,500,600,700,800' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC' }],
    ['meta', { rel: 'theme-color', content: '#ffffff' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/CaliCastle/PopMenu' },
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide',
        collapsable: false,
        children: [
          ['/guide/', 'Introduction'],
          '/guide/getting-started'
        ]
      }
    ]
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