<template>
	<view class="tab-bar">
		<view class="tab-item" :class="{ active: active === 'home' }" @click="switchTab('home')">
			<view class="tab-icon home-icon">
				<image :src="active === 'home' ? '/static/home-active.png' : '/static/home.png'" mode="aspectFit" class="icon-image"></image>
			</view>
			<text class="tab-text" :class="{ 'active-text': active === 'home' }">首页</text>
		</view>
		<view class="tab-item add-btn" @click="onAddClick">
			<view class="add-icon">+</view>
		</view>
		<view class="tab-item" :class="{ active: active === 'my' }" @click="switchTab('my')">
			<view class="tab-icon my-icon">
				<image :src="active === 'my' ? '/static/my-active.png' : '/static/my.png'" mode="aspectFit" class="icon-image"></image>
			</view>
			<text class="tab-text" :class="{ 'active-text': active === 'my' }">我的</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'tab-bar',
		props: {
			active: {
				type: String,
				default: 'home'
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			switchTab(tab) {
				if (tab === this.active) return;
				
				if (tab === 'home') {
					uni.reLaunch({
						url: '/pages/index/index'
					});
				} else if (tab === 'my') {
					uni.reLaunch({
						url: '/pages/my/my'
					});
				}
				
				this.$emit('tabChange', tab);
			},
			onAddClick() {
				this.$emit('addClick');
			}
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color: #fff;
		border-top: 1px solid #eee;
		padding-bottom: env(safe-area-inset-bottom);
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		
		.tab-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			
			&.active {
				.tab-icon {
					color: #2979ff;
				}
				
				.tab-text {
					color: #2979ff;
				}
			}
			
			.tab-icon {
				font-size: 24px;
				color: #999;
				height: 24px;
				display: flex;
				align-items: center;
				justify-content: center;
				
				.icon-image {
					width: 24px;
					height: 24px;
				}
			}
			
			.tab-text {
				font-size: 12px;
				color: #999;
				margin-top: 2px;
				
				&.active-text {
					color: #2979ff;
				}
			}
			
			&.add-btn {
				position: relative;
				
				.add-icon {
					width: 40px;
					height: 40px;
					background-color: #2979ff;
					color: white;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 24px;
					position: absolute;
					bottom: 5px;
				}
			}
		}
	}
</style>
