<template>
	<div class="index">
		{{deviceInfo.a}}
	</div>
</template>

<script>
export default {
  data() {
    return {
      deviceInfo:""
    };
  },
  created() {
   // this.setNewsApi();
  },
  methods: {
    setNewsApi: function() {
      this.$http.get("/api/deviceInfo").then(resp => {
		  console.log(resp);
		  this.deviceInfo=resp.data
      });
    }
  }
};
</script>

<style lang="less" scoped>

</style>

