<template>
	<div id="app">
		<com-header :title="$route.meta.title" @history-chang="historyChang"></com-header>
		<transition :name="tranName">
			<router-view class="transitionName">

			</router-view>
		</transition>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import ComHeader from '@/components/ComHeader'
	import TabBar from '@/components/tabbar/TabBar'
	export default {
		name: 'App',
		data(){
			return{
				tranName:'',
				path:''
			}
		},
		methods:{
			historyChang(){
				this.$router.push(`/${this.path}/history`)
			}
		},
		watch:{
			'$route'(to,from){
				const toPath=to.path.split('/').length;
				const fromPath=from.path.split('/').length;
				this.tranName=toPath===fromPath?'':(toPath<fromPath)?'slide-right':'slide-left';
				this.path=this.$route.name;
			}
		},
		computed:{

		},
		components:{
			ComHeader,
			TabBar
		},
		mounted(){
			//console.log('comHeader',window.location.href.split('#')[1].slice(1))

		}
	}
</script>

