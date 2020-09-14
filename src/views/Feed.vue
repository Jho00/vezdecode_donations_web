<template>
    <div>
        <vk-post v-for="sn in snippets" :key="sn.id">
            <snippet-body :donation-model="sn"></snippet-body>
        </vk-post>
    </div>
</template>

<script>
    import eventBus from "../eventBus";
    import VkPost from "../components/vk-ui/post/VkPost";
    import SnippetBody from "../components/snippet/SnippetBody";

    export default {
        name: "Feed",
        components: {
            VkPost, SnippetBody
        },
        created() {
            eventBus.setPageTitle("News")
        },
        computed: {
            snippets() {
                return this.$store.state.donations;
            }
        }
    }
</script>

<style scoped>

</style>