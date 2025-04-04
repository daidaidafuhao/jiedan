<template>
	<view class="nav-bar">
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
		<view class="nav-content">
			<view class="logo-container" v-if="showLogo">
				<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
			</view>
			<view class="title-container">
				<text class="title">{{ title }}</text>
			</view>
			<view class="right-icons">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {
			title: {
				type: String,
				default: '任务接单'
			},
			showLogo: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				statusBarHeight: 20 // 默认状态栏高度
			}
		},
		created() {
			// 获取系统状态栏高度
			this.getStatusBarHeight();
		},
		methods: {
			getStatusBarHeight() {
				// 获取系统状态栏高度
				uni.getSystemInfo({
					success: (res) => {
						this.statusBarHeight = res.statusBarHeight;
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.nav-bar {
		width: 100%;
		background-color: #e6f0ff;
		position: relative;
		z-index: 10;
		
		.status-bar {
			width: 100%;
		}
		
		.nav-content {
			display: flex;
			align-items: center;
			height: 44px;
			padding: 0 15px;
			box-sizing: border-box;
			
			.logo-container {
				display: flex;
				align-items: center;
				margin-right: 10px;
				
				.logo {
					width: 30px;
					height: 30px;
					border-radius: 50%;
				}
			}
			
			.title-container {
				flex: 1;
				display: flex;
				align-items: center;
				
				.title {
					font-size: 18px;
					font-weight: bold;
					color: #2979ff;
				}
			}
			
			.right-icons {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
