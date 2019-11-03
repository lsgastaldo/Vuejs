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
                        sm8
                        md4
                    >
                        <v-card
                            elevation='1'
                            
                        >
                            <v-toolbar
                                color="green"
                                class="white--text"
                                height="60px"
                                flat
                            >
                            <v-toolbar-title> CHUPA </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-icon dark right>mdi-login</v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Login"
                                        name="login"
                                        type="text"
                                        single-line
                                    ></v-text-field>
                                    <v-text-field 
                                        label="Password"
                                        name="password"
                                        type="password"
                                        single-line
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn 
                                    class="white--text"
                                    color="yellow"
                                    type="text"
                                    block
                                    depressed
                                >Login
                                </v-btn>
                            </v-card-actions>
                            <v-card-actions>
                                <v-btn
                                    class="white--text"
                                    color="red"
                                    block
                                    depressed
                                >Create account !
                                </v-btn>
                            </v-card-actions>
                            <p class="text-center"><a href="######">Forgot your password?</a></p>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        
        <!-- FOOTER -->
        <v-footer
            app
            color="green"
            class="white--text"
        > 
            <span>Chupa</span>
            <v-spacer></v-spacer>
            <span>&copy; versao 1.0.53.2</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
 name: "Login",
 data:()=>({

 })
};
</script>