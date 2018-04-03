<template>
  <div id="app">
  <p>Masscanner UI</p>
    <v-app>
      <ip-info v-bind:ips="ips"></ip-info>
    </v-app>
  </div>
</template>

<script>

var ws = new WebSocket('ws://localhost:3000')
import IpInfo from './components/IpInfo.vue'
export default {
  data () {
    return {
      ips: []
    }
  },
  created() {
    ws.addEventListener('message', this.handleMessageEvent);
  },
  beforeDestroy() {
    // cleanup listeners (avoids memory leaks) 
    ws.removeEventListener('message', this.handleMessageEvent);
  },
  methods: {
    handleMessageEvent(event) {
      this.ips = JSON.parse(event.data)
      console.log(event.data)
    }
  },
  components: { IpInfo }
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  display: block;
  margin: 0 10px;
}
</style>
