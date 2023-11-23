/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import CusSwiper from '@/components/CusSwiper.vue'
import CusGuess from '@/components/CusGuess.vue'
import 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    CusSwiper: typeof CusSwiper,
    CusGuess: typeof CusGuess
  }
}

export type CusGuessIncetance = InstanceType<typeof CusGuess>
