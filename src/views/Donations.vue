<template>
    <div class="container h-100 text-center">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-10">
                <div class="text-muted mb-4">
                    You have no fees yet. <br />
                    Start a good deed.
                </div>
                <Button
                    title="Create donation"
                    @click.native="goToNext"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script>
    import eventBus from "./../eventBus"
    import Button from "./../components/common/CommonButton"

    export default {
        created() {
            eventBus.setPageTitle("Donations")
        },
        components: {
            Button
        },
        methods: {
            goToNext() {
                this.$router.push({ name: 'DonationType' })
            }
        }
    }
</script>