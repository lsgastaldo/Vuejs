<template>
    <v-app>
        <v-content>
            <v-container
                fluid
                fill-height    
            >
                <v-layout justify-center mt-8 align-center>
                    <v-flex
                        xs12
                        md4
                        sm8
                    >
                        <v-card light>
                            <v-toolbar 
                                color="#00208F" 
                                class="white--text"
                                height="60px"
                                width="100%" 
                                flat
                            >
                            <v-toolbar-title>Alterar Parâmetro</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-icon dark right>mdi-thermometer</v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                >
                                    <v-text-field
                                        v-model="information.temperaturaAmbienteMAX"
                                        type="number"
                                        label="Temperatura Ambiente Máxima"
                                        required
                                        prepend-icon="mdi-thermometer-plus"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaAmbienteMIN"
                                        type="number"
                                        label="Temperatura Ambiente Mínima"
                                        required
                                        prepend-icon="mdi-thermometer-minus"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaPisoMAX"
                                        type="number"
                                        label="Temperatura Piso Máxima"
                                        required
                                        prepend-icon="mdi-thermometer-plus"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaPisoMIN"
                                        type="number"
                                        label="Temperatura Piso Mínima"
                                        required
                                        prepend-icon="mdi-thermometer-minus"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaBoilerMAX"
                                        type="number"
                                        label="Temperatura Boiler Máxima"
                                        required
                                        prepend-icon="mdi-thermometer-plus"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaBoilerMIN"
                                        type="number"
                                        label="Temperatura Boiler Mínima"
                                        required
                                        prepend-icon="mdi-thermometer-minus"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.semana"
                                        type="number"
                                        label="Semana Referente"
                                        required
                                        prependIcon="mdi-calendar-month"
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.tempoEsperaBomba"
                                        type="number"
                                        label="Tempo de Espera da Bomba (minutos)"
                                        required
                                        prepend-icon="mdi-clock-outline"
                                    >
                                    </v-text-field>

                                    <h5>Baia</h5>
                                    <v-radio-group
                                        v-model="information.idBaia"
                                        required
                                    >
                                        <v-radio value="1" label="Baia 1"></v-radio>
                                        <v-radio value="2" label="Baia 2"></v-radio>
                                    </v-radio-group>            
                                    

                                    <v-card-actions>
                                    <v-btn
                                        :disabled="!valid"
                                        color="#00208F"
                                        class="white--text"
                                        @click="submit"
                                        block
                                    >
                                        Enviar  
                                    </v-btn>
                                    </v-card-actions>
                                    <v-card-actions>
                                    <v-btn
                                        color="blue"
                                        outlined
                                        elevation="2"
                                        class="white--text"
                                        @click="reset"
                                        block
                                    >
                                        Limpar
                                    </v-btn>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
//import router from "../router";
import axios from "axios";
import router from '../../router';

export default {
data: () => ({
    information: {},
    valid: true
}),
mounted(){
    this.checkAuthenticated();
    this.getParameter()
},
methods: {
    checkAuthenticated() {
      if(!this.$session.has("token")){
        router.push("/login")
      }
    },  
    getParameter(){
        axios
        .post(this.$baseURL + '/buscarParametro', {"token":this.$session.get("token"), "idParametro":this.$route.params.id})
        .then(res=>{
            this.information = res.data
        })
        .catch(e=>{
            console.log(e)
        })
    },
    submit(){
        if(this.validate()){
            this.information.token = this.$session.get("token")
            axios
            .post(this.$baseURL + "/alterarParametro", this.information)
            .then(res => {
                router.push("/viewParameters")
            })
            .catch(e => {
                this.errorShow = true
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