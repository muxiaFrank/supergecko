<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-md navbar-light top bg-light">
      <router-link to="/">
        <a class="navbar-brand" href="#">Now <span class="sr-only">(current)</span>
        </a>
      </router-link>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span>
              </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/json"><a class="nav-link" href="#">Json</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <a class="nav-link" href="#">Setting</a>
            </router-link>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        </form>
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Sign in</button>
      </div>
    </nav>
    <router-view />
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
    text-align: left;
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
      background: none;
      height: auto;
    }

  }
</style>