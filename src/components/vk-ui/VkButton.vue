<template>
    <div class="vk-button">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "VkButton",
        props: {
            text: String
        }
    }
</script>

<style scoped>
.vk-button {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 0px;

    width: 86px;
    height: 30px;

    border: 1px solid #3F8AE0;
    color:  #3F8AE0;

    transition: .3s all;
    font-family: "SFProText-Medium";
    font-size: 14px;
}

.vk-button:active {
    background: #3F8AE0;
    color: white;
}
</style>