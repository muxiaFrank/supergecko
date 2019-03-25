<template>
  <div class="home" >
        <div id="demo" class="carousel slide" data-ride="carousel">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1" ></li>
            <li data-target="#demo" data-slide-to="2"></li>
            <li data-target="#demo" data-slide-to="3"></li>
        </ul>
 
        <!-- 轮播图片 -->
        <div class="carousel-inner">
            <div class="carousel-item active carousel-bg1">
                <img src="http://static.runoob.com/images/mix/img_fjords_wide.jpg" style="width: 100%;">
            </div>
            <div class="carousel-item carousel-bg2">
                <img src="http://static.runoob.com/images/mix/img_nature_wide.jpg" style="width: 100%;">
            </div>
            <div class="carousel-item carousel-bg3">
                <img src="http://static.runoob.com/images/mix/img_fjords_wide.jpg" style="width: 100%;">
            </div>
            <div class="carousel-item carousel-bg4">
                <img src="http://static.runoob.com/images/mix/img_nature_wide.jpg" style="width: 100%;">
            </div>
        </div>
        <!-- 左右切换按钮 -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    <!-- 轮播图结束 -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <p>{{parseInt(date.getTime()/1000)}}</p>

    <div class="row">
      <div class="col-6">
        <p>太平洋时间</p>
  <p>{{UTCtime(-8).toLocaleString()}}</p>
      </div>
      <div class="col-6">
        <p>北京时间</p>
    <p>{{date.toLocaleString()}}</p>

      </div>
    </div>

    <div class="input-group container">
        <input v-model="msg" type="text" :placeholder="message" class="form-control col-5" />
        <span class="input-group-btn col-2">
        <button v-on:click="reverseMessage" type="button" class="btn btn-outline-secondary">Go</button>
    </span>
    <div class="col-5">   
      <p> {{timeline}}</p>
</div>
  
</div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      date: new Date(),
      message: "输入时间戳",
      msg:"",
      timeline: "",
      utc: parseInt(new Date().getTime() / 1000)
    };
  },
  methods: {
    reverseMessage: function() {
      this.timeline = new Date(parseInt(this.msg) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ");
    },
    //参数i为时区值数字
    UTCtime: function(i) {
      //参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
      if (typeof i !== "number") return;
      var d = new Date();

      //得到1970年一月一日到现在的秒数
      var len = d.getTime();

      //本地时间与GMT时间的时间偏移差
      var offset = d.getTimezoneOffset() * 60000;

      //得到现在的格林尼治时间=
      var utcTime = len + offset;

      return new Date(utcTime + 3600000 * i);
    }
  },
  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>
