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
                        <v-card 
                            light
                        >
                            <v-toolbar 
                                color="#00208F" 
                                class="white--text"
                                height="60px"
                                width="100%" 
                                flat
                            >
                                <v-toolbar-title>Cadastrando uma nova Baia</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-icon dark right>mdi-home-group</v-icon>
                            </v-toolbar>
                            
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                >   
                                    <v-text-field
                                        label="Numero da Baia"
                                        type="number"
                                        prepend-icon="mdi-home-floor-3"

                                        v-model="information.numeroBaia"
                                        :rules="rules.numeroBaiaRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Matriz"
                                        type="number"
                                        prepend-icon="mdi-pig"

                                        v-model="information.numeroBaia"
                                        :rules="rules.numeroBaiaRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Data Prevista Nasc.Porquinhos"
                                        type="date"
                                        prepend-icon="mdi-calendar-month"

                                        v-model="information.dataNasc"
                                        :rules="rules.dataNascRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Ordem do Parto"
                                        type="number"
                                        prepend-icon="mdi-human-pregnant"

                                        v-molde="information.quantidadePorquinhos"
                                        :rules="rules.quantidadePorquinhosRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Nome Controlador"
                                        type="text"
                                        prepend-icon="mdi-chip"

                                        v-model="information.nomeControlador"
                                        :rules="rules.nomeControladorRules"
                                    >
                                    </v-text-field>
                                </v-form>
                            </v-card-text>
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
    data:() => ({
        information: {},
        valid: true,
        rules:{
            numeroBaiaRules:[
                v => !!v || "Preenchimento obrigatório",
            ],
            dataNascRules:[
                v => !!v || "Preenchimento obrigatório"
            ],
            quantidadePorquinhosRules:[
                v => !!v || "Preenchimento obrigatório"
            ],
            nomeControladorRules:[
                v => !!v || "Preenchimento obrigatório"
            ]
        }
    }),

    methods: {
        submit(){
            if(this.validate()){
                axios
                .post(this.$baseURL + "/cadastrarBaia", this.information)
                .then(res => {
                    console.log(res)
                    router.push("/showBaias")
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
        }
    }    
}
</script>