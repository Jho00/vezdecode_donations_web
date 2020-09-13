<template>
    <div class="home"></div>
</template>

<script>
    import eventBus from "./../eventBus"

    export default {
        created() {
            eventBus.setPageTitle("Donations")
        }
    }
</script>
