<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type{ CusGuessIncetance } from '@/types/component';

const isLoading = ref(false)

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
// 滚动到底部
const gussRef = ref<CusGuessIncetance>()
const scrolltolower = () => {
	gussRef.value?.getMore()
}

// 下拉刷新
const reTriggered = ref(false)
const onPulldownRefresh = async () => {
	reTriggered.value = true
	gussRef.value?.resetData()
	await Promise.all([
		getHomeBannerData(),
		getHomeCategoryData(),
		getHomeHotData(),
		gussRef.value?.getMore()]
	)
	
	reTriggered.value = false
}

onLoad(async () => {
	isLoading.value = true
	await Promise.all([
		getHomeBannerData(),
		getHomeCategoryData(),
		getHomeHotData()
	])
	isLoading.value = false
})
</script>

<template>
	<!-- 自定义导航栏 -->
  <CustomNavbar/>
	<scroll-view 
		refresher-enabled
		scroll-y class="scroll-view"
		:refresher-triggered="reTriggered"
		@refresherrefresh="onPulldownRefresh" 
		@scrolltolower="scrolltolower" 
		
	>
	<PageSkeleton v-if="isLoading"/>
	<template v-else>
		<!-- 轮播图 -->
		<CusSwiper :list="bannerList"/>
		<!-- 分类 -->
		<CategoryPanel :list="categoryList"/>
		<!-- 热点推荐 -->
		<HotPanel :list="hotList"/>
		<!-- 猜你喜欢 -->
		<CusGuess ref="gussRef"/>
	</template>
		
	</scroll-view>
	
</template>

<style lang="scss">
page{
	background-color: #f7f7f7;
	height: 100%;
	display: flex;
	flex-direction: column;
	
}
.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
