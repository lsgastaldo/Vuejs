<template>
  <div>
    <v-toolbar
      dark
      extended
      src="../assets/banner2.jpg"
    >
      
    <v-app-bar-nav-icon  @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
      <v-toolbar-title>Sistema de Aquisição de Dados - </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="logout()">mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import {eventBus} from "../main"
import router from "../router"

export default {
  name: 'ToolBar',
  props: ['drawer'],
  methods: {
    updateAppDrawer() {
      eventBus.$emit('updateAppDrawer')
    },
    logout(){
      router.push("/logout")
    }
  }
}
</script>
