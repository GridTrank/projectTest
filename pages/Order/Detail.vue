<template>
	<view class="page_wrap">
		<view class="bg"></view>
		<view class="page_top">
			<view class="status_tit">
				待审核
			</view>
			<view class="info mt20">
				<view class="name_p row">
					<text class="f32-c333 name">姓名</text>
					<text class="f28-c999">123456789</text>
				</view>
				<view class="address mt30 f28-c333">
					江苏省 相城区 苏州市 江苏省相城区漕湖
				</view>
			</view>
		</view>
		<view class="detail mt30" :class="openSwitch && 'h_auto'">
			
			<view class="detail_item row jc_sb">
				<text class="f32-c333">订单信息</text>
				<text class="f28-c999" @click="openSwitch=!openSwitch">{{openSwitch?'收起':'展开'}} 
					<text :class="['iconfont',openSwitch?'icon-shang':'icon-zhankai' ]"></text> 
				</text>
			</view>
			<view class="detail_item row jc_sb">
				<text class="label f28-c999">订单编号</text>
				<text class="val f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb" >
				<text class="label f28-c999">客户名称</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb">
				<text class="label f28-c999">送货时间</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb">
				<text class="label f28-c999">配送方式</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb"  >
				<text class="label f28-c999">支付方式</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row jc_sb">
				<text class="label f28-c999">订货金额</text>
				<text class="val  f28-c333">123456</text>
			</view>
			<view class="detail_item row pz">
				<view class="label f28-c999">备注：</view>
				<view class="val  f28-c333 ">123456</view>
			</view>
			
		</view>
		
		<view class="goods mt30">
			<text class="f32-c333 title">商品明细</text>
			<view class="list ">
				<view class="item  mt30" v-for="(item,index) in 3" :key="index">
					<view class="item_wrap row">
						<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
						<view class="info">
							<view class="row jc_sb">
								<text class="f28-c333">名称</text>
								<text class="f24-c999">商品编号：123456</text>
							</view>
							<view class="desc mt10 f24-c999">
								1包约125g
							</view>
							<view class="price row jc_sb mt10">
								<view class="">
									<text class="bao">包</text>
									<text class="f24-c999">￥10.00元/包</text>
								</view>
								<text class="f24-c999">x3</text>
							</view>
							<view class="num row jc_sb mt10">
								<text class="f24-c999">订货金额：￥10.00</text>
							</view>
							<view class="num row f24-c999 mt30">
								备注：<text>123123</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="goods log mt30">
			<text class="f32-c333 title">订单日志</text>
			<view class="row">
				<view class="log_item column">
					<view class="f24-c333">操作内容</view>
					<view class="f24-c999 mt20">创建订单</view>
				</view>
				<view class="log_item">
					<view class="f24-c333">创建人</view>
					<view class="f24-c999 mt20">创建订单</view>
				</view>
				<view class="log_item">
					<view class="f24-c333">创建时间</view>
					<view class="f24-c999 mt20">2020-09-12 12:00-10:00</view>
				</view>
			</view>
		</view>
		<view class="btn_wrap row">
			<text class="btn left">作废</text>
			<text class="btn right">审核</text>
		</view>
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				num:'', 	
				showPop:false,
				selectDate:'',
				pageType:'',
				pageTxt:'',
				openSwitch:false
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='inventory'){
				barTitle='盘点单详情'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='报损单详情'
				this.pageTxt='报损'
			}else if(e.pageType=='overflow'){
				barTitle='报溢单详情'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='退货单详情'
				this.pageTxt='退货'
			}
			uni.setNavigationBarTitle({
				title:barTitle
			})
			this.pageType=e.pageType
			
		},
		methods:{
			
		},
		
	}
</script>

<style lang="scss">
.page_wrap{
	padding: 20upx 30upx 130upx 30upx;
	position: relative;
	.bg{
		position: absolute;
		top: 0;
		width: 100%;
		height: 400upx;
		background: linear-gradient(180deg, #FE5B07 0%, #FE5B07 27%, #F9CDB6 79%, rgba(247, 247, 247, 0.16) 100%);
		z-index: -1;
		left: 0;
		background-size: 100% 100%;
	}
	.page_top{
		.status_tit{
			color: #fff;
			font-size: 32upx;
		}
		.info{
			padding: 20upx 30upx;
			background-color: #fff;
			border-radius: 8upx;
			.name_p{
				.name{
					margin-right: 20upx;
				}
			}
		}
	}
	.detail{
		padding: 30upx;
		background-color: #fff;
		border-radius: 8upx;
		height:240upx;
		overflow: hidden;
		.detail_item{
			margin-bottom: 30upx;
		}
		.pz{
			border-top: 1px dashed #E7E7E7;
			padding-top: 30upx;
		}
	}
	.h_auto{
		height: auto;
	}
	.goods{
		padding: 30upx 0;
		background-color: #fff;
		border-radius: 8upx;
		.title{
			margin: 30upx ;
		}
		.list{
			.item{
				.item_wrap{
					align-items: flex-start;
					padding: 30upx;
				}
				.img{
					width: 120upx;
					margin-right: 20upx;
				}
				.info{
					width: 460upx;
					padding-bottom: 30upx;
					border-bottom: 1px solid #E7E7E7;
					.bao{
						background-color:#fff4ed;
						color: $base-color;
						font-size: 20upx;
						border-radius: 2upx;
						padding:0 4upx;
						margin-right: 10upx;
					}
					.num_util{
						color: $base-color;
					}
					.total{
						color: #D30000;
						font-size: 24upx;
						width: 100%;
						text-align: right;
						padding-top: 20upx;
						border-top: 1px solid #E7E7E7;
					}
				}
				
			}
		}
	}
	.log{
		.row{
			justify-content: space-between;
			padding: 30upx;
			.log_item{
				width: 180upx;
				height: 100upx;
				text-align: center;
				white-space: normal;
			}
		}
	}
	.btn_wrap{
		position: fixed;
		width: 100%;
		background-color: #fff;
		padding: 30upx 0;
		bottom: 0;
		left: 0;
		border-top: 1px solid #f1f1f1;
		display: flex;
		justify-content: center;
		.btn{
			width: 240upx;
			height: 60upx;
			text-align: center;
			line-height: 60upx;
			border-radius: 30upx;
			color: #fff;
			font-size: 28upx;
		}
		.left{
			background: #C3C3C3;
			margin-right: 30upx;
		}
		.right{
			background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
		}
	}
}
</style>
