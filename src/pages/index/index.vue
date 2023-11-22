<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue';
import { getHomeBannerApi } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
	const res = await getHomeBannerApi()
  bannerList.value = res.result
}

onLoad(() => {
	getHomeBannerData()
})
</script>

<template>
  <CustomNavbar/>
	<CusSwiper :list="bannerList"/>
</template>

<style lang="scss">
//
</style>
