<template>
    <div id="app" class="position-absolute w-100 h-100">
        <app-header></app-header>
        <home></home>
    </div>
</template>

<script>
    import AppHeader from "./components/Header"
    import Home from "./views/Home"

    export default {
        components: {
            AppHeader,
            Home
        }
    }
</script>

<style scoped>
</style>
