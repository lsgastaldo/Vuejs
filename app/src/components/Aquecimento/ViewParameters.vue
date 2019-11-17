<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="#00208F"
          dark
          flat
        >
          <v-toolbar-title>Parametros Baias de Aquecimento</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-divider
              class="mx-2"
              vertical
              ></v-divider>
                <v-btn 
                  to="/newparameters"
                  text="Inserir"
                ><v-icon >mdi-thermometer-plus</v-icon></v-btn>
              <v-divider
                class="mx-2"
                vertical
              ></v-divider>
              <v-flex mt-3>
                <v-select
                  :items="opcoes"
                  v-model="choice"
                  label="Baias"
                  dense
                  outlined
                  @change="choiceParams()"
                ></v-select>
          </v-flex>
          </v-toolbar-items>
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
              <v-toolbar
                flat
                color="#00208F" 
                class="white--text"
                height="60px"
                width="100%"                 
              >
                <v-card-title class="subheading font-weight-bold">
                  Semana: {{ item.semana }}
                </v-card-title>
              </v-toolbar>
              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Temperatura Mínima Boiler:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.temperaturaBoilerMIN }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Máxima Boiler:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.temperaturaBoilerMAX }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Mínima Piso:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.temperaturaPisoMIN }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Máxima Piso:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.temperaturaPisoMAX }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Mínima Ambiente:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.temperaturaAmbienteMIN }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Temperatura Máxima Ambiente:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.temperaturaAmbienteMAX }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Tempo de Espera Bomba:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.tempoEsperaBomba }}</v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn @click="change(item.idParametro)" color="#00208F" class="white--text">Alterar</v-btn>
                  <v-btn @click="del(item.idParametro)" color="orange" class="white--text">Excluir</v-btn>
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
      console.log(id)
      axios
        .post(this.$baseURL + '/deletarParametro', {"token":this.$session.get("token"), "idParametro":id})
        .then(res=>{
            console.log(res)
            this.choiceParams();
        }).catch(e=>{
            console.log(res)
            router.push("/viewParameters")
        })
    },
    change(id){
      router.push("/changeParameter/"+id)
    }
},
}
</script>