<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="../assets/banner2.jpg"
    >
      
    <v-app-bar-nav-icon  @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
      <v-toolbar-title>Sistema de Aquisição de Dados - </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import {eventBus} from "../main"

export default {
  name: 'ToolBar',
  props: ['drawer'],
  methods: {
    updateAppDrawer() {
      eventBus.$emit('updateAppDrawer')
    }
  }
}
</script>
