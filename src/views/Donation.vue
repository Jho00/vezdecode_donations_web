<template>
    <div class="donation-wrapper">
        <img class="header" :src="model.imgPath" alt="Картинка сбора">
        <div class="donation-content">
            <h3>{{model.title}}</h3>
            <span>Автор {{model.author}}</span> <br>
            <span class="subtitle">{{model.subTitle}}</span>

            <hr>
            <p>{{model.progressTitle}}</p>
            <vk-progress
                    :percentage="fakePercentage"
                    is-green
                    is-big
                    :all="model.donationAll"
                    :real="fakeDonationReal"
                    :title="`${model.progressTitle} ${fakeDonationReal} из ${model.donationAll}`"
            />
            <hr>
            <div>
                {{model.donationText}}
            </div>
            <hr>
            <vk-post-footer/>
        </div>
        <div class="sticky-control">
            <vk-progress
                class="sticky-control-progress"
                :percentage="fakePercentage"
                is-green
                :title="`${model.progressTitle} ${fakeDonationReal} из ${model.donationAll}`"
            />
            <vk-button-success class="sticky-control-btn" text="Помочь" />
        </div>
    </div>
</template>

<script>
    import VkPostFooter from "../components/vk-ui/post/VkPostFooter";
    import VkProgress from "../components/vk-ui/VkProgress";
    import VkButtonSuccess from "../components/vk-ui/VkButtonSuccess";
    export default {
        name: "Donation",
        data() {
            return {
                model: {},
                fakePercentage: 10,
                fakeDonationReal: 0
            }
        },
        components: {
            VkButtonSuccess,
            VkPostFooter,VkProgress
        },
        mounted() {
            this.model = this.$store.state.donations.find(
                (donation) => donation.id == this.$route.params.id
            );

            this.fakeDonationReal = this.model.donationAll / 10;

            setTimeout(() => {
                this.fakePercentage = 20
                this.fakeDonationReal = this.fakeDonationReal * 2
            },2400)

            setTimeout(() => {
                this.fakePercentage = 40
                this.fakeDonationReal = this.fakeDonationReal * 2
            },2400)

            setTimeout(() => {
                this.fakePercentage = 80
                this.fakeDonationReal = this.fakeDonationReal * 2
            },3600)

            setTimeout(() => {
                this.fakePercentage = 100
                this.fakeDonationReal = this.fakeDonationReal + this.fakeDonationReal / 4
            },4800)
        },
    }
</script>

<style scoped>
.donation-wrapper {
    box-sizing: border-box;
    position: relative;
    min-height: 100vh;
}
.donation-content {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-bottom: 1px solid #EBEDF0;
    height: max-content;
    display: block;
}
.header {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
.subtitle {
    opacity: .8;
}
.sticky-control {
    margin-top: 10px;
    position: sticky;
    height: 100px;
    bottom: 0;

    display: flex;
    box-sizing: border-box;
    padding: 10px;
}

.sticky-control-btn {
    width: 30%;
    margin-left: 5%;
    margin-top: 15px;
}

.sticky-control-progress {
    width: 65%;
}
</style>