<template>
    <div class="h-100 p-3">
        <!-- why imagePath is not working? -->
        <DonationTypeView
            imagePath="../assets/images/target.png"
            title="Target donation"
            subtitle="When there is a specific goal"
            class="mb-2"
            @click.native="goToAddDonation"
        ></DonationTypeView>

        <DonationTypeView
            imagePath="../assets/images/calendar.png"
            title="Regular donation"
            subtitle="If you need help every month"
            @click.native="goToAddDonation"
        ></DonationTypeView>
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
        },
        methods: {
            goToAddDonation() {
                this.$router.push({name: "AddDonation"})
            }
        }
    }
</script>

<style scoped>
</style>