<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      clipped
      temporary
    >
    <template v-slot:prepend>
      <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon>{{users.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{users.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items[users.typeUser]"
          :key="item.title"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      icons :{"1":"mdi-pig", "2":"mdi-alien"},
      users :{},
      items: {
        "1":[
          { title: 'Home', icon: 'mdi-home-city', route:'/'},
          { title: 'Baias', icon: 'mdi-home-map-marker', route:'/viewbay'},
          { title: 'Parâmetros', icon:'mdi-thermometer', route:'/viewparameters'},
          { title: 'Logout', icon:'mdi-export', route:'/logout'}
        ],
        "2":[
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        "3":[
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ]        
        },
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    mounted(){
      this.checkAuthenticated();
    },
    methods:{
      checkAuthenticated() {
        if(this.$session.has("token")){
          this.makeMenu(this.$session.get("token"))
        }
      },
      makeMenu(token){
        let array = token.split('.')
        let payload = atob(array[1])
        payload = JSON.parse(payload)
        this.users.name = payload.data.name
        this.users.icon = this.icons[payload.data.typeUser]
        this.users.typeUser = payload.data.typeUser
      }  
    }
  }
</script>
