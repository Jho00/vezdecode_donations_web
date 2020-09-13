<template>
    <div class="my-3">
        <div class="text-muted input-title mb-1">{{ title }}</div>
        <input type="text" :placeholder="placeholder" :value="value">
    </div>
</template>

<script>
    export default {
        props: { title: String, placeholder: String, value: String }
    }
</script>

<style scoped>
    .input-title {
        font-family: "SFProText-Regular";
        font-size: 14px;
    }

    input {
        background: #f2f3f5;
        border: 0.5px solid rgba(0, 0, 0, 0.12);
        padding: 12px;
        border-radius: 10px;
        font-family: "SFProText-Regular";
        font-size: 16px;
        outline: none;
        width: 100%;
    }
</style>