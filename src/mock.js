// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const deviceInfo = function (req) {
	return (req.body=='88888888')?({
		vin: 'LWVAA2586DA049031',
		car: '车型1',
		voltage: '3.8V',
		lastTime: '2018年1月23日14:33:24',
		lastPlace: '广州市天河区华夏路49津滨腾越大厦',
	}):''
}

// Mock.mock( url, post/get , 返回的数据);
Mock.mock('/api/deviceInfo', 'post', deviceInfo);

