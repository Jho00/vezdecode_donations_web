<template>
    <div id="app" class="position-absolute w-100 h-100">
        <app-header :title="pageTitle"></app-header>
        <home></home>
    </div>
</template>

<script>
    import AppHeader from "./components/Header"
    import Home from "./views/Home"
    import eventBus from "./eventBus"

    export default {
        components: {
            AppHeader,
            Home
        },
        data() {
            return {
                pageTitle: ""
            }
        },
        created() {
            eventBus.$on(eventBus.events.setPageTitle, (title) => {
                this.pageTitle = title
            })
        }
    }
</script>

<style scoped>
</style>
