<template>
	<view class="login-container">
		<!-- 主要内容区域 -->
		<view class="content">
			<!-- Logo和标题 -->
			<view class="logo-section">
				<image class="logo" src="/static/logo.png" mode="aspectFit"></image>
				<text class="title">任务接单</text>
			</view>
			
			<!-- 副标题/口号 -->
			<view class="slogan">
				<text>派单快速度快安全倒计时阶段</text>
			</view>
			
			<!-- 底部登录按钮和协议 -->
			<view class="login-section">
				<button class="wechat-login-btn" @click="wechatLogin">
					<image class="wechat-icon" src="/static/wechat.png" mode="aspectFit"></image>
					<text>微信一键登录</text>
				</button>
				
				<view class="agreement">
					<radio :checked="isAgree" @click="toggleAgreement" color="#2979ff" style="transform:scale(0.7);" />
					<text class="agreement-text">
						我已阅读XXX平台
						<text class="link" @click="openUserAgreement">《用户服务协议》</text>
						及
						<text class="link" @click="openPrivacyPolicy">《隐私政策》</text>
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: false
			}
		},
		methods: {
			wechatLogin() {
				if (!this.isAgree) {
					uni.showToast({
						title: '请先阅读并同意协议',
						icon: 'none'
					});
					return;
				}
				
				// 模拟微信登录成功
				uni.showLoading({
					title: '登录中...'
				});
				
				// 模拟登录请求延迟
				setTimeout(() => {
					uni.hideLoading();
					
					// 保存登录状态
					uni.setStorageSync('isLoggedIn', true);
					
					// 登录成功后跳转到首页
					uni.reLaunch({
						url: '/pages/index/index',
						success: () => {
							console.log('跳转到首页成功');
						},
						fail: (err) => {
							console.error('跳转到首页失败', err);
							uni.showToast({
								title: '跳转失败，请重试',
								icon: 'none'
							});
						}
					});
				}, 1500);
			},
			toggleAgreement() {
				this.isAgree = !this.isAgree;
			},
			openUserAgreement() {
				// 打开用户协议页面
				uni.navigateTo({
					url: '/pages/agreement/user'
				});
			},
			openPrivacyPolicy() {
				// 打开隐私政策页面
				uni.navigateTo({
					url: '/pages/agreement/privacy'
				});
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		width: 100%;
		height: 100vh;
		background: linear-gradient(180deg, #e6f0ff 0%, #f5f9ff 100%);
		display: flex;
		flex-direction: column;
		position: relative;
	}
	
	/* 主要内容区域 */
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 60px 20px 40px;
	}
	
	/* Logo和标题区域 */
	.logo-section {
		display: flex;
		align-items: center;
		margin-top: 60px;
		
		.logo {
			width: 60px;
			height: 60px;
			margin-right: 10px;
			border-radius: 50%;
			background-color: #2979ff;
		}
		
		.title {
			font-size: 28px;
			font-weight: bold;
			color: #333;
		}
	}
	
	/* 副标题/口号 */
	.slogan {
		font-size: 16px;
		color: #666;
		margin-top: 10px;
		margin-left: 5px;
	}
	
	/* 登录区域 */
	.login-section {
		margin-top: auto;
		width: 100%;
		
		.wechat-login-btn {
			width: 100%;
			height: 50px;
			background-color: #2979ff;
			color: #fff;
			border-radius: 25px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			border: none;
			
			.wechat-icon {
				width: 20px;
				height: 20px;
				margin-right: 5px;
			}
		}
		
		.agreement {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 15px;
			
			.agreement-text {
				font-size: 12px;
				color: #666;
			}
			
			.link {
				color: #2979ff;
			}
		}
	}
</style>
