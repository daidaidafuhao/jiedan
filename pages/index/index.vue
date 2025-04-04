<template>
	<view class="container">
		<!-- 使用自定义导航栏组件 -->
		<nav-bar title="任务接单">
			<template #right>
				<view class="nav-right-icons">
					<text class="menu-icon">•••</text>
					<text class="search-icon">🔍</text>
				</view>
			</template>
		</nav-bar>
		
		<!-- 主要内容区域 -->
		<scroll-view scroll-y class="content-scroll">
			<!-- 任务介绍卡片 -->
			<view class="task-intro-card">
				<view class="task-intro-text">
					<text class="task-intro-title">我的任务</text>
					<text class="task-intro-subtitle">就是</text>
					<button class="check-now-btn">立即查看</button>
				</view>
				<image class="task-intro-image" src="/static/delivery-illustration.png" mode="aspectFit"></image>
			</view>
			
			<!-- 公告滚动条 -->
			<view class="announcement-bar">
				<view class="announcement-icon">📢</view>
				<view class="announcement-text">公告 推按阿姆几点几分谁辣椒几个咖啡机东莞市大...</view>
			</view>
			
			<!-- 功能卡片区域 -->
			<view class="function-cards">
				<!-- 操作指南卡片 -->
				<view class="function-card blue-card">
					<view class="card-content">
						<text class="card-title">操作指南</text>
						<text class="card-desc">快速了解并解决问题所在</text>
						<image class="card-icon" src="/static/guide-icon.png" mode="aspectFit"></image>
					</view>
				</view>
				
				<view class="right-cards">
					<!-- 联系我们卡片 -->
					<view class="function-card orange-card">
						<view class="card-content">
							<text class="card-title">联系我们</text>
							<view class="orange-dots">
								<text class="dot">•</text>
								<text class="dot">•</text>
								<text class="dot">•</text>
							</view>
							<image class="card-icon orange-icon" src="/static/contact-icon.png" mode="aspectFit"></image>
						</view>
					</view>
					
					<!-- 通知公告卡片 -->
					<view class="function-card purple-card">
						<view class="card-content">
							<text class="card-title">通知公告</text>
							<view class="notification-icons">
								<image class="notification-icon" src="/static/notification-icon.png" mode="aspectFit"></image>
								<view class="notification-badge"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐列表 -->
			<view class="recommendation-list">
				<view class="list-header">
					<text class="list-title">推荐列表</text>
					<text class="list-more">更多 ></text>
				</view>
				
				<!-- 任务项 -->
				<view class="task-item">
					<view class="task-user">
						<image class="user-avatar" src="/static/avatar.png"></image>
						<view class="user-info">
							<text class="user-name">王先生</text>
							<text class="task-status">已下单</text>
						</view>
					</view>
					<view class="task-details">
						<view class="detail-item">
							<text class="detail-label">下单时间：</text>
							<text class="detail-value">2025-03-29 16:52:00</text>
						</view>
						<view class="detail-item">
							<text class="detail-label">手机联系：</text>
							<text class="detail-value">13649221921</text>
						</view>
						<view class="detail-item">
							<text class="detail-label">任务类型：</text>
							<text class="detail-value">拖车</text>
						</view>
					</view>
					<view class="task-actions">
						<button class="action-btn accept-btn">接单</button>
						<button class="action-btn contact-btn">联系</button>
					</view>
				</view>
				
				<!-- 更多任务项可以在这里添加 -->
			</view>
			
			<!-- 底部占位，防止内容被底部导航栏遮挡 -->
			<view class="bottom-placeholder"></view>
		</scroll-view>
		
		<!-- 使用自定义底部导航栏组件 -->
		<tab-bar active="home" @tabChange="handleTabChange" @addClick="handleAddClick"></tab-bar>
	</view>
</template>

