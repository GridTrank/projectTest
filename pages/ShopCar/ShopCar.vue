<template>
	<view class="common-car">
		<view class="empty-shop-car" v-if="isEmpty">
			<!-- <image src="../../static/empty_shop_car.png" class="empty-shop-car-image" mode=""></image> -->
			<text>当前您的购物车是空的</text>
			<view class="empty-shop-car-btn">
				<text>去逛逛</text>
			</view>
		</view>
		<view class="shop-car mt10" v-else>
			<view class="sale row">
				<view class="sale_left row">
					<text class="left_txt">满100减7</text>
					<text class="right_txt">订货满100减7元</text>
				</view>
				<view class="sale_right row">
					去逛逛 <text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="store-box" >
				<view class="goodsInfo " v-for="(itemw,indexw) in datas" :key="indexw">
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png" v-if="itemw.checked == 2" class="checked-image"
						mode="" @tap="goodsCheck(indexw,itemw.checked)"></image>
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png" v-else class="checked-image" mode=""
						@tap="goodsCheck(indexw,itemw.checked)"></image>
					<view class="goodsInfo-right">
						<image :src="itemw.img" class="goods-image" mode=""></image>
						<view class="goodsInfo-box">
							<text class="goods-name">{{itemw.title}}</text>
							<text class="spe">规格：{{itemw.remark}}</text>
							<view class="goods-box">
								<text class="goods-price">¥{{itemw.price}}</text>
								<view class="goods-num-box">
									<view class="goods-image" @tap="sub(indexw,itemw.number)">
										<text>-</text>
									</view>
									<view class="goods-num">
										<text>{{itemw.number}}</text>
									</view>
									<view class="goods-image" @tap="add(indexw,itemw.number)">
										<text>+</text>
									</view>
								</view>
							</view>
							<view class="remark">
								备注
							</view>
							<view class="subtotal mt20">
								小计：￥{{itemw.checked==2 ? (itemw.price*itemw.number).toFixed(2) : 0}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="statistics-box">
				<view class="explain">
					<text class="e1">订货满<text class="e2">¥1000.00</text>免运费</text>
				</view>
				<view class="statistics">
					<view class="statistics-left" v-if="statisticsIndex" @tap="allCheck">
						<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png"  class="checked-image" mode="" >
						</image>
						<text>全选</text>
					</view>
					<view class="statistics-left" v-else @tap="allCheck">
						<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png"  class="checked-image" mode="" >
						</image>
						<text>全选</text>
					</view>
					<view class="statistics-right" v-if="isCut" @tap="accounts">
						<text>合计：</text><text class="text-color">¥{{total}}</text>
						<view class="btn to_pay" :class="total>0 && 'is_pay'">
							<text>去结算</text>
						</view>
					</view>
					<view class="statistics-right" v-else @tap="delect">
						<view class="btn">
							<text>删除</text>
						</view>
					</view>
				</view>
				<view class="gap"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "commonCar",
		data() {
			return {
				isEmpty: true,
				iPhoneX: false,
				datas: [
					{
						img: '../../static/goods_avatar.png',
						title: '华为荣耀',
						remark: '256G',
						price: '128.80',
						number: 1,
						checked: 1
					}, {
						img: '../../static/goods_avatar.png',
						title: 'mate40',
						remark: '128G',
						price: '116.80',
						number: 1,
						checked: 1
					}
				],
				statisticsIndex:false,
				total:0,
				isCut:true
			}
		},
	
		created() {
			this.iPhoneX = uni.getStorageSync('iPhoneX')
			if (this.datas.length == 0) {
				this.isEmpty = true
			} else {
				this.isEmpty = false
			}
		},
		// 右上角点击删除
		onNavigationBarButtonTap(e) {
			let judge = this.judgeSelect()
			if(judge){
				console.log(123123)
			}else{
				uni.showToast({
					title:'您当前未选择任何商品,删除失败',
					icon:'none'
				})
			}
		},
		methods: {
			//商品选择
			goodsCheck( goodsIndex, goodsChecked) {
				if (goodsChecked == 1) {
					this.datas[goodsIndex].checked = 2
				} else {
					this.datas[goodsIndex].checked = 1
				}
				//判断是否全选
				let statisticsIndex = true
				this.datas.find((item,index)=>{
					if(item.checked == 1){
						statisticsIndex = false
					}
				})
				if(statisticsIndex == false){
					this.statisticsIndex = false
				}else{
					this.statisticsIndex = true
				}
				
				this.statistics()
			},
			
			//减少
			sub( goodsIndex, goodsnum){
				if(goodsnum == 1){
					return
				}else{
					this.datas[goodsIndex].number--
				}
				this.statistics()
			},
			//增加
			add( goodsIndex, goodsnum){
				this.datas[goodsIndex].number++
				this.statistics()
			},
			//全选
			allCheck(){
				if(this.statisticsIndex){
					this.datas.find((item,index)=>{
						item.checked = 1
						
					})
					this.statisticsIndex = false
				}else{
					this.datas.find((item,index)=>{
						item.checked = 2
						
					})
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//统计
			statistics(){
				let total = 0
				this.datas.find((item,index)=>{
					if(item.checked == 2){
						total = total + item.price*item.number
					}
				})
				this.total = total.toFixed(2)
			},
			cut(){
				this.isCut = !this.isCut
				this.statisticsIndex = true
				this.allCheck()
			},
			accounts(){
				let judge = this.judgeSelect()
				if(judge){
					this.navTo('/pages/ConfirmOrder/ConfirmOrder')
				}else{
					uni.showToast({
						title:'您当前未选择任何商品,结算失败',
						icon:'none'
					})
				}
			},
			judgeSelect(){
				let judge = false
				this.datas.find((item,index)=>{
					if(item.checked == 2){
						judge = true
					}
				})
				return judge
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-car {
		width: 750upx;
		// min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F5F5F5;
	}

	.empty-shop-car {
		width: 750upx;
		min-height: 680upx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.empty-shop-car-image {
			width: 340upx;
			height: 278upx;
			margin-top: 102upx;
		}

		text {
			margin-top: 40upx;
			font-size: 28upx;
			font-weight: 400;
			color: #666666;
		}

		.empty-shop-car-btn {
			width: 240upx;
			height: 90upx;
			background: #FBBC02;
			border-radius: 200upx;
			margin-top: 40upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			font-weight: 400;
			color: #313133;
		}
	}

	.shop-car {
		width: 750upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.sale{
			width: 92%;
			background-color: #fff;
			padding: 10upx 30upx;
			justify-content: space-between;
			.sale_left{
				.left_txt{
					width: 160upx;
					height: 46upx;
					background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/as.png');
					background-repeat: no-repeat;
					color: #fff;
					font-size: 18upx;
					display: block;
					background-size: 100% 100%;
					text-align: right;
					padding-right: 10upx;
					line-height: 46upx;
				}
				.right_txt{
					color: #2F2F2F;
					font-size: 24upx;
					margin-left: 20upx;
				}
			}
			.sale_right{
				color: $base-color;
				font-size: 28upx;
			}
		}
		.shop-car-header {
			width: 690upx;
			height: 80upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;

			text {
				font-size: 28upx;
				font-weight: 400;
				color: #313133;
			}
		}

		.store-box {
			width: 750upx;
			margin-bottom: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.store-header {
				width: 690upx;
				height: 78upx;
				padding: 0 30upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 28upx;
				font-weight: 400;
				color: #313133;

				.checked-image {
					width: 40upx;
					height: 40upx;
				}

				text {
					font-size: 28upx;
					font-weight: 400;
					color: #313133;
					margin-left: 20upx;
				}

				.label {
					width: 14upx;
					height: 24upx;
					margin-left: 10upx;
					margin-top: 5upx;
				}
			}

			.goodsInfo {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 10upx;
				background-color: #fff;
				padding: 0 30upx;
				&:nth-last-child(1) {
					border: none;
				}

				.checked-image {
					width: 40upx;
					height: 40upx;
				}

				.goodsInfo-right {
					width: 634upx;
					margin-left: 16upx;
					display: flex;
					flex-direction: row;
					padding: 30upx 0;
					.goods-image {
						width: 180upx;
						height: 180upx;
					}
					.goodsInfo-box {
						width: 428upx;
						margin-left: 24upx;
						display: flex;
						flex-direction: column;
						align-items: center;
						.goods-name {
							width: 428upx;
							font-size: 28upx;
							font-weight: 400;
							color: #2F2F2F;
						}

						.spe {
							width: 428upx;
							margin-top: 10upx;
							font-size: 24upx;
							font-weight: 400;
							color: #919298;
						}

						.goods-box {
							width: 428upx;
							margin-top: 18upx;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							.goods-price {
								font-size: 32upx;
								font-weight: 400;
								color:#FE5B07;
							}

							.goods-num-box {
								width: 168upx;
								height: 46upx;
								display: flex;
								flex-direction: row;
								align-items: center;

								.goods-image {
									width: 46upx;
									height: 44upx;
									text-align: center;
									line-height: 44upx;
									border: 1upx solid #CFCFCF;
									font-size: 38upx;
								}

								.goods-num {
									width: 76upx;
									height: 44upx;
									text-align: center;
									line-height: 44upx;
									font-size: 33upx;
									font-weight: 400;
									color: #666666;
									border-top: 1px solid #CFCFCF;
									border-bottom: 1px solid #CFCFCF;
								}
							}
						}
						.remark{
							padding: 20upx 0 ;
							color: #999;
							font-size: 22upx;
							border-top: 1px solid #eee;
							border-bottom: 1px solid #eee;
							margin-top: 30upx;
							width: 100%;
						}
						.subtotal{
							color: #2F2F2F;
							font-size: 32upx;
							width: 100%;
							text-align: right;
						}
					}
				}
			}
		}

		.statistics-box {
			width: 750upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;
			position: fixed;
			/* #ifdef H5 */ 
			bottom: 64upx;
			/* #endif */ 
			/* #ifdef MP */
			bottom: 0;
			/* #endif */ 
			.explain{
				padding: 20upx 0;
				width: 100%;
				color: #333;
				font-size: 22upx;
				.e1{
					margin-left: 30upx;
				}
				.e2{
					
					color: $base-color;
				}
				border-bottom: 1px solid #eee;
			}
			.statistics {
				width: 720upx;
				padding: 0 30upx;
				height: 98upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				
				.statistics-left {
					width: 120upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					image {
						width: 40upx;
						height: 40upx;
					}

					text {
						font-size: 30upx;
						font-weight: 400;
						color: #313133;
					}
				}

				.statistics-right {
					width: 600upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-end;

					.btn {
						text-align: center;
						margin-left: 40upx;
					}
					text {
						font-size: 30upx;
						font-weight: 400;
						color: #313133;
					}
					.to_pay{
						background-color: #C6C6C6;
						padding: 8upx 26upx;
						border-radius: 32upx;
						font-size: 28upx;
						text{
							color: #fff ;
						}
					}
					.is_pay{
						background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
					}
					.text-color {
						color: rgba(242, 18, 18, 1);
					}
				}
			}

			.gap {
				width: 750upx;
				height: 40upx;
			}
		}
	}
</style>
