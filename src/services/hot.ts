import { http } from "@/utils/http"
import type { PageParams } from "@/types/global"
import type { HotResult } from "@/types/hot"

export const getHotRecommendApi = (url: string, data?: PageParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data
  })
}