<template>
    <v-app>
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
        <v-content>
            <v-container fluid>
                <v-layout column v-if="isLogin">
                    Hi, {{ userId }}!
                    <v-textarea
                        prepend-inner-icon="mdi-message-outline"
                        autofocus
                        box
                        clearable
                        label="Tweet"
                        v-model="status"
                    >
                    </v-textarea>
                    <v-btn
                        color="info"
                        round
                        @click.prevent="tweet"
                    >
                        <v-icon>mdi-twitter</v-icon>
                        Tweet
                    </v-btn>
                </v-layout>
                <div v-else>
                    <v-btn :href="loginUrl">
                        Login
                    </v-btn>
                </div>
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

import axios from 'axios'

export default {
    store,
    data: function() {
        return {
            status: ''
        }
    },
    methods: {
        tweet() {
            axios.post('/api/PostTweet',
                { status: this.status },
                { withCredentials: true })
            this.status = ''
        }
    },
    computed: {
        isLogin() {
            return this.$store.getters['auth/check']
        },
        userId() {
            return this.$store.getters['auth/userId']
        },
        loginUrl() {
            return `${API_HOST}/.auth/login/twitter?post_login_redirect_url=${encodeURIComponent(window.location.origin)}`
        },
        logoutUrl() {
            return `${API_HOST}/.auth/logout?post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`
        }
    }
}
</script>
