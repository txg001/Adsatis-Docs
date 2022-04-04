export const data = {
  "key": "v-6e5a664a",
  "path": "/bitbucket/tutorial.html",
  "title": "Title of this page",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "title": "Title of this page",
    "description": "Description of this page"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Step 1: Create a new repository",
      "slug": "step-1-create-a-new-repository",
      "children": []
    },
    {
      "level": 2,
      "title": "Step 2:",
      "slug": "step-2",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "bitbucket/tutorial.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
