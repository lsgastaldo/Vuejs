<template>
      <v-container fuild>
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
          >
            <v-toolbar 
                color="#00208F" 
                class="white--text mb-2"
                height="60px"
                width="100%" 
                flat
            >
                <v-toolbar-title>Leitura Sensores Baia - 1</v-toolbar-title>
                  <v-spacer></v-spacer>
                <v-icon dark right>mdi-thermometer-lines</v-icon>
            </v-toolbar>
            <ChartBox1 id="renderedChart" v-if="authenticated == true"></ChartBox1>

          </v-col>

          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
          >
            <v-toolbar 
                color="#00208F" 
                class="white--text mb-2"
                height="60px"
                width="100%" 
                flat
            >
                <v-toolbar-title>Leitura Sensores Baia - 2</v-toolbar-title>
                  <v-spacer></v-spacer>
                <v-icon dark right>mdi-thermometer-lines</v-icon>
            </v-toolbar>
            <ChartBox2 id="renderedChart" v-if="authenticated == true"></ChartBox2>

          </v-col>
        </v-row>
      </v-container>  
</template>

<script>
import router from "../router";
import ChartBox1 from "@/components/Aquecimento/ChartBox1"
import ChartBox2 from "@/components/Aquecimento/ChartBox2"

export default {
  name: "Index",
  components:{
    ChartBox1: ChartBox1,
    ChartBox2: ChartBox2
  },
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
    this.checkAuthenticated();
  },
  methods: {
    checkAuthenticated() {
      if(!this.$session.has("token")){
        router.push("/login")
      }
      this.authenticated = true
    }
  }
};
</script>

