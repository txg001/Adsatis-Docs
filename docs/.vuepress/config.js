module.exports = {
    // site config
    lang: 'en-US',
    title: 'Docs',
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/logo.png',
      sidebar: {
        '/': [
          {
            text: 'BitBucket',
            collapsible: true,
            children: ['/bitbucket/create-repo.md', '/bitbucket/clone-repo.md', '/bitbucket/commit-and-push.md'],
          },
          {
            text: 'General',
            collapsible: true,
            children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
          },
        ],
      },
    },
  }