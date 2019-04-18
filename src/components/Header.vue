<template>
    <v-toolbar app>
        <v-toolbar-title>
            Takoyaki
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items
            v-if="isLogin"
        >
            <v-btn :href="logoutUrl" flat>
                <v-icon>mdi-logout-variant</v-icon>
                Sign-out
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items
            v-else
        >
            <v-btn :href="loginUrl" flat>
                <v-icon>mdi-login-variant</v-icon>
                Sign-in
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import auth from '../store/auth'
const store = new Vuex.Store(auth)

export default {
    store,
    computed: {
        ...Vuex.mapGetters({
            isLogin: 'check'
        }),
        loginUrl() {
            return `${API_HOST}/.auth/login/twitter?post_login_redirect_url=${encodeURIComponent(window.location.origin)}`
        },
        logoutUrl() {
            return `${API_HOST}/.auth/logout?post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`
        }
    }
}
</script>

