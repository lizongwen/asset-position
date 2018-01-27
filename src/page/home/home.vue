<template>
	<div class="index">
		<mt-header fixed :title="title"></mt-header>
		<div class="main-body">
			<div class="device-sn">设备SN：
				<span>{{sn}}</span>
			</div>
		</div>
		<device-info :sn="sn"></device-info>
	</div>
</template>

<script>
import parseQueryString from "outils/parseQueryString";
import deviceInfo from "@/components/deviceInfo";
export default {
  name: "App",
  components: {
	  deviceInfo
  },
  data: function() {
    return {
      title: "",
      sn: ""
    };
  },
  created: function() {
    this.getSnNum();
  },
  methods: {
    getSnNum() {
      let queryParam = parseQueryString();
      this.sn = queryParam.sn;
	},
	setTitle(title){
		this.title=title;
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
