/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

export type CategoryItem = {
  /** id */
  id: string
  /** 分类名称 */
  name: string
  /** 展示图标 */
  icon: string
}

export type HotItem = {
  /** id */
  id: string
  /** 推荐说明 */
  alt: string
  /** 图片集合 */
  pictures: string[]
  /** 跳转地址 */
  target: string
  /** 推荐标题 */
  title: string
  /** 推荐类型 */
  type: string
}