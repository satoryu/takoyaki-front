<template>
    <v-app>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Header, Content, Footer },
}
</script>
