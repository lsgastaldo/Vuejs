<template>
    <v-container
      fluid
    >
        <v-toolbar
          dark
        >
          <v-toolbar-title>Projetos Coordenados</v-toolbar-title>
        </v-toolbar>
        <v-card
          max-width="344"
          outlined
          v-for="project in coordenator"
          :key="project.nomeProjeto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4"></div>
              <v-list-item-title class="headline mb-1">{{project.nomeProjeto}}</v-list-item-title>
              <v-list-item-subtitle>Coordenador: {{project.nomeUsuario}}</v-list-item-subtitle>
              <v-list-item-subtitle>Data Inicio: {{project.dataInicio}}</v-list-item-subtitle>
              <v-list-item-subtitle>Data Fim: {{project.dataFim}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
            >
              <v-icon>mdi-pig</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn :to="'/alterProject/'+ project.idProjeto">Alterar</v-btn>
            <v-btn :to="'/viewProject/'+ project.idProjeto">Ver</v-btn>
          </v-card-actions>
        </v-card>

        <v-toolbar
          dark
        >
          <v-toolbar-title>Projetos Colaborados</v-toolbar-title>
        </v-toolbar>

        <v-card
          max-width="344"
          outlined
          v-for="project in colaborator"
          :key="project.nomeProjeto"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4"></div>
              <v-list-item-title class="headline mb-1">{{project.nomeProjeto}}</v-list-item-title>
              <v-list-item-subtitle>Coordenador: {{project.nomeUsuario}}</v-list-item-subtitle>
              <v-list-item-subtitle>Data Inicio: {{project.dataInicio}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
            >
              <v-icon>mdi-pig</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-card>
    </v-container>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "Index",
  data: () => ({
    coordenator:{},
    colaborator:{},
    authenticated: false
  }),
  mounted() {
    this.checkAuthenticated();
    this.getProjects("I")
    this.getProjects("A")
  },
  methods: {
    checkAuthenticated() {
      if(!this.$session.has("token")){
        router.push("/login")
      }
    },
    getProjects(role){
      axios
        .post(this.$baseURL + "/buscarProjetos", {"token":this.$session.get("token"), "coordenator":role})
        .then(res =>{
          if(role == 'A'){
            this.coordenator = res.data
          }else{
            this.colaborator = res.data
          }
        })
    },
    // checkAuthorization(){
    //   const token = this.$session.get("token")
    //   let array = token.split('.')
    //   let payload = atob(array[1])
    //   payload = JSON.parse(payload)
    //   if(payload.data.type)
    // }
  }
};
</script>

