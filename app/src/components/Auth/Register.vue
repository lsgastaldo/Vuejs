<template>
    <v-container>
        <v-overlay :value="overlay">
            <v-card light>
                <v-toolbar color="#4781FF" class="white--text" height="60px" width="500px" flat>
                    <v-toolbar-title> Register </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-icon dark right>mdi-account-plus</v-icon>
                </v-toolbar>
                <v-col cols="12" sm="4" md="12">
                    <v-form
                        ref="form"
                        v-model="valid"
                    >
                    <v-text-field
                        v-model="information.userName"
                        :counter="10"
                        :rules="rules.nameRules"
                        label="Name"
                        required
                        @change="validateName"
                        :error="!nameValid"
                    ></v-text-field>

                    <v-text-field
                        v-model="information.email"
                        :rules="rules.emailRules"
                        label="E-mail"
                        name="userName"
                        required
                    ></v-text-field>

                    <v-text-field
                            id="password"
                            v-model="information.userPassword"
                            :counter="16"
                            label="Password"
                            name="password"
                            type="password"
                            :rules="rules.passwordRules"
                            required
                    ></v-text-field>
                    <v-radio-group v-model="information.idTipoUsuario" :rules="rules.radioRules">
                        <v-radio v-for="role in roles" :key="role.IdTipoUsuario" :value="role.IdTipoUsuario" :label="role.Descricao"></v-radio>
                    </v-radio-group>
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="submit"
                    >
                        Enviar
                    </v-btn>

                    <v-btn
                        color="error"
                        class="mr-4"
                        @click="reset"
                    >
                        Limpar
                    </v-btn>
                    </v-form>
                </v-col>
            </v-card>
        </v-overlay>
    </v-container>
</template>

<script>
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
            v => !!v || 'Name is required',
            v => (v && v.length >= 3) || 'Name must be more than 3 characters',
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
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
    axios.get("http://127.0.0.1:80/servidorPHP/index.php/buscarTiposUsuarios")
    .then(res =>{
        this.roles = res.data
    })
    .catch(e =>{
        console.log(e)
    })
},
methods: {
    async validateName() {
        let url = `http://127.0.0.1:80/servidorPHP/index.php/verificarNome?name=${this.information.userName}`
        let result = await axios.get(url)
        this.nameValid = result.data.code == 1
    },
    submit(){
        if(this.validate()){
            axios
            .post("http://127.0.0.1:80/servidorPHP/index.php/cadastrar", this.information)
            .then(res => {
                console.log(res);
                return true;
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