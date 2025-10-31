/* eslint-disable */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'primevue/config'
declare module 'primevue/*'
declare module 'pinia'
