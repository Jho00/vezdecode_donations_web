<template>
    <span class="button text-center my-2">
        {{ title }}
    </span>
</template>
<script>
    export default {
        props: { title: String }
    }
</script>
<style scoped>
    .button {
        font-family: "SFProText-Medium";
        color: white;
        background: #4986cc;
        border-radius: 10px;
        padding: 7.5px 16px;
        font-size: 15px;
        cursor: pointer;
    }
</style>