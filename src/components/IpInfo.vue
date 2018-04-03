<template>
  <v-layout row>
    <v-flex xs12 sm6 lg12>
        <v-flex fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs4 v-for="ip in ips.data" :key="ip.ip">
              <v-card>
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox justify-space-around>
                     <span class="headline">{{ip.ip}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-title>
                  <div v-if="ip.osmatch">{{ip.osmatch.name}}</div><br />
                  <ul>
                    <li v-for="port in ip.ports" v-if="!ip[port]" :key="port"><a target="_blank" :href="'http://' + ip.ip + ':' +port">{{port}}</a>: Unknown</li>                              
                    <li v-for="port in ip.ports" v-if="ip[port]" :key="port">
                      <a target="_blank" :href="'https://' + ip.ip + ':' + port">{{port}}</a><span> {{ip[port].product}} {{ip[port].name}} {{ip[port].version}} {{ip[port].state}}</span>
                    </li>
                  </ul>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "IpInfo",
  props: { ips: Object }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
