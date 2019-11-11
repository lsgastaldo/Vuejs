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
                            v-model="information.temperaturaAmbienteMAX"
                            type="number"
                            label="Temperatura Ambiente Máxima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.temperaturaAmbienteMIN"
                            type="number"
                            label="Temperatura Ambiente Mínima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.temperaturaPisoMAX"
                            type="number"
                            label="Temperatura Piso Máxima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.temperaturaPisoMIN"
                            type="number"
                            label="Temperatura Piso Mínima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.temperaturaBoilerMIN"
                            type="number"
                            label="Temperatura Boiler Mínima"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="information.temperaturaBoilerMAX"
                            type="number"
                            label="Temperatura Boiler Máxima"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="information.semanas"
                            type="number"
                            label="Semana Referente"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="information.tempoEsperaBomba"
                            type="number"
                            label="Tempo de Espera da Bomba (minutos)"
                        >
                        </v-text-field>

                        <!-- <h5>Status do Novo Parâmetro</h5>
                        <v-radio-group
                            v-model="information.statusParametro"
                        >
                            <v-radio value="I" label="Ativa"></v-radio>
                            <v-radio value="A" label="Inativa"></v-radio>
                        </v-radio-group> -->

                        <h5>Baia</h5>
                        <v-radio-group
                            v-model="information.idBaia"
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
methods: {  
    submit(){
        if(this.validate()){
            axios
            .post("http://127.0.0.1:80/servidorPHP/index.php/cadastrarParametros", this.information)
            .then(res => {
                console.log(res)
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