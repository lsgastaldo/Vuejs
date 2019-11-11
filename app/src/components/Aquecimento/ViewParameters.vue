<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="orange darken-4"
          dark
          flat
        >
          <v-toolbar-title>Parametros Baias de Aquecimento</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-flex mt-6 xs3 sm2 md2 lg2>
                <v-select
                :items="opcoes"
                v-model="choice"
                label="Baias"
                dense
                outlined
                mt-5
                @change="choiceParams()"
                ></v-select>
            </v-flex>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">Semana: {{ item.Semanas }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Temperatura Mínima Boiler:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TemperaturaBoilerMIN }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Máxima Boiler:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TemperaturaBoilerMAX }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Mínima Piso:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TemperaturaPisoMIN }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Máxima Piso:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TemperaturaPisoMAX }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Mínima Ambiente:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TemperaturaAmbienteMIN }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Máxima Ambiente:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TemperaturaAmbienteMAX }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Tempo de Espera Bomba:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.TempoEsperaBomba }}</v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn @click="change(item.IdParametros)" color="#00208F" class="white--text">Alterar</v-btn>
                  <v-btn @click="del(item.IdParametros)" color="orange darken-4" class="white--text">Excluir</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>

import axios from "axios";
import router from '../../router';

export default {
data: () => ({
      itemsPerPage: 4,
      items: [],
      opcoes:[1,2],
      choice:1,
    }),
mounted(){
    this.checkAuthenticated(),
    this.choiceParams()
},
methods: {  
    choiceParams(){
        axios
        .post(this.$baseURL + '/buscarTotalParametros', {"token":this.$session.get("token"), "numeroBaia":this.choice})
        .then(res=>{
            this.items = res.data
        }).catch(e=>{
            router.push("/login")
        })
    },
    checkAuthenticated() {
        if(!this.$session.has("token")){
          router.push("/login")
        }
    },
    del(id){
      axios
        .post(this.$baseURL + '/deletarParametro', {"token":this.$session.get("token"), "idParametro":id})
        .then(res=>{
            this.items = res.data
        }).catch(e=>{
            router.push("/viewParameters")
        })
    },
    change(id){
      router.push("/changeParameter/"+id)
    }
},
}
</script>