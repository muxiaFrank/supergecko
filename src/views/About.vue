<template>
  <div>
    <h1>This is an about page</h1>
    <!-- <div id="terminal"></div> -->
  </div>
</template>

<script>
// import Terminal from './Xterm'
// var term = new Terminal();
// term.open(document.getElementById('terminal'));
// term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
export default {
  data () {
    return {
      term: null,
      terminalSocket: null
    }
  },

}
</script>
