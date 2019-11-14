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
          console.log(res)
          this.$session.remove("token")
          this.$session.destroy()
          router.push("/login")
        })
        .catch(e => {
          console.log(e)
          this.errorShow = true
        });
    }else{
      router.push("/login")
    }
  }
}
</script>
