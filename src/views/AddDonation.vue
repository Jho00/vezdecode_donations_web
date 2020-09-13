<template>
    <div class="container">
        <DonationCover></DonationCover>

        <InputLayout
            title="Donation title"
            placeholder="Donation title"
            class="w-100"
        ></InputLayout>

        <InputLayout
            title="Sum in rubles"
            placeholder="How much to collect"
            class="w-100"
        ></InputLayout>

        <InputLayout
            title="Goal"
            placeholder="For example for human treatment"
            class="w-100"
        ></InputLayout>

        <InputLayout
            title="Description"
            placeholder="What will the money go to and how will it help someone?"
            class="w-100"
        ></InputLayout>

        <InputLayout
            title="Where to get money"
            value="VK Pay · 1234"
            class="w-100"
        ></InputLayout>

        <Button title="Continue" class="w-100"></Button>
    </div>
</template>
<script>
    import InputLayout from "../components/addDonation/InputLayout"
    import eventBus from "../eventBus"
    import DonationCover from "../components/addDonation/DonationCover"
    import Button from "../components/common/BottomButton"

    export default {
        components: {
            InputLayout,
            DonationCover,
            Button
        },
        created() {
            eventBus.setPageTitle("Target donation")
        }
    }
</script>