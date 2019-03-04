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
    ['meta', { rel: 'theme-color', content: '#ffffff' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/CaliCastle/PopMenu' },
    ],
    displayAllHeaders: true
  }
}