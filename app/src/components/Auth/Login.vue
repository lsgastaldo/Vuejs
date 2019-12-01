<template>
    <v-app>
        <v-content>
			<v-container
				fluid
				fill-height
			>
				<v-layout
					align-center 
					justify-center
				>
					<v-flex
						xs12
						sm8
						md4
					>
						<v-card light>
							<v-toolbar 
								color="#00208F" 
								class="white--text" 
								height="60px" 
								width="100%"
								flat
							>
								<v-toolbar-title display-3>SAD</v-toolbar-title>
									<v-spacer></v-spacer>
								<v-icon dark right>mdi-login</v-icon>
							</v-toolbar>
							<v-card-text>
								<v-form ref="form">
									<v-text-field
										label="Usuario"
										name="login"
										type="text"
										single-line
										prepend-icon="mdi-account-circle"

										v-model="credentials.username"
										:rules="rules.username"
										required
									></v-text-field>
									<v-text-field
										label="Senha"
										name="password"
										prepend-icon="mdi-lock"
										single-line

										type="password"
										v-model="credentials.password"
										:rules="rules.password"
										required
									></v-text-field>
								</v-form>
							</v-card-text>
								<v-divider></v-divider>
							<v-card-actions>
								<v-btn 
									class="white--text"
									color="#00208F"
									type="text"
									block
									elevation="2"

									@click="login()"
								>Entrar
								</v-btn>
							</v-card-actions>
							<v-card-actions>
								<v-btn
									class="white--text"
									color="orange"
									block
									elevation="2"

								
								>Cadastrar
								</v-btn>
							</v-card-actions>
							<!-- <v-card-text >Forgot your password</v-card-text> -->
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
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
  mounted(){
	this.checkAuthenticated()
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        axios
          .post(this.$baseURL + "/login", this.credentials)
          .then(res => {
			// console.log(res)
            this.$session.start();
            this.$session.set("token", res.data.token);
            window.location.href = "https://sad.fabricadesoftware.ifc.edu.br/"
          })
          .catch( 
            this.errorShow = true
          );
      }
    },
    register(){
		router.push("/register")
	},
	checkAuthenticated() {
      if(this.$session.has("token")){
        router.push("/")
      }
      this.authenticated = true
    },
  }
};
</script>