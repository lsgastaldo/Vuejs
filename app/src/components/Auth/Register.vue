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
                        md4
                        sm8
                    >
                        <v-card>
                            <v-toolbar 
                                color="teal lighten-2"
                                class="white--text" 
                                height="60px" 
                                width="100%" 
                                flat
                            >
                                <v-toolbar-title> Cadastro Usuário </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                <v-icon dark right>mdi-account-plus</v-icon>
                            </v-toolbar>

                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                >
                                <v-text-field
                                    label="Nome Usuário"
                                    prepend-icon="mdi-account"

                                    v-model="information.userName"
                                    :counter="10"
                                    :rules="rules.nameRules"
                                    required
                                >
                                </v-text-field>
                                <v-text-field
                                    label="E-mail"
                                    prepend-icon="mdi-email"

                                    v-model="information.email"
                                    :rules="rules.emailRules"
                                    required
                                >
                                </v-text-field>
                                <v-text-field
                                        label="Password"
                                        name="password"
                                        type="password"
                                        prepend-icon="mdi-lock"

                                        v-model="information.userPassword"
                                        :counter="16"
                                        :rules="rules.passwordRules"
                                        required
                                >
                                </v-text-field>

                                <v-radio-group v-model="information.idTipoUsuario" :rules="rules.radioRules">
                                    <v-radio v-for="role in roles" :key="role.idTipoUsuario" :value="role.idTipoUsuario" :label="role.descricao"></v-radio>
                                </v-radio-group>

                                </v-form>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-btn
                                        class="white--text"
                                        color="#00208F"
                                        block
                                        elevation="2"
                                        
                                        type="text"
                                        @click="submit"
                                        :disabled="!valid"
                                    >Cadastrar
                                    </v-btn>
                                </v-card-actions>
                                <v-card-actions>
                                    <v-btn
                                        class="white--text"
                                        color="blue"
                                        block
                                        outlined
                                        elevation="2"

                                        type="text"
                                        @click="reset"
                                    >Limpar
                                    </v-btn>
                                </v-card-actions>
                            </v-card-text>
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
    data: () => ({
        overlay:true,
        information: {},
        valid: true,
        nameValid: true,
        roles:{},
        rules:{
            nameRules: [
                v => !!v || 'Nome Usuário é obrigatório',
                v => (v && v.length >= 3) || 'Name must be more than 3 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail é obrigatório',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules:[
                v => !!v || "Senha é obrigatória.",
                v => (v && v.length >= 8) || "A senha deve ser maior que 8 caracteres.",
                v => (v && v.length <= 16) || "A senha deve ser menor que 16 caracteres."
            ],
            radioRules:[
                v => !!v || "Escolha sua alocação",
            ]

        },
    }),
    mounted(){
        axios.get(this.$baseURL + "/buscarTiposUsuarios")
        .then(res =>{
            this.roles = res.data
        })
        .catch(e =>{
            console.log(e)
        })
    },
    methods: {
        // async validateName() {
        //     let url = this.$baseURL + `/verificarNome?name=${this.information.userName}`
        //     let result = await axios.get(url)
        //     this.nameValid = result.data.code == 1
        // },
        submit(){
            if(this.validate()){
                axios
                .post(this.$baseURL + "/cadastrarUsuario", this.information)
                .then(res => {
                    console.log(res)
                    router.push("/login")
                })
                .catch(e => {
                    this.errorShow = true
                    console.log(e)
                    return false;   
                })
            }
        },
        validate () {
            if (this.$refs.form.validate()) {
                return true
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
}
</script>