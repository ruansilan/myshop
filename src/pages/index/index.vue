<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import type{ CusGuessIncetance } from '@/types/component';


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

onLoad(() => {
	getHomeBannerData()
	getHomeCategoryData()
	getHomeHotData()
})
</script>

<template>
	<!-- 自定义导航栏 -->
  <CustomNavbar/>
	<scroll-view @scrolltolower="scrolltolower" scroll-y class="scroll-view">
		<!-- 轮播图 -->
		<CusSwiper :list="bannerList"/>
		<!-- 分类 -->
		<CategoryPanel :list="categoryList"/>
		<!-- 热点推荐 -->
		<HotPanel :list="hotList"/>
		<!-- 猜你喜欢 -->
		<CusGuess ref="gussRef"/>
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
