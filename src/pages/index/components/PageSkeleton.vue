<template name="skeleton">
  <view is="components/CusSwiper">
    <view class="carousel CusSwiper--carousel data-v-2429aa6f CusSwiper--data-v-2429aa6f">
      <swiper :autoplay="false" :circular="true" class="data-v-2429aa6f CusSwiper--data-v-2429aa6f" :interval="3000" :current="0">
        <swiper-item class="data-v-2429aa6f CusSwiper--data-v-2429aa6f" style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
          <navigator class="navigator CusSwiper--navigator data-v-2429aa6f CusSwiper--data-v-2429aa6f" hover-class="none">
            <image class="image CusSwiper--image data-v-2429aa6f CusSwiper--data-v-2429aa6f sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator CusSwiper--indicator data-v-2429aa6f CusSwiper--data-v-2429aa6f">
        <text class="dot CusSwiper--dot data-v-2429aa6f CusSwiper--data-v-2429aa6f active CusSwiper--active"></text>
        <text class="dot CusSwiper--dot data-v-2429aa6f CusSwiper--data-v-2429aa6f"></text>
        <text class="dot CusSwiper--dot data-v-2429aa6f CusSwiper--data-v-2429aa6f"></text>
        <text class="dot CusSwiper--dot data-v-2429aa6f CusSwiper--data-v-2429aa6f"></text>
        <text class="dot CusSwiper--dot data-v-2429aa6f CusSwiper--data-v-2429aa6f"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-26 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-776 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-760 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-731 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-313 sk-text">个护</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-356 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-231 sk-text">数码</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-440 sk-text">运动</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-789 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-356 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a">
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-471 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-604 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-670 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-129 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-4 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-341 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
        <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
          <text class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-980 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-285 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a" hover-class="none">
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
    color: transparent !important;
  }
.sk-text-3-5714-217 {
    background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-187 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
  }
.sk-text-14-2857-26 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-776 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-760 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-731 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-313 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-356 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-231 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-440 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-789 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-471 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-604 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-670 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-129 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-4 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-341 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-980 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-14-2857-285 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>