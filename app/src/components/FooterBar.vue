<template>
<v-footer
    app
    color="#00208F"
    class="white--text"
> 
            <span>Instituto Federal Catarinense - Araquari</span>
            <v-spacer></v-spacer>
            <span>&copy; versao 1.0.53.2</span>
</v-footer>
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