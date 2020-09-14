<template>
    <div class="container">
        <DonationCover @imageChanged="setImage"></DonationCover>

        <InputLayout
            title="Donation title"
            placeholder="Donation title"
            class="w-100"
            v-model="title"
        ></InputLayout>

        <InputLayout
            title="Sum in rubles"
            placeholder="How much to collect"
            class="w-100"
            v-model="donationAll"
            type="number"
        ></InputLayout>

        <InputLayout
            title="Goal"
            placeholder="For example for human treatment"
            class="w-100"
            v-model="goal"
        ></InputLayout>

        <InputLayout
            title="Description"
            placeholder="What will the money go to and how will it help someone?"
            class="w-100"
            v-model="description"
        ></InputLayout>

        <InputLayout
            title="Where to get money"
            class="w-100"
            v-model="bill"
        ></InputLayout>

        <InputLayout
            title="Author"
            class="w-100"
            v-model="author"
        ></InputLayout>

        <Button
            title="Continue"
            class="w-100"
            @click.native="addDonation"
        ></Button>
    </div>
</template>
<script>
    import InputLayout from "../components/addDonation/InputLayout"
    import eventBus from "../eventBus"
    import DonationCover from "../components/addDonation/DonationCover"
    import Button from "../components/common/BottomButton"

    export default {
        props: { isRegular: Boolean },

        components: {
            InputLayout,
            DonationCover,
            Button
        },
        created() {
            eventBus.setPageTitle("Target donation")
        },
        data() {
            return {
                image: null,
                title: null,
                donationAll: null,
                goal: null,
                description: null,
                bill: "VK Pay · 1234",
                author: "Den Matiash"
            }
        },
        methods: {
            setImage(newImage) {
                this.image = newImage
            },
            addDonation() {
                const donation = {
                    title: this.title,
                    donationAll: this.donationAll,
                    donationReal: this.donationAll / 2,
                    goal: this.goal,
                    donationText: this.description,
                    subTitle: "Помощь нужна каждый день",
                    progressTitle: 'В сентябре собрано: ',
                    bill: this.bill,
                    author: this.author
                }

                const image = this.image

                this.$store.dispatch("uploadDonation", { image, donation })
            }
        }
    }
</script>