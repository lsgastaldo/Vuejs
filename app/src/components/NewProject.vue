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
                                <v-toolbar-title>Cadastrar Projeto</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-icon dark right>mdi-folder-plus</v-icon>
                            </v-toolbar>
                            
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                >   
                                    <v-text-field
                                        label="Nome do Projeto"
                                        type="text"
                                        prepend-icon="mdi-account-badge"

                                        v-model="information.projectName"
                                        :rules="rules.nameProjectRules"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        label="Data Inicio"
                                        type="date"
                                        prepend-icon="mdi-calendar-month"

                                        v-model="information.startDate"
                                        :rules="rules.startDateRules"
                                    >
                                    </v-text-field>
                                    
                                    <v-autocomplete
                                        label="Colaboradores"
                                        v-model="colaboratorsName[i-1]"
                                        prepend-icon="mdi-account-plus"
                                        :items="users"
                                        :search-input.sync="model[i-1]"
                                        @keyup="getNames(i-1)"
                                        v-for="i in numberColaborators"
                                        :key="i"
                                        cache-items
                                        hide-no-data
                                    >
                                    </v-autocomplete>
                                    <v-card-actions  chips dark>
                                        <v-spacer></v-spacer>
                                        <v-chip @click="lessColaborator()"><v-icon>mdi-minus</v-icon></v-chip>
                                        <v-chip @click="plusColaborator()"><v-icon>mdi-plus</v-icon></v-chip>
                                    </v-card-actions>
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
        users :[],
        numberColaborators:1,
        model:[],
        colaboratorsName:[],
        rules:{
            nameProjectRules:[
                v => !!v || "Preenchimento obrigatório",
            ],
            startDateRules:[
                v => !!v || "Preenchimento obrigatório",
            ],
            colaboratorRules:[
                v => !!v || "Preenchimento obrigatório",
            ],
        },
    }),

    methods: {
        async getNames(i) {
            let url = this.$baseURL + `/buscarNomes`
            let data = {"token": this.$session.get("token"), "name":this.model[i]}
            let result = await axios.post(url, data)
            if(result != false){
                this.users = result.data
            }
        },
        plusColaborator(){
            this.numberColaborators++;
        },
        lessColaborator(){
            this.numberColaborators--;
        },
        submit(){
            if(this.validate()){
                this.information.names = this.colaboratorsName
                this.information.token = this.$session.get("token")  
                axios
                .post(this.$baseURL + "/cadastrarProjeto", this.information)
                .then(res => {
                        console.log(res.data)
                    router.push("/")
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
    },   
}
</script>