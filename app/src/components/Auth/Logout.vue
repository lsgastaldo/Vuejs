<template>

</template>

<script>
import axios from 'axios';
import router from "@/router/";

export default { 
  created () {
    if (this.$session.has("token")) {
      axios
        .post(this.$baseURL + "/logout", {"token":this.$session.get("token")})
        .then(res => {
          this.$session.remove("token")
          this.$session.destroy()
          window.location.href = "https://sad.fabricadesoftware.ifc.edu.br/"
        })
        .catch(e => {
          // console.log(e)
          this.errorShow = true
        });
    }else{
      router.push("/login")
    }
  }
}
</script>
