<template>
	<view class="spec_wrap">
		<u-popup 
		:show="show" 
		:closeable="true"
		@close="show=false"
		mode="bottom">
			<view class="con">
				<view class="info row">
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
					<view class="">
						<text class="f32-c333">柠檬</text>
						<text class="f24-c999 mt10">250g</text>
					</view>
				</view>
				<view class="detail row jc_sb">
					<text class="f28-c333">结算单位</text>
					<text class="f28-c999">箱</text>
				</view>
				<view class="detail row jc_sb">
					<text class="f28-c333">数量</text>
					<view class="num_wrap row">
						<text @click="changNum(1)">-</text>
						<u-input border='none' type="text" v-model="num" />
						<text @click="changNum(2)">+</text>
					</view>
				</view>
				<view class="detail jc_sb">
					<view class="f28-c333">备注</view>
					<u-input class="mt20"  type="text" v-model="remark" border='none' placeholder="请输入备注" />
				</view>
				
				<view class="btn_default" @click="add">
					确定
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				num:1,
				remark:''
			}
		},
		methods:{
			changNum(val){
				if(val==1 && this.num>1){
					this.num--
				}else if(val==2){
					this.num++
				}
			},
			add(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.spec_wrap{
		.con{
			padding: 30upx;
			.info{
				justify-content: center;
				margin-bottom: 120upx;
				image{
					margin-right: 30upx;
					width: 172upx;
					height: 172upx;
				}
			}
			.detail{
				padding: 30upx;
				border-top: 1px solid #eee;
				.num_wrap{
					text{
						background-color: #F6F6F6;
						padding: 8upx 16upx;
						color: #bebebe;
						font-size: 28upx;
					}
					/deep/{
						input{
							background-color: #F6F6F6;
							padding: 3upx 18upx !important;
							width: 50upx;
							margin: 0 6upx;
						}
					}
				}
			}
				
		}
		
	}
</style>
