<template>
	<div class="home">
		<mt-header fixed :title="title"></mt-header>
		<div class="content">
			<div class="device-sn">设备SN：
				<span>{{sn}}</span>
			</div>
			<div class="main">
				<device-info :sn="sn"></device-info>
				<form action="" v-if="!isBind">
					<input type="text">
				</form>
				<div v-if="isBind">
					<div>车辆出库</div>
					<div>车辆盘点</div>
					<mt-navbar v-model="selected">
						<mt-tab-item id="1">选项一</mt-tab-item>
						<mt-tab-item id="2">选项二</mt-tab-item>
						<mt-tab-item id="3">选项三</mt-tab-item>
					</mt-navbar>
					<!-- tab-container -->
					<mt-tab-container v-model="selected">
					<mt-tab-container-item id="1">
						<mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
					</mt-tab-container-item>
					</mt-tab-container>
				</div>
			</div>
		</div>
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
      title: "设备绑定",
      sn: "",
      isBind: false,
      selected: "1"
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
    setTitle(title) {
      this.title = title;
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  margin-top: 40px;
  .device-sn {
    padding: 5px 10px;
    text-align: center;
  }
}
</style>