<script>
	import TabBar from '@/components/tab-bar/tab-bar.vue';
	import NavBar from '@/components/nav-bar/nav-bar.vue';
	
	export default {
		components: {
			TabBar,
			NavBar
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
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
		width: 100%;
		box-sizing: border-box;
		overflow-x: hidden;
	}
	
	.nav-right-icons {
		display: flex;
		align-items: center;
		gap: 15px;
		
		.menu-icon, .search-icon {
			font-size: 20px;
			color: #333;
		}
	}
	
	/* 内容滚动区域 */
	.content-scroll {
		flex: 1;
		overflow: hidden;
		padding: 0 15px;
		box-sizing: border-box;
		width: 100%;
	}
	
	/* 功能卡片区域 */
	.function-cards {
		display: flex;
		margin: 15px 0;
		gap: 15px;
		flex-wrap: wrap;
		width: 100%;
		
		.right-cards {
			display: flex;
			flex-direction: column;
			flex: 1;
			gap: 15px;
			min-width: 0; /* 防止flex项目溢出 */
		}
	}
	
	.function-card {
		border-radius: 12px;
		padding: 15px;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
		
		.card-content {
			position: relative;
			z-index: 2;
		}
		
		.card-title {
			font-size: 16px;
			font-weight: bold;
			color: #fff;
			margin-bottom: 5px;
			display: block;
		}
		
		.card-desc {
			font-size: 12px;
			color: rgba(255, 255, 255, 0.8);
			display: block;
		}
		
		.card-icon {
			position: absolute;
			width: 60px;
			height: 60px;
			right: -5px;
			bottom: -5px;
			max-width: 40%;
			object-fit: contain;
		}
	}
	
	.blue-card {
		background: linear-gradient(135deg, #4364f7, #6fb1fc);
		flex: 1;
		height: 100%;
		min-height: 150px;
		min-width: 0; /* 防止flex项目溢出 */
	}
	
	.orange-card {
		background: linear-gradient(135deg, #ff9a9e, #fad0c4);
		height: 70px;
		width: 100%;
		
		.orange-dots {
			display: flex;
			margin-top: 5px;
			
			.dot {
				font-size: 20px;
				color: rgba(255, 255, 255, 0.7);
				margin-right: 5px;
			}
		}
		
		.orange-icon {
			width: 50px;
			height: 50px;
			right: 0;
			bottom: -10px;
			max-width: 30%;
		}
	}
	
	.purple-card {
		background: linear-gradient(135deg, #a18cd1, #fbc2eb);
		height: 70px;
		width: 100%;
		
		.notification-icons {
			position: absolute;
			right: 10px;
			bottom: 5px;
			
			.notification-icon {
				width: 40px;
				height: 40px;
				max-width: 100%;
			}
			
			.notification-badge {
				position: absolute;
				top: 0;
				right: 0;
				width: 12px;
				height: 12px;
				background-color: #ff4d4f;
				border-radius: 50%;
				border: 2px solid #fff;
			}
		}
	}
	
	/* 任务介绍卡片 */
	.task-intro-card {
		margin: 15px 0;
		padding: 20px;
		background-color: #e6f0ff;
		border-radius: 12px;
		display: flex;
		justify-content: space-between;
		position: relative;
		overflow: hidden;
		min-height: 120px;
		width: 100%;
		box-sizing: border-box;
		
		.task-intro-text {
			display: flex;
			flex-direction: column;
			z-index: 2;
			max-width: 60%;
			
			.task-intro-title {
				font-size: 22px;
				font-weight: bold;
				color: #2979ff;
				margin-bottom: 5px;
			}
			
			.task-intro-subtitle {
				font-size: 14px;
				color: #666;
				margin-bottom: 15px;
			}
			
			.check-now-btn {
				background-color: #2979ff;
				color: #fff;
				padding: 5px 12px;
				font-size: 14px;
				border-radius: 20px;
				border: none;
				width: fit-content;
				height: 30px;
				line-height: 20px;
			}
		}
		
		.task-intro-image {
			position: absolute;
			right: 0;
			bottom: 0;
			width: 100px;
			height: 100px;
			z-index: 1;
			max-width: 40%;
			object-fit: contain;
		}
	}
	
	/* 公告滚动条 */
	.announcement-bar {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 10px 15px;
		border-radius: 25px;
		margin: 15px 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		width: 100%;
		box-sizing: border-box;
		
		.announcement-icon {
			margin-right: 10px;
			font-size: 18px;
			color: #ff9500;
			flex-shrink: 0;
		}
		
		.announcement-text {
			font-size: 14px;
			color: #666;
			flex: 1;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			min-width: 0;
		}
	}
	
	/* 推荐列表 */
	.recommendation-list {
		background-color: #fff;
		border-radius: 12px;
		padding: 15px;
		margin-bottom: 15px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		width: 100%;
		box-sizing: border-box;
		
		.list-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15px;
			
			.list-title {
				font-size: 18px;
				font-weight: bold;
				color: #333;
			}
			
			.list-more {
				font-size: 14px;
				color: #999;
			}
		}
	}
	
	.task-item {
		border-radius: 10px;
		background-color: #f9f9f9;
		padding: 15px;
		margin-bottom: 10px;
		width: 100%;
		box-sizing: border-box;
		
		.task-user {
			display: flex;
			align-items: center;
			margin-bottom: 10px;
			flex-wrap: wrap;
			
			.user-avatar {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				margin-right: 10px;
				flex-shrink: 0;
			}
			
			.user-info {
				display: flex;
				flex-direction: column;
				flex: 1;
				min-width: 0;
			}
			
			.user-name {
				font-size: 16px;
				font-weight: bold;
				color: #333;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			
			.task-status {
				margin-left: auto;
				background-color: #e6f7ff;
				color: #1890ff;
				padding: 2px 8px;
				border-radius: 10px;
				font-size: 12px;
				flex-shrink: 0;
			}
		}
		
		.task-details {
			margin-bottom: 15px;
			
			.detail-item {
				display: flex;
				margin-bottom: 8px;
				flex-wrap: wrap;
				
				.detail-label {
					color: #999;
					font-size: 14px;
					width: 90px;
					flex-shrink: 0;
				}
				
				.detail-value {
					color: #333;
					font-size: 14px;
					flex: 1;
					min-width: 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
		
		.task-actions {
			display: flex;
			justify-content: flex-end;
			gap: 10px;
			flex-wrap: wrap;
			
			.action-btn {
				padding: 5px 15px;
				border-radius: 20px;
				font-size: 14px;
				height: 30px;
				line-height: 20px;
				flex-shrink: 0;
			}
			
			.accept-btn {
				background-color: #2979ff;
				color: #fff;
			}
			
			.contact-btn {
				background-color: #f5f5f5;
				color: #666;
			}
		}
	}
	
	.bottom-placeholder {
		height: 70px; /* 底部导航栏高度 + 一些额外空间 */
	}
	
	/* 媒体查询，针对小屏幕设备优化 */
	@media screen and (max-width: 375px) {
		.function-cards {
			gap: 10px;
		}
		
		.task-intro-text {
			.task-intro-title {
				font-size: 20px;
			}
			
			.task-intro-subtitle {
				font-size: 12px;
			}
		}
		
		.card-title {
			font-size: 14px;
		}
		
		.card-desc {
			font-size: 10px;
		}
	}
</style>
