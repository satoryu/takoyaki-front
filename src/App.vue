<template>
    <v-app>
        <v-toolbar app></v-toolbar>
        <v-content>
            <v-container fluid>
                {{ greetingMessage }}
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

export default {
    data: function() {
        return {
            greeting: 'Hello,',
            name: 'Vue Component'
        }
    },
    computed: {
        greetingMessage() {
            return `${this.greeting} ${this.name}!`
        }
    }
}
</script>
