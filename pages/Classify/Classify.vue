<template>
	<view class="page_wrap">
		<search></search>
		<view class="parent_list">
			<u-tabs
			:list="parentList"
			:activeStyle="{
				color: '#FF6304',
				fontWeight: 'bold',
			}"
			lineColor="#FF6304"
			itemStyle="padding-left: 15px; padding-right: 15px; height: 34px; background:#fff"
			@click="selectParent">
			</u-tabs>
			<view class="more_icon" @click="parentListPop=true">
				<text class="iconfont icon-zhankai1"></text>
			</view>
		</view>
		
		<view class="second_list row">
			<scroll-view class="left_list"  scroll-y="true" >
				<view 
				class="left_item row" 
				@click="selectChild(item,index)"  
				v-for="(item,index) in 15" 
				:key="index"
				:class="selectChildIndex==index && 'select_child' "
				>
					<image 
					class="rexiao_img" 
					v-if="selectChildIndex==index" 
					src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/reixao%402x.png" 
					>
					</image>
					<text>二级</text>
					
				</view>
			</scroll-view>
			<scroll-view  scroll-y="true" class="right_list">
				<view class="list  mt20" v-for="(item,index) in 3" :key="index">
					<list></list>
				</view>
			</scroll-view >
		</view>
		
		<view class="all_list_wrap" v-if="parentListPop">
			<view class="all_list ">
				<view class="all_top row">
					<text class="all">全部分类</text>
					<text @click="parentListPop=false" class="iconfont icon-guanbi"></text>
				</view>
				<view >
					<view 
					:class="selectAllIndex==index && 'select_all_item' "
					@click.stop="selectItem(item,index)" 
					class="all_item mt20" 
					v-for="(item,index) in parentList" 
					:key="index">
						{{item.name}}
					</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import search from './search.vue'
	import list from './list.vue'
	export default {
		components:{
			search,
			list
		},
		data() {
			return {
				parentList:[
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
					{name:'一级分类'},
				],
				childList:[],
				selectParentIndex:0,
				selectChildIndex:0,
				parentListPop:false,
				selectAllIndex:0
			};
		},
		methods:{
			selectParent(e){
				this.selectParentIndex=e.index
			},
			selectChild(item,index){
				this.selectChildIndex=index
			},
			selectItem(item,index){
				this.selectAllIndex=index
			}
		}
	}
</script>

<style lang="scss">
.page_wrap{
	.parent_list{
		position: relative;
		padding-right: 50upx;
		padding-top: 30upx;
		background-color: #fff;
		.more_icon{
			position: absolute;
			right: 0upx;
			top: 42upx;
			color: $base-color;
			background-color: #fff;
			border-left: 1px solid #E8E8E8;
			padding-right: 20upx;
			padding-left: 10upx;
		}
	}
	.second_list{
		display: flex;
		height: 89.5vh;
		overflow: hidden;
		align-items: normal;
		.left_list{
			width: 25%;
			text-align: center;
			.left_item{
				padding: 40upx 0;
				justify-content: center;
				color: #666;
				font-size: 28upx;
				.rexiao_img{
					width: 20upx;
					height: 26upx;
					margin-right: 20upx;
				}
			}
			.select_child{
				background-color: #fff;
				color: $base-color;
				font-size: 28upx;
				font-weight: bold;
				position: relative;
				&::after{
					content: '';
					display: block;
					position: absolute;
					left: 0;
					width: 8upx;
					height: 40upx;
					background-color: $base-color;
					border-radius: 0 20upx 20upx 0;
				}
			}
		}
		.right_list{
			width: 75%;
			background-color: #fff;
			.list{
				padding-bottom: 30upx;
			}
		}
	}
	.all_list_wrap{
		position: fixed;
		top: 90upx;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
		.all_list{
			background-color: #fff;
			padding: 40upx 30upx ;
			.all_top{
				justify-content: space-between;
				.all{
					color: #333;
					font-size: 28upx;
					font-weight: bold;
					padding: 0 30upx;
					position: relative;
					&::after{
						position: absolute;
						content: '';
						display: block;
						width: 8upx;
						height: 30upx;
						background-color: $base-color;
						border-radius: 0 20upx 20upx 0;
						left: 0;
						top: 6upx;
					}
				}
			}
			.all_item{
				display: inline-block;
				padding: 10upx 26upx;
				background-color: #F6F6F6;
				border-radius: 4upx;
				color: #999;
				font-size: 24upx;
				margin-right: 30upx;
				&:nth-child(4n){
					margin-right: 0;
				}
			}
			.select_all_item{
				background-color: #fff4ed;
				color:  $base-color;
			}
		}
	}
}
</style>
