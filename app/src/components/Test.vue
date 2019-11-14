<template>
 <section class="container">
  <h1>
   Página Inicial
   <v-btn @click="teste()">Teste</v-btn>
  </h1>
  {{dados}}
 </section>   
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "Test",
  data:() =>({
      dados:{}
  }),
  methods: {
    teste(){
        axios
            .post("http://127.0.0.1:80/servidorPHP/teste.php", null, {headers:{
                    'Authorization': `Token ${this.$session.get("token")}`
                }
            })
            .then(res=>{
                this.dados = res
            })
            .catch(e=>{
                console.log(e)
            })
    }
  }
};
</script>

