<template>
    <vk-post>
        <snippet-body></snippet-body>
    </vk-post>
</template>

<script>
    import eventBus from "../eventBus";
    import VkPost from "../components/vk-ui/post/VkPost";
    import SnippetBody from "../components/snippet/SnippetBody";

    export default {
        name: "Snippet",
        components: {
            VkPost, SnippetBody
        },
        created() {
            eventBus.setPageTitle("Donation type")
        }
    }
</script>

<style scoped>

</style>