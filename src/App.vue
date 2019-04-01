<template>
    <v-app>
        <v-toolbar app></v-toolbar>
        <v-content>
            <v-container fluid>
                <div v-if="isLogin">
                    Hi, {{ userId }}!
                </div>
                <v-btn
                    v-else
                    :href="loginUrl"
                >
                    Login
                </v-btn>
            </v-container>
        </v-content>
        <v-footer app></v-footer>
    </v-app>
</template>

<script>
import Vue from 'vue';

import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

import Vuex from 'vuex'
Vue.use(Vuex)

import store from './store'

export default {
    store,
    created() {
        this.$store.dispatch('auth/currentUser')
    },
    data: function() {
        return {
            greeting: 'Hello,',
            name: 'Vue Component'
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters['auth/check']
        },
        userId() {
            return this.$store.getters['auth/userId']
        },
        greetingMessage() {
            return `${this.greeting} ${this.name}!`
        },
        loginUrl() {
            return `${API_HOST}/.auth/login/twitter`
        }
    }
}
</script>
