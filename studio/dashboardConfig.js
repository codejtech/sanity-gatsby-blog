export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e02ac44312244717d0b4f12',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tnm9gk4v',
                  apiId: '670ac327-7486-42e8-b22b-ebb0cfe3c51a'
                },
                {
                  buildHookId: '5e02ac4464a22cb7c39759c0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9x3uxxqr',
                  apiId: '921def0c-141b-45d9-a700-e0785a76442a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codejtech/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9x3uxxqr.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
