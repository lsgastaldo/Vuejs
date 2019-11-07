<template>
    <v-app>
        <v-content>
            <v-layout align-center justify-center mt-10>
                    <v-overlay :value="overlay">
                        <v-card light>
                            <v-toolbar color="#4781FF" class="white--text" height="60px" width="500px" flat>
                            <v-toolbar-title> Login </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-icon dark right>mdi-login</v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        v-model="credentials.username"
                                        label="Login"
                                        name="login"
                                        type="text"
                                        :rules="rules.username"
                                        single-line
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="credentials.password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        :rules="rules.password"
                                        single-line
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn 
                                    class="white--text"
                                    color="green"
                                    type="text"
                                    block
                                    depressed
                                    @click="login()"
                                >Login
                                </v-btn>
                            </v-card-actions>
                            <v-card-actions>
                                <v-btn
                                    class="white--text"
                                    color="#4781FF"
                                    block
                                    depressed
                                    @click="register()"
                                >Create account
                                </v-btn>
                            </v-card-actions>
                            <v-card-text >Forgot your password</v-card-text>
                        </v-card>
                    </v-overlay>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
import router from "@/router/";
import axios from "axios";

 
export default {  
  name: "Login",
  props: {
    source: String,
  }, 
  data: () => ({
    credentials: {},
    errorShow: false,
    rules: {
      username: [v => !!v || "Usuário é obrigatório."],
      password: [
        v => !!v || "Senha é obrigatória.",
        v => (v && v.length >= 3) || "A senha deve ser maior que 5 caracteres."
      ]
    }
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        axios
          .post("http://127.0.0.1:80/servidorPHP/index.php/login", this.credentials)
          .then(res => {
            this.$session.start();
            this.$session.set("token", res.data.token);
            router.push("/home")
          })
          .catch(e => { 
            console.log(e)
            this.errorShow = true
          });
      }
    },
    register(){
        router.push("/register")
    }
  }
};
</script>