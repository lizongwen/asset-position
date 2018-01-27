<template>
	<div class="index">
		aaaa
		<ul>
			<li>
				<label for="">vin</label>
				<span>{{sn}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
    sn: String
  },
  data() {
    return {
      deviceInfo: {}
    };
  },
  created() {
    // this.setNewsApi();
  },
  methods: {
    setNewsApi: function() {
      this.$http.get("/api/deviceInfo").then(resp => {
        console.log(resp);
        this.deviceInfo = resp.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>

</style>

