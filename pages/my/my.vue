<template>
	<view class="container">
		<!-- 顶部状态栏 -->
		<view class="status-bar">
			<text class="time">9:41</text>
			<view class="right-icons">
				<text class="signal-icon">●●●</text>
				<text class="wifi-icon">≡</text>
				<text class="battery-icon">■</text>
			</view>
		</view>
		
		<!-- 用户信息卡片 -->
		<view class="user-card">
			<view class="user-info">
				<image class="user-avatar" src="/static/avatar.png"></image>
				<view class="user-details">
					<text class="user-name">王先生</text>
					<text class="user-contact">13649221921</text>
				</view>
			</view>
			<view class="edit-profile">
				<text class="edit-text">编辑资料</text>
			</view>
		</view>
		
		<!-- 菜单列表 -->
		<view class="menu-list">
			<view class="menu-item">
				<view class="menu-icon share-icon">🔗</view>
				<text class="menu-text">分享给朋友</text>
				<text class="menu-arrow">></text>
			</view>
			<view class="menu-item">
				<view class="menu-icon reward-icon">🎁</view>
				<text class="menu-text">奖励中心</text>
				<text class="menu-arrow">></text>
			</view>
			<view class="menu-item">
				<view class="menu-icon service-icon">💬</view>
				<text class="menu-text">联系客服</text>
				<text class="menu-arrow">></text>
			</view>
			<view class="menu-item">
				<view class="menu-icon about-icon">ℹ️</view>
				<text class="menu-text">关于我们</text>
				<text class="menu-arrow">></text>
			</view>
		</view>
		
		<!-- 底部占位，防止内容被底部导航栏遮挡 -->
		<view class="bottom-placeholder"></view>
		
		<!-- 使用自定义底部导航栏组件 -->
		<tab-bar active="my" @tabChange="handleTabChange" @addClick="handleAddClick"></tab-bar>
	</view>
</template>

<script>
	import TabBar from '@/components/tab-bar/tab-bar.vue';
	
	export default {
		components: {
			TabBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			handleTabChange(tab) {
				console.log('切换到标签:', tab);
			},
			handleAddClick() {
				console.log('点击了添加按钮');
				// 这里可以添加跳转到发布任务页面的逻辑
				uni.navigateTo({
					url: '/pages/publish/publish'
				});
			}
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: #f5f7fa;
	}
	
	/* 状态栏 */
	.status-bar {
		height: 44px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 16px;
		box-sizing: border-box;
		background-color: #fff;
		
		.time {
			font-weight: bold;
			font-size: 16px;
		}
		
		.right-icons {
			display: flex;
			align-items: center;
			gap: 5px;
			
			.signal-icon, .wifi-icon, .battery-icon {
				font-size: 16px;
			}
		}
	}
	
	/* 用户信息卡片 */
	.user-card {
		padding: 20px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		.user-info {
			display: flex;
			align-items: center;
			
			.user-avatar {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				margin-right: 15px;
			}
			
			.user-details {
				display: flex;
				flex-direction: column;
				
				.user-name {
					font-size: 18px;
					font-weight: bold;
					color: #333;
					margin-bottom: 5px;
				}
				
				.user-contact {
					font-size: 14px;
					color: #666;
				}
			}
		}
		
		.edit-profile {
			padding: 5px 15px;
			border: 1px solid #ddd;
			border-radius: 20px;
			
			.edit-text {
				font-size: 14px;
				color: #666;
			}
		}
	}
	
	/* 菜单列表 */
	.menu-list {
		margin-top: 15px;
		background-color: #fff;
		
		.menu-item {
			display: flex;
			align-items: center;
			padding: 15px 20px;
			border-bottom: 1px solid #f5f5f5;
			
			.menu-icon {
				width: 24px;
				height: 24px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 15px;
				font-size: 18px;
			}
			
			.menu-text {
				flex: 1;
				font-size: 16px;
				color: #333;
			}
			
			.menu-arrow {
				font-size: 16px;
				color: #ccc;
			}
		}
	}
	
	/* 底部占位 */
	.bottom-placeholder {
		height: 70px; /* 底部导航栏高度 + 一些额外空间 */
	}
</style>
