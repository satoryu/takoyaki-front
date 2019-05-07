<template>
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
                    @keydown.ctrl.enter="postTweet"
                >
                </v-textarea>
                <v-btn
                    color="info"
                    round
                    @click.prevent="posTweet"
                >
                    <v-icon>mdi-twitter</v-icon>
                    Tweet
                </v-btn>
                <v-list three-line>
                    <v-list-tile
                        v-for="tweet in tweets"
                        :key="tweet.id"
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ tweet.text }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ tweet.created_at }} - {{ tweet.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-layout>
            <div v-else>
                <v-btn :href="loginUrl">
                    Login
                </v-btn>
            </div>
        </v-container>
    </v-content>
</template>

<script>
import axios from 'axios'

export default {
    created() {
        setInterval(() => {
            this.getTweets()
        }, 3000)
    },
    data: function() {
        return {
            status: '',
            tweets: []
        }
    },
    methods: {
        postTweet() {
            const status = this.status

            axios.post('/api/PostTweet',
                { status },
                { withCredentials: true }
            )

            this.status = ''
        },
        async getTweets() {
            const name = this.userId
            const response = await axios.get('/api/GetTweets',
                {
                    params: { name },
                    withCredentials: true
                }
            )
            this.tweets = response.data
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
