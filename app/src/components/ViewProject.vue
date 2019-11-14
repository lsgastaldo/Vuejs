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
                        <v-card>
                            <v-toolbar 
                                    color="orange"
                                    class="white--text" 
                                    height="60px" 
                                    width="100%" 
                                    flat
                                >   
                                <v-card-title>{{projects.nomeProjeto}}</v-card-title>
                                <v-spacer></v-spacer>
                                <v-icon dark right>mdi-folder</v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-list class="transparent">
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-calendar-month</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title>Data início: </v-list-item-title>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{projects.dataInicio}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item v-if="projects.dataFim!=null">
                                        <v-list-item-icon>
                                            <v-icon>mdi-calendar-month</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title>Data Fim: </v-list-item-title>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{projects.dataFim}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>mdi-account-star</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title>Coordenador: </v-list-item-title>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{projects.nomeUsuario}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                    <v-list-item v-for="user in projects.equipe" :key="user">
                                        <v-list-item-icon>
                                            <v-icon>mdi-account</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-title>Colaborador: </v-list-item-title>
                                        <v-list-item-subtitle class="text-right">
                                            <v-chip>{{user}}</v-chip>
                                        </v-list-item-subtitle>
                                    </v-list-item>

                                </v-list>
                            </v-card-text>
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
    data: () => ({
      projects:{},
      equipe:{},
    }),
    mounted(){
        this.listProjects()
    },
    methods:{
        listProjects(){
            axios
            .post(this.$baseURL + '/buscarProjeto', {"token":this.$session.get("token"), "id":this.$route.params.id})
            .then(res=>{
                this.projects = res.data
                this.equipe = projects.equipe
            }).catch(e=>{
                console.log(e)
            })
        }
    }
}
</script>