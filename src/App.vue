<template>
	<div class="index">
		<mt-header fixed :title="title"></mt-header>
		<div class="main-body">
			<div class="device-sn">设备SN：
				<span>{{sn}}</span>
			</div>
			<router-view :sn="sn" />
		</div>
	</div>
</template>

<script>
import parseQueryString from "outils/parseQueryString";
export default {
  name: "App",
  data: function() {
    return {
      title: "",
	  sn: ""
    };
  },
  created: function() {
    this.getSnNum();
    this.getDeviceInfo();
  },
  methods: {
    getSnNum() {
      let queryParam = parseQueryString();
      this.sn = queryParam.sn;
    },
    getDeviceInfo() {
      this.$http({
        method: "post",
        url: "/api/deviceInfo",
        data: this.sn
      }).then(resp => {
		console.log(resp);
		this.title=resp.data?'设备查看':'设备绑定';
        this.deviceInfo = resp.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.main-body {
  margin-top: 40px;
  .device-sn {
    padding: 5px 10px;
    text-align: center;
  }
}
</style>
