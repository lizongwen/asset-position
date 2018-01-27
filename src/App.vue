<template>
	<div class="index">
		<mt-header fixed :title="title"></mt-header>
		<div class="main-body">
			<div class="device-sn">设备SN：
				<span>{{sn}}</span>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
//url取参数值工具
import { urlParse } from "./js/util";
export default {
  name: "App",
  data: function() {
    return {
      title: "设备绑定",
      sn: ""
    };
  },
  created: function() {
    this.getSnNum();
  },
  methods: {
    getSnNum() {
	  let queryParam = urlParse();
	  console.log(queryParam)
     this.sn = queryParam.sn;
    }
  }
};
</script>
<style lang="less" scoped>
.main-body{
	margin-top: 40px;
	.device-sn{
		padding: 5px 10px;
		text-align: center;
	}
}
</style>
