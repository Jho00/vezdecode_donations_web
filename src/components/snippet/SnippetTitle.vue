<template>
    <div>
        <div>{{ title }}</div>
        <p class="text-muted">{{ subTitle }}</p>
    </div>
</template>

<script>
    export default {
        name: "SnippetTitle",
        props: {
            title: {
                type: String, default: ''
            },
            subTitle: {
                type: String, default: ''
            }
        }
    }
</script>

<style scoped>
    div {
        font-family: "SFProText-Semibold";
        font-size: 15px;
    }

    p {
        font-family: "SFProText-Regular";
        font-size: 13px;
    }
</style>