<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'


// 获取轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
	const res = await getHomeBannerApi()
  bannerList.value = res.result
}
// 获取前台分类
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
	const res = await getHomeCategoryApi()
	categoryList.value = res.result
}
// 获取热点
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
	const res = await getHomeHotApi()
	hotList.value = res.result
}
onLoad(() => {
	getHomeBannerData()
	getHomeCategoryData()
	getHomeHotData()
})
</script>

<template>
  <CustomNavbar/>
	<CusSwiper :list="bannerList"/>
	<CategoryPanel :list="categoryList"/>
	<HotPanel :list="hotList"/>
</template>

<style lang="scss">
page{
	background-color: #f7f7f7;
}
</style>
