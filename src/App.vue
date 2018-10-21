<template>
	<div id="app">
		<com-header :title="$route.meta.title" @history-chang="historyChang"></com-header>
		<transition name="router-fade" mode="out-in" >
			<keep-alive>
				<router-view />
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import ComHeader from '@/components/ComHeader'
	import { Indicator } from 'mint-ui';
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
				this.transitionName=toPath===fromPath?'':(toPath<fromPath?'slide-right':'slide-left');
				this.path=this.$route.name;
			}
		},
		computed:{

		},
		components:{
			ComHeader
		},
		mounted(){
			//console.log('comHeader',window.location.href.split('#')[1].slice(1))

		}
	}
</script>
<style>
	.router-fade-enter-active, .router-fade-leave-active {
		transition: opacity .3s;
		}
	.router-fade-enter, .router-fade-leave-active {
		opacity: 0;
		}
</style>
