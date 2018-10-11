<template>
	<div id="app">
		<com-header :title="$route.meta.title"></com-header>
		<router-view/>
		<tab-bar></tab-bar>
	</div>
</template>

<script>
	import ComHeader from '@/components/ComHeader'
	import TabBar from '@/components/tabbar/TabBar'
	export default {
		name: 'App',
		components:{
			ComHeader,
			TabBar
		}
	}
</script>

