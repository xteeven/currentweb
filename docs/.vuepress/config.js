module.exports = {
  plugins: ['vuepress-plugin-nprogress'],
  head: [
    ['link', { rel: 'icon', href: '/images/VR.svg' }]
  ],
  title: 'PostHCI',
  description: 'The future of humans, computers and interaction',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/bio/' },
      { text: 'Teaching', link: '/teaching/' },
      {
        text: 'Research', link: '/research/#current-reseach', items:
          [{ text: 'Current Research', link: '/research/#current-reseach' },
          { text: 'Ms.C Research', link: '/research/#ms-c-research' },
          { text: 'Bs. Research', link: '/research/#bs-research' }
          ]
      },
      { text: 'Work', link: '/work/' },
      { text: 'Press', link: '/press/' },
      { text: 'Social', link: '/social/' },
    ],
    sidebar: 'auto'
  }
};