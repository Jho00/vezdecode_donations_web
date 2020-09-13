<template>
    <div class="container h-100 text-center">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-10">
                <DonationTypeView></DonationTypeView>
            </div>
        </div>
    </div>
</template>
<script>
    import eventBus from "./../eventBus"
    import DonationTypeView from "../components/DonationTypeView"

    export default {
        components: {
            DonationTypeView
        },
        created() {
            eventBus.setPageTitle("Donation type")
        }
    }
</script>

<style scoped>
</style>