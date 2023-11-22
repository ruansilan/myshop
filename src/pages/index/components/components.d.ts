import CusSwiper from '@/components/CusSwiper.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CusSwiper: typeof CusSwiper
  }
}