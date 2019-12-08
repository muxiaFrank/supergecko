<template>
  <div class="container">
    <div class="row">
      <div class="col-3" style="padding-left:0;">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a style="color: grey; padding: .5rem 1rem;">主页</a>
          <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
            aria-controls="v-pills-home" aria-selected="true">Home</a>
          <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
            aria-controls="v-pills-profile" aria-selected="false">Profile</a>
          <a style="color: grey;padding: .5rem 1rem; ">设置页面</a>
          <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab"
            aria-controls="v-pills-messages" aria-selected="false">Messages</a>
          <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab"
            aria-controls="v-pills-settings" aria-selected="false">Settings</a>
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content">
          <div class="tab-pane active" id="v-pills-home">
            <h1>Home首页内容</h1>
            <button v-on:click="get_content">Get</button>
            <a>12345678</a>
          </div>
          <div class="tab-pane" id="v-pills-profile">
            <h1>Profile 关于内容</h1>
            <a>12345678</a>
          </div>
        </div>

      </div>
    </div>
    <!-- <div id="terminal"></div> -->
  </div>
</template>

<script>
  // import Terminal from './Xterm'
  // var term = new Terminal();
  // term.open(document.getElementById('terminal'));
  // term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  export default {
    data() {
      return {
        term: null,
        terminalSocket: null,
        t_url: "https://v2.jinrishici.com/token",
        c_url: "https://v2.jinrishici.com/sentence"
      }
    },
    methods: {
      get_content() {
        this.$http.get(this.t_url).then(response => {
          const token = response.data["data"]
          console.log(token)
          console.log(typeof (token))
        })
        this.$http({
            methods: 'get',
            url: "https://v2.jinrishici.com/sentence",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'X-User-Token': this.token
            }
          }).then(function (response) {
            console.log(response.data)
          })
          // .get("https://v2.jinrishici.com/sentence", {
          //   headers: {
          //     'Content-Type': 'application/x-www-form-urlencoded',
          //     'X-User-Token': this.token
          //   }
          // }).then(function (response) {
          //   console.log(response.data)
          // })
      }

    }

  }
</script>