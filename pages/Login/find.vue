<template>
	<view class="page_wrap">
		
		<view class="input_wrap">
			<u--form ref='form' :model="model" :rules="rules" >
				<u-form-item prop="account">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入当前账号' border='bottom' v-model="model.account">
							<template slot="prefix">
								<text class="label" >账号</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				<u-form-item prop="phone">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入手机号码' border='bottom' v-model="model.phone">
							<template slot="prefix">
								<text class="label" >手机号</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				<u-form-item prop="code">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入验证码' border='bottom' v-model="model.code">
							<template slot="prefix">
								<text class="label" >验证码</text>
							</template>
							<template slot="suffix">
								<u-code
									ref="uCode"
									@change="codeChange"
									seconds="60"
									changeText="X秒重新获取"
								></u-code>
								<view class="get_code" @tap="getCode">
									{{tips}}
								</view>
							</template>
						</u-input>
					</view>
				</u-form-item>
				
				
				<u-form-item prop="newPassword">
					<view class="input_item ">
						<u-input class="mt10" placeholder='请输入新密码' border='none' v-model="model.newPassword">
							<template slot="prefix">
								<text class="label" >新密码</text>
							</template>
						</u-input>
					</view>
				</u-form-item>
			</u--form>
			<view class="agreement row">
				<image 
				@click="agreeHandle" 
				:src="isAgree?
				'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png':
				'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png'" 
				mode="widthFix">
				</image>
				<text>我已阅读并同意以下条款<text class="link">《好运来服务协议及隐私政策》》</text></text>
			</view>
		</view>
		
		<view class="btn" @click="submit">
			保存
		</view>
		<view class="btn code" @click="navTo('./Login')">
			联系客服
		</view>
	</view>
</template>

<script>
	import {checkStr} from '@/common/js/util'
	export default {
		data() {
			return {
				model:{},
				rules:{
					account:[
						{required:true,message:'请输入账号',trigger:'blur'}
					],
					phone:[
						{required:true,validator:this.phoneRule,trigger:'blur'}
					],
					password:[
						{required:true,message:'请输入密码',trigger:'blur'}
					],
					newPassword:[
						{required:true,validator:this.passWordRule,trigger:'blur'}
					],
					code:[
						{required:true,message:'请输入验证码',trigger:'blur'}
					]
				},
				tips:'',
				isAgree:false
			};
		},
		methods:{
			phoneRule(rule,value,cb){
				if(!value || !checkStr(value, 'mobile')){
					cb(new Error('请输入正确的手机号码'))
				}
				cb()
			},
			passWordRule(rule,value,cb){
				if(!value || !checkStr(value, 'pwd')){
					cb(new Error('密码为8-16位，须包含数字、字母、符号'))
				}
				cb()
			},
			agreeHandle(){
				this.isAgree=!this.isAgree
			},
			codeChange(text) {
			  this.tips = text;
			},
			getCode() {
			    if (this.$refs.uCode.canGetCode) {
			        uni.$u.toast('验证码已发送');
			        this.$refs.uCode.start();
			    } else {
					uni.$u.toast('倒计时结束后再发送');
			    }
			},
			submit(){
				this.$refs.form.validate().then(res => {
					delete this.model.password_
					console.log(this.model)
				}).catch(errors => {
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	margin-top: 30upx;
	.input_wrap{
		padding: 30upx;
		background-color: #fff;
		/deep/ .u-input{
			padding: 12upx 0 !important;
		}
		/deep/ .u-input__content__prefix-icon{
			margin-right: 40upx !important;
		}
		/deep/ .input_item{
			width: 100% !important;
		}
		/deep/ .u-form-item__body__right__message{
			margin:0 !important;
		}
		.input_item{
			.label{
				color: #888;
				font-size: 24upx;
				margin-right: 80upx;
			}
			.iconfont{
				color: #d1d1d1;
			}
			.get_code{
				color: #FD4D00;
				font-size: 28upx;
			}
		}
	}
	.agreement{
		margin-top: 100upx;
		image{
			width: 34upx;
			margin-right: 10upx;
		}
		color: #666;
		font-size: 24upx;
		.link{
			color: $base-color;
		}
	}
	.btn{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #fff;
		font-size: 36upx;
		border-radius: 50upx;
		background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
		margin: auto;
		margin-top: 50upx;
		width: 90%;
		
	}
	.code{
		color: #F87523;
		background: #fff;
		border:2upx solid #F87523
	}
	
}
</style>
