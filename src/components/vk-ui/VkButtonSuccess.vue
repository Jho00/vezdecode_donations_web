<template>
    <div class="vk-button-success">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "VkButtonSuccess",
        props: {
            text: String
        }
    }
</script>

<style scoped>
.vk-button-success {
    display: flex;


    /* Light Button / Commerce Background */

    background: #4BB34B;
    border-radius: 10px;

    align-items: center;
    justify-content: center;
    height: 40px;

    font-family: "SFProText-Medium";
    font-size: 15px;
}
</style>