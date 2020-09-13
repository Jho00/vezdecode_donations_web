<template>
    <div id="app" class="position-absolute w-100 h-100">
        <app-header :title="pageTitle"></app-header>
        <router-view name="content"></router-view>
    </div>
</template>

<script>
    import AppHeader from "./components/Header"
    import eventBus from "./eventBus"

    export default {
        components: {
            AppHeader
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
