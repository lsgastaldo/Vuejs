<template>
  <v-app>
    <section class="container">
        <v-toolbar 
            color="#00208F" 
            class="white--text mb-2"
            height="60px"
            width="100%" 
            flat
        >
            <v-toolbar-title>Leitura Sensores</v-toolbar-title>
              <v-spacer></v-spacer>
            <v-icon dark right>mdi-thermometer-lines</v-icon>
        </v-toolbar>
        <Chart v-if="authenticated == true"></Chart>
    </section> 
  </v-app>
</template>

<script>
import router from "../router";
import Chart from "@/components/Chart"

export default {
  name: "Index",
  components:{
    Chart: Chart
  },
  data() {
    return {
      authenticated: false
    };
  },
//   mounted() {
//     this.checkAuthenticated();
//   },
//   methods: {
//     checkAuthenticated() {
//       if(!this.$session.has("token")){
//         router.push("/login")
//       }
//       this.authenticated = true
//     }
//   }
};
</script>

