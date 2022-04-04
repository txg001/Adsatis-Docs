import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Adsatis Git Training"},["/index.html","/README.md"]],
  ["v-f6896af4","/bitbucket/clone-repo.html",{"title":"2. Cloning a Git repository"},["/bitbucket/clone-repo","/bitbucket/clone-repo.md"]],
  ["v-b88852f8","/bitbucket/commit-and-push.html",{"title":"3. Commit and Push"},["/bitbucket/commit-and-push","/bitbucket/commit-and-push.md"]],
  ["v-1d8ce0a7","/bitbucket/create-repo.html",{"title":"1. Creating a new repository"},["/bitbucket/create-repo","/bitbucket/create-repo.md"]],
  ["v-6e5a664a","/bitbucket/tutorial.html",{"title":"Title of this page"},["/bitbucket/tutorial","/bitbucket/tutorial.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
