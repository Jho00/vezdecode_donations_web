<template>
    <div class="container h-100 text-center">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-10">
                <div class="text-muted mb-4">
                    You have no fees yet. <br />
                    Start a good deed.
                </div>
                <CommonButton title="Create donation" @click.native="goToNext"></CommonButton>
            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from "./../eventBus"
    import CommonButton from "./../components/CommonButton"

    export default {
        created() {
            eventBus.setPageTitle("Donations")
        },
        components: {
            CommonButton
        },
        methods: {
            goToNext() {
                console.log("tapped")
                this.$router.push({name: 'DonationType'})
            }
        }
    }
</script>
