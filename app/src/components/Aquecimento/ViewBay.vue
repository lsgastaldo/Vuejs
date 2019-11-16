<template>
    <v-app>
        <v-container
        fluid
        >
            <v-toolbar
                class="mb-2"
                color="orange darken-4"
                dark
                flat
            >
                <v-toolbar-title>Baias</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    outlined
                    to="/newbay"
                >
                    <v-icon>mdi-home-plus</v-icon>
                </v-btn>
            </v-toolbar>
            <v-row
                cols="4"
            >
                <v-col
                    v-for="baia in baias"
                    :key="baia.idBaia"
                >
                    <v-card 
                            flat
                    >
                            <v-toolbar 
                                    color="orange"
                                    class="white--text" 
                                    height="60px" 
                                    width="100%" 
                                    flat
                                >   
                                <v-card-title >Baia - {{baia.numeroBaia}}</v-card-title>
                                <v-spacer></v-spacer>
                                <v-icon dark right>mdi-home-map-marker</v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-list class="transparent">
                                    
                                    <v-list-item>
                                        <v-list-item-title>Número da Matriz</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-pig</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.numeroMatriz}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-title>Ordem do Parto</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-human-pregnant</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.ordemParto}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>
                                    
                                    <v-list-item>
                                        <v-list-item-title>Parto Previsto:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-calendar-month</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.partoPrevisto}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item v-if="baia.partoEfetivo != null && baia.partoEfetivo != ''">
                                        <v-list-item-title>Parto Efetivo:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-calendar-month</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.partoEfetivo}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-title>Controlador:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-tools</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.controlador}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-title>Número Baia:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-numeric</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.numeroBaia}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>


                                    <!-- <v-list-item>
                                        <v-list-item-title>Status Baia:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-exclamation</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.statusBaia}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item> -->

                                    <v-list-item v-if="baia.leitoesVivos != null && baia.leitoesVivos != -1">
                                        <v-list-item-title>Leitões Vivos</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-pig-variant</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.leitoesVivos}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item v-if="baia.leitoesMortos != null && baia.leitoesMortos != -1">
                                        <v-list-item-title>Leitões Mortos:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-skull</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.leitoesMortos}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item v-if="baia.dataDesmame != null && baia.dataDesmame != ''">
                                        <v-list-item-title>Data Desmame:</v-list-item-title>
                                        <v-list-item-icon>
                                            <v-icon>mdi-calendar-month</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{baia.dataDesmame}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="change(baia.idBaia)" color="#00208F" class="white--text">Alterar</v-btn>
                            <!-- <v-btn @click="del(baia.idBaia)" color="orange darken-4" class="white--text">Excluir</v-btn> -->
                        </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
        </v-container>
    </v-app>
</template>

<script>
import router from "../../router";
import axios from "axios";

export default {
    data: () => ({
      baias: [],

    }),
    mounted(){
        this.checkAuthenticated()
        this.listBaias()
    },
    methods:{
        checkAuthenticated() {
            if(!this.$session.has("token")){
                router.push("/login")
            }
        },
        listBaias(){
            axios
            .post(this.$baseURL + '/buscarTotalBaias', {"token":this.$session.get("token")})
            .then(res=>{   
                this.baias = res.data
            }).catch(e=>{
                
            })
        },
        del(id){
            axios
                .post(this.$baseURL + '/deletarBaia', {"token":this.$session.get("token"), "idBaia":id})
                .then(res=>{
                    this.listBaias()
                }).catch(e=>{
                    this.listBaias()
                })
        },
        change(id){
            router.push("/changeBay/"+id)
        }
    }
}
</script>