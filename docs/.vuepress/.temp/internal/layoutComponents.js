import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/ryanbrown/Library/Mobile Documents/com~apple~CloudDocs/Work/Adsatis Solutions/VuePress Project/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/ryanbrown/Library/Mobile Documents/com~apple~CloudDocs/Work/Adsatis Solutions/VuePress Project/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
