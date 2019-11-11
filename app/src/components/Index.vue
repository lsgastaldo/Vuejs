<template>
 <section class="container">
  <h1>
   Página Inicial
  </h1>
 </section>   
</template>

<script>
import router from "../router";

export default {
  name: "Index",
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
        router.push("login")
      }
    }
  }
};
</script>

