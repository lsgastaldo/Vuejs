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
                            <v-toolbar color="#00208F" 
                                class="white--text"
                                height="60px"
                                width="100%" 
                                flat
                            >
                            <v-toolbar-title>Inserindo Novos Parâmetros</v-toolbar-title>
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
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaAmbienteMIN"
                                        type="number"
                                        label="Temperatura Ambiente Mínima"
                                        required
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaPisoMAX"
                                        type="number"
                                        label="Temperatura Piso Máxima"
                                        required
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaPisoMIN"
                                        type="number"
                                        label="Temperatura Piso Mínima"
                                        required
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaBoilerMIN"
                                        type="number"
                                        label="Temperatura Boiler Mínima"
                                        required
                                    >
                                    </v-text-field>
                                    <v-text-field
                                        v-model="information.temperaturaBoilerMAX"
                                        type="number"
                                        label="Temperatura Boiler Máxima"
                                        required
                                    >
                                    </v-text-field>

                                    <v-text-field
                                        v-model="information.semanas"
                                        type="number"
                                        label="Semana Referente"
                                        required
                                    >
                                    </v-text-field>

                                    <v-text-field
                                        v-model="information.tempoEsperaBomba"
                                        type="number"
                                        label="Tempo de Espera da Bomba (minutos)"
                                        required
                                    >
                                    </v-text-field>

                                    <h5>Baia</h5>
                                    <v-radio-group
                                        v-model="information.idBaia"
                                        required
                                    >
                                        <v-radio v-for="bay in bays" :key="bay.idBaia" :value="bay.idBaia" :label="'Baia' + bay.numeroBaia"></v-radio>
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
    bays:{},
    valid: true
}),
mounted(){
    this.checkAuthenticated()
    this.getBay()
},
methods: {
    checkAuthenticated() {
      if(!this.$session.has("token")){
        router.push("/login")
      }
    },
    submit(){
        this.information.token = this.$session.get("token")
        if(this.validate()){
            axios
            .post(this.$baseURL + "/cadastrarParametros", this.information)
            .then(res => {
                router.push("/viewparameters")
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
    getBay(){
        axios
            .post(this.$baseURL + '/buscarTotalBaias', {"token":this.$session.get("token")})
            .then(res=>{
                console.log(res.data)
                this.bays = res.data
            })

    }
},
}
</script>