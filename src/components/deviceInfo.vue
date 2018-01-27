<template>
  <div class="device-info">
	  <ul v-if="ok">
		  <li>
			  <span>vin</span>
			  <span>{{deviceInfo.vin}}</span>
		  </li>
		  <li>
			  <span>车型</span>
			  <span>{{deviceInfo.car}}</span>
		  </li>
		  <li>
			  <span>设备电压</span>
			  <span>{{deviceInfo.voltage}}</span>
		  </li>
		  <li>
			  <span>最后通信时间</span>
			  <span>{{deviceInfo.lastTime}}</span>
		  </li>
		  <li>
			  <span>最后通信位置</span>
			  <span>{{deviceInfo.lastPlace}}</span>
		  </li>
	  </ul>
	  <div v-if="!ok" class="error-msg">该设备未绑定车辆！</div>
  </div>
</template>

<script>
export default {
  name: "deviceInfo",
  props: {
    sn: String
  },
  data: function() {
    return {
      deviceInfo: {},
      ok: false
    };
  },
  created: function() {
    this.getDeviceInfo();
  },
  methods: {
    getDeviceInfo() {
      this.$http({
        method: "post",
        url: "/api/deviceInfo",
        data: this.sn
      }).then(resp => {
        console.log(resp);
        if (resp.data) {
		  this.$parent.setTitle("设备查看");
		  this.$parent.isBind=true;
          this.deviceInfo = resp.data;
          this.ok = true;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.device-info {
  .error-msg {
    text-align: center;
    color: sienna;
  }
}
</style>

