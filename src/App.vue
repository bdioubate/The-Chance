<script>
import LoginVue from './components/login.vue';
import Navbar from './components/Navbar.vue';

export default {
    name: "App",
    components: {
        LoginVue,
        Navbar
    }
}
</script>

<template>
    <Navbar />
    <h1>Welcome to Chance</h1>
    <router-view></router-view>
</template>

<style scoped>

</style>
