/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import CusSwiper from '@/components/CusSwiper.vue'
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    CusSwiper: typeof CusSwiper
  }
}
