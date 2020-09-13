<template>
    <div>
        <p>{{title}}</p>
        <div class="progress">
            <div class="progress-real" :style="{width: `${percentage}%`}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VkProgress",
        props: {
            percentage: {
                type: Number, required: true
            },
            title: {
                type: String, default: ''
            }
        }
    }
</script>

<style scoped>
.progress {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #9cc4ec;
}
.progress-real {
    height: 100%;
    border-radius: 2px;
    background: #3F8AE0;
    transition: .3s all;
}
</style>