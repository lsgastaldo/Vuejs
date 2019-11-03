<template>
    <v-app>
        <!-- NAVBAR -->
        <v-app-bar
            app
            color="green"
        >
            <v-icon 
                left
                color="white"
                >
                mdi-home 
            </v-icon>
            <v-toolbar-title
                class="white--text"
            >
                Bem vindo USERNAME
            </v-toolbar-title>

                

        </v-app-bar>


            <!-- PROFILE DRAWER -->
            <v-navigation-drawer
                app
                v-model="drawerRight"
                clipped
                right
            >
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                <v-list-item-action>
                    <v-icon>mdi-exit</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-navigation-drawer>

        <!-- NAV-SIDE-BAR -->
        <v-navigation-drawer
            align-left
        >
            chupa
        </v-navigation-drawer>
    </v-app>
</template>