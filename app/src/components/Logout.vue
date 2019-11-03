<template>

</template>

<script>
import axios from 'axios';
import router from "@/router/";

export default { 
  created () {
    if (this.$session.has('token')) {
      axios
        .post("http://127.0.0.1:80/servidorPHP/index.php/logout", {"token":this.$session.get("token")})
        .then(res => {
          this.$session.remove("token")
          this.$session.destroy()
          router.push("/login")
        })
        .catch(e => {
          
          this.errorShow = true
        });
    }
    router.push("/login")
  }
}
</script>
