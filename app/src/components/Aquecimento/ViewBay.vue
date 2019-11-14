<template>
  <v-container
        fluid
    >
        <v-toolbar
          dark
        >
            <v-toolbar-title>Projetos Coordenados</v-toolbar-title>
        </v-toolbar>
        <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
        >
           <v-card>
                            <v-toolbar 
                                    color="orange"
                                    class="white--text" 
                                    height="60px" 
                                    width="100%" 
                                    flat
                                >   
                                <v-card-title >Baia - 1</v-card-title>
                                <v-spacer></v-spacer>
                                <v-icon dark right>mdi-home-map-marker</v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-list class="transparent">
                                    <v-list-item>
                                        <v-list-item-title>Porquinhos</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-pig-variant</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>12</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-title>Tempo de vida</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-calendar-month</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>3</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                        <v-divider></v-divider>

                                    <v-list-item>
                                        <v-list-item-title>Temperatura Ambiente</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-thermometer</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>25</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                     <v-list-item>
                                        <v-list-item-title>Umidade Ambiente</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-water-percent</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>75</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-title>Temperatura Piso</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-thermometer</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>35</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                </v-list>
                            </v-card-text>
                        </v-card>
            </v-col>
  </v-container>
</template>

<script>
import router from "@/router/";
import axios from "axios";

export default {
    data: () => ({
      baias: [],

    }),
    mounted(){
    this.listBaias()
    },
    methods:{
        listBaias(){
            axios
            .post(this.$baseURL + '/buscarTotalBaias')
            .then(res=>{
                this.baias = res.data
            }).catch(e=>{
                
            })
        }
    }
}
</script>