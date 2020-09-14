<template>
    <div>
        <vk-post v-for="sn in snippets" :key="sn.id">
            <snippet-body :donation-model="sn"></snippet-body>
        </vk-post>
        <Button
            title="Добавить пост"
            class="m-2"
            @click.native="goToDonations"
        ></Button>
    </div>
</template>

<script>
    import eventBus from "../eventBus";
    import VkPost from "../components/vk-ui/post/VkPost";
    import SnippetBody from "../components/snippet/SnippetBody";
    import Button from "../components/common/BottomButton"

    export default {
        name: "Feed",
        components: {
            VkPost, SnippetBody, Button
        },
        created() {
            eventBus.setPageTitle("News")
        },
        computed: {
            snippets() {
                return this.$store.state.donations;
            }
        },
        methods: {
            goToDonations() {
                this.$router.push({ name: "Donations" })
            }
        }
    }
</script>

<style scoped>
</style>