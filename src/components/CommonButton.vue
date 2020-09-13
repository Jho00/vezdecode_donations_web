<template>
    <span>
        {{ title }}
    </span>
</template>
<script>
    export default {
        props: { title: String }
    }
</script>
<style scoped>
    span {
        font-family: "SFProText-Medium";
        color: white;
        background: #4986cc;
        border-radius: 10px;
        padding: 7.5px 16px;
        font-size: 15px;
    }
</style>