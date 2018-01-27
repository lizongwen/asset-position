import Vue from 'vue'
import Router from 'vue-router'
import deviceBind from '@/page/device/deviceBind'
import deviceInfo from '@/page/device/deviceInfo'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'deviceBind',
			component: deviceBind
		},
		{
			path: '/deviceBind',
			name: 'deviceBind',
			component: deviceBind
		},
		{
			path: '/deviceInfo',
			name: 'deviceInfo',
			component: deviceInfo
		}
	]
})
