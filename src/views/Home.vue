<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <p>{{date.getTime()}}</p>

    <p>{{date.toLocaleString()}}</p>

    <div class="input-group container">

        <input v-model="message" type="text" class="form-control col-5" />
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
      message: 'Hello Vue!',
      timeline:''
    };
  },
  methods:{
    reverseMessage : function(){
      this.timeline = new Date(parseInt(this.message) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
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
