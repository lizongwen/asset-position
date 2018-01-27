<template>
  <div class="device-info">
	  设备信息
	  {{sn}}
  </div>
</template>

<script>
export default {
  name: "deviceInfo",
  props: {
    sn: String
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
        this.$parent.setTitle(resp.data ? "设备查看" : "设备绑定");
      });
    }
  }
};
</script>
<style lang="less" scoped>

</style>

