<template>
    <div class="w-100 px-3 py-2">
        <div class="header-text text-center">{{ title }}</div>
        <div class="black-line w-100 mt-1"></div>
    </div>
</template>

<script>
    export default {
        props: { title: String }
    }
</script>

<style scoped>
    .header-text {
        font-family: "TTCommons-DemiBold";
        font-size: 21px;
    }

    .black-line {
        background: #d7d8d9;
        height: 1px;
    }
</style>