<template>
    <v-container>
        <v-layout justify-center mt-8>
            <v-card light>
                <v-toolbar color="#4781FF" class="white--text" height="60px" width="100%" flat>
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
                            v-model="information.TemperaturaAmbienteMAX"
                            type="number"
                            label="Temperatura Ambiente Máxima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.TemperaturaAmbienteMIN"
                            type="number"
                            label="Temperatura Ambiente Mínima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.TemperaturaPisoMAX"
                            type="number"
                            label="Temperatura Piso Máxima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.TemperaturaPisoMIN"
                            type="number"
                            label="Temperatura Piso Mínima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.TemperaturaBoilerMIN"
                            type="number"
                            label="Temperatura Boiler Mínima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.TemperaturaBoilerMAX"
                            type="number"
                            label="Temperatura Boiler Máxima"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="information.Semanas"
                            type="number"
                            label="Semana Referente"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="information.TempoEsperaBomba"
                            type="number"
                            label="Tempo de Espera da Bomba (minutos)"
                        >
                        </v-text-field>

                        <h5>Baia</h5>
                        <v-radio-group
                            v-model="information.IdBaia"
                        >
                            <v-radio value="1" label="Baia 1"></v-radio>
                            <v-radio value="2" label="Baia 2"></v-radio>
                        </v-radio-group>            
                        

                        <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="submit"
                        >
                            Alterar
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
        </v-layout>
    </v-container>
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
    axios
        .post(this.$baseURL + '/buscarParametro', {"token":this.$session.get("token"), "idParametro":this.$route.params.id})
        .then(res=>{
            this.information = res.data
        })
        .catch(e=>{
            console.log(e)
        })
},
methods: {  
    submit(){
        if(this.validate()){
            axios
            .post(this.$baseURL + "/alterarParametros", this.information)
            .then(res => {
                router.push("/viewParameters")
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