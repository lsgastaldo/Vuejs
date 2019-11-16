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
                                <v-toolbar-title>Alterar Baia</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-icon dark right>mdi-home-group</v-icon>
                            </v-toolbar>
                            
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                >   
                                    <v-text-field
                                        label="Número da Matriz"
                                        type="number"
                                        prepend-icon="mdi-pig"

                                        v-model="information.numeroMatriz"
                                        :rules="rules.valueRule"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Ordem do Parto"
                                        type="number"
                                        prepend-icon="mdi-human-pregnant"

                                        v-model="information.ordemParto"
                                        :rules="rules.valueRule"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Parto Previsto"
                                        type="date"
                                        prepend-icon="mdi-calendar-month"

                                        v-model="information.partoPrevisto"
                                        :rules="rules.valueRule"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Parto Efetivo"
                                        type="date"
                                        prepend-icon="mdi-calendar-month"

                                        v-model="information.partoEfetivo"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Nome Controlador"
                                        type="text"
                                        prepend-icon="mdi-chip"

                                        v-model="information.controlador"
                                    >
                                    </v-text-field>
                                    <!-- <v-text-field
                                        label="Número da Baia"
                                        type="number"
                                        prepend-icon="mdi-home-floor-3"

                                        v-model="information.numeroBaia"
                                    > -->
                                    </v-text-field>
                                    <v-text-field
                                        label="Leitões Vivos"
                                        type="number"
                                        prepend-icon="mdi-pig-variant"

                                        v-model="information.leitoesVivos"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Leitões Mortos"
                                        type="number"
                                        prepend-icon="mdi-skull"

                                        v-model="information.leitoesMortos"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Data de Desmame"
                                        type="date"
                                        prepend-icon="mdi-calendar-month"

                                        v-model="information.dataDesmame"
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
                                >Alterar
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
            valueRule:[
                v => !!v || "Preenchimento obrigatório",
            ],
        }
    }),
    mounted(){
        this.checkAuthenticated();
        this.getBay();
    },
    methods: {
        checkAuthenticated() {
            if(!this.$session.has("token")){
                router.push("/login")
        }
        },
        getBay(){
            axios
                .post(this.$baseURL + "/buscarBaia", {"token":this.$session.get("token"), "id":this.$route.params.id})
                .then(res=>{
                    console.log(res)
                    this.information = res.data
                })
                .catch(e=>{
                    console.log(e)
                })
        },
        submit(){
            this.information.token = this.$session.get("token")  
            if(this.validate()){
                axios
                .post(this.$baseURL + "/alterarBaia", this.information)
                .then(res => {
                    console.log(res)
                    router.push("/viewBay")
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