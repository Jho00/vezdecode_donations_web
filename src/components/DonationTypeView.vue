<template>
    <div class="view">
        <img src="../assets/images/target.png" alt="target" class="left-img" />
        <img
            src="../assets/images/rightArrow.png"
            alt="arrow"
            class="right-img my-4"
        />
        <div class="title">
            {{ title }}
        </div>
        <div class="subtitle text-muted">{{ subtitle }}</div>
    </div>
</template>

<script>
    export default {
        props: { imagePath: String, title: String, subtitle: String }
    }
</script>

<style scoped>
    .view {
        background: #f5f5f5;
        border: 0.33px solid rgba(0, 0, 0, 0.08);
        border-radius: 10px;
    }

    .left-img {
        position: absolute;
        width: 24px;
        height: 24px;
        margin-left: 14px;
        margin-top: 14px;
    }

    .title {
        font-family: "SFProText-Semibold";
        font-size: 16px;
        margin-top: 12px;
        margin-left: 52px;
    }

    .subtitle {
        font-family: "SFProText-Regular";
        font-size: 13px;
        margin-left: 52px;
        margin-bottom: 12px;
    }

    .right-img {
        width: 9.5px;
        height: 16.5px;
        float: right;
        margin-right: 12px;
    }
</style>