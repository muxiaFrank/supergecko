<template>
  <div id="app">
 
    <div id="nav" >
      <div class="d-flex flex-row flex-md-row align-items-center p-3 px-md-4 bg-white">
      <h2 class=" mr-md-auto mr-xs-auto mr-sm-auto font-weight-normal">Classical</h2>
      <nav class="my-md-0">
      <router-link to="/">首页</router-link> |
      <router-link to="/json">功能</router-link> |
      <router-link to="/about">关于</router-link>&nbsp;
      </nav>
      <a class="btn btn-outline-primary" href="#">注册/登陆</a>
    </div>



    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scope>

.tm-home-img-container {
	/* background-image: url('img/tm-home-img.jpg'); */
	background-size: auto;
	background-position: center;
	background-repeat: no-repeat;
	height: 500px;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* padding-bottom: 8px; */
  text-align: right
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


#nav a.router-link-exact-active {
  color: #42b983;
}

.carousel-inner img {
      width: 100%;
      height: 100%;
  }

@media(max-width: 991px) {

    .tm-home-img-container {
		background:none;
		height: auto;
	}
 
}

</style>
